export default class SpeakerList {
  constructor(talkService) {
    this.talkService = talkService;
  }
  render(idView) {
    this.talkService.findAllSpeakers().then(speakers => {
      let speakerList =
        "<ul>" +
        speakers.map(speaker => `<li>${speaker.firstname}</li>`).join("") +
        "</ul>";
      document.getElementById(idView).innerHTML = speakerList;
    });
  }
}
