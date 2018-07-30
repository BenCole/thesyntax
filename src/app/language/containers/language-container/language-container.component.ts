import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SyntaxService } from '../../../services/syntax.service';
import { flatMap } from 'rxjs/operators';

@Component({
    selector: 'language-container',
    templateUrl: './language-container.component.html',
    styleUrls: ['./language-container.component.scss']
})
export class LanguageContainerComponent implements OnInit {
    lang: string;
    list;

    constructor(private route: ActivatedRoute, private syntaxService: SyntaxService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.lang = params.lang;

            this.syntaxService.index(this.lang)
                .subscribe(list => this.list = list);
        });


        // this.route.params.pipe(
        //     flatMap(params => {
        //         this.lang = params.lang;
        //         this.syntaxService.index(this.lang);
        //     })
        //     .subscribe(list => this.list = list);
    
        // );


    }

}