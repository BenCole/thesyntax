import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageContainerComponent } from './containers/language-container/language-container.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { SyntaxListComponent } from './components/syntax-list/syntax-list.component';
import { SyntaxService } from '../services/syntax.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
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
    declarations: [
        LanguageContainerComponent,
        SyntaxListComponent, 
        FilterPipe
    ],
    providers: [
        SyntaxService
    ]
})
export class LanguageModule { }
