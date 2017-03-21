import { PFEV0Page } from './app.po';

describe('pfev0 App', function() {
  let page: PFEV0Page;

  beforeEach(() => {
    page = new PFEV0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
