import { NgNewsPage } from './app.po';

describe('ng-news App', () => {
  let page: NgNewsPage;

  beforeEach(() => {
    page = new NgNewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
