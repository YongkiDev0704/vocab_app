import { VocabModel } from "@ykvocab/core";
import { IVocab } from "@ykvocab/shared";

import { Resolver } from "../../types";

export const getVocabByWord: Resolver<
  {
    word: string;
  }, {
    success: boolean;
    error?: string;
    data?: IVocab
  }
> = async (_, { word }) => {
  try {
    const data = await VocabModel.findOne({ word }).lean();

    return {
      success: true,
      data: data || undefined
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    }
  }
};
