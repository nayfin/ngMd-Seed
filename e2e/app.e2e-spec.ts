import { FirebaseLessonsPage } from './app.po';

describe('firebase-lessons App', () => {
  let page: FirebaseLessonsPage;

  beforeEach(() => {
    page = new FirebaseLessonsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
