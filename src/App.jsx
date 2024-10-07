import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Content from "./components/home/Content";

function App() {
  return (
    <Router>
      <Layout>
          <div className="mt-2">
            <Routes>
              <Route path="/" element={<Content />} />
              {/* <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} /> */}
            </Routes>
          </div>
          </Layout>
      </Router>
  );
}

export default App;
