import { expect } from "chai";

import { ExampleService } from "../../src/services/example";

describe("ExampleService", () => {
  let service: ExampleService;

  before(() => {
    service = new ExampleService();
  });

  it("test method return is 'TEST'", () => {
    const result = service.test();

    expect(result).to.be.equal("TEST");
  });
});
