import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Star, StarIcon } from "lucide-react";
import { testimonials } from "../constants";

export const TestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    direction: "rtl",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="overflow-visible" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-[#F8F9FA] mx-2 p-6 rounded-md w-[250px] min-[500px]:w-[373px] h-[340px] min-[500px]:h-[459px]"
            >
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-4">
                  <img
                    src={testimonial.picture}
                    className="rounded-full w-16 min-[500px]:w-24 h-16 min-[500px]:h-24"
                    alt={testimonial.name}
                  />
                  <p className="text-[#475467] text-base min-[500px]:text-lg">
                    "{testimonial.reply}"
                  </p>
                  <div className="flex gap-1 my-2">
                    {[...Array(5)].map((_, idx) =>
                      idx < 5 - testimonial.rating ? (
                        <StarIcon
                          key={idx}
                          className="text-gray-300"
                          size={20}
                        />
                      ) : (
                        <Star
                          key={idx}
                          className="fill-yellow-400 text-yellow-400"
                          size={20}
                        />
                      )
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#101828] text-xl">
                    {testimonial.name}
                  </h3>
                  <span className="font-normal text-[#475467] text-lg">
                    {testimonial.job}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 px-4 w-full">
        <div className="flex justify-between items-center mx-6 w-full max-w-[1280px]">
          {/* Arrows */}
          <div className="flex gap-4 pb-1">
            <button
              className="bg-white shadow p-2 rounded-full"
              onClick={scrollPrev}
              aria-label="Previous testimonial"
            >
              <ChevronRight className="text-gray-700" />
            </button>

            <button
              className="bg-white shadow p-2 rounded-full"
              onClick={scrollNext}
              aria-label="Next testimonial"
            >
              <ChevronLeft className="text-gray-700" />
            </button>
          </div>

          {/* Pagination */}
          <div className="flex gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-[#2C3E50] w-6 lg:w-20 h-1.5 "
                    : "bg-gray-300 w-2 lg:w-12 h-1.5"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
