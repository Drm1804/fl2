export class Fl2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fl2-app h1')).getText();
  }
}
