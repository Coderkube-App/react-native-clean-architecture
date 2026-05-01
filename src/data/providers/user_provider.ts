import apiClient from '../../core/network/api_client';
import { UserModel, UserModelMapper } from '../models/user_model';

/**
 * Data provider responsible for making raw API calls related to user data.
 */
export class UserProvider {
  /**
   * Fetches raw user data from the server and parses it into a [UserModel].
   */
  async fetchUser(id: number): Promise<UserModel> {
    try {
      const response = await apiClient.get(`/users/${id}`);
      return UserModelMapper.fromJson(response.data);
    } catch (error) {
      console.error('UserProvider fetchUser error:', error);
      throw error;
    }
  }
}
