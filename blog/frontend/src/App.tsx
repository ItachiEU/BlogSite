import React, {useEffect, useState} from 'react';
import { Route, Routes } from "react-router-dom";

import About from './components/About/About';
import BlogList from './components/BlogList/BlogList';
import Contact from './components/Contact/Contact';
import NavigateBar from "./components/NavigateBar";
import NewArticle from './components/NewArticle/NewArticle';
import UserAccount from './components/UserAccount/UserAccount';

function App() {

  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch("/app/test").then(result => result.text()).then(text => setResponse(text));
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
//<Route path="balance" element={<Balance />} />
//<Route path="income" element={<IncomeList />} />
//<Route path="expense" element={<ExpenseList />} />