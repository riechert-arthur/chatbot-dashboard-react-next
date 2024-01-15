import { ReactElement } from "react";

import ChatFormSubmitButton from "./chatFormSubmitButton";

/**
 * The text form for inputting chat messages.
 *
 * @author Arthur Riechert
 * @version 1.0.0
 */

export default function ChatForm(): ReactElement {
    return (
        <form className="flex p-3 justify-between items-end border border-white/20 rounded-xl">
            <textarea className="w-full h-7 bg-transparent outline-none caret-opacity-100" placeholder="Can you help me..." name="userMessage" />
            <ChatFormSubmitButton />
        </form>
    )
}