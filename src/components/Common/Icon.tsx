import React from "react";
import * as images from "assets/images";

type IconType = keyof typeof images;

interface IconProps {
    name: IconType;
    onClick?: () => void;
}

const Icon = ({ name, onClick }: IconProps) =>
    React.createElement(images[name], { onClick });

export default Icon;
