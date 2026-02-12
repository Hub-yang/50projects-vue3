import service from './request'

export function getJokes(): Promise<{ joke: string }> {
  return service({
    url: 'https://icanhazdadjoke.com',
    method: 'GET',
  })
}

export function getUserInfo(username: string) {
  return service({
    url: `https://api.github.com/users/${username}`,
    method: 'GET',
  })
}

export function getUserRepos(username: string) {
  return service({
    url: `https://api.github.com/users/${username}/repos?sort=created`,
    method: 'GET',
  })
}

export function getItemList() {
  return service('https://randomuser.me/api?results=50')
}

export function getUserList() {
  return service('/mock/getuserlist')
}

export function getRandomImg() {
  return service(
    'https://shibe.online/api/shibes?count=30&urls=true&httpsUrls=true',
  )
}
