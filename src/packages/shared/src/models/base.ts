/**
 * Base entity class
 */
export class BaseEntity<T = any> {
  /**
   * The ID of the entity;
   */
  public _id!: T;
  /**
   * The Time and Date that the entity was created
   */
  public createAt!: Date;
  /**
   * last date and time of entity
   */
  public updateAt!: Date;
}
