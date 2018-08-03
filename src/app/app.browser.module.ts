import {NgModule} from '@angular/core';
import {AppModule} from './app.module';
import {AppComponent} from './app.component';
import { AddSyntaxBrowserModule } from './add-syntax-browser/add-syntax-browser.module';

@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    AddSyntaxBrowserModule, 
    AppModule
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [AppComponent],
})
export class AppBrowserModule {
  constructor() {
    console.log('app browser module');
  }
}
