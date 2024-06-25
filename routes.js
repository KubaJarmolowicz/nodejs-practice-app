const templates = require("./htmlTemplates");
const { ROUTES, METHODS } = require("./consts");

const requestHandler = (req, res) => {
  const url = req.url;

  switch (url) {
    case ROUTES.USERS: {
      const dummyUsers = []
        .fill("User", 10)
        .map((user, index) => `${user} ${index + 1}`);
      const dummyList = `<ul>${dummyUsers.map(
        (dummyUser) => `<li>${dummyUser}</li>`
      )}</ul>`;

      return templates.basicPage(res, dummyList);
    }
    case ROUTES.CREATE_USER: {
      const chunks = [];
      req.on("data", (chunk) => {
        chunks.push(chunk);
      });

      req.on("end", () => {
        const parsedData = Buffer(chunks).toString();
        console.log("###", { parsedData });
        res.end();
      });
    }
    default: {
      const greeting = "<h1>Welcome to Node.js practice app!</h1>";
      const form = `<form><input method='${METHODS.POST}' action='/create-user' type='text' name='username'/><button type='submit'>Send</button><form/>`;
      return templates.basicPage(res, `<div>${greeting}${form}</div>`);
    }
  }
};

module.exports = { handler: requestHandler };
