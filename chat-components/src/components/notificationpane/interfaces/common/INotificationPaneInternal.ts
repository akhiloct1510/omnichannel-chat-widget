import { IStyle } from "@fluentui/react";
import { ICommandButtonControlProps } from "../../../common/interfaces/ICommandButtonControlProps";
import { IImageControlProps } from "../../../common/interfaces/IImageControlProps";
import { IButtonCommonProps } from "../common/IButtonCommonProps";

/**
 * This interface will act as generic object that will have the common properties and also the properties for each scenario.
 * Stateful will populate this interface based on the scenario type and send it to NotificationBanner view.
 */
export interface INotificationPaneInternal {
    // Define common control/style/class names properties.

    // General
    id?: string;
    dir?: "ltr" | "rtl" | "auto";
    generalStyleProps?: IStyle;
    containerClassName?: string;

    // Title
    showTitle?: boolean;
    titleText?: string;
    titleStyleProps?: IStyle;
    titleClassName?: string;

    // Sub Title
    showSubtitle?: boolean;
    subtitleText?: string;
    subtitleStyleProps?: IStyle;
    subtitleClassName?: string;

    // Learn more link
    showLearnMoreLink?: boolean;
    learnMoreLinkText?: string;
    learnMoreLinkAriaLabel?: string;
    learnMoreLinkStyleProps?: IStyle;
    learnMoreLinkHoveredStyleProps?: IStyle;
    learnMoreLinkClassName?: string;

    // Notification Icon
    notificationIconProps?: IImageControlProps;
    notificationIconStyleProps?: IStyle;
    notificationIconClassName?: string;

    // Dismiss button "X"
    showDismissButton?: boolean;
    dismissButtonProps?: ICommandButtonControlProps;
    dismissButtonStyleProps?: IStyle;
    dismissButtonHoveredStyleProps?: IStyle;

    // Define properties for - Chat disconnect scenario.
    showCloseChatButton?: boolean;
    closeChatButtonProps?: IButtonCommonProps

    // Define properties for - Start Chat scenario.
    // .....Continue adding properties for other notification scenarios
}
