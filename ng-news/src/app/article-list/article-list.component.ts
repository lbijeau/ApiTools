import { Component, OnInit, Input} from '@angular/core';
import { Article } from '../article';
import { Source } from '../source';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})

export class ArticleListComponent implements OnInit {

  public errorMessage:string;
  @Input() articleList;  

  constructor() { 
    // Temporary.  So we can track if this component is being rendered more often than necessary
    console.log("ArticleListComponent");
  }

  ngOnInit() {
  }
  
}
