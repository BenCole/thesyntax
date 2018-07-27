import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSyntaxContainerComponent } from './containers/view-syntax-container/view-syntax-container.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { ViewCodeComponent } from './components/view-code/view-code.component';
import { HighlightJsModule } from '../../../node_modules/angular2-highlight-js';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
    imports: [
        CommonModule,
        HighlightJsModule,
        ClipboardModule,
        RouterModule.forChild([
            {
                path: 'language/:lang/:syntax',
                component: ViewSyntaxContainerComponent
            }
        ])
    ],
    declarations: [ViewSyntaxContainerComponent, ViewCodeComponent]
})
export class ViewSyntaxModule { }
