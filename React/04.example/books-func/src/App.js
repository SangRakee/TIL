import { Grid } from 'semantic-ui-react';

import BookDetail from './component/BookDetail';
import BookList from './component/BookList';

import Books from './Books';
import { useState } from 'react';

function App() {
  const [books, setBooks] = useState(Books);
  const [book, setBook] = useState(Books[0]);

  return (
   
    <Grid columns={2}>
    <Grid.Row>
      <Grid.Column>
        <BookList books={books} bookSelect={(selectBook)=>{setBook(selectBook); }}/>
      </Grid.Column>
      <Grid.Column>
        <BookDetail book={book} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  );
}

export default App;
