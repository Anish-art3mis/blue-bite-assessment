import React from "react";
import styles from "./image.module.css";
import { ImageComponent } from "../types/component-types";

export interface ImageProps extends ImageComponent {}

const Image: React.FC<ImageProps> = ({ options }) => {
    return <img className={styles["img-container"]} src={options.src} alt={options.alt} />;
};

export default Image;
