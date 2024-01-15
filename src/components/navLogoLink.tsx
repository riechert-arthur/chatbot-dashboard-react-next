import { ReactElement } from "react";
import Link from "next/link";

import NavLogo from "@/components/navLogo";

/**
 * The link that is associated with the logo in the nav bar that
 * sends the user back to the home page.
 *
 * @author Arthur Riechert
 * @version 1.0.0
 */


const ROUTE: string = "/";

export default function NavLogoLink(): ReactElement {
    return (
        <Link className="justify-self-start hover:pointer" href={ ROUTE }>
            <NavLogo />    
        </Link>
    )
}