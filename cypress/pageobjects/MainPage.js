class MainPage {
  get SignInButton() {
    return cy.get('[class="login"]');
  }

  get ProjectsButton() {
    return cy.get('[class="projects"]');
  }

  get RegisterButton() {
    return cy.get('[class="register"]');
  }

  get DownloadButton() {
    return cy.get('[class="download"]');
  }

  get ActivityButton() {
    return cy.get('[class="activity"]');
  }

  get RoadmapButton() {
    return cy.get('[class="roadmap"]');
  }

  get IssuesButton() {
    return cy.get('[class="issues"]');
  }

  get NewsButton() {
    return cy.get('[class="news"]');
  }

  get ForumButton() {
    return cy.get('[class="boards"]');
  }

  get RepoButton() {
    return cy.get('[class="repository"]');
  }

  get NewIssueButton() {
    return cy.get('[class="new-issue"]');
  }

  get HelpButton() {
    return cy.get('[href="/projects/redmine/wiki/Guide"]').eq(0);
  }

  get ResourcesPluginsButton() {
    return cy.get('[href="/plugins"]');
  }

  get ResourcesChangelogButton() {
    return cy.get('[class="wiki-page"]').contains("Changelog");
  }

  get ResourcesSecurityButton() {
    return cy.get('[class="wiki-page"]').contains("Security");
  }

  get MyAccountButton() {
    return cy.get('[class="my-account"]');
  }

  get MyPageButton() {
    return cy.get('[class="my-page"]');
  }

  get SignOutButton() {
    return cy.get('[class="logout"]');
  }
}
module.exports = new MainPage();
