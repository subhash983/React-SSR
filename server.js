import "core-js/stable";
import express from "express";
import compression from "compression";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.json());
app.use(express.static("build/public", { index: false }));

import App from "./src/app";

app.get("*", (req, res) => {
  const context = {};
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const html = `
            <html>
                <head>
                <title>test</title>
                </head>
                <body>
                <div id="root">
                ${content}
                </div>
                <script src="client_bundle.js"></script>
                </body>
            </html>
            `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
