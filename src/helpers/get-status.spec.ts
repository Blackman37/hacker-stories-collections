import { getStatus } from "./get-status"

describe("Status response", () => {
  it("should return ok", async () => {
    expect(getStatus()).toEqual({ status: "ok" })
  })
})
