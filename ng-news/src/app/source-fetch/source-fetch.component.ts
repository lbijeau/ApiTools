import { Component, OnInit } from '@angular/core';
import { SourcesService } from '../sources.service';
import { Source } from '../source';
// Not used.  get rid of this

@Component({
  selector: 'app-source-fetch',
  templateUrl: './source-fetch.component.html',
  styleUrls: ['./source-fetch.component.css']//,
})
export class SourceFetchComponent implements OnInit {

  constructor(private sourcesService: SourcesService) { }

  public sources:Source[] = [];  
    
  ngOnInit() {
  }
}
