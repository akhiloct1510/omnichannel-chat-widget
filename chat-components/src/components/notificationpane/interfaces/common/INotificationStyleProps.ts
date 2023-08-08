import { IStyle } from "@fluentui/react";

/**
 * This interface will have the common styles properties and is inherited by each scenarios.
 */
export interface INotificationStyleProps {
    generalStyleProps?: IStyle;
    titleStyleProps?: IStyle;
    subtitleStyleProps?: IStyle;
    messageStyleProps?: IStyle;
    dismissButtonStyleProps?: IStyle;
    dismissButtonHoveredStyleProps?: IStyle;
    // Discuss if we need to have this since OOB callback is not supported in customization
    customButtonStyleProps?: IStyle;
    customButtonHoveredStyleProps?: IStyle;
}
