// Admin session token storage.
const TOKEN_KEY = 'ecodriv_admin_token'

// Fired when the API rejects the token; AdminLayout listens and redirects to login.
export const UNAUTHORIZED_EVENT = 'ecodriv:admin-unauthorized'

export const getToken = () => {
  try { return localStorage.getItem(TOKEN_KEY) } catch { return null }
}
export const setToken = (token) => {
  try { localStorage.setItem(TOKEN_KEY, token) } catch { /* storage unavailable */ }
}
export const clearToken = () => {
  try { localStorage.removeItem(TOKEN_KEY) } catch { /* storage unavailable */ }
}
