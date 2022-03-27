import { FastifyPluginAsync } from "fastify";

const root: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get("/health", async function () {
    return { health: true };
  });
};

export default root;
