import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { OneServiceService } from './services/one-service.service';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { OneComponentComponent } from './components/one-component/one-component.component';


@NgModule({
  declarations: [
    AppComponent,
    OneComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  	OneServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
