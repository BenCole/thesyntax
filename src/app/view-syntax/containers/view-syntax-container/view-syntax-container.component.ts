import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SyntaxService } from '../../../services/syntax.service';

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

    constructor(private route: ActivatedRoute, private syntaxService: SyntaxService) { }

    ngOnInit() {
        this.loading = true;
        this.route.params.subscribe(params => {
            this.name = params.syntax;
            this.lang = params.lang;

            this.syntaxService.getOne(this.lang, this.name)
                .subscribe(item => {
                    this.content = `<pre><code class='${this.lang} highlight'>${item.data.syntax}</pre></code>`;
                    this.loading = false;
                });
        });
    }
}
