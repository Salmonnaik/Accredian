import { Lead, LeadResponse, LeadsResponse } from '@/types/lead'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public data?: any
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new ApiError(
          errorData.error || `HTTP error! status: ${response.status}`,
          response.status,
          errorData
        )
      }

      return await response.json()
    } catch (error) {
      if (error instanceof ApiError) {
        throw error
      }
      
      if (error instanceof TypeError) {
        throw new ApiError('Network error. Please check your connection.')
      }
      
      throw new ApiError('An unexpected error occurred')
    }
  }

  async submitLead(leadData: Omit<Lead, 'id' | 'createdAt' | 'status'>): Promise<LeadResponse> {
    return this.request<LeadResponse>('/api/lead', {
      method: 'POST',
      body: JSON.stringify(leadData),
    })
  }

  async getLeads(): Promise<LeadsResponse> {
    return this.request<LeadsResponse>('/api/lead', {
      method: 'GET',
    })
  }

  async getLeadById(id: number): Promise<LeadResponse> {
    return this.request<LeadResponse>(`/api/lead/${id}`, {
      method: 'GET',
    })
  }

  async healthCheck(): Promise<{ status: string; timestamp: string; uptime: number }> {
    return this.request<{ status: string; timestamp: string; uptime: number }>('/health', {
      method: 'GET',
    })
  }
}

export const apiService = new ApiService()
export { ApiError }

// Export individual functions for easier usage
export const submitLead = (leadData: Omit<Lead, 'id' | 'createdAt' | 'status'>) =>
  apiService.submitLead(leadData)

export const getLeads = () => apiService.getLeads()

export const getLeadById = (id: number) => apiService.getLeadById(id)

export const healthCheck = () => apiService.healthCheck()
