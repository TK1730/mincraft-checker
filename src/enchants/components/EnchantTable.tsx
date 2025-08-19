import { useState, useEffect, use } from "react";
import { Enchant } from "../logic/DataManegement"
import ClickableImage from "./check"
import enchantBook_icon from '../assets/enchantBook.png'
import EnchantSorter from "../logic/TableSort";
import '../styles/enchants.css'; // スタイルシートのインポート

export default function EnchantTable({ enchants }: { enchants: Enchant[] }) {
    // ローカルストレージから初期値を取得
    const getInitialOwned = () => {
        const saved = localStorage.getItem('ownedEnchantIds')
        return saved ? JSON.parse(saved) : []
    }
    const [ownedIds, setOwnedIds] = useState<string[]>(getInitialOwned());

    // 状態変更時にローカルストレージへ保存
    useEffect(() => {
        localStorage.setItem('ownedEnchantIds', JSON.stringify(ownedIds));
    }, [ownedIds]);

    // 画像クリックで所持状態を切り替える
    const handleClick = (id: string) => {
        setOwnedIds(ids => 
            ids.includes(id)
            ? ids.filter(x => x !== id) // 解除
            : [...ids, id] // 追加
        )
    }

    // 所持状態でソート
    const sortedEnchants = EnchantSorter.byJapanese(enchants);

    return (
        <table className="EnchantTable">
            <tbody>
                <tr>
                    <th>アイコン</th>
                    <th>エンチャント名</th>
                    <th>理論値</th>
                </tr>
                {sortedEnchants.map((enchant) => (
                    <tr key={enchant.getId()}>
                        <td>
                            <ClickableImage
                                src={enchantBook_icon}
                                alt='Enchant Book'
                                onClick={() => handleClick(enchant.getId())}
                                dark={ownedIds.includes(enchant.getId())}
                                key={enchant.getId()}
                            />
                        </td>
                        <td>{enchant.getJapanese()}{enchant.convertToRomaNum()}</td>
                        <td>{enchant.convertToTheoryNum()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}