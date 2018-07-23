import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TransferHttpCacheModule } from '@nguniversal/common';

// Our modules
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '../../node_modules/@angular/common';
import { HomeContainerComponent } from './home/containers/home-container/home-container.component';
import { HomeModule } from './home/home.module';
import { LanguageModule } from './language/language.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        HomeModule,
        BrowserModule.withServerTransition({ appId: 'my-app' }),
        RouterModule.forRoot([
            { path: '', component: HomeContainerComponent, pathMatch: 'full' },
            // { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
            // { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule' }
        ]),
        TransferHttpCacheModule,
        HttpModule,
        SharedModule,
        CommonModule,
        LanguageModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
