import { NgModule } from '@angular/core';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '../../../node_modules/@angular/common';
import { RouterModule } from '../../../node_modules/@angular/router';

@NgModule({
    declarations: [
        HomeContainerComponent,
    ],
    imports: [
        SharedModule,
        CommonModule,
        RouterModule,
        SharedModule
    ]
})
export class HomeModule {

}
