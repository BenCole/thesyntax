import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSyntaxBrowserContainerComponent } from './containers/add-syntax-browser-container/add-syntax-browser-container.component';
import { AceEditorModule } from 'ng2-ace-editor';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AceEditorModule,
        RouterModule.forChild([
            {
                path: 'add',
                component: AddSyntaxBrowserContainerComponent
            }
        ])
    ],
    declarations: [AddSyntaxBrowserContainerComponent],

})
export class AddSyntaxBrowserModule { }
