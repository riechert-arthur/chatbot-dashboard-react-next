import { ReactElement } from "react";

/**
 * The logo that is usually displayed at the top of pages.
 *
 * @author Arthur Riechert
 * @version 1.0.0
 */

export default function NavLogo(): ReactElement {
    return (
        <svg width="25" height="25" viewBox="0 0 331 331" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d={ 
                    `M251.158 143.291L192.529 73.5525L223.634 61.7539L281.685 42.1185L219.356 22.3943L216.94
                    11.3482L134.662 0L92.6947 102.889V180.896L49.315 224.275L92.6947 236.143V278.708L58.8569 299.586L95.7674
                    330.999H247.437L216.202 290.535L225.778 283.553L251.158 143.291ZM250.435 42.4264L225.577 50.8341L221.752
                    33.3491L250.435 42.4264ZM140.812 10.6618L208.893 20.0521L216.345 54.1206L182.682 66.8888L106.243 95.4109L140.812
                    10.6618ZM102.416 107.216L176.489 79.5766L167.422 106.168L102.416 171.175V107.216ZM160.309 127.029L123.654
                    234.535L68.0236 219.315L160.309 127.029ZM120.51 243.754L102.416 296.822V238.803L120.51 243.754ZM92.6941
                    290.131V315.619L75.3322 300.843L92.6941 290.131ZM227.651 321.279H174.04L208.343 296.266L227.651 321.279ZM157.54
                    321.279H104.348L186.221 81.1567L240.779 146.053L216.905 277.992L157.54 321.279ZM182.78 38.3842H173.058V28.0146H182.78V38.3842Z`
                }
                fill="url(#paint0_linear_1_7)"
            />
            <defs>
                <linearGradient id="paint0_linear_1_7" x1="165.5" y1="0" x2="165.5" y2="331" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#174FA3"/>
                    <stop offset="1" stop-color="#B044AF"/>
                </linearGradient>
            </defs>
        </svg>

    );
}