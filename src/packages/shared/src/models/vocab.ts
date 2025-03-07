import { BaseEntity } from "./base";
import { VocabLevelType } from "../enums";

/**
 * Vocab model
 */
export class IVocab extends BaseEntity {
  
  /**
   * Spelling of word
   */
  public word!: string;
  
  /**
   * Level of word (A1 - C1)
   */
  public level!: VocabLevelType;
  
  /**
   * Meaning of word
   */
  public meaningEn!: string;

  /**
   * Example Sentence of word
   */
  public exampleSentence!: string;
  
  /**
   * Translation of example sentence of word
   */
  public exampleSentenceKr!: string;
 
  /**
   * Korean Meaning of word
   */
  public meaningKr!: string;
 
  /**
   * Image URL of word
   */
  public imageUrl?: string;
  
  /**
   * Pronunciation in english of word
   */
  public pronunciationEn?: string;
  
  /**
   * Pronunciation in korean of word
   */
  public pronunciationKr?: string;
};
