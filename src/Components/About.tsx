import React, { useEffect, useRef } from 'react';
import LogoA from './logoA';
import '../Styles/About.css';
import ChefPic from '../assets/chef2.jpg';
import Footer from './Footer';
import { features } from './aboutFeatures';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function About() {
  const triggerSectionRef = useRef<HTMLElement | null>(null);
  const elementsRef = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerSection = triggerSectionRef.current;
    const elements = elementsRef.current;

    if (triggerSection) {
      elements.forEach((element, index) => {
        if (element) {
          const targetValue = features[index].headText;

          // GSAP animation with a smooth count and fade-in effect
          gsap.fromTo(
            element,
            { opacity: 0, innerText: 0 },
            {
              opacity: 1,
              duration: 3,
              ease: 'power2.out',
              innerText: targetValue,
              scrollTrigger: {
                trigger: triggerSection,
                start: 'top 60%',
                end: 'bottom 40%',
                markers: false,
                scrub: false,
                toggleActions: 'play none none none', // Play once and hold value
              },
              onUpdate: function () {
                // Ensure live update of the counter with whole numbers
                if (element) {
                  element.textContent = Math.floor(this.targets()[0].innerText).toString();
                }
              },
              onComplete: function () {
                // Ensure the final value is exactly the target value
                if (element) {
                  element.textContent = targetValue.toString();
                }
              },
            }
          );
        }
      });
    }
  }, []);

  return (
    <>
      <div className="redbox">
        <img src={ChefPic} alt="Chef" />
        <LogoA id={'logo'} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          accusantium atque nihil fuga cupiditate corrupti impedit delectus
          molestias reprehenderit soluta, eos ut harum voluptatum ullam amet
          unde libero suscipit. Earum.
        </p>
      </div>

      <section className="features" id="fSection" ref={triggerSectionRef}>
        {features.map((feature, index) => (
          <ul key={index}>
            <li>
              <h3
                className="felements"
                ref={(el) => (elementsRef.current[index] = el)}
              >
                {feature.headText}
              </h3>
              <p>{feature.subText}</p>
            </li>
          </ul>
        ))}
      </section>

      <Footer />
    </>
  );
}

export default About;
