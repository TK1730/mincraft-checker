import React, { useState } from "react";
import { Enchant } from '../logic/DataManegement';


interface ClickableImageProps {
    src: string;
    alt?: string;
    onClick?: () => void;
    dark: boolean;
    key?: string; // 追加: keyプロパティをオプションとして定義
}

export default function ClickableImage({ src, alt, onClick, dark, key }: ClickableImageProps) {
    return (
        <img
            key={key}
            src={src}
            alt={alt}
            style={{
                filter: dark ? "none" : "brightness(0.5)",
                cursor: "pointer"
            }}
            onClick={onClick}
        />
    );
}