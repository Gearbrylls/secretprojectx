import { SecretprojectxPage } from './app.po';

describe('secretprojectx App', () => {
  let page: SecretprojectxPage;

  beforeEach(() => {
    page = new SecretprojectxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
