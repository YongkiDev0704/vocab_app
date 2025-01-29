import { BaseEntity } from "./base";
import { VocabLevelType } from "../enums";

/**
 * Vocab model
 */
export class Vocab extends BaseEntity {
  
  /**
   * Spelling of word
   */
  public word!: string;
  
  /**
   * Level of word (A1 - C1)
   */
  public level!: VocabLevelType;
  
  /**
   * Example Sentence of word
   */
  public exampleSentence!: string;
  
  /**
   * Korean Meaning of word
   */
  public meaingKr!: string;
  
  /**
   * Translation of example sentence of word
   */
  public exampleSentenceKr!: string;
  
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
}