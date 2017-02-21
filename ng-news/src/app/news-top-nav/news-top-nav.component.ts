import { Component, OnInit, Input} from '@angular/core';
import { AppComponent } from '../app.component';
import { Source } from '../source';
import { SourceParameter } from '../source-parameter';
import { Article } from '../article';
import { SourcesService } from '../sources.service';
import { SourcesConfig } from '../sources-config';


@Component({
  selector: 'app-news-top-nav',
  templateUrl: './news-top-nav.component.html',
  styleUrls: ['./news-top-nav.component.css'],
  providers: [SourceParameter]
})
export class NewsTopNavComponent implements OnInit {

  private sources: Source[] = [];
  @Input() articleList;  
  public errorMessage:string = "";
  private selectedSource:Source = null;
  @Input() config;
    
  constructor(private appComponent: AppComponent, private sourcesService: SourcesService, private sourceParameter:SourceParameter) {
  }

  ngOnInit() {
  }

  selectCategory(category:string): void{
      this.sourceParameter.category = category;
  }

  selectLanguage(language:string): void{
      this.sourceParameter.language = language;
  }

  selectCountry(country:string): void{
      this.sourceParameter.country = country;
  }
  
  selectSource(source:Source): void{
      this.selectedSource = source;
      this.sourcesService.getArticles (source)
                   .subscribe(
                     a => {
                       this.updateArticleList(a);
                       console.log(this.articleList);
                     },
                     error =>  this.errorMessage = <any>error);    
      
  }

  addArticleToList(article:Article):void {
    this.articleList.push(article);    
  }
  
  updateArticleList(newArticles:Article[]):void{
    this.articleList.length = 0;
    for (var i  = 0 ; i < newArticles.length ; i++){
      this.addArticleToList(newArticles[i]);
    }
  }
  
  updateSources():void{
    this.sourcesService.getSources(this.sourceParameter).then(
        s => {
            this.sources = s;
            console.log(this.sources);
        });
    
  }
}
