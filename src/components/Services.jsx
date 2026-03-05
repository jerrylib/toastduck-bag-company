const Services = () => {
  const services = [
    {
      image: "/images/service-1-652x491.jpg",
      title: "ABB Products Export",
      description: "We specialize in exporting a wide range of ABB electrical components including circuit breakers, relays, contactors, and automation solutions."
    },
    {
      image: "/images/service-2-652x491.jpg",
      title: "Schneider Electric Products",
      description: "Authorized exporter of Schneider Electric products including power distribution equipment, industrial automation, and building management systems."
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
                    alt=""
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
