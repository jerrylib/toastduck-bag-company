const About = () => {
  const features = [
    {
      icon: "linear-icon-rocket",
      title: "Global Business Expertise",
      "description": "Years of experience in international business with streamlined customs and logistics procedures, serving clients worldwide."
    },
    {
      icon: "linear-icon-equalizer",
      title: "Competitive Pricing",
      "description": "We offer factory-direct pricing on all products, ensuring the best value for your business needs."
    },
    {
      icon: "linear-icon-arrow-down-square",
      title: "Quality Assurance",
      "description": "Strict quality control processes to ensure all products meet international standards."
    },
    {
      icon: "linear-icon-feather",
      title: "Professional Support",
      "description": "Dedicated customer service team providing professional consultation and after-sales support."
    }
  ];

  return (
    <section className="section-lg bg-gray-lighter" id="about">
      <div className="container px-4">
         {/* H1: Company name + value proposition */}
        <h1 className="heading-decorated text-2xl md:text-3xl font-bold mb-4" style={{display: 'none'}}>
          Toastduck International Business Co., Limited - Professional Import & Export Services
        </h1>
        
        <div className="row justify-content-md-center align-items-lg-center justify-content-lg-between row-50">
          <div className="col-12 col-md-9 col-lg-6">
            {/* H2: Company Introduction */}
            <h2 className="heading-decorated text-2xl md:text-3xl font-bold">About Us</h2>
            <p className="mt-4 leading-relaxed text-sm md:text-base">
              Welcome to Toastduck International Business Co., Limited, a professional
              international business enterprise established in Hong Kong. We specialize in import and export
              services covering e-commerce, electronic components, hardware, clothing and
              footwear, bags and luggage, and sports equipment. With extensive experience
              in global commerce and a strong network of suppliers and clients worldwide,
              we are your trusted partner for quality products and reliable service. Our
              commitment to quality, competitive pricing, and reliable delivery has made
              us a preferred partner for businesses across the globe.
            </p>

            {/* H2: Core Business */}
            <h3 className="text-xl font-bold mt-6 mb-3">Our Business Scope</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>E-commerce Business</li>
              <li>Electronic Components Export</li>
              <li>Hardware Products</li>
              <li>Clothing, Footwear & Accessories</li>
              <li>Bags and Luggage</li>
              <li>Sports Equipment</li>
            </ul>

            {/* H2: Why Choose Us */}
            <h3 className="text-xl font-bold mt-6 mb-3">Why Choose Us</h3>
            <div className="row row-30">
              {features.map((feature, index) => (
                <div key={index} className="col-12 col-sm-6">
                  <article className="blurb blurb-minimal">
                    <div className="unit flex-row unit-spacing-md">
                      <div className="unit-left">
                        <div className="blurb-minimal__icon">
                          <span className={`icon ${feature.icon}`}></span>
                        </div>
                      </div>
                      <div className="unit-body">
                        <p className="blurb__title heading-6">
                          <a href="#">{feature.title}</a>
                        </p>
                        <p className="text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-5 mt-6 md:mt-0">
            <div className="thumbnail-classic">
              <a href="#">
                <img
                  src="/images/blog-image-1-420x317.jpg"
                  alt="Toastduck International Business Team - Our Professional Staff"
                  width="420"
                  height="317"
                  className="w-full h-auto"
                />
              </a>
              <div className="caption">
                <h3>
                  <a className="thumbnail-classic-title text-lg md:text-xl font-bold" href="#">
                    Who We Are
                  </a>
                </h3>
                <p className="leading-relaxed text-sm md:text-base">
                  We are a professional international business enterprise based in Hong Kong, specializing
                  in import and export of various consumer and industrial products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
