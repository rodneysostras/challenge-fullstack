export const API_ENDPOINT_VERZEL = (import.meta.env.VITE_API_ENDPOINT_VERZEL || '').trim()

if (!API_ENDPOINT_VERZEL) throw new Error('Please provide an API_ENDPOINT_VERZEL')
