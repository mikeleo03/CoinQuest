"use client"

import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";

// Props
type Props = { options?: EmblaOptionsType } & PropsWithChildren;

const Slider = ({ children, options }: Props) => {
    // Initialize EmblaCarousel using the custom hook
    const [emblaRef] = useEmblaCarousel({
        slidesToScroll: 1,
        align: "start",
        ...options,
    });

    return (
        // make sure overflow-hidden and flex so that it displays properly
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-10">{children}</div>
        </div>
    );
};
export default Slider;