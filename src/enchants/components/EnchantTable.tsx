import { Enchant } from "../logic/DataManegement"
import ClickableImage from "./check"
import enchantBook_icon from '../assets/enchantBook.png'

export default function EnchantTable( {enchants}: {enchants: Enchant[]}) {
    return (
        <table>
            <tbody>
                {enchants.map(enchant => (
                    <tr key={enchant.getId()}>
                        <td><ClickableImage src={enchantBook_icon} alt='Enchant Book' /></td>
                        <td>{enchant.getJapanese()}{enchant.convertToRomaNum()}</td>
                        <td>{enchant.convertToTheoryNum()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}