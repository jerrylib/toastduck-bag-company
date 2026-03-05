const Portfolio = () => {
  const products = [
    {
      image: "/images/product1.webp",
      title: "ABB SACET1N160 series",
    },
    {
      image: "/images/product2.webp",
      title: "ABB Leakage circuit breaker",
    },
    {
      image: "/images/product3.webp",
      title: "ABB XT series",
    },
    {
      image: "/images/product4.webp",
      title: "Schneider Leakage circuit breaker",
    },
    {
      image: "/images/product5.webp",
      title: "ABB F200 series",
    },
    {
      image: "/images/product6.png",
      title: "Siemens series",
    }
  ];

  return (
    <section className="section-lg bg-default text-center" id="gallery">
      <h4 className="heading-decorated text-2xl md:text-3xl font-bold">Our Products</h4>
      <div className="container px-4">
        <div className="isotope-wrap row row-70">
          <div className="col-sm-12" data-lightgallery="group">
            <div
              className="isotope row flex"
            >
              {products.map((product, index) => (
                <div
                  key={index}
                  className="col-12 col-sm-6 col-md-4 isotope-item mt-6 md:mt-8"
                  data-filter={product.category}
                >
                  <a
                    className="img-thumbnail-variant-3"
                  >
                    <figure>
                      <img src={product.image} alt={product.title} className="w-full h-auto" />
                    </figure>
                    <div className="caption hidden">
                      <span className="icon hover-top-element linear-icon-picture"></span>
                      <ul className="list-inline-tag hover-top-element">
                        <li></li>
                      </ul>
                      <p className="heading-5 hover-top-element">
                        {product.title}
                      </p>
                      <div className="divider"></div>
                      <p className="small hover-bottom-element">
                        Professional business solutions
                      </p>
                      <span className="icon arrow-right linear-icon-plus"></span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
