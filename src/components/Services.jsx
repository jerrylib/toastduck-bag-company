const Services = () => {
  const services = [
    {
      image: "/images/service-1-652x491.jpg",
      title: "Bags & Luggage Export",
      description: "We specialize in exporting a wide range of premium bags and luggage including travel bags, backpacks, handbags, and fashion accessories."
    },
    {
      image: "/images/service-2-652x491.jpg",
      title: "Fashion Clothing Export",
      description: "We export a wide variety of fashion clothing including casual wear, formal attire, sportswear, and custom apparel for global markets."
    },
    {
      image: "/images/service-3-652x491.jpg",
      title: "Global Shipping & Logistics",
      description: "End-to-end logistics support including international freight, customs clearance, and reliable delivery to over 50 countries worldwide."
    }
  ];

  return (
    <section className="section-lg bg-default" id="services">
      <div className="container px-4">
        <div className="row row-60">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-xl-4">
              <div className="thumbnail-classic">
                <a href="#">
                  <img
                    src={service.image}
                    alt={`${service.title} - Toastduck International Business`}
                    width="652"
                    height="491"
                    className="w-full h-auto object-cover"
                  />
                </a>
                <div className="caption">
                  <h5>
                    <a className="thumbnail-classic-title text-lg md:text-xl font-bold" href="#">
                      {service.title}
                    </a>
                  </h5>
                  <p className="text-sm md:text-base">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
