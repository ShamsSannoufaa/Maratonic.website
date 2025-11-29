const BASE_URL = 'http://localhost:5266/api';

export const API = {
  // Auth
  LOGIN: `${BASE_URL}/auth/login`,
  REGISTER: `${BASE_URL}/auth/register`,

  // Races
  RACES_LIST: `${BASE_URL}/races/list`,
  RACE_DETAIL: (id: number) => `${BASE_URL}/races/${id}`,

  // Registrations
  REGISTER_RACE: `${BASE_URL}/registrations/register`,
  MY_REGISTRATIONS: `${BASE_URL}/registrations/my`,

  // Payments
  PAY: `${BASE_URL}/payments/pay`,
  REFUND: `${BASE_URL}/payments/refund`
};
