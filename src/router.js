const fs = require("fs");
const url = require("url");
const path = require("path");
const {
  handleHome,
  handlePublic,
  handleAbout,
  handleTech,
  handleContact,
  handleProjects
} = require("./handler.js");

const router = (request, response) => {
  if (request.url === "/") {
    handleHome(request, response);
  } else if (request.url.startsWith("/public")) {
    handlePublic(request, response);
  } else if (request.url.startsWith("/about")) {
    handleAbout(request, response);
  } else if (request.url.startsWith("/projects")) {
    handleProjects(request, response);
  } else if (request.url.startsWith("/tech-stack")) {
    handleTech(request, response);
  } else if (request.url.startsWith("/contact")) {
    handleContact(request, response);
  }
};

module.exports = router;
