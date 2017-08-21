//alert("Conférence App démarré !");
import TalkService from "./common/talk.service.js";
import Layout from "./layout/index.js";
import SpeakerList from "./speakers/list/index.js";
import SessionList from "./sessions/list/index.js";

const talkService = new TalkService();
const layout = new Layout();
const speakerList = new SpeakerList(talkService);
const sessionList = new SessionList(talkService)

layout.render();
let router = () => {
  if (location.hash == "#speakers-list") {
    speakerList.render('main-view');
  } else if (location.hash == "#sessions-list") {
    sessionList.render('main-view');
  } else {
  }
};

window.addEventListener("load", () => {
  window.onhashchange = () => {
    router();
  };
  router();
});

