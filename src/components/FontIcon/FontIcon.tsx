import {FC} from "react";

interface FontIconProps {
    iconName: string;
    size?: 'small' | 'medium' | 'large';
}

export const FontIcon:FC<FontIconProps> = ({iconName, size = 'small'}) => {
    const adjustSize = size === 'small' ? '24px' : size === 'medium' ? '30px' : '50px';
    return (
        <span className="material-symbols-outlined" style={{fontSize: adjustSize}}>
            {iconName}
        </span>
    )
}