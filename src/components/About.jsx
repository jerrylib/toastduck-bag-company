const About = () => {
  const features = [
    {
      icon: "linear-icon-rocket",
      title: "ABB & Schneider Authorized",
      description: "Direct partnerships with ABB and Schneider Electric for authentic products with full warranty support."
    },
    {
      icon: "linear-icon-equalizer",
      title: "Competitive Pricing",
      description: "We offer factory-direct pricing on all electrical components, ensuring the best value for your projects."
    },
    {
      icon: "linear-icon-arrow-down-square",
      title: "Global Export Expertise",
      description: "Years of experience in international trade with streamlined customs and logistics procedures."
    },
    {
      icon: "linear-icon-feather",
      title: "Technical Support",
      description: "Professional technical consultation to help you select the right products for your specific applications."
    }
  ];

  return (
    <section className="section-lg bg-gray-lighter" id="about">
      <div className="container px-4">
        <div className="row justify-content-md-center align-items-lg-center justify-content-lg-between row-50">
          <div className="col-12 col-md-9 col-lg-6">
            <h4 className="heading-decorated text-2xl md:text-3xl font-bold">About us</h4>
            <p className="mt-4 leading-relaxed text-sm md:text-base">
              Welcome to Fujian Toast Duck International Business Co., Ltd., a professional
              exporter of ABB and Schneider Electric electrical components. We specialize in
              providing high-quality industrial automation and power distribution solutions
              to clients worldwide. With extensive experience in international trade and
              strong partnerships with leading electrical equipment manufacturers, we are
              your trusted source for ABB and Schneider products. Our commitment to quality,
              competitive pricing, and reliable delivery has made us a preferred partner
              for businesses across the globe.
            </p>
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
                  alt=""
                  width="420"
                  height="317"
                  className="w-full h-auto"
                />
              </a>
              <div className="caption">
                <h5>
                  <a className="thumbnail-classic-title text-lg md:text-xl font-bold" href="#">
                    Who we are
                  </a>
                </h5>
                <p className="leading-relaxed text-sm md:text-base">
                  We are a professional trading company specializing in ABB and Schneider
                  Electric electrical components export, serving industrial clients worldwide.
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
