import { Resolver } from "../../types";

export const checkAdminAuth: Resolver <
  {},
  {
    success: boolean,
    error?: string,
  }
> = async (_, __, context) => {
  console.log("hello, it works");
  try {
    if (!context.adminUser) {
      return {
        success: false,
        error: "UNAUTHENTICATED",
      };
    };

    
    return {
      success: true,
    }
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    };
  };
};
