import { ReactElement } from "react";

import NavLinks from "@/components/navLinks";
import NavLogo from "@/components/navLogo";

/**
 * Compiles the navigation of the websites.
 *
 * @author Arthur Riechert
 * @version 1.0.0
 */

export default function NavBar(): ReactElement {
    return (
        <nav className="flex w-full h-fit px-5 py-3 justify-between items-center">
            <NavLogo />
            <NavLinks />
        </nav>
    );
}