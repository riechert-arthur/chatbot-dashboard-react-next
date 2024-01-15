import { ReactElement } from "react";
import MessageAssistantIcon from "@/components/messageAssistantIcon";

/** 
 * A template for a single message in chat history.
 *
 * @author Arthur Riechert
 * @version 1.0.0
*/

interface Props {
    role: string;
    message: string;
}

export default function Message ({ role, message }: Props): ReactElement {
    return (
        <div className={`flex w-full h-fit py-3 ${ role == "user" ? "justify-end" : "justify-start" }`}>
            {
                role == "user" && displayUserMessage(message)
            }
            {
                role == "assistant" && displayAssistantMessage(message)
            }
        </div>
    )
}

function displayUserMessage(message: string): ReactElement {
    return (
        <div className="flex p-3 max-w-48 rounded-lg bg-gray-950 text-xs shadow-md" >
            <div className="flex flex-wrap" dangerouslySetInnerHTML={{ __html: message }} />
        </div>
    )
}

function displayAssistantMessage(message: string): ReactElement {
    return (
        <div className="flex p-3 max-w-48 rounded-lg bg-green-700 text-xs shadow-md" >
            <div className="flex flex-wrap" dangerouslySetInnerHTML={{ __html: message }} />
        </div>
    )
}