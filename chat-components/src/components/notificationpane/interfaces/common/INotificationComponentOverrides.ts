import { ReactNode } from "react";

/**
 * This interface will have the component overrides properties.
 * It acts as common interface for all the scenarios for component overrides.
 */
export interface INotificationComponentOverrides {
    title?: ReactNode | string;
    subtitle?: ReactNode | string;
    message?: ReactNode | string;
    dismissButton?: ReactNode | string;
    // Discuss if we need to have this since OOB callback is not supported in customization
    customButton?: ReactNode | string;
}