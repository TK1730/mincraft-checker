import React, { useState } from "react";
import { Enchant } from '../logic/DataManegement';


export default function ClickableImage({ src, alt }: { src: string; alt?: string }) {
    const [dark, setDark] = useState(true);

    return (
        <img
            src={src}
            alt={alt}
            style={{
                filter: dark ? "brightness(0.5)" : "none",
                cursor: "pointer"
            }}
            onClick={() => setDark(d => !d)}
        />
    );
}