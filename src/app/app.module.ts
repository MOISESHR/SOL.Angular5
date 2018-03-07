import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HtmlHeaderComponent } from './html-header/html-header.component';
import { HtmlBodyComponent } from './html-body/html-body.component';
import { HtmlFooterComponent } from './html-footer/html-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HtmlHeaderComponent,
    HtmlBodyComponent,
    HtmlFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
