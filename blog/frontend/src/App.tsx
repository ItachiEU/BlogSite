import React, {useEffect, useState} from 'react';
import { Route, Routes } from "react-router-dom";

import About from './components/About/About';
import BlogList from './components/BlogList/BlogList';
import Contact from './components/Contact/Contact';
import NavigateBar from "./components/NavigateBar";
import NewArticle from './components/NewArticle/NewArticle';
import UserAccount from './components/UserAccount/UserAccount';
import Post from "./components/Post/Post";

function App() {

  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch("/app/test").then(result => result.text()).then((text) => {
      setResponse(text);
      console.log(text);
      })
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<NavigateBar message={response} />}>
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Create!" element={<NewArticle />} />
          <Route path="Account" element={<UserAccount />} />
          <Route path="Blogs" element={<BlogList />} />
          <Route path="Post/:post_uid" element={<Post/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;