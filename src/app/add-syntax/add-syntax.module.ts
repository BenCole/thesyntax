import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSyntaxContainerComponent } from './containers/add-syntax-container/add-syntax-container.component';
import { RouterModule } from '@angular/router';
import { AceEditorModule } from 'ng2-ace-editor';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        AceEditorModule,
        FormsModule,
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
