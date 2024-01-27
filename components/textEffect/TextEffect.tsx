import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
    return (
      <TypeAnimation
        sequence={[
          'Web Dev',
          1500, 
          'Full Stack Dev',
          1500,
          'DevOps Enthusiast',
          1500,
        ]}
        speed={30}
        className='4xs:text-[28px] xs:text-[2rem] font-bold text-green-400 mt-10'
        repeat={Infinity}
      />
    );
  };
  
  export default TextEffect;