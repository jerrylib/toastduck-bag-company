import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          <Route path="/products" element={<ProductList />} />
        </Routes>
        <Footer />
      </div>
      <Modal />
      <div className="snackbars" id="form-output-global"></div>
    </Router>
  );
}

export default App;
