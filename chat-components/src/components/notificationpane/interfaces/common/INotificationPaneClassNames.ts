/**
 * This interface will have the common class names properties and is inherited by each scenarios.
 */
export interface INotificationPaneClassNames {
    containerClassName?: string;
    titleClassName?: string;
    subtitleClassName?: string;
    messageClassName?: string;
    closeButtonClassName?: string;
    // Discuss if we need to have this since OOB callback is not supported in customization
    customButtonClassName?: string;
}
