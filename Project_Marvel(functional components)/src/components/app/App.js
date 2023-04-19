import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";

import { MainPage, ComicsPage, Page404 } from "../pages";
import SingleComicPage from "../pages/SingleComicPage";

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/comics">
              <ComicsPage />
              <Route exact path="/comics/:comicId">
                <SingleComicPage />
              </Route>
            </Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
