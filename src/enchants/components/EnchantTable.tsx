import { useState, useEffect } from "react";
import { Enchant } from "../logic/DataManegement"
import ClickableImage from "./check"
import enchantBook_icon from '../assets/enchantBook.png'
import EnchantSorter from "../logic/TableSort";

export default function EnchantTable({ enchants }: { enchants: Enchant[] }) {
    const [darkStates, setDarkStates] = useState<{ [id: string]: boolean }>(
        Object.fromEntries(enchants.map(e => [e.getId(), e.isOwned()]))
    );
    const [sortedEnchants, setSortedEnchants] = useState<Enchant[]>(enchants);

    useEffect(() => {
        // own状態（darkStates）が変わるたびにソート
        setSortedEnchants(
            [...enchants].sort((a, b) => Number(darkStates[a.getId()]) - Number(darkStates[b.getId()]))
        );
    }, [enchants, darkStates]);

    const handleClick = (id: string) => {
        setDarkStates(states => ({
            ...states,
            [id]: !states[id]
        }));
    };

    return (
        <table>
            <tbody>
                {sortedEnchants.map((enchant) => (
                    <tr key={enchant.getId()}>
                        <td>
                            <ClickableImage
                                src={enchantBook_icon}
                                alt='Enchant Book'
                                onClick={() => handleClick(enchant.getId())}
                                dark={darkStates[enchant.getId()]}
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