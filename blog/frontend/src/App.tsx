import React, {useEffect, useState} from 'react';
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import About from './components/About/About';
import BlogList from './components/BlogList/BlogList';
import Contact from './components/Contact/Contact';
import NavigateBar from "./components/NavigateBar/NavigateBar";
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
    <>
      <Routes>
        <Route path={routes.Home} element={<NavigateBar message={response} />}>
          <Route path={routes.About} element={<About />} />
          <Route path={routes.Contact} element={<Contact />} />
          <Route path={routes.Create} element={<NewArticle />} />
          <Route path={routes.Account} element={<UserAccount />} />
          <Route path={routes.Blogs} element={<BlogList />} />
          <Route path={routes.Blogs + "/page/:page_number"} element={<BlogList />} />
          <Route path={routes.Post + "/:post_uid"} element={<Post/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;