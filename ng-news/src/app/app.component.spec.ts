import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NewsTopNavComponent } from './news-top-nav/news-top-nav.component';
import { HttpModule }          from '@angular/http';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],
      declarations: [
        AppComponent, ArticleListComponent, NewsTopNavComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('News API Browser');
  }));

  it('should render title in a span tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-header > a > span:nth-child(2)').textContent).toContain('News API Browser');
  }));
});
