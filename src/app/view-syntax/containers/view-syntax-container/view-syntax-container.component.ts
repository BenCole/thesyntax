import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SyntaxService } from '../../../services/syntax.service';

@Component({
    selector: 'view-syntax-container',
    templateUrl: './view-syntax-container.component.html',
    styleUrls: ['./view-syntax-container.component.scss']
})
export class ViewSyntaxContainerComponent implements OnInit {

    id: string;
    lang: string;
    content: string;

    constructor(private route: ActivatedRoute, private syntaxService: SyntaxService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.syntax;
            this.lang = params.lang;

            this.syntaxService.getOne(this.id)
                .subscribe(item => {
                    this.content = `<pre><code class='${this.lang} highlight'>${item[0].syntax}</pre></code>`;
                });
        });
    }
}
