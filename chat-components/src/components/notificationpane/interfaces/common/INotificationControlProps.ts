import { ICommandButtonControlProps } from "../../../common/interfaces/ICommandButtonControlProps";

/**
 * This interface will have the common control properties and is inherited by each scenarios.
 */
export interface INotificationControlProps {
    id?: string;
    dir?: "ltr" | "rtl" | "auto";

    showTitle?: boolean;
    titleText?: string;

    showSubtitle?: boolean;
    subtitleText?: string;

    showMessage?: boolean;
    MessageText?: string;

    showDismissButton?: boolean;
    dismissButtonProps?: ICommandButtonControlProps;

    // Discuss if we need to have this since OOB callback is not supported in customization
    showCustomButton?: boolean;
    customButtonText?: string;
    customButtonAriaLabel?: string;
}
