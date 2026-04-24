export interface Lead {
  id?: number;
  name: string;
  email: string;
  company?: string;
  message?: string;
  createdAt?: string;
  status?: string;
}

export interface LeadResponse {
  success: boolean;
  data?: Lead;
  message?: string;
  error?: string;
}

export interface LeadsResponse {
  success: boolean;
  count?: number;
  data?: Lead[];
  error?: string;
}
