/**
 * API Client Configuration
 * Centralized axios instance with interceptors
 */

import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// Request interceptor
apiClient.interceptors.request.use(
    (config) => {
        // Add auth token if available
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle common errors
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // Unauthorized - redirect to login
                    localStorage.removeItem('authToken');
                    window.location.href = '/login';
                    break;
                case 403:
                    console.error('Access forbidden:', error.response.data);
                    break;
                case 404:
                    console.error('Resource not found:', error.response.data);
                    break;
                case 500:
                    console.error('Server error:', error.response.data);
                    break;
                default:
                    console.error('API error:', error.response.data);
            }
        } else if (error.request) {
            console.error('Network error:', error.message);
        } else {
            console.error('Error:', error.message);
        }

        return Promise.reject(error);
    }
);

export default apiClient;
