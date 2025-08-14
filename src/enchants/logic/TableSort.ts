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

    // 所持しているものを最初、していないものを後にする
    static byOwnedFirst(list: Enchant[]): Enchant[] {
        return [...list].sort((a, b) => Number(b.isOwned()) - Number(a.isOwned()));
    }

    // 所持していないものを最初、しているものを後にする
    static byOwnedLast(list: Enchant[], states: Record<string, boolean>): Enchant[] {
        return [...list].sort((a, b) => Number(states[a.getId()]) - Number(states[b.getId()]));
    }
}