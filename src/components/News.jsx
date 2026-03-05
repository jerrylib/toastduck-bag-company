const News = () => {
  const newsItems = [
    {
      image: "/images/home-post-2-418x315.jpg",
      title: "Achieving Small Business Success",
      date: "Jan.20, 2021",
      author: "Brian Williamson",
      excerpt: "To a small business owner, success could mean a double-digit growth rate, opening a second location, taking a vacation, or simply making payroll. There is no one single answer. Or is there?"
    },
    {
      image: "/images/home-post-1-418x315.jpg",
      title: "Top 5 Ideas for Your Business",
      date: "Jan.20, 2021",
      author: "Brian Williamson",
      excerpt: "In this article, we have gathered a few ideas that will surely help entrepreneurs succeed this year. Feel free to share your own suggestions and business ideas in the comments!"
    },
    {
      image: "/images/home-post-3-418x315.jpg",
      title: "Why Business Planning is Important",
      date: "Jan.20, 2021",
      author: "Brian Williamson",
      excerpt: "A business plan is an important tool for managing and growing your business. A well-designed plan lays out a vision of growth and the steps needed to get there. A plan is also…"
    }
  ];

  return (
    <section
      className="section-lg md:py-15 bg-gray-50 min-h-[400px]"
      id="news"
    >
      <div className="container px-4">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h4 className="heading-decorated text-2xl md:text-3xl font-semibold text-gray-800 mb-5 relative">
              Recent News
            </h4>
          </div>
        </div>
        <div className="row row-60">
          {newsItems.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-6 md:mb-0">
              <article className="post-classic post-minimal h-full flex flex-col">
                <a className="post-minimal-image block mb-4" href="#">
                  <img
                    src={item.image}
                    alt={item.title}
                    width="418"
                    height="315"
                    className="w-full h-[200px] object-cover rounded-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </a>
                <div className="flex-1 flex flex-col">
                  <div className="post-classic-title">
                    <h6 className="m-0 text-lg leading-snug">
                      <a href="#" className="no-underline text-gray-800 font-semibold">
                        {item.title}
                      </a>
                    </h6>
                  </div>
                  <div className="post-meta text-sm text-gray-600 mt-2">
                    <div className="group flex flex-wrap gap-2">
                      <a href="#" className="no-underline text-sky-400">
                        <time dateTime="2021">{item.date}</time>
                      </a>
                      <span className="text-gray-400">|</span>
                      <a className="meta-author no-underline text-gray-400" href="#">
                        by {item.author}
                      </a>
                    </div>
                  </div>
                  <div className="post-classic-body flex-1 mt-3">
                    <p className="m-0 text-sm leading-relaxed text-gray-700">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
