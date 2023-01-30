import httpStatus from "http-status";
import app from "../../../../app";
import supertest from "supertest";
import { userMock } from "../../../../utils/mocks/UserMock";

const server = supertest(app);

describe("CustomerRoute validation", () => {
  it("should return status 400, when body is not given", async () => {
    const result = await server.post("/customer");

    expect(result.status).toBe(httpStatus.BAD_REQUEST);
  });
  it("should return status 201, when body is correct", async () => {
    const result = await server.post("/customer").send(userMock);

    expect(result.status).toBe(httpStatus.CREATED);
  });
});
