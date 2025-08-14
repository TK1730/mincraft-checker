import  { enchantInfos } from './Properties'
import CalcTheory from './CalcTheory'

export class Enchant {
    private theory: CalcTheory
    constructor(
        private id: string,
        private jp: string,
        private maxLevel: number,
        private treasure: boolean,
        private own: boolean,
    ) {
        if (id !== undefined && id.trim() === "") {
            throw new Error("Invalid id. It must not be empty.");
        }
        if (jp !== undefined && jp.trim() === "") {
            throw new Error("Invalid jp. It must not be empty.");
        }
        if (maxLevel < 1 || maxLevel === undefined) {
            throw new Error("Invalid maxLevel. It must be between 1 and 5.");
        }
        this.theory = new CalcTheory(maxLevel)
    }
    getId(): string {return this.id}
    getJapanese(): string {return this.jp}
    getMaxLevel(): number {return this.maxLevel}
    isTreasure(): boolean {return this.treasure}
    isOwned(): boolean {return this.own}
    /**
     * 数字をローマ数字に変換するメソッド
     * @returns ローマ数字
     */
    convertToRomaNum(): string {
      if (this.maxLevel === 1) return "";
      const romanNumerals = ["I", "II", "III", "IV", "V"];
      return romanNumerals[this.maxLevel - 1] || "";
    }
    /**
     * 数字を理論値に変換するメソッド
     * @returns 理論値
     */
    convertToTheoryNum(): number {
      return this.treasure ? this.theory.getTreasureTheory() : this.theory.getNormalTheory()
    }
}

export const enchantList: Enchant[] = enchantInfos.map(enchant =>
  new Enchant(enchant.id, enchant.jp, enchant.maxLevel, enchant.treasure, false)
)
