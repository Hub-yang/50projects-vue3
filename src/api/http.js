import service from "./request"

export function getJokes() {
  return service({
    url: "https://icanhazdadjoke.com",
    method: "get",
  })
}
