import { ReactElement, ReactNode } from "react";
import { montserrat } from "./fonts";

/**
 * Provides relevant colors and themes (i.e. dark mode) for the app.
 *
 * @author Arthur Riechert
 * @version 1.0.0
 */

const DARK_THEME: string = `bg-body-gradient bg-cover ${ montserrat.className } font-light`;

export default function ThemeProvider({ children }: { children: ReactNode }): ReactElement {
    return (
        <div className={ "flex flex-col min-h-screen " + DARK_THEME }>
            { children }
        </div>
    )
}