import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline className='d-flex ms-5 '>
      <Form.Control
        type='text'
        name='q'
        placeholder='Search Gpu...'
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button type='submit'>Search</Button>
    </Form>
  );
};

export default SearchBox;
