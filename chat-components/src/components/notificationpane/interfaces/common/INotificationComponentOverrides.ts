import { ReactNode } from "react";

/**
 * This interface will have the component overrides properties.
 * It acts as common interface for all the scenarios for component overrides.
 */
export interface INotificationComponentOverrides {
    title?: ReactNode | string;
    subtitle?: ReactNode | string;
    dismissButton?: ReactNode | string;
    learnMoreLink?: ReactNode | string;
    notificationIcon?: ReactNode | string;
}