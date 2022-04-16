import dotenv from "dotenv";
import Fastify from "fastify";
import fp from "fastify-plugin";
import { after } from "mocha";

import App from "../src/app";

dotenv.config();

export async function config() {
  return {};
}

export async function build() {
  const app = Fastify();

  app.register(fp(App), await config());

  await app.ready();

  after(
    () =>
      void app
        .close()
        .then(() => process.exit())
        .catch((error) => {
          console.error(error);
          process.exit();
        }),
  );

  return app;
}
