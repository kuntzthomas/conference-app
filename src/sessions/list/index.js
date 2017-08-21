export default class Sessionlist {
  constructor(talkService) {
    this.talkService = talkService;
  }
  render(idView) {
    this.talkService.findAllSessions().then(sessions => {
      let sessionList =
        "<ul>" +
        sessions.map(session => `<li>${session.title}</li>`).join("") +
        "</ul>";
      document.getElementById(idView).innerHTML = sessionList;
    });
  }
}
