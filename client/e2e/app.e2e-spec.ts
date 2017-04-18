import { JupiterEsiPage } from './app.po';

describe('jupiter-esi App', () => {
  let page: JupiterEsiPage;

  beforeEach(() => {
    page = new JupiterEsiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
