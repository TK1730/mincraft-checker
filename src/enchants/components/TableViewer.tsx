import { useState } from 'react';
import {enchantList} from '../logic/DataManegement';
import EnchantTable from './EnchantTable';

export default function Check() {
    return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>所持</th>
                    <th>エンチャント名</th>
                    <th>理論値</th>
                </tr>
            </thead>
        </table>
        <EnchantTable enchants={enchantList.map(enchant => enchant)} />
    </div>
    )
}