import { IStyle } from "@fluentui/react";

/**
 * This interface will have the common properties for button/actions.
 */
export interface IButtonCommonProps {
    buttonText?: string;
    buttonAriaLabel?: string;
    buttonStyleProps?: IStyle;
    buttonHoveredStyleProps?: IStyle;
    buttonClassName?: string;
    onClick?: () => void;
}
