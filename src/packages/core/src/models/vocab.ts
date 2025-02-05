import { IVocab, VocabLevelType } from "@ykvocab/shared";
import {
  getModelForClass,
  modelOptions,
  plugin,
  prop,
  ReturnModelType
} from "@typegoose/typegoose";
import mongoosePaginate from "mongoose-paginate-v2";

@plugin(mongoosePaginate)
@modelOptions({
  schemaOptions: {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
})
export class Vocab extends IVocab {
  @prop({ required: true })
  declare public word: string;
  
  @prop({ required: true })
  declare public level: VocabLevelType;
  
  @prop({ required: true })
  declare public exampleSentence: string;
  
  @prop({ required: true })
  declare public meaningEn: string;

  @prop({ required: true })
  declare public meaningKr: string;
  
  @prop({ required: true })
  declare public exampleSentenceKr: string;
  
  @prop()
  declare public imageUrl: string;
  
  @prop()
  declare public pronunciationEn: string;
  
  @prop()
  declare public pronunciationKr: string;
};

export const VocabModel: ReturnModelType<typeof Vocab> = 
  getModelForClass(Vocab);
