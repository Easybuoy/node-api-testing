const app = require("./app");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
describe("Server", () => {
  it("tests home route", async done => {
    let response = await chai.request(app).get("/");
        expect(response).to.have.status(200);
        expect(response.body.status).to.equals('success');
        expect(response.body.message).to.equals('Welcome To Testing API');

    done();
  });
});
