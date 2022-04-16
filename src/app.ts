import { FastifyPluginAsync } from "fastify";
import AutoLoad, { AutoloadPluginOptions } from "fastify-autoload";
import { join } from "path";

export type AppOptions = {} & Partial<AutoloadPluginOptions>;

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts,
): Promise<void> => {
  fastify
    .register(AutoLoad, {
      dir: join(__dirname, "plugins"),
      options: opts,
    })
    .after(() => {
      fastify.setErrorHandler(async (error, _, reply) => {
        reply.statusCode = error?.statusCode ?? 500;

        reply.send(error);
      });
    });

  fastify.register(AutoLoad, {
    dir: join(__dirname, "routes"),
    options: opts,
  });
};

export default app;
export { app };
