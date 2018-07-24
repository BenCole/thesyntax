import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageContainerComponent } from './containers/language-container/language-container.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { SyntaxListComponent } from './components/syntax-list/syntax-list.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { 
                path: 'language', 
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
    declarations: [LanguageContainerComponent, SyntaxListComponent]
})
export class LanguageModule { }
