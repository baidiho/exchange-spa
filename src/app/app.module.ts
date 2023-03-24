import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ConverterComponent } from './components/converter/converter.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ConverterComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
