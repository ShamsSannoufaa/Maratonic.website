export const API_BASE = 'https://localhost:7280/api';


export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: `${API_BASE}/auth/register`,
    LOGIN: `${API_BASE}/auth/login`,
    ME: `${API_BASE}/auth/me`
  },

  RACES: {
    LIST: `${API_BASE}/races/list`,
    DETAIL: (id: number) => `${API_BASE}/races/${id}`,
    CREATE: `${API_BASE}/races/create`
  },

  REGISTRATION: {
  REGISTER: `${API_BASE}/registrations/register`,
  USER_REGISTRATIONS: `${API_BASE}/registrations/my`
},


  PAYMENTS: {
    CHECKOUT: `${API_BASE}/payments/checkout`,
    REFUND: `${API_BASE}/payments/refund`
  }
};
