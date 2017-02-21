import { Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams}          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Source } from './source';
import { SourceParameter } from './source-parameter';
import { SourcesConfig } from './sources-config';
import { Article } from './article';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SourcesService {

  private sourcesUrl = 'http://localhost:3000/sources';  
  private articlesUrl = 'http://localhost:3000/articles?source=focus';  
  
  constructor(private http: Http, private config:SourcesConfig) { 
     console.log("SourcesService instance");   
    this.initConfig();
  }
  
  private initConfig():void {
      this.http.get(this.sourcesUrl + "/config")
                      .toPromise()
                      .then(res => {
                          console.log("zero");
                          let newConfig = res.json()||{};
                          this.config.categories = newConfig.categories;
                          this.config.countries = newConfig.countries;
                          this.config.languages = newConfig.languages;
                      })
                      .catch(this.handleError);
    
  }
  
  getArticles (source:Source): Observable<Article[]> { 
      console.log(source);
      if (source === null){
        this.articlesUrl = "http://localhost:3000/articles?source=bild";// + source;    
      } else {
        this.articlesUrl = "http://localhost:3000/articles?source=" + source.id;            
      }
      return this.http.get(this.articlesUrl)
                      .map(this.extractArticleData)
                      .catch(this.handleErrorObservable);      
  }

  getSources (sourceParameter:SourceParameter): Promise<Source[]> {
      let params = new URLSearchParams();
    
      if (sourceParameter.country != null){
        params.set('country', sourceParameter.country);    
      }
  
      if (sourceParameter.language != null){
        params.set('language', sourceParameter.language);    
      }

      if (sourceParameter.category != null){
        params.set('category', sourceParameter.category);    
      }

      return this.http.get(this.sourcesUrl, {search:params})
                      .toPromise()
                      .then(this.extractData)
                      .catch(this.handleError);      
  }
    
    
  private extractArticleData(res: Response) {
    let body = res.json();
    return body.articles || { };
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.sources || { };
  }


  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }    

  private handleErrorObservable (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
