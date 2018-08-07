import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Syntax } from '../../../models/syntax';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SyntaxService } from '../../../services/syntax.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'add-syntax-container',
    templateUrl: './add-syntax-browser-container.component.html',
    styleUrls: ['./add-syntax-browser-container.component.scss']
})
export class AddSyntaxBrowserContainerComponent implements OnInit, AfterViewInit {

    constructor(
        private fb: FormBuilder, 
        private syntaxService: SyntaxService,
        private titleService: Title
    ) { }

    @ViewChild('editor') editor;
    code = '// Add syntax here';
    syntax = <Syntax>{};
    addSyntaxForm: FormGroup;
    submitAttempted = false;
    syntaxError: boolean;
    backendError: string;
    success = false;

    get label() { return this.addSyntaxForm.get('label'); }

    get language() { return this.addSyntaxForm.get('language'); }

    submitForm(form) {
        // reset from potential previous submit
        this.backendError = null;
        this.submitAttempted = false;
        this.syntaxError = false; 

        if (form.status === 'INVALID') {
            this.submitAttempted = true;
            return;
        }
        // lack of form builder support with ng ace :(
        if (this.code === '// Add syntax here' || !this.code) {
            this.syntaxError = true;
            return;
        }

        // manually add to form object due to form builder issue :(
        form.value.syntax = this.code;

        this.syntaxService.create(form.value)
            .subscribe((res) => {
                form.reset();
                this.success = true;
            }, 
            err => {
                if (err.status === 409) {
                    this.backendError = 'There\'s already a syntax with this name and language.';
                    return;
                }
                this.backendError = 'There was an error saving your syntax. Please try again later.';
            }
        );
    }


    ngOnInit() {
        this.titleService.setTitle(`Add new - Syn.tax`); 
        this.addSyntaxForm = this.fb.group({
            label: ['', [Validators.required]],
            language: ['', [Validators.required]]
        });
    }

    ngAfterViewInit() {
        // TODO: set syntax mode
        this.editor.getEditor().setOptions({
            useWorker: false
        });
    }
}
