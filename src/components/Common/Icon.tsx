import React from "react";
import * as images from "assets/images";

type IconType = keyof typeof images;

interface IconProps {
    name: IconType;
    className?: string;
    onClick?: () => void;
}

const Icon = ({ name, className, onClick }: IconProps) =>
    React.createElement(images[name], { className, onClick });

export default Icon;
