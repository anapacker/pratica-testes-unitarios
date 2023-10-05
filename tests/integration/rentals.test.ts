import app from "app";
import { RentalInput } from "protocols";
import supertest from "supertest";
const api = supertest(app)


describe("Rentals Service Unit Tests", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  })
})

describe("GET /rentals tests", () => {
  it("Must list all rentals", async () =>{
    const response = await api.get("/rentals")
    expect(response.status).toBe(200)
  })

  it("should create a new rental", async () => {
    const rentalInput: RentalInput ={
      moviesId:
  })
})