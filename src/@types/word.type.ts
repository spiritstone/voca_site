export interface wordModel {
    day: number;
    word: string;
    korMean: string[] | string;
    sentenceAnswer: string;
    sentenceQuestion: string;
    synonym?: string | string[];
    wrongCount: number
}