const enchant = {
  mending: "修繕",
  unbreaking: "耐久力",
  efficiency: "効率強化",
  silk_touch: "シルクタッチ",
  fortune: "幸運",
  sharpness: "ダメージ増加",
  smite: "アンデッド特効",
  bane_of_arthropods: "虫特効",
  knockback: "ノックバック",
  fire_aspect: "火属性",
  looting: "ドロップ増加",
  sweeping_edge: "範囲ダメージ増加",
  protection: "防護",
  fire_protection: "火炎耐性",
  blast_protection: "爆発耐性",
  projectile_protection: "飛び道具耐性",
  thorns: "棘の鎧",
  respiration: "水中呼吸",
  aqua_affinity: "水中採掘",
  depth_strider: "水中歩行",
  frost_walker: "氷渡り",
  feather_falling: "落下耐性",
  power: "射撃ダメージ増加",
  punch: "パンチ",
  flame: "フレイム",
  infinity: "無限",
  luck_of_the_sea: "宝釣り",
  lure: "入れ食い",
  channeling: "召雷",
  loyalty: "忠誠",
  riptide: "激流",
  impaling: "串刺し",
  multishot: "拡散",
  piercing: "貫通",
  quick_charge: "高速装填",
  curse_of_binding: "束縛の呪い",
  curse_of_vanishing: "消滅の呪い"
}

const enchantMaxLevel: { [key: string]: number } = {
  mending: 1,
  unbreaking: 3,
  efficiency: 5,
  silk_touch: 1,
  fortune: 3,
  sharpness: 5,
  smite: 5,
  bane_of_arthropods: 5,
  knockback: 2,
  fire_aspect: 2,
  looting: 3,
  sweeping_edge: 3,
  protection: 4,
  fire_protection: 4,
  blast_protection: 4,
  projectile_protection: 4,
  thorns: 3,
  respiration: 3,
  aqua_affinity: 1,
  depth_strider: 3,
  frost_walker: 2,
  feather_falling: 4,
  power: 5,
  punch: 2,
  flame: 1,
  infinity: 1,
  luck_of_the_sea: 3,
  lure: 3,
  channeling: 1,
  loyalty: 3,
  riptide: 3,
  impaling: 5,
  multishot: 1,
  piercing: 4,
  quick_charge: 3,
  curse_of_binding: 1,
  curse_of_vanishing: 1
}

export class Enchant {
    constructor(
        private id: string,
        private jp: string,
        private maxLevel: number
    ) {}

    getId(): string {
        return this.id
    }

    getJapanese(): string {
        return this.jp
    }

    getMaxLevel(): number {
        return this.maxLevel
    }

    convertToRomaNum(): string {
      return this.maxLevel.toString().replace(/\d/g, (d) => {
        const num = parseInt(d)
        return ["", "II", "III", "IV", "V"][num-1] || ""
      })
    }

    convertToTheoryNum(): string {
      return this.maxLevel.toString().replace(/\d/g, (d) => {
        const num = parseInt(d)
        return ["5", "8", "11", "14", "17"][num-1] || ""
      })
    }
}

const enchantList: Enchant[] = Object.keys(enchant).map(key => {
  return new Enchant(
    key,
    enchant[key as keyof typeof enchant],
    enchantMaxLevel[key as keyof typeof enchantMaxLevel]
  )
})


export default enchantList
