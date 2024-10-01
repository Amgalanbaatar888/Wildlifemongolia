"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../header/Logo";

interface Slide {
  id: number;
  image: string;
  caption: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/images/leopard.jpg",
    caption: "Slide 1",
    title: "Leopard in the Wild",
    description: "Explore the beauty and power of the leopard.",
  },
  {
    id: 2,
    image: "/images/fox.jpg",
    caption: "Slide 2",
    title: "Curious Fox",
    description: "Discover the cunning nature of the fox.",
  },
  {
    id: 3,
    image: "/images/horse.jpg",
    caption: "Slide 3",
    title: "Majestic Horse",
    description: "Witness the grace and strength of the horse.",
  },
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.caption}
              fill
              quality={100}
              priority={index === currentSlide}
              onLoad={() => setIsLoading(false)}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
              <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-2 shadow-text">
                {slide.title}
              </h3>
              <p className="text-2xl font-medium text-white mb-4">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <Logo />
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
    </div>
  );
};

export default HeroSlider;
