import { Component, OnInit } from '@angular/core';
import { Syntax } from '../../../models/syntax';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'add-syntax-container',
    templateUrl: './add-syntax-container.component.html',
    styleUrls: ['./add-syntax-container.component.scss']
})
export class AddSyntaxContainerComponent implements OnInit {

    text: string = '// Add syntax here';
    syntax = <Syntax>{};
    addSyntaxForm: FormGroup;
    submitAttempted: boolean = false;
    syntaxError: boolean;

    get name() { return this.addSyntaxForm.get('name'); }

    get category() { return this.addSyntaxForm.get('category'); }

    submitForm(form) {
        // reset from potential previous submit
        this.submitAttempted = false;
        this.syntaxError = false; 

        if (form.status === 'INVALID') {
            this.submitAttempted = true;
            return;
        }
        // lack of form builder support with ng ace :(
        if (this.text === '// Add syntax here' || !this.text ) {
            this.syntaxError = true;
            return;
        }
        console.log(form.value);
        console.log(this.text);
    }

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.addSyntaxForm = this.fb.group({
            name: ['', [Validators.required]],
            category: ['', [Validators.required]]
        });

        // this.addSyntaxForm.patchValue({
        //     name: 'Ben'
        // });
    }
}
