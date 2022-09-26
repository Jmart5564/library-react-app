import { Link } from 'react-router-dom';
import './Main.css';

function Main() {
  return (
    <section>
      <h2>Welcome to Dangalfs Library of Computer Science!</h2>
      <p className="main">
        Check out the amazing selection of books in our{' '}
        <Link to="/books" aria-label="link to book list">
          catalog
        </Link>
        .
      </p>
    </section>
  );
}

export default Main;