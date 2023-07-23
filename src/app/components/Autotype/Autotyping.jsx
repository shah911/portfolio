import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const AutoTyping = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Full-Stack', 'MERN-Stack'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    typedRef.current = new Typed('.typed-element', options);

    return () => {
      typedRef.current.destroy();
    };
  }, []);

  return <span className="typed-element"></span>;
};

export default AutoTyping;
