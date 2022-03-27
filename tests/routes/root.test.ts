import { expect } from "chai";
import { FastifyInstance } from "fastify";

import { build } from "../helper";

describe("routes '/'", () => {
  let app: FastifyInstance;

  before(async () => {
    app = await build();
  });

  it("'/health'", async () => {
    const { statusCode, payload } = await app.inject({
      url: "/health",
    });
    expect(statusCode).to.be.equal(200);
    expect(payload).to.be.equal('{"health":true}');
  });
});
