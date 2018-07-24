import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSyntaxContainerComponent } from './containers/view-syntax-container/view-syntax-container.component';
import { RouterModule } from '../../../node_modules/@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: 'language/:lang/:syntax',
                component: ViewSyntaxContainerComponent
            }
        ])
    ],
    declarations: [ViewSyntaxContainerComponent]
})
export class ViewSyntaxModule { }
