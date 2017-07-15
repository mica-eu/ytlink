const jsdom = require("jsdom");
const { JSDOM } = jsdom;

JSDOM
  .fromURL('https://www.youtube.com/watch?v=34Na4j8AVgA')
  .then(dom => {
    if (dom.window['player'].innerHTML) {
      const d = new JSDOM(dom.window['player'].innerHTML, { runScripts: "dangerously" });

      console.log(d.window);
    }
  });
