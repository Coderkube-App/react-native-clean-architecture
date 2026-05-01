import { UserEntity } from '../../domain/entities/user_entity';
import { UserRepository } from '../../domain/repositories/user_repository';
import { UserProvider } from '../providers/user_provider';

/**
 * Concrete implementation of the [UserRepository] interface.
 */
export class UserRepositoryImpl implements UserRepository {
  private provider: UserProvider;

  constructor(provider: UserProvider) {
    this.provider = provider;
  }

  /**
   * Fetches a user by their [id] from the underlying data provider.
   */
  async getUser(id: number): Promise<UserEntity> {
    return await this.provider.fetchUser(id);
  }
}
