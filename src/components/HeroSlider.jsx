import React, { useEffect, useRef, useState } from 'react';

const HeroSlider = () => {
  const [current, setCurrent] = useState(0)
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => {
        video.play().catch(error => {
          console.log('Video autoplay failed:', error);
        });
      });

      video.addEventListener('error', (e) => {
        console.log('Video loading error:', e);
      });
    }
  }, []);

  const tabChange = (offset) => {
    const nextCurrent = (current+offset)%3
    setCurrent(nextCurrent)
  }

  return (
    <section
      className="swiper-container swiper-slider swiper-slider_full mt-[70px] md:mt-0"
      style={{ maxHeight: '70vh' }}
    >
      <div className="swiper-wrapper">
        <div className="swiper-slide swiper-slide_video context-dark"
        style={{display: current === 0 ? 'block' : 'none', maxHeight: '70vh' }}
        >
          <div className="vide_bg relative overflow-hidden h-full max-h-[70vh]">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 -z-10 object-cover"
              poster="/video/video.jpg"
            >
              <source src="/video/video.mp4" type="video/mp4" />
              <source src="/video/video.webm" type="video/webm" />
              <source src="/video/video.ogv" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
            <div
              className="swiper-slide-caption text-center relative z-10 h-full flex items-center justify-center px-4 py-8"
              data-speed="0.5"
              data-fade="true"
            >
              <div className="container">
                <h1
                  className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide'
                >
                  Import & Export Bags & Clothing
                </h1>
                <div
                  className="text-width-2 block-centered text-sm sm:text-base md:text-lg lg:text-xl mt-4 md:mt-8 font-bold tracking-wide"
                  data-caption-animate="fadeInUpSmall"
                  data-caption-delay="200"
                >
                  Your trusted partner for international bags and clothing export worldwide.
                </div>
                <div className="group-lg group-middle">
                  <a
                    className="btn btn-black"
                    data-caption-animate="fadeInUpSmall"
                    data-caption-delay="350"
                    href="#services"
                  >
                    View Services
                  </a>
                  <a
                    className="btn btn-primary"
                    data-caption-animate="fadeInUpSmall"
                    data-caption-delay="350"
                    href="#contacts"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="swiper-slide context-dark bg-overlay-darker bg-[url(/images/slide-1.jpg)]"
          style={{display: current === 1 ? 'block' : 'none', maxHeight: '70vh', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '400px' }}
        >
          <div className="swiper-slide-caption text-start h-full flex">
            <div className="container my-auto md:mt-16 px-4">
              <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide'
              >
                Premium Bags & Clothing
                <br className="hidden md:block" />
                Export Solutions
              </h2>
              <p className="text-sm md:text-xl mt-2 md:mt-4">Leading exporter of premium bags, luggage, and fashion apparel</p>
              <a
                className="btn btn-primary mt-4 md:mt-6 text-sm md:text-base px-4 md:px-6 py-2 md:py-3 inline-flex items-center justify-center"
                data-caption-animate="fadeInLeftSmall"
                data-caption-delay="200"
                href="#"
              >
                View More
              </a>
            </div>
          </div>
        </div>
        <div
          className="swiper-slide context-dark bg-overlay-darker bg-[url(/images/slide-2.jpg)]"
          style={{display: current === 2 ? 'block' : 'none', maxHeight: '70vh', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '400px' }}
        >
          <div className="swiper-slide-caption text-center h-full flex">
            <div className="container px-4 py-8 md:py-0 my-auto">
              <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide' >
                <span>Global Commerce</span>
              </h2>
              <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide mt-2 md:mt-4'
              >
                Reliable Export Solutions Since 2015
              </h3>
              <div className="group-lg group-middle">
                <a
                  className="btn btn-primary"
                  data-caption-animate="fadeInUpSmall"
                  data-caption-delay="350"
                  href="#services"
                >
                  View Services
                </a>
                <a
                  className="btn btn-black"
                  data-caption-animate="fadeInUpSmall"
                  data-caption-delay="350"
                  href="#contacts"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev linear-icon-chevron-left hover:bg-blue-400" onClick={() => tabChange(-1)}></div>
      <div className="swiper-button-next linear-icon-chevron-right hover:bg-blue-400" onClick={() => tabChange(1)}></div>
    </section>
  );
};

export default HeroSlider;
