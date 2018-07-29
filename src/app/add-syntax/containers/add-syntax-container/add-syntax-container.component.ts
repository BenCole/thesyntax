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

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        // this.addSyntaxForm = new FormGroup({
        //     name: new FormControl('', Validators.required)
        // });
        this.addSyntaxForm = this.fb.group({
            name: ['', [Validators.required]]
        });

        this.addSyntaxForm.patchValue({
            name: 'Ben'
        });
    }
}
