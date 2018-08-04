import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SyntaxService } from '../../../services/syntax.service';
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'view-syntax-container',
    templateUrl: './view-syntax-container.component.html',
    styleUrls: ['./view-syntax-container.component.scss']
})
export class ViewSyntaxContainerComponent implements OnInit {

    name: string;
    lang: string;
    content: string;
    loading: boolean;
    
    //copy config
    copyCode: string;
    spacer: string;
    type = ' ';
    spaces = 4;
    originalCopyCode: string;

    constructor(
        private route: ActivatedRoute, 
        private syntaxService: SyntaxService,
        private titleService: Title,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    generateCopyCode(syntax): string {
        return syntax.replace(/(\s{5})/g, `\n${this.spacer}`);
    }

    spacesUpdated(spaces) {
        this.spaces = spaces.value;
        this.spacer = this.type.repeat(this.spaces);
        this.updateLocalStorageSettings(this.type, this.spaces);
        this.copyCode = this.generateCopyCode(this.originalCopyCode);
    }

    typeUpdated(type) {
        this.type = type.value;
        this.spacer = this.type.repeat(this.spaces);
        this.updateLocalStorageSettings(this.type, this.spaces);
        this.copyCode = this.generateCopyCode(this.originalCopyCode);
    }

    updateLocalStorageSettings(type, spaces) {
        // Client side only code.
        if (isPlatformBrowser(this.platformId)) {
           localStorage.setItem('type', type);
           localStorage.setItem('spaces', spaces);
        }
    }

    getLocalStorageSettings() {
        if (isPlatformBrowser(this.platformId)) {
            const type = localStorage.getItem('type');
            const spaces = localStorage.getItem('spaces');
            if (type) { this.type = type; }
            if (spaces) { this.spaces = parseInt(spaces, null); }
        }
    }

    ngOnInit() {
        this.loading = true;
        this.spacer = this.type.repeat(this.spaces);
        this.getLocalStorageSettings();
        this.route.params.subscribe(params => {
            this.name = params.syntax;
            this.lang = params.lang;

            this.titleService.setTitle(`${this.name} - ${this.lang} Syntax`); 
            
            this.syntaxService.getOne(this.lang, this.name)
                .subscribe(item => {
                    this.originalCopyCode = item.data.syntax;
                    this.copyCode = this.generateCopyCode(item.data.syntax);
                    this.content = `<pre><code class='${this.lang} highlight'>${item.data.syntax}</pre></code>`;
                    this.loading = false;
                });
        });
    }
}
