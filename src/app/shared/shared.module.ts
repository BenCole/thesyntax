import { NgModule } from '@angular/core';
import { LogoComponent } from './components/logo/logo.component';
import { MenuToggleComponent } from './components/menu-toggle/menu-toggle.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { HeaderContainerComponent } from './containers/header-container/header-container.component';
import { ExampleComponent } from './example/example.component';

@NgModule({
    declarations: [
        HeaderContainerComponent,
        LogoComponent,
        MenuToggleComponent,
        SearchInputComponent,
        ExampleComponent
    ],
    exports: [
        HeaderContainerComponent,
        LogoComponent,
        MenuToggleComponent,
        SearchInputComponent
    ]
})
export class SharedModule { }
