import { UserModel } from "@ykvocab/core";
import { IUser } from "@ykvocab/shared";
import bcrypt from "bcrypt";

import { SALT_ROUND } from "@ykvocab/core";
import { Resolver } from "../../types";

export const createUser: Resolver<
  {
    data: Pick<
      IUser,
      "userName" |
      "password" |
      "role" 
    >;
  }, {
    success: boolean;
    error?: string;
    user?: IUser
  }
> = async (__dirname, { data }) => {
  try {
    if (await UserModel.findOne({ userName: data.userName })) {
      return { 
        success: false,
        error: "Account is already exists"
      };
    };

    const hashPassword = await bcrypt.hash(data.password, SALT_ROUND);

    const user = await UserModel.create({
      userName: data.userName,
      role: data.role,
      password: hashPassword
    });

    return {
      success: true,
      user
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    } as any;
  }
};
