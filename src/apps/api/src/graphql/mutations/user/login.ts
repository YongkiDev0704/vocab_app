import { UserModel } from "@ykvocab/core";
import bcrpyt from "bcrypt";
import jwt from "jsonwebtoken";

import { Resolver } from "../../types";
import { IUser } from "@ykvocab/shared";

export const loginUser: Resolver<
  {
    data: Pick<
      IUser,
      "userName" |
      "password"  
    >;
  }, {
    success: boolean;
    error?: string;
    token?: string;
  }
> = async (_, { data }) => {
  try {
    const user = await UserModel.findOne({ userName: data.userName });

    if (!user) {
      return { 
        success: false,
        error: "Invalid info"
      };
    };
    const isValidPassword = await bcrpyt.compare(data.password, user.password)
    
    if(!isValidPassword) {
      return { 
        success: false,
        error: "Invalid info"
      };
    };

    const token = jwt.sign(
      { 
        id: user._id,
        userName: user.userName,
        role: user.role,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "15m"
      }
    );

    return {
      success: true,
      token,
    }; 
  } catch (e: any) {
    return { 
      success: false,
      error: e.message
    };
  };
};
