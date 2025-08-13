import { Enchant } from "./DataManegement";

export default class CalcTheory {
    private theoryValues = [5, 8, 11, 14, 17];  // 理論値の配列
    constructor(private maxLevel: number) {
        if (maxLevel < 1 || maxLevel > this.theoryValues.length) {
            throw new Error("Invalid maxLevel. It must be between 1 and 5.");
        }
    }
    /**
     * 通常エンチャントの理論値を返す
     * @returns 理論値（number型）
     */
    getNormalTheory(): number {
      const value = this.theoryValues[this.maxLevel - 1];
      return value !== undefined ? value : 0;
    }
    /**
     * 宝エンチャントの理論値（2倍）を返す
     * @returns 理論値の2倍（number型）
     */
    getTreasureTheory(): number {
      const value = this.theoryValues[this.maxLevel - 1];
      return value !== undefined ? value * 2 : 0;
    }

}
