import { BugReproducePage } from './app.po';

describe('bug-reproduce App', function() {
  let page: BugReproducePage;

  beforeEach(() => {
    page = new BugReproducePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
