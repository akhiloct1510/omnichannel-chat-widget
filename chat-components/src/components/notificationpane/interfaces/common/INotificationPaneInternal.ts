import { IStyle } from "@fluentui/react";
import { ICommandButtonControlProps } from "../../../common/interfaces/ICommandButtonControlProps";
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

    // Message/ Description
    showMessage?: boolean;
    MessageText?: string;
    messageStyleProps?: IStyle;
    messageClassName?: string;

    // Dismiss button "X"
    showDismissButton?: boolean;
    dismissButtonProps?: ICommandButtonControlProps;
    dismissButtonStyleProps?: IStyle;
    dismissButtonHoveredStyleProps?: IStyle;

    // Discuss if we need to have this since OOB callback is not supported in customization
    // Custom button
    showCustomButton?: boolean;
    customButtonProps?: IButtonCommonProps

    // Define properties for - Chat disconnect scenario.
    showStartChatButton?: boolean;
    startChatButtonProps?: IButtonCommonProps

    showDownloadTranscriptButton?: boolean;
    downloadTranscriptButtonProps?: IButtonCommonProps

    // Define properties for - Start Chat scenario.
    // .....Continue adding properties for other notification scenarios
}
