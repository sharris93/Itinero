const tokenName = 'itinero-token'

export const setToken = (token) => {
  localStorage.setItem(tokenName, token)
}