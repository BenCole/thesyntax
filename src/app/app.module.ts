import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/containers/home-container/home-container.component';
import { TransferHttpCacheModule } from '@nguniversal/common';

// Our modules
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '../../node_modules/@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'my-app' }),
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
            { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule' }
        ]),
        TransferHttpCacheModule,
        HttpModule,
        SharedModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
