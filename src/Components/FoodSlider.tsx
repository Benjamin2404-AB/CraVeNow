import { useEffect, useState, useRef } from 'react';
import '../Styles/FoodSlider.css';
import { FSliderContent } from './FSliderContent';
import PButton from './PButton';
import { gsap } from 'gsap';

function FoodSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const sliderTextRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FSliderContent.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // GSAP Animation on Slide Change
    useEffect(() => {
      if (sliderRef.current) {
        gsap.fromTo(
          sliderRef.current,
          { autoAlpha: 0, x: 50 },
          { autoAlpha: 1, x: 0, duration: 1, ease: 'power2.out' }
        );
      }
    }, [currentSlide]);

  useEffect(() => {
    if (sliderTextRef.current) {
      gsap.fromTo(
        sliderTextRef.current,
        { autoAlpha: 0, x: -50 },
        { autoAlpha: 1, x: 0, duration: 1, ease: 'power2.out' }
      );
    }
  }, [currentSlide]);

  return (
    <div className="slider" >
      <h2 id="fheadline" ref={sliderTextRef}>{FSliderContent[currentSlide].Headline}</h2>
      <p id="fsubtext">{FSliderContent[currentSlide].Subtext}</p>
      <img src={FSliderContent[currentSlide].img} id="fimg" ref={sliderRef} alt="Food Item" />
      <PButton func={'emp'} name="Order" id="orderButton" />

      {/* Slide Switcher */}
      <div className="switcher">
        {FSliderContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`slideCircle ${
              index === currentSlide ? 'curr' : 'ncurr'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default FoodSlider;
