import { usePageContext } from "../context/page-context";
import { ButtonComponent } from "../types/component-types";
import styles from "./button.module.css";

export interface ButtonProps extends ButtonComponent {}

const Button: React.FC<ButtonProps> = (props) => {
    const listCtx = usePageContext();

    return (
        <button
            className={styles["btn-container"]}
            onClick={() => {
                listCtx.setVariables((prev) => {
                    return { ...prev, [props.options.variable]: props.options.value };
                });
            }}
        >
            <div>{props.options.text}</div>
            {props.options.icon ? (
                <img src={props.options.icon} className={styles["btn-icon"]} alt="btn icon" />
            ) : null}
        </button>
    );
};

export default Button;
