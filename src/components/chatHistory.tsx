import { ReactElement } from "react";

import Message from "@/components/message";

/**
 * Displays the previous list of messages between the user and chat.
 *
 * @author Arthur Riechert
 * @version 1.0.0
 */

export default function ChatHistory(): ReactElement {
    return (
        <div className="flex flex-col grow">
            <Message role="assistant" message="Hello! aslfhd ;aljs dklfajs;dlk fj;laksjdfka jsd;klfjaks;dj fk;asdj kfaj;sdkf j;asldkffj;lk" />
            <Message role="user" message="Hello!" />
        </div>
    )
}