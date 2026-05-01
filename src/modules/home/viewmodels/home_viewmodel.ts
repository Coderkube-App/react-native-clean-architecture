import { create } from 'zustand';
import { UserEntity } from '../../../domain/entities/user_entity';
import { UserRepositoryImpl } from '../../../data/repositories/user_repository_impl';
import { UserProvider } from '../../../data/providers/user_provider';

interface HomeState {
  user: UserEntity | null;
  isLoading: boolean;
  error: string | null;
  fetchUser: (id: number) => Promise<void>;
}

// Dependency Injection (simple manual injection)
const userProvider = new UserProvider();
const userRepository = new UserRepositoryImpl(userProvider);

/**
 * Home ViewModel using Zustand.
 * Handles fetching user data through the domain layer.
 */
export const useHomeViewModel = create<HomeState>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  fetchUser: async (id: number) => {
    try {
      set({ isLoading: true, error: null });
      const user = await userRepository.getUser(id);
      set({ user, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
}));
