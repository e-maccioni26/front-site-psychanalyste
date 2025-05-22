"use client";

import { TypeAnimation } from 'react-type-animation';

const TypeAnimationComponent = () => {
  return (
    <div className="text-center font-black my-8 px-6 p-10 mb-20 bg-[#F5EBDD]">
      <TypeAnimation
        sequence={[
          'La parole libère ce que le silence enferme, et ouvre la voie vers une transformation intérieure.',
          1000,
        ]}
        wrapper="h2"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block', fontFamily: 'var(--font-title)', color: '#2E3A59' }}
        repeat={0}
      />
    </div>
  );
};

export default TypeAnimationComponent;