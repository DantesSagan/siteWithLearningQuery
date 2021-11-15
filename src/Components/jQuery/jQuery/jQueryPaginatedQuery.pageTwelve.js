import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useState } from 'react';

import { useQuery } from 'react-query';
import axios from 'axios';

const fetchColors = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

export default function QueryPaginatedQuery() {
  const [pageNumber, setPageNumber] = useState(1);
  const { isError, error, isLoading, isFetching, data } = useQuery(
    ['colors', pageNumber],
    () => fetchColors(pageNumber),
    // if click on the next page prev data is still present
    // when the new data is being fetched in the background
    // One the data is fetched hold data is swapped out and new data is swapped in
    // If u have 100-200 rows of data just shifting it's very bad for fetching this array of rows data
    // 
    {
      keepPreviousData: true,
    }
  );

  const Component = () => {
    const codeString = `
import { useState } from 'react';

import { useQuery } from 'react-query';
import axios from 'axios';

const fetchColors = (pageNumber) => {
  return axios.get('http://localhost:4000/colors?_limit=2&_page=$/{pageNumber}'');
};

export default function QueryPaginatedQuery() {
  const [pageNumber, setPageNumber] = useState(1);
  const { isError, error, isLoading, isFetching, data } = useQuery(
    ['colors', pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true,
    }
  );
    if (isLoading || isFetching) {
    return <h2 className='text-center text-4xl p-4'>Loading...</h2>;
  }
  if (isError) {
    return <h2 className='text-center text-4xl p-4'>{error.message}</h2>;
  }

  const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };

  return (
    <div>
      <h2 className='text-center text-4xl p-4'>PaginatedQuery</h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work jQuery <br />
        with declare limit of visibile objects by id on a page and switching
        between this pages!
        <br />
        Thits is example how work axios with jQuery with axios and
        useQueryClient and useQuery!
      </h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-center text-3xl p-4'>
        And{' '}
        <i
          onClick={ScrollDown}
          className='italic 
          py-1 px-2
          text-white rounded-lg shadow-md
          bg-blue-500 
          hover:bg-blue-700 focus:outline-none '
          style={{ cursor: 'pointer' }}
        >
          example
        </i>{' '}
        below how it code works!
      </h2>
      <div className='text-center text-2xl rounded-lg p-8 border-4 border-blue-700 shadow-inner '>
        <h2 className='text-center text-4xl p-4 underline'>
          PaginatedQueryColors
        </h2>
        {data?.data.map((colors) => {
          return (
            <div key={colors.id}>
              <h2 className='text-3xl'>
                {' '}
                {colors.id} = {colors.label}
              </h2>
            </div>
          );
        })}
      </div>
      <button
        className='p-4 m-2 bg-red-600 hover:bg-red-800 rounded-lg text-white disabled:opacity-40 text-2xl'
        onClick={() => setPageNumber((page) => page - 1)}
        disabled={pageNumber === 1}
      >
        Previous page
      </button>
      <button
        className='p-4 m-2 bg-green-600 hover:bg-green-800 rounded-lg text-white disabled:opacity-40 text-2xl'
        onClick={() => setPageNumber((page) => page + 1)}
        disabled={pageNumber === 4}
      >
        Next page
      </button>
      <div className='p-4 text-4xl font-bold'>- {pageNumber} - </div>
      {isFetching && <div className='text-center text-4xl p-4'>Loading...</div>}
    </div>
  );
}

    `;
    return (
      <SyntaxHighlighter language='javascript' style={dark}>
        {codeString}
      </SyntaxHighlighter>
    );
  };

  if (isLoading || isFetching) {
    return <h2 className='text-center text-4xl p-4'>Loading...</h2>;
  }
  if (isError) {
    return <h2 className='text-center text-4xl p-4'>{error.message}</h2>;
  }

  const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };

  return (
    <div>
      <h2 className='text-center text-4xl p-4'>PaginatedQuery</h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work jQuery <br />
        with declare limit of visibile objects by id on a page and switching
        between this pages!
        <br />
        Thits is example how work axios with jQuery with axios and
        useQueryClient and useQuery!
      </h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-center text-3xl p-4'>
        And{' '}
        <i
          onClick={ScrollDown}
          className='italic 
          py-1 px-2
          text-white rounded-lg shadow-md
          bg-blue-500 
          hover:bg-blue-700 focus:outline-none '
          style={{ cursor: 'pointer' }}
        >
          example
        </i>{' '}
        below how it code works!
      </h2>
      <div className='text-center text-2xl rounded-lg p-8 border-4 border-blue-700 shadow-inner '>
        <h2 className='text-center text-4xl p-4 underline'>
          PaginatedQueryColors
        </h2>
        {data?.data.map((colors) => {
          return (
            <div key={colors.id}>
              <h2 className='text-3xl'>
                {' '}
                {colors.id} = {colors.label}
              </h2>
            </div>
          );
        })}
      </div>
      <button
        className='p-4 m-2 bg-red-600 hover:bg-red-800 rounded-lg text-white disabled:opacity-40 text-2xl'
        onClick={() => setPageNumber((page) => page - 1)}
        disabled={pageNumber === 1}
      >
        Previous page
      </button>
      <button
        className='p-4 m-2 bg-green-600 hover:bg-green-800 rounded-lg text-white disabled:opacity-40 text-2xl'
        onClick={() => setPageNumber((page) => page + 1)}
        disabled={pageNumber === 4}
      >
        Next page
      </button>
      <div className='p-4 text-4xl font-bold'>- {pageNumber} - </div>
      {isFetching && <div className='text-center text-4xl p-4'>Loading...</div>}
      <Component />
    </div>
  );
}
