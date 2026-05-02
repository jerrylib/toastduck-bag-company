const Portfolio = () => {
  const products = [
    {
      image: "/images/1.png",
      title: "",
    },
    {
      image: "/images/6.png",
      title: "",
    },
    {
      image: "/images/4.png",
      title: "",
    },
    {
      image: "/images/3.png",
      title: "",
    },
    {
      image: "/images/2.png",
      title: "",
    },
    {
      image: "/images/5.png",
      title: "",
    }
  ];

  return (
    <section className="section-lg bg-default text-center" id="gallery">
      <div className="text-center mb-8">
        <h4 className="heading-decorated text-2xl md:text-3xl font-bold">Our Products</h4>
      </div>
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
