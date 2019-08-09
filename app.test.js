const app = require("./app");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
describe("Server", () => {
  it("welcomes user to the api", async done => {
    let response = await chai.request(app).get("/");
    expect(response).to.have.status(200);
    expect(response.body.status).to.equals("success");
    expect(response.body.message).to.equals("Welcome To Testing API");
    done();
  });

  it("adds 2 numbers", async done => {
    let response = await chai.request(app).post("/add").send({num1: 5, num2: 5});
    expect(response).to.have.status(200);
    expect(response.body.status).to.equals("success");
    expect(response.body.result).to.equals(10);
    done();
  });
});
