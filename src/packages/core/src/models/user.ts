import { IUser, UserRole } from "@ykvocab/shared";
import { 
  getModelForClass,
  modelOptions,
  prop,
  ReturnModelType
} from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
})
export class User extends IUser {
  @prop({ required: true })
  declare public userName: string;

  @prop({ required: true })
  declare public password: string;

  @prop({ required: true })
  declare public role: UserRole;
};

export const UserModel: ReturnModelType<typeof User> =
  getModelForClass(User);
  