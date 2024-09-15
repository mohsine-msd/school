import React from "react";
import about from '../assets/about.png'
import play from '../assets/play-icon.png'

function About() {
  return (
    <div className="grid grid-col-1 md:grid-cols-3 w-[77%] mx-auto gap-28 mt-7 translate-x-11 " id="About us">
  <div className="relative col-span-1 flex items-center justify-center">
    <img src={about} alt="about" className="w-full h-auto rounded-md" />
    
  </div>
  

  <div className="col-span-1 md:col-span-2 w-[90%] md:w-[85%] flex flex-col gap-5">
    <p className="text-2xl md:text-left text-center">About Us</p>
    <p className="text-xl md:text-left text-center">Nurturing Tomorrow's Leaders Today</p>
    <p className="md:text-left text-center w-full" >Embark on an enriching educational journey with our school's innovative programs, designed to inspire and equip students for success. Our forward-thinking curriculum integrates cutting-edge methodologies, hands-on experiences, and personalized support to prepare students for excellence in the evolving world of education.

    At our school, we emphasize a commitment to creativity, practical learning, and individual growth. Our diverse offerings ensure that whether you aim to be a dynamic educator, visionary administrator, dedicated counselor, or transformative educational leader, you will find the ideal path to reach your aspirations.

    Join us in shaping the future of education, where your potential meets opportunity, and together, we nurture the leaders of tomorrow.</p>
  </div>
</div>
  );
}

export default About;
