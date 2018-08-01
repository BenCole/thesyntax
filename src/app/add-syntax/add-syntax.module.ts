import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { AceEditorModule } from 'ng2-ace-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSyntaxContainerComponent } from './containers/add-syntax-container/add-syntax-container.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
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
