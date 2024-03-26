"use client";
import { cn } from "@/utils/cn";
import Slider, { Settings } from "react-slick";

export default function SliderWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={cn("slider-container", settings.dots && "mb-[1.75rem]")}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
