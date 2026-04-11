import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

const NewsDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [article, setArticle] = useState(location.state?.article || null);
  const [loading, setLoading] = useState(!article);

  useEffect(() => {
    if (!article && id) {
      setLoading(false);
    }
  }, [article, id]);

  useEffect(() => {
    if (article) {
      const title = article.title ? `${article.title} | Toastduck` : 'News Detail | Toastduck';
      const description = article.description || 'Read the latest industry news on ABB, Schneider Electric, and electrical equipment.';
      const image = article.urlToImage || '';

      document.title = title;
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
      document.querySelector('meta[property="og:url"]')?.setAttribute('content', window.location.href);
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
      document.querySelector('meta[property="og:image"]')?.setAttribute('content', image);
      document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
      document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
      document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', image);
    }
  }, [article]);

  if (loading) {
    return (
      <section className="section-lg bg-gray-50 min-h-[400px]">
        <div className="container px-4">
          <div className="text-center text-gray-500 py-10">Loading...</div>
        </div>
      </section>
    );
  }

  if (!article) {
    return (
      <section className="section-lg bg-gray-50 min-h-[400px]">
        <div className="container px-4">
          <div className="text-center text-gray-400 py-10">Article not found</div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-lg bg-gray-50">
      <div className="container px-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <Link to="/news" className="inline-block mb-4 text-sky-500 hover:text-sky-600 no-underline">
              &larr; Back to News
            </Link>
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-auto max-h-[400px] object-cover rounded-lg mb-6"
              />
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {article.title}
            </h1>
            <div className="post-meta text-sm text-gray-600 mb-6">
              <div className="group flex flex-wrap gap-2">
                <span className="text-sky-500">
                  <time>{article.publishedAt?.split('T')[0]}</time>
                </span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-400">
                  by {article.author || article.source?.name}
                </span>
              </div>
            </div>
            <div className="post-classic-body">
              <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
                {article.content || article.description}
              </p>
            </div>
            {article.url && (
              <div className="mt-6">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-sky-500 text-white rounded hover:bg-sky-600 transition-colors"
                >
                  Read Full Article
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetail;
