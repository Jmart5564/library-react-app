import BookList from './components/book/BookList';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookDetail from './components/book/BookDetail';
import Main from './components/Main/Main';


function App() {
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Router>
        <Switch>
          <Route exact path="/books">
            <BookList />
          </Route>
          <Route exact path="/books/:id">
            <BookDetail />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
