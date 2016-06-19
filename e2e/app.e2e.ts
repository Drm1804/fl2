import { Fl2Page } from './app.po';

describe('fl2 App', function() {
  let page: Fl2Page;

  beforeEach(() => {
    page = new Fl2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fl2 works!');
  });
});
