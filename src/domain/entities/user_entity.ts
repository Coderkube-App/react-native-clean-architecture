/**
 * Represents a user in the domain layer.
 * 
 * This entity is agnostic of any data layer implementation.
 */
export interface UserEntity {
  id: number;
  name: string;
  email: string;
}
