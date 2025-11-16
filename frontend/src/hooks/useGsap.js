import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useGsap = () => {
  useEffect(() => {
    // Fade-in and slide-up animation for sections
    gsap.utils.toArray('.fade-in-section').forEach(section => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Parallax effect for hero banner
    gsap.to('.hero-banner', {
      backgroundPosition: '50% 100%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-banner',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);
};

export default useGsap;
