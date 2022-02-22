import { APIClient } from './Client';

const apiUrl = process.env.API_URL || 'http://localhost:8080';

export const apiClient = new APIClient(apiUrl);
