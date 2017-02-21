import { Component, OnInit } from '@angular/core';
import { SourcesService } from './sources.service';
import { Article } from './article';
import { SourcesConfig } from './sources-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SourcesService, SourcesConfig]  
})
export class AppComponent implements OnInit {
  title = 'News API Browser';
  public articleList:Article[]= [];
//  public config:SourcesConfig;


  constructor (private config:SourcesConfig){
    console.log("AppComponent instance");   
  }
  
  ngOnInit() {
  }
  
}
