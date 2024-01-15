import { ReactElement } from "react";
import ChatForm from "./chatForm";

/**
 * Aggregates all chat components into a single, main component.
 *
 * @author Arthur Riechert
 * @version 1.0.0
 */
export default function Chat(): ReactElement {
    return (
        <div className="flex flex-col w-full h-[32rem] justify-between">
            <h1 className="text-2xl">Personal Assistant</h1>
            <ChatForm />
        </div>
    );
}