import { VocabModel } from "@ykvocab/core";
import { IVocab } from "@ykvocab/shared";

import { Resolver } from "../../types";

export const createVocab: Resolver<
  {
    data: Pick<
      IVocab,
      "word" |
      "level" |
      "exampleSentence" |
      "exampleSentenceKr" |
      "meaningKr" |
      "meaningEn" |
      "imageUrl" |
      "pronunciationEn" |
      "pronunciationKr"
    >;
  }, {
    success: boolean;
    error?: string;
    vocab?: IVocab;
  }
> = async (_, { data }) => {
  try {
    const vocab = await VocabModel.create(data);

    return {
      success: true,
      vocab
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    } as any;
  }
};