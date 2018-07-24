import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSyntaxContainerComponent } from './containers/add-syntax-container/add-syntax-container.component';
import { RouterModule } from '../../../node_modules/@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: 'add',
                component: AddSyntaxContainerComponent
            }
        ])
    ],
    declarations: [AddSyntaxContainerComponent],
})
export class AddSyntaxModule { }
