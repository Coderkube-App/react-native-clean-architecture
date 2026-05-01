import { UserEntity } from '../../domain/entities/user_entity';

/**
 * Data model for a user, extending the [UserEntity] for use in the data layer.
 * 
 * Includes methods for JSON serialization and deserialization.
 */
export interface UserModel extends UserEntity {}

export const UserModelMapper = {
  fromJson(json: any): UserModel {
    return {
      id: json.id,
      name: json.name,
      email: json.email,
    };
  },

  toJson(model: UserModel): any {
    return {
      id: model.id,
      name: model.name,
      email: model.email,
    };
  },
};
