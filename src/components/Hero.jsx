import { motion } from "framer-motion";
import profilePic from "../assets/company/WhatsApp Image 2025-03-31 at 6.28.34 PM.jpeg"; // Ensure file name is clean
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col lg:flex-row items-center justify-center gap-10 px-6 lg:px-16">
      
      {/* Left Side: Profile & Text */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className="text-[#915EFF]">Rishi</span>
        </h1>

        {/* Large Profile Image */}
      {/* Large Profile Image */}
{/* Large Profile Image */}
{/* Large Profile Image */}
<div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 border-4 border-[#915EFF] shadow-lg overflow-hidden">
  <img 
    src={profilePic} 
    alt="Rishi Shah" 
    className="object-cover w-full h-full lg:object-top object-[center_top]" 
  />
</div>



        <p className={`${styles.heroSubText} mt-4 text-white-100`}>
          I am a Full Stack Web Developer, <br className="sm:block hidden" />
          building dynamic and engaging web applications.
        </p>
      </div>

      {/* Right Side: Responsive Computer Model */}
      <div className="w-full flex justify-center lg:w-1/2 lg:flex lg:justify-start mt-6 lg:mt-0">
  <div className="w-[450px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] lg:ml-[-40px]">
    <ComputersCanvas />
  </div>
</div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
