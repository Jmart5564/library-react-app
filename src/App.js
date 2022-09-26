import BookList from './components/book/BookList';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import BookDetail from './components/book/BookDetail';
import Main from './components/Main/Main';


function App() {
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Switch>
        <Route path="/books/:id" component={BookDetail} /> 
        <Route path="/books" component={BookList} />
        <Route path="/" component={Main} />
      </Switch>
    </main>
  );
}

export default App;
