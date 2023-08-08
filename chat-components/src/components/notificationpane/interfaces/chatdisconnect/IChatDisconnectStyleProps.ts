import { IStyle } from "@fluentui/react";
import { INotificationStyleProps } from "../common/INotificationStyleProps";
import { IChatDisconnectClassNames } from "./IChatDisconnectClassNames";

/**
 * This interface will have all the style properties as customized by C1 for chat disconnect scenario
 * It extends the common style properties <INotificationStyleProps>
 */
export interface IChatDisconnectStyleProps extends INotificationStyleProps {
    startChatButtonStyleProps?: IStyle;
    startChatButtonHoveredStyleProps?: IStyle;

    downloadTranscriptButtonStyleProps?: IStyle;
    downloadTranscriptButtonHoveredStyleProps?: IStyle;

    classNames?: IChatDisconnectClassNames;
}
