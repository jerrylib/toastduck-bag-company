import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NewsList = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=(ABB OR "Schneider Electric" OR "SIEMENS") AND (automation OR "electrical equipment" OR "MCB" OR "circuit breaker")&language=en&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        );
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
      <section className="section-lg bg-gray-50">
        <div className="container px-4">
          <div className="text-center text-gray-500 py-10">Loading...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section-lg bg-gray-50">
        <div className="container px-4">
          <div className="text-center text-gray-400 py-10">Failed to load news</div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-lg bg-gray-50">
      <div className="container px-4">
        <div className="row hidden">
          <div className="col-sm-12 text-center mb-10">
            <h4 className="heading-decorated text-2xl md:text-3xl font-semibold text-gray-800 relative">
              News
            </h4>
          </div>
        </div>
        <div className="row row-60">
          {newsItems.map((item, index) => (
            <div key={index} className="col-12 mb-6">
              <article className="post-classic post-minimal flex flex-col md:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => handleArticleClick(item)}
                  className="post-minimal-image block w-full md:w-[200px] flex-shrink-0"
                >
                  <img
                    src={item.urlToImage}
                    alt={item.title}
                    width="200"
                    height="150"
                    className="w-full h-[150px] object-cover rounded-lg"
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
      </div>
    </section>
  );
};

export default NewsList;
