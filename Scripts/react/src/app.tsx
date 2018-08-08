

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import Body from './components/Body';

ReactDOM.render(
  <div>
    <Header />
    <h1>some words here</h1>
    <Section />
    <Body />
    <Footer />
  </div>,
  document.getElementById('root')
)

