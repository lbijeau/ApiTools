import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTopNavComponent } from './news-top-nav.component';
import { AppComponent } from '../app.component';
import { SourcesConfig } from '../sources-config';
import { SourcesService } from '../sources.service';
import { HttpModule }          from '@angular/http';

describe('NewsTopNavComponent', () => {
  let component: NewsTopNavComponent;
  let fixture: ComponentFixture<NewsTopNavComponent>;

  beforeEach(async(() => {    
    TestBed.configureTestingModule({
      imports:[HttpModule],
      declarations: [ NewsTopNavComponent ],
      providers: [AppComponent, SourcesConfig , SourcesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsTopNavComponent);
    component = fixture.componentInstance;
    component.config = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
