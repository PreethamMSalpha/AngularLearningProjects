import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TempConverterPipe } from './temp-converter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TempConverterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
