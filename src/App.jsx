import { useState, useEffect } from 'react'
import Hero from './comp/Hero'
import Program from './comp/Program'
import About from './comp/About'
import Testimonials from './comp/Testimonials'
import Contact from './comp/Contact'
import LoadingPage from './comp/Loader'
import studentsImg from './assets/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking.jpg';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imagesToPreload = [studentsImg];

    let loadedImages = 0;
    const totalImages = imagesToPreload.length;

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          setTimeout(() => setLoading(false), 1000);
        }
      };
      img.onerror = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          setTimeout(() => setLoading(false), 1000);
        }
      };
    });
  }, []);

  return (
    <>
      {loading ? <LoadingPage /> : (
        <>
          <Hero />
          <Program />
          <About />
          <Testimonials />
          <Contact />
        </>
      )}
    </>
  )
}

export default App
