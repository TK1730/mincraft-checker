interface EnchantInfo {
  id: string        // 英語名
  jp: string        // 日本語名
  treasure: boolean // エンチャントテーブルに出現しないエンチャント
  maxLevel: number  // 最大レベル
}

export const enchantInfos: EnchantInfo[] = [
  { id: "mending",              jp: "修繕",             maxLevel: 1, treasure: true },
  { id: "unbreaking",           jp: "耐久力",           maxLevel: 3, treasure: false },
  { id: "efficiency",           jp: "効率強化",         maxLevel: 5, treasure: false },
  { id: "silk_touch",           jp: "シルクタッチ",     maxLevel: 1, treasure: false },
  { id: "fortune",              jp: "幸運",             maxLevel: 3, treasure: false },
  { id: "sharpness",            jp: "ダメージ増加",     maxLevel: 5, treasure: false },
  { id: "smite",                jp: "アンデッド特効",   maxLevel: 5, treasure: false },
  { id: "bane_of_arthropods",   jp: "虫特効",           maxLevel: 5, treasure: false },
  { id: "knockback",            jp: "ノックバック",     maxLevel: 2, treasure: false },
  { id: "fire_aspect",          jp: "火属性",           maxLevel: 2, treasure: false },
  { id: "looting",              jp: "ドロップ増加",     maxLevel: 3, treasure: false },
  { id: "sweeping_edge",        jp: "範囲ダメージ増加", maxLevel: 3, treasure: false },
  { id: "protection",           jp: "防護",             maxLevel: 4, treasure: false },
  { id: "fire_protection",      jp: "火炎耐性",         maxLevel: 4, treasure: false },
  { id: "blast_protection",     jp: "爆発耐性",         maxLevel: 4, treasure: false },
  { id: "projectile_protection",jp: "飛び道具耐性",     maxLevel: 4, treasure: false },
  { id: "thorns",               jp: "棘の鎧",           maxLevel: 3, treasure: false },
  { id: "respiration",          jp: "水中呼吸",         maxLevel: 3, treasure: false },
  { id: "aqua_affinity",        jp: "水中採掘",         maxLevel: 1, treasure: false },
  { id: "depth_strider",        jp: "水中歩行",         maxLevel: 3, treasure: false },
  { id: "frost_walker",         jp: "氷渡り",           maxLevel: 2, treasure: true },
  { id: "feather_falling",      jp: "落下耐性",         maxLevel: 4, treasure: false },
  { id: "power",                jp: "射撃ダメージ増加", maxLevel: 5, treasure: false },
  { id: "punch",                jp: "パンチ",           maxLevel: 2, treasure: false },
  { id: "flame",                jp: "フレイム",         maxLevel: 1, treasure: false },
  { id: "infinity",             jp: "無限",             maxLevel: 1, treasure: false },
  { id: "luck_of_the_sea",      jp: "宝釣り",           maxLevel: 3, treasure: false },
  { id: "lure",                 jp: "入れ食い",         maxLevel: 3, treasure: false },
  { id: "channeling",           jp: "召雷",             maxLevel: 1, treasure: false },
  { id: "loyalty",              jp: "忠誠",             maxLevel: 3, treasure: false },
  { id: "riptide",              jp: "激流",             maxLevel: 3, treasure: false },
  { id: "impaling",             jp: "串刺し",           maxLevel: 5, treasure: false },
  { id: "multishot",            jp: "拡散",             maxLevel: 1, treasure: false },
  { id: "piercing",             jp: "貫通",             maxLevel: 4, treasure: false },
  { id: "quick_charge",         jp: "高速装填",         maxLevel: 3, treasure: false },
  { id: "curse_of_binding",     jp: "束縛の呪い",       maxLevel: 1, treasure: true },
  { id: "curse_of_vanishing",   jp: "消滅の呪い",       maxLevel: 1, treasure: true }
]
