import  { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const companies = [
    { image: "/images/company-1-126x102.png", width: "126", height: "102", name: "Company 1" },
    { image: "/images/company-2-134x102.png", width: "134", height: "102", name: "Company 2" },
    { image: "/images/company-3-132x102.png", width: "132", height: "102", name: "Company 3" },
    { image: "/images/company-4-126x102.png", width: "126", height: "102", name: "Company 4" },
    { image: "/images/company-5-138x102.png", width: "138", height: "102", name: "Company 5" },
    { image: "/images/company-6-143x102.png", width: "143", height: "102", name: "Company 6" }
  ];

  const testimonials = [
    {
      text: "My cooperation with your team helped me understand that you really care about your clients - it has already been proven by a lot of positive reviews - and that's why I chose you. Your reliable solutions helped me improve my business plan in no time!",
      author: "Jane Smith",
      position: "Customer",
      image: "/images/testimonials-1-120x120.jpg"
    },
    {
      text: "Working with Toast Duck has been an exceptional experience. Their professional approach and attention to detail helped us achieve our business goals faster than we expected. Highly recommended!",
      author: "Michael Johnson",
      position: "CEO, Tech Solutions",
      image: "/images/testimonials-2-120x120.jpg"
    },
    {
      text: "The quality of products and services provided by Toast Duck is outstanding. They have been our trusted partner for over two years, and we couldn't be happier with the results.",
      author: "Sarah Wilson",
      position: "Operations Manager",
      image: "/images/testimonials-3-120x120.jpg"
    }
  ];

  // 自动轮播功能
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 每5秒切换一次

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="section-lg bg-default text-center" id="clients">
      <div className="container px-4">
        <h4 className="heading-decorated text-2xl md:text-3xl font-bold">WHAT PEOPLE SAY</h4>
        <div className="row row-50">
          <div className="col-12 col-lg-5 mb-8 lg:mb-0">
            <div className="row row-30">
              {companies.map((company, index) => (
                <div key={index} className="col-6 col-sm-4 mb-4">
                  <figure className="box-icon-image text-center p-3 md:p-5 rounded-lg transition-all duration-300 cursor-pointer min-h-[100px] md:min-h-[120px] flex items-center justify-center hover:-translate-y-1">
                    <a href="#" className="no-underline">
                      <img
                        src={company.image}
                        alt={company.name}
                        width={company.width}
                        height={company.height}
                        className="max-w-full h-auto w-full object-contain grayscale transition-all duration-300 hover:grayscale-0"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <div className="hidden text-gray-600 text-sm font-medium">
                        {company.name}
                      </div>
                    </a>
                  </figure>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-7 text-start">
            <div className="testimonial-carousel relative min-h-[280px] md:min-h-[300px]">
              {/* 当前显示的评价 */}
              <div className="testimonial-item opacity-100 transition-opacity duration-500 p-4 md:p-5">
                <div className="quote-classic">
                  <div className="quote-classic__main">
                    <svg
                      className="quote-classic__mark fill-blue-400 mb-4 md:mb-5 w-6 h-6 md:w-auto md:h-auto"
                      version="1.1"
                      baseProfile="tiny"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30.234px"
                      height="23.484px"
                      viewBox="0 0 30.234 23.484"
                      xmlSpace="preserve"
                    >
                      <g>
                        <path d="M12.129,0v1.723c-2.438,0.891-4.348,2.291-5.73,4.201c-1.383,1.911-2.074,3.897-2.074,5.959              c0,0.445,0.07,0.773,0.211,0.984c0.093,0.141,0.199,0.211,0.316,0.211c0.117,0,0.293-0.082,0.527-0.246              c0.75-0.539,1.699-0.809,2.848-0.809c1.336,0,2.519,0.545,3.551,1.635c1.031,1.09,1.547,2.385,1.547,3.885              c0,1.57-0.592,2.953-1.775,4.148c-1.184,1.195-2.619,1.793-4.307,1.793c-1.969,0-3.668-0.809-5.098-2.426              C0.715,19.441,0,17.274,0,14.555c0-3.164,0.972-6,2.918-8.508C4.863,3.539,7.933,1.524,12.129,0z M29.039,0v1.723              c-2.438,0.891-4.348,2.291-5.73,4.201c-1.383,1.911-2.074,3.897-2.074,5.959c0,0.445,0.07,0.773,0.211,0.984              c0.094,0.141,0.199,0.211,0.316,0.211s0.293-0.082,0.527-0.246c0.75-0.539,1.699-0.809,2.848-0.809c1.336,0,2.52,0.545,3.551,1.635              s1.547,2.385,1.547,3.885c0,1.57-0.592,2.953-1.775,4.148s-2.619,1.793-4.307,1.793c-1.969,0-3.668-0.809-5.098-2.426              s-2.145-3.785-2.145-6.504c0-3.164,0.973-6,2.918-8.508C21.773,3.539,24.844,1.524,29.039,0z"></path>
                      </g>
                    </svg>
                    <div className="quote-classic__text">
                      <p className="q text-base md:text-lg leading-relaxed italic mb-4 md:mb-8 text-gray-700">
                        "{testimonials[currentTestimonial].text}"
                      </p>
                    </div>
                  </div>
                  <div className="quote-classic__caption flex items-center gap-3 md:gap-4">
                    <div className="quote-classic__image quote-classic__caption-aside">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].author}
                        width="60"
                        height="60"
                        className="rounded-full object-cover border-3 border-blue-600 w-12 h-12 md:w-16 md:h-16"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="quote-classic__caption-main">
                      <p className="quote-classic__cite font-bold text-sm md:text-base m-0 mb-1 text-gray-800">
                        {testimonials[currentTestimonial].author}
                      </p>
                      <p className="quote-classic__small text-gray-600 text-xs md:text-sm m-0">
                        {testimonials[currentTestimonial].position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 导航点 */}
              <div className="testimonial-dots flex justify-center gap-2 mt-6 md:mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full border-none cursor-pointer transition-colors duration-300 ${
                      index === currentTestimonial ? 'bg-blue-400' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* 导航箭头 - 移动端隐藏 */}
              <button
                onClick={() => setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)}
                className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-blue-400 bg-opacity-80 text-white border-none rounded-full w-10 h-10 cursor-pointer text-lg items-center justify-center"
                aria-label="Previous testimonial"
              >
                ‹
              </button>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-blue-400 bg-opacity-80 text-white border-none rounded-full w-10 h-10 cursor-pointer text-lg items-center justify-center"
                aria-label="Next testimonial"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
