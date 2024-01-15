import { ReactElement } from "react";
import Link from "next/link";

/**
 * Holds all the navigation links to be displayed.
 *
 * @author Arthur Riechert
 * @version 1.0.0
 */

interface navLinks {
    label: string;
    route: string;
}

const INTERNAL_LINKS: navLinks[] = [
    { label: "Chat", route: "/" },
    { label: "Settings", route: "/settings" },
    { label: "Analytics", route: "/analytics" },
];

export default function NavLinks(): ReactElement {
    return (
        <div className="flex w-fit min-w-40 justify-between text-xs">
            {
                INTERNAL_LINKS.map(({ label, route}, index) => (
                    <Link key={ index } href={ route }>{ label }</Link>
                ))
            }
        </div>
    )
}