import { request } from '../../lib/api'
import { getToken, clearToken, UNAUTHORIZED_EVENT } from './auth'

// Authenticated request: attaches the admin token and signals logout on 401.
async function authRequest(path, options = {}) {
  try {
    return await request(path, { ...options, token: getToken() })
  } catch (err) {
    if (err.status === 401) {
      clearToken()
      window.dispatchEvent(new Event(UNAUTHORIZED_EVENT))
    }
    throw err
  }
}

// Auth
export const adminLogin = (email, password) =>
  request('/auth/login', { method: 'POST', body: { email, password } })
export const fetchMe = () => authRequest('/auth/me')
export const changePassword = (currentPassword, newPassword) =>
  authRequest('/auth/password', { method: 'PATCH', body: { currentPassword, newPassword } })

// Enquiries
export const fetchContacts = (params = {}) => {
  const qs = new URLSearchParams(Object.entries(params).filter(([, v]) => v !== '' && v != null))
  return authRequest(`/contacts?${qs}`)
}
export const fetchContactStats = (params = {}) => {
  const qs = new URLSearchParams(Object.entries(params).filter(([, v]) => v !== '' && v != null))
  return authRequest(`/contacts/stats?${qs}`)
}
export const updateContact = (id, updates) =>
  authRequest(`/contacts/${id}`, { method: 'PATCH', body: updates })
export const deleteContact = (id) => authRequest(`/contacts/${id}`, { method: 'DELETE' })
