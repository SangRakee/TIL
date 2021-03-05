import React from 'react';
import { Item } from 'semantic-ui-react';
import BookItem from './BookItem';

function BookList(props) {
    const {books, bookSelect} = props;
    const listItems = books.map(book =>{
       return( 
        <BookItem key={book.ISBN} book={book} bookSelect={bookSelect}/>
       )
    });
    return (
        <Item.Group>
            {listItems}
        </Item.Group> 
    );
}

export default BookList;