import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://company.toastduck.com/news/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNewsItems(data.articles || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleArticleClick = (article) => {
    navigate(`/news/${encodeURIComponent(article.url)}`, { state: { article } });
  };

  if (loading) {
    return (
      <section className="section-lg md:py-15 bg-gray-50 min-h-[400px]" id="news">
        <div className="container px-4">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h4 className="heading-decorated text-2xl md:text-3xl font-semibold text-gray-800 mb-5 relative">
                Recent News
              </h4>
            </div>
          </div>
          <div className="text-center text-gray-500 py-10">Loading...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return null;
  }

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
          {newsItems.slice(0, 3).map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-6 md:mb-0">
              <article className="post-classic post-minimal h-full flex flex-col">
                <button
                  type="button"
                  onClick={() => handleArticleClick(item)}
                  className="post-minimal-image block mb-4 text-left w-full"
                >
                  <img
                    src={item.urlToImage}
                    alt={item.title}
                    width="418"
                    height="315"
                    className="w-full h-[200px] object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = '/images/android-chrome-192x192.png';
                    }}
                  />
                </button>
                <div className="flex-1 flex flex-col">
                  <div className="post-classic-title">
                    <h6 className="m-0 text-lg leading-snug">
                      <button
                        type="button"
                        onClick={() => handleArticleClick(item)}
                        className="no-underline text-gray-800 font-semibold text-left bg-transparent border-0 p-0 cursor-pointer"
                      >
                        {item.title}
                      </button>
                    </h6>
                  </div>
                  <div className="post-meta text-sm text-gray-600 mt-2">
                    <div className="group flex flex-wrap gap-2">
                      <span className="no-underline text-sky-400">
                        <time>{item.publishedAt?.split('T')[0]}</time>
                      </span>
                      <span className="text-gray-400">|</span>
                      <span className="meta-author no-underline text-gray-400">
                        by {item.author || item.source?.name}
                      </span>
                    </div>
                  </div>
                  <div className="post-classic-body flex-1 mt-3">
                    <p className="m-0 text-sm leading-relaxed text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
        <div className="row mt-8">
          <div className="col-12 text-center">
            <Link
              to="/news"
              className="inline-block px-6 py-3 bg-sky-500 text-white rounded hover:bg-sky-600 transition-colors"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
