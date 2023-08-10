import { ICommandButtonControlProps } from "../../../common/interfaces/ICommandButtonControlProps";
import { IImageControlProps } from "../../../common/interfaces/IImageControlProps";

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

    showDismissButton?: boolean;
    dismissButtonProps?: ICommandButtonControlProps;

    showLearnMoreLink?: boolean;
    learnMoreLinkText?: string;
    learnMoreLinkAriaLabel?: string;

    notificationIconProps?: IImageControlProps;
}
