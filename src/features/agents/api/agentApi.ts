/**
 * Agent API Service
 * Centralized API methods for real estate agent operations
 */

import apiClient from '@/lib/apiClient';
import type { Agent, CreateAgentPayload, UpdateAgentPayload, AgentStats } from '@/types/agent';

export const agentApi = {
    /**
     * Fetch all agents
     */
    getAgents: async (): Promise<Agent[]> => {
        const { data } = await apiClient.get('/agents');
        return data;
    },

    /**
     * Fetch a single agent by ID
     */
    getAgent: async (id: number): Promise<Agent> => {
        const { data } = await apiClient.get(`/agents/${id}`);
        return data;
    },

    /**
     * Get agent statistics
     */
    getAgentStats: async (id: number): Promise<AgentStats> => {
        const { data } = await apiClient.get(`/agents/${id}/stats`);
        return data;
    },

    /**
     * Create a new agent
     */
    createAgent: async (payload: CreateAgentPayload): Promise<Agent> => {
        const formData = new FormData();

        Object.entries(payload).forEach(([key, value]) => {
            if (key === 'avatar' && value instanceof File) {
                formData.append('avatar', value);
            } else if (Array.isArray(value)) {
                formData.append(key, JSON.stringify(value));
            } else if (typeof value === 'object') {
                formData.append(key, JSON.stringify(value));
            } else {
                formData.append(key, String(value));
            }
        });

        const { data } = await apiClient.post('/agents', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return data;
    },

    /**
     * Update an existing agent
     */
    updateAgent: async (id: number, payload: UpdateAgentPayload): Promise<Agent> => {
        const { data } = await apiClient.put(`/agents/${id}`, payload);
        return data;
    },

    /**
     * Delete an agent
     */
    deleteAgent: async (id: number): Promise<void> => {
        await apiClient.delete(`/agents/${id}`);
    },

    /**
     * Get top performing agents
     */
    getTopAgents: async (limit: number = 5): Promise<Agent[]> => {
        const { data } = await apiClient.get('/agents/top', {
            params: { limit },
        });
        return data;
    },
};

export default agentApi;
