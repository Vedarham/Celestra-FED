import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(options = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animation = gsap.from(element, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none", // Changed to prevent reversal
        ...options
      }
    });

    return () => {
      animation.kill();
    };
  }, [options]);

  return elementRef;
}

export function useStaggerAnimation(options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.children;
    
    const animation = gsap.from(elements, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none", // Changed to prevent reversal
        ...options
      }
    });

    return () => {
      animation.kill();
    };
  }, [options]);

  return containerRef;
}

export function useSplitTextAnimation(options = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const text = element.textContent;
    element.textContent = '';
    const spans = text.split('').map(char => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      return span;
    });
    spans.forEach(span => element.appendChild(span));

    const animation = gsap.from(spans, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.02,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none", // Changed to prevent reversal
        ...options
      }
    });

    return () => {
      animation.kill();
    };
  }, [options]);

  return elementRef;
}

export function useCountUpAnimation(endValue, duration = 2) {
  const elementRef = useRef(null);
  const startValue = 0;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const numericValue = parseInt(endValue.replace(/\D/g, ''));
    
    const animation = gsap.to({}, {
      duration: duration,
      value: numericValue,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      onUpdate: function() {
        const currentValue = Math.round(this.targets()[0].value);
        element.textContent = currentValue.toLocaleString() + (endValue.includes('+') ? '+' : '');
      }
    });

    return () => {
      animation.kill();
    };
  }, [endValue, duration]);

  return elementRef;
}