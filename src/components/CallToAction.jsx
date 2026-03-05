
const CallToAction = () => {
  return (
    <section className="section-sm bg-accent text-center py-8 md:py-10">
      <div className="container px-4">
        <div className="row row-30 align-items-center justify-content-center justify-content-xl-between">
          <div className="col-12 col-xl-8 text-center xl:text-start mb-4 xl:mb-0">
            <h4 className="heading-decoratedIf text-xl md:text-2xl lg:text-3xl font-bold tracking-wide">
              We are ready to help you source premium ABB & Schneider Electric
              components at competitive prices
            </h4>
          </div>
          <div className="col-12 col-xl-auto">
            <a
              className="btn btn-primary text-sm md:text-base px-6 py-3"
              data-bs-toggle="modal"
              data-bs-target="#modalContacts"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
