import { Montserrat } from "next/font/google";

/**
 * A file to manage font declarations.
 *
 * @author Arthur Riechert
 * @version 1.0.0
 */

export const montserrat = Montserrat({
    subsets: ["latin"],
    style: ["normal"],
    weight: ["200", "300"],
});