import { NgModule } from '@angular/core';
import { LogoComponent } from './components/logo/logo.component';
import { MenuToggleComponent } from './components/menu-toggle/menu-toggle.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { HeaderContainerComponent } from './containers/header-container/header-container.component';
import { CommonModule } from '@angular/common';
import { FooterContainerComponent } from './containers/footer-container/footer-container.component';
import { SearchContainerComponent } from './containers/search-container/search-container.component';
import { MobileMenuContainerComponent } from './containers/mobile-menu-container/mobile-menu-container.component';
import { LanguageListComponent } from './components/language-list-component/language-list-component.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { LanguageService } from '../services/language.service';
import { UiService } from '../services/ui.service';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader/loader.component';

@NgModule({
    declarations: [
        HeaderContainerComponent,
        LogoComponent,
        MenuToggleComponent,
        SearchInputComponent,
        FooterContainerComponent,
        SearchContainerComponent,
        MobileMenuContainerComponent,
        LanguageListComponent,
        LoaderComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule
    ],
    exports: [
        HeaderContainerComponent,
        LogoComponent,
        MenuToggleComponent,
        SearchInputComponent,
        FooterContainerComponent,
        SearchContainerComponent,
        MobileMenuContainerComponent,
        LanguageListComponent,
        LoaderComponent
    ],
    providers: [
        UiService,
        LanguageService
    ]
})
export class SharedModule { }
