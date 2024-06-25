const templates = require("./htmlTemplates");
const { ROUTES, METHODS } = require("./consts");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  switch (url) {
    case ROUTES.USERS: {
      const dummyUsers = new Array(10)
        .fill("User")
        .map((user, index) => `${user} ${index + 1}`);
      const dummyList = `<ul>${dummyUsers.reduce(
        (acc, dummyUser) => (acc += `<li>${dummyUser}</li>`),
        ""
      )}</ul>`;

      return templates.basicPage(res, dummyList);
    }
    case ROUTES.CREATE_USER: {
      if (method !== METHODS.POST) {
        res.statusCode = 302;
        res.setHeader("Location", ROUTES.HOME);
        return res.end();
      }

      const body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });

      req.on("end", () => {
        const parsedData = Buffer.concat(body).toString().split("=")[1];
        console.log("###", { parsedData });
        res.statusCode = 302;
        res.setHeader("Location", ROUTES.HOME);
        return res.end();
      });
      break;
    }
    default: {
      const greeting = "<h1>Welcome to Node.js practice app!</h1>";
      const form = `<form method='${METHODS.POST}' action='${ROUTES.CREATE_USER}'><input type='text' name='username'/><button type='submit'>Send</button><form/>`;
      return templates.basicPage(res, `<div>${greeting}${form}</div>`);
    }
  }
};

module.exports = { handler: requestHandler };
