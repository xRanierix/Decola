import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListacursosComponent } from './listacursos/listacursos.component';
import { ListaprofComponent } from './listaprof/listaprof.component';

@NgModule({
  declarations: [
    AppComponent,
    ListacursosComponent,
    ListaprofComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
