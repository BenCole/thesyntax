import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';


@Component({
    selector: 'view-code',
    templateUrl: './view-code.component.html',
    styleUrls: ['./view-code.component.scss']
})
export class ViewCodeComponent implements OnInit{

    content: string;

    constructor(private el: ElementRef) {
        this.content = `
        <pre><code class="javascript highlight">
        function() {
            console.log("yolo");
        }
        </code></pre>
        `;
    }

    ngOnInit() {
    }

}
