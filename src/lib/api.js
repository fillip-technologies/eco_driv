// Shared HTTP client for the Ecodriv API (used by the public site and the admin panel).
export const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5050/api').replace(/\/$/, '')

export class ApiError extends Error {
  constructor(message, status, data) {
    super(message)
    this.status = status
    this.data = data
  }
}

export async function request(path, { method = 'GET', body, token } = {}) {
  const headers = {}
  if (body !== undefined) headers['Content-Type'] = 'application/json'
  if (token) headers.Authorization = `Bearer ${token}`

  let res
  try {
    res = await fetch(`${API_URL}${path}`, {
      method,
      headers,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    })
  } catch {
    throw new ApiError('Unable to reach the server. Please try again.', 0)
  }

  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new ApiError(data.message || 'Something went wrong', res.status, data)
  return data
}

// Public endpoints
export const submitContact = (payload) => request('/contacts', { method: 'POST', body: payload })
