import { IStyle } from "@fluentui/react";
import { ICommandButtonControlProps } from "../../../common/interfaces/ICommandButtonControlProps";

/**
 * This interface will act as generic object that will have the common properties and also the properties for each scenario.
 * Stateful will populate this interface and send it to NotificationBanner view.
 */
export interface INotificationPaneInternal {
    // Define common control/style/class names properties.
    id?: string;
    dir?: "ltr" | "rtl" | "auto";
    generalStyleProps?: IStyle;
    containerClassName?: string;

    showTitle?: boolean;
    titleText?: string;
    titleStyleProps?: IStyle;
    titleClassName?: string;

    showSubtitle?: boolean;
    subtitleText?: string;
    subtitleStyleProps?: IStyle;
    subtitleClassName?: string;

    showMessage?: boolean;
    MessageText?: string;
    messageStyleProps?: IStyle;
    messageClassName?: string;

    showCloseButton?: boolean;
    closeButtonProps?: ICommandButtonControlProps;
    closeButtonStyleProps?: IStyle;
    closeButtonHoveredStyleProps?: IStyle;
    closeButtonClassName?: string;

    showCustomButton?: boolean;
    CustomButtonProps?: ICommandButtonControlProps;
    customButtonStyleProps?: IStyle;
    customButtonHoveredStyleProps?: IStyle;
    customButtonClassName?: string;

    // Define properties for - Chat disconnect scenario.
    showStartChatButton?: boolean;
    startChatButtonText?: string;
    startChatButtonAriaLabel?: string;

    showDownloadTranscriptButton?: boolean;
    downloadTranscriptButtonText?: string;
    downloadTranscriptButtonAriaLabel?: string;

    // Define properties for - Start Chat scenario.
    // .....Continue adding properties for other notification scenarios
}
