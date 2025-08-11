import { useState } from 'react';
import { Enchant } from './enchant';
import './check.css';

export default function Check({ enchant }: { enchant: Enchant }) {
    const [checked, setChecked] = useState(false)

    return (
    <div className="main">
        <label className='check-box'>
            <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
        </label>
        <h2 className='title'>{enchant.getJapanese()}{enchant.convertToRomaNum()}</h2>
        <p className='paragraph'>理論値:{enchant.convertToTheoryNum()}</p>
    </div>
    )
}