import { NgModule } from '@angular/core';
import { LogoComponent } from './components/logo/logo.component';
import { MenuToggleComponent } from './components/menu-toggle/menu-toggle.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { HeaderContainerComponent } from './containers/header-container/header-container.component';
import { CommonModule } from '../../../node_modules/@angular/common';
import { FooterContainerComponent } from './containers/footer-container/footer-container.component';
import { SearchContainerComponent } from './containers/search-container/search-container.component';
import { MobileMenuContainerComponent } from './containers/mobile-menu-container/mobile-menu-container.component';
import { LanguageListComponent } from './components/language-list-component/language-list-component.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { LanguageService } from '../services/language.service';

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
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderContainerComponent,
        LogoComponent,
        MenuToggleComponent,
        SearchInputComponent,
        FooterContainerComponent,
        SearchContainerComponent,
        MobileMenuContainerComponent,
        LanguageListComponent
    ],
    providers: [
        LanguageService
    ]
})
export class SharedModule { }
