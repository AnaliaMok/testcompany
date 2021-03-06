const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // Project Route
    server.get("/project/:slug", (req, res) => {
      const actualPage = "/project";
      const queryParams = { slug: req.params.slug, apiRoute: "projects" };
      app.render(req, res, actualPage, queryParams);
    });

    // Post Route
    server.get("/post/:slug", (req, res) => {
      const actualPage = "/post";
      const queryParams = { slug: req.params.slug, apiRoute: "post" };
      app.render(req, res, actualPage, queryParams);
    });

    // Page Route
    server.get("/page/:slug", (req, res) => {
      const actualPage = "/post";
      const queryParams = { slug: req.params.slug, apiRoute: "page" };
      app.render(req, res, actualPage, queryParams);
    });

    // Category Route
    server.get("/category/:slug", (req, res) => {
      const actualPage = "/category";
      const queryParams = { slug: req.params.slug };
      app.render(req, res, actualPage, queryParams);
    });

    // Preview Page Route
    server.get("/_preview/:id/:wpnonce", (req, res) => {
      const actualPage = "/preview";
      const queryParams = { id: req.params.id, wpnonce: req.params.wpnonce };
      app.render(req, res, actualPage, queryParams);
    });

    // Generic Fallback
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
