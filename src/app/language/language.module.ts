import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageContainerComponent } from './containers/language-container/language-container.component';
import { RouterModule } from '../../../node_modules/@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { 
                path: 'lang', 
                children: [
                    {
                        path: '',
                        redirectTo: 'javascript',
                        pathMatch: 'full'  
                    },
                    {
                        path: ':lang',
                        component: LanguageContainerComponent,
                        }
                ]
            }
        ])
    ],
    declarations: [LanguageContainerComponent]
})
export class LanguageModule { }
