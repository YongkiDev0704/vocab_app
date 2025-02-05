import { IVocab } from "@ykvocab/shared";

import { Resolver } from "../../types";
import { VocabModel } from "@ykvocab/core";

export const getVocabByWord: Resolver<
  {
    word: String;
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
