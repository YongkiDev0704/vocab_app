import { BaseEntity } from "./base";
import { UserRole } from "../enums";

export class IUser extends BaseEntity {

  /**
   * Name of User; aka: user account
   */
  public userName!: string;

  /**
   * password of user
   */
  public password!: string;

  /**
   * role of user
   */
  public role!: UserRole;
};
