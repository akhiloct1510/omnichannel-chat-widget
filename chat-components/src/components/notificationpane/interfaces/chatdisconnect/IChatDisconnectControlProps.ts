import { INotificationControlProps } from "../common/INotificationControlProps";

/**
 * This interface will have all the properties as customized by C1 for chat disconnect scenario
 * It extends the common properties <INotificationControlProps>
 */
export interface IChatDisconnectControlProps extends INotificationControlProps {
    // Add properties specific to Chat disconnect scenario
    showCloseChatButton?: boolean;
    closeChatButtonText?: string;
    closeChatButtonAriaLabel?: string;
}