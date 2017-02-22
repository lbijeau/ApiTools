import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NewsTopNavComponent } from './news-top-nav/news-top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    NewsTopNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
     console.log("AppModule module instance");   
  }
}
