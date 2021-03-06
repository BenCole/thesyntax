import { NgModule } from '@angular/core';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../services/language.service';

@NgModule({
    declarations: [
        HomeContainerComponent,
    ],
    imports: [
        SharedModule,
        CommonModule,
        RouterModule,
        SharedModule
    ],
    providers: [
        LanguageService
    ]
})
export class HomeModule {

}
