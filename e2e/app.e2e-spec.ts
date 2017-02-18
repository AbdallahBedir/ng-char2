import { NgChar2Page } from './app.po';

describe('ng-char2 App', function() {
  let page: NgChar2Page;

  beforeEach(() => {
    page = new NgChar2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
