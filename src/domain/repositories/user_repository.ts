import { UserEntity } from '../entities/user_entity';

/**
 * Abstract interface for user-related data operations.
 */
export interface UserRepository {
  /**
   * Fetches a [UserEntity] by its unique [id].
   */
  getUser(id: number): Promise<UserEntity>;
}
