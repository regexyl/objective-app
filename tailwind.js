import { create } from "tailwind-rn";
import styles from "./styles.json";
import fontStyles from "./font-styles.json";

const { tailwind, getColor } = create({ ...styles, ...fontStyles });
export { tailwind, getColor };
