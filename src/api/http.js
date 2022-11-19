import service from "./request"

export function getJokes() {
  return service({
    url: "https://icanhazdadjoke.com",
    method: "GET",
  })
}

export function getUserInfo(username) {
  return service({
    url: `https://api.github.com/users/${username}`,
    method: "GET",
  })
}

export function getUserRepos(username) {
  return service({
    url: `https://api.github.com/users/${username}/repos?sort=created`,
    method: "GET",
  })
}

// day42
export function getItemList() {
  return service("https://randomuser.me/api?results=50")
}
