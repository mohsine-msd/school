import React, { useEffect } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

const Testimonials = () => {
  useEffect(() => {
    const keenSlider = new KeenSlider(
      '#keen-slider',
      {
        loop: true,
        slides: {
          origin: 'center',
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
              perView: 2.5,
              spacing: 32,
            },
          },
        },
      }
    );

    const keenSliderPrevious = document.getElementById('keen-slider-previous');
    const keenSliderNext = document.getElementById('keen-slider-next');

    if (keenSliderPrevious && keenSliderNext) {
      keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
      keenSliderNext.addEventListener('click', () => keenSlider.next());
    }

    return () => {
      keenSlider.destroy();
    };
  }, []);

  return (
    <section >
      <div className="mx-auto  px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8 mx-auto">
          <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our students
          </h2>

          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous"
              className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 rtl:rotate-180"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              id="keen-slider-next"
              className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              <svg
                className="size-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
          <div id="keen-slider" className="keen-slider">
            <div className="keen-slider__slide">
              <blockquote
                className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
              >
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {/* Add your star icons here */}
                  </div>

                  <div className="mt-4">
                    <p className="text-2xl font-bold text-rose-600 sm:text-3xl">August 2024</p>
                    <p className="mt-4 leading-relaxed text-gray-700">
                      "The school has provided me with an outstanding education. The faculty is incredibly supportive and dedicated to helping students succeed. The hands-on projects and modern facilities have greatly enhanced my learning experience."
                    </p>
                  </div>
                </div>

                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                  &mdash; Emily Davis
                </footer>
              </blockquote>
            </div>

            <div className="keen-slider__slide">
              <blockquote
                className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
              >
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {/* Add your star icons here */}
                  </div>

                  <div className="mt-4">
                    <p className="text-2xl font-bold text-rose-600 sm:text-3xl">July 2024</p>
                    <p className="mt-4 leading-relaxed text-gray-700">
                      "I’ve had a great experience at this school. The teachers are passionate about their subjects and always willing to help. The school's commitment to student development is evident in every aspect."
                    </p>
                  </div>
                </div>

                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                  &mdash; John Smith
                </footer>
              </blockquote>
            </div>

            <div className="keen-slider__slide">
              <blockquote
                className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
              >
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {/* Add your star icons here */}
                  </div>

                  <div className="mt-4">
                    <p className="text-2xl font-bold text-rose-600 sm:text-3xl">June 2024</p>
                    <p className="mt-4 leading-relaxed text-gray-700">
                      "The curriculum is well-structured and engaging. I appreciate the school's efforts to integrate real-world applications into the coursework. The community here is welcoming and supportive."
                    </p>
                  </div>
                </div>

                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                  &mdash; Michael Brown
                </footer>
              </blockquote>
            </div>

            <div className="keen-slider__slide">
              <blockquote
                className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
              >
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {/* Add your star icons here */}
                  </div>

                  <div className="mt-4">
                    <p className="text-2xl font-bold text-rose-600 sm:text-3xl">May 2024</p>
                    <p className="mt-4 leading-relaxed text-gray-700">
                      "Attending this school has been a transformative experience. The teachers are knowledgeable and approachable. The extracurricular activities and facilities are top-notch, providing a well-rounded education."
                    </p>
                  </div>
                </div>

                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                  &mdash; Olivia Johnson
                </footer>
              </blockquote>
            </div>

            <div className="keen-slider__slide">
              <blockquote
                className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
              >
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {/* Add your star icons here */}
                  </div>

                  <div className="mt-4">
                    <p className="text-2xl font-bold text-rose-600 sm:text-3xl">April 2024</p>
                    <p className="mt-4 leading-relaxed text-gray-700">
                      "This school has exceeded my expectations in every way. The academic rigor and supportive environment have helped me excel. The diverse range of programs and activities has enriched my overall experience."
                    </p>
                  </div>
                </div>

                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                  &mdash; Jacob Lee
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
