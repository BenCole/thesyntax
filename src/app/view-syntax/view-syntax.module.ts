import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSyntaxContainerComponent } from './containers/view-syntax-container/view-syntax-container.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { ViewCodeComponent } from './components/view-code/view-code.component';
import { HighlightJsModule } from '../../../node_modules/angular2-highlight-js';
import { ClipboardModule } from 'ngx-clipboard';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        HighlightJsModule,
        ClipboardModule,
        SharedModule,
        FormsModule,
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
