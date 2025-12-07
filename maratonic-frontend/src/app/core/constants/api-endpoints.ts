export const API_BASE = 'https://localhost:7280/api';

export const API_ENDPOINTS = {

  // ===============================
  // AUTH
  // ===============================
  AUTH: {
    REGISTER: `${API_BASE}/auth/register`,
    LOGIN: `${API_BASE}/auth/login`,
    ME: `${API_BASE}/auth/me`
  },

  // ===============================
  // RACES
  // ===============================
  RACES: {
    LIST: `${API_BASE}/races/list`,
    DETAIL: (id: number) => `${API_BASE}/races/${id}`,
    CREATE: `${API_BASE}/races/create`,
    UPDATE: `${API_BASE}/races/update`,
    DELETE: (id: number) => `${API_BASE}/races/delete/${id}`
  },

  // ===============================
  // REGISTRATIONS (USER RACE SIGNUPS)
  // ===============================
  REGISTRATION: {
    REGISTER: `${API_BASE}/registrations/register`,
    MY_RACES: `${API_BASE}/registrations/my`      // ✔ profile page uses this
  },

  // ===============================
  // PAYMENTS
  // ===============================
  PAYMENTS: {
    CHECKOUT: `${API_BASE}/payments/checkout`,
    REFUND: `${API_BASE}/payments/refund`
  }
};
