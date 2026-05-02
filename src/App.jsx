import React from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import {
  Preloader,
  Header,
  Home,
  NewsList,
  NewsDetail,
  Footer,
  Modal,
  ProductList
} from './components';
import './App.css';

function ProductsButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/products')}
      className="ui-to-top-products"
      aria-label="Go to Products"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

function App() {
  return (
    <Router>
      <Preloader />
      <div className="page w-full m-0 p-0 pt-[70px] md:pt-0">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          {/* <Route path="/products" element={<ProductList />} /> */}
        </Routes>
        <Footer />
      </div>
      <Modal />
      <div className="snackbars" id="form-output-global"></div>
      {/* <ProductsButton /> */}
    </Router>
  );
}

export default App;
