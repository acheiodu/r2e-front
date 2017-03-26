import { R2eFrontPage } from './app.po';

describe('r2e-front App', () => {
  let page: R2eFrontPage;

  beforeEach(() => {
    page = new R2eFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
