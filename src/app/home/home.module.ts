import { NgModule } from '@angular/core';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { SharedModule } from '../shared/shared.module';
import { LanguageListComponent } from './components/language-list-component/language-list-component.component';
import { CommonModule } from '../../../node_modules/@angular/common';
import { RouterModule } from '../../../node_modules/@angular/router';

@NgModule({
    declarations: [
        HomeContainerComponent,
        LanguageListComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        RouterModule
    ]
})
export class HomeModule {

}
