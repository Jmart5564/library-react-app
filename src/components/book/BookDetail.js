import Book from './Book';
import { useBookDetail } from '../../hooks/useBookDetail';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getBookById } from '../../services/books';

function BookDetail() {
  const { id } = useParams();
  const { book, setBook, loading, error } = useBookDetail(id);

  useEffect(() => {
    getBookById(id).then(({ data }) => setBook(data));
  }, [id, setBook]);

  if (error)
    return (
      <>
        <h1>Something went wrong :(</h1> <h2>{error}</h2>
      </>
    );

  if (loading) return <h3>Loading book...</h3>;

  return <Book book={book} showDetail />;
}

export default BookDetail;
