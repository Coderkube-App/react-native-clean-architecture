import { create } from 'zustand';

interface AuthState {
  isLoading: boolean;
  error: string | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

/**
 * Zustand store for authentication state.
 * Acts as the "ViewModel" for auth-related data.
 */
export const useAuthViewModel = create<AuthState>((set) => ({
  isLoading: false,
  error: null,
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error: error }),
}));
