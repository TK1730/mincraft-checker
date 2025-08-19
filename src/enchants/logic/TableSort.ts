import { Enchant } from "./DataManegement";
export default class EnchantSorter {
    // 名前 (id) で昇順
    static byId(list: Enchant[]): Enchant[] {
        return [...list].sort((a, b) => a.getId().localeCompare(b.getId()))
    }

    // 日本語名 (jp) で昇順
    static byJapanese(list: Enchant[]): Enchant[] {
        return [...list].sort((a, b) => a.getJapanese().localeCompare(b.getJapanese()))
    }

    // 最大レベルで降順
    static byMaxLevelDesc(list: Enchant[]): Enchant[] {
        return [...list].sort((a, b) => b.getMaxLevel() - a.getMaxLevel())
    }

    // 所持しているものを最初、していないものを後にする（ownedIdsで判定）
    static byOwnedFirst(list: Enchant[], ownedIds: string[]): Enchant[] {
        return [...list].sort((a, b) => Number(ownedIds.includes(b.getId())) - Number(ownedIds.includes(a.getId())));
    }

    // 所持していないものを最初、しているものを後にする
    static byOwnedLast(list: Enchant[], ownedIds: string[]): Enchant[] {
        return [...list].sort((a, b) => Number(ownedIds.includes(a.getId())) - Number(ownedIds.includes(b.getId())));
    }
}