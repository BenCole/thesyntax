import { NgModule } from '@angular/core';
import { LogoComponent } from './components/logo/logo.component';
import { MenuToggleComponent } from './components/menu-toggle/menu-toggle.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { HeaderContainerComponent } from './containers/header-container/header-container.component';
import { CommonModule } from '../../../node_modules/@angular/common';
import { FooterContainerComponent } from './containers/footer-container/footer-container.component';

@NgModule({
    declarations: [
        HeaderContainerComponent,
        LogoComponent,
        MenuToggleComponent,
        SearchInputComponent,
        FooterContainerComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeaderContainerComponent,
        LogoComponent,
        MenuToggleComponent,
        SearchInputComponent,
        FooterContainerComponent
    ]
})
export class SharedModule { }
