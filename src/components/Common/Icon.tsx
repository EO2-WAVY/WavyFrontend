import React, { CSSProperties } from "react";
import * as images from "assets/images";

type IconType = keyof typeof images;

interface IconProps {
    name: IconType;
    id?: string;
    className?: string;
    onClick?: (e?: any) => void;
    style?: CSSProperties;
}

const Icon = ({ name, id, className, style, onClick }: IconProps) =>
    React.createElement(images[name], { id, className, style, onClick });

export default Icon;
