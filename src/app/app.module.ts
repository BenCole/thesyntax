import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

// Our modules
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '../../node_modules/@angular/common';
import { HomeContainerComponent } from './home/containers/home-container/home-container.component';
import { HomeModule } from './home/home.module';
import { LanguageModule } from './language/language.module';
import { ViewSyntaxModule } from './view-syntax/view-syntax.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        HomeModule,
        BrowserModule.withServerTransition({ appId: 'my-app' }),
        RouterModule.forRoot([
            { path: '', component: HomeContainerComponent, pathMatch: 'full' },
        ]),
        TransferHttpCacheModule,
        HighlightJsModule,
        HttpModule,
        SharedModule,
        CommonModule,
        LanguageModule,
        ViewSyntaxModule
    ],
    providers: [
        HighlightJsService,
        Title
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
