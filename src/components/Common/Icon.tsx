import React, { CSSProperties } from "react";
import * as images from "assets/images";

type IconType = keyof typeof images;

interface IconProps {
    name: IconType;
    className?: string;
    onClick?: () => void;
    style?: CSSProperties;
}

const Icon = ({ name, className, style, onClick }: IconProps) =>
    React.createElement(images[name], { className, style, onClick });

export default Icon;
