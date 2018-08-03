import { Component, OnInit } from '@angular/core';
import { Syntax } from '../../../models/syntax';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SyntaxService } from '../../../services/syntax.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'add-syntax-container',
    templateUrl: './add-syntax-browser-container.component.html',
    styleUrls: ['./add-syntax-browser-container.component.scss']
})
export class AddSyntaxBrowserContainerComponent implements OnInit {

    constructor(
        private fb: FormBuilder, 
        private syntaxService: SyntaxService,
        private titleService: Title
    ) { }

    code = '// Add syntax here';
    syntax = <Syntax>{};
    addSyntaxForm: FormGroup;
    submitAttempted = false;
    syntaxError: boolean;

    get label() { return this.addSyntaxForm.get('label'); }

    get language() { return this.addSyntaxForm.get('language'); }

    submitForm(form) {
        // reset from potential previous submit
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
            .subscribe((a) => {
                console.log(a);
            });
    }


    ngOnInit() {
        this.titleService.setTitle(`Add new - Syn.tax`); 
        this.addSyntaxForm = this.fb.group({
            label: ['', [Validators.required]],
            language: ['', [Validators.required]]
        });
    }
}
