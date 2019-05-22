export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("fragminUser")
    ? JSON.parse(window.localStorage.getItem("fragminUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("fragminUser", JSON.stringify(user))

export const handleLogin = ({ din_number }) => {
	return setUser({
    din_number: din_number,
  })
}

export const isLoggedIn = () => {
  const user = getUser()
  if(Object.entries(user).length === 1 && user.constructor === Object) {
    return true;
  }
  return false;
}

export const logout = callback => {
  setUser({})
  callback()
}
