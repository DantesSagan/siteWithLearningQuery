import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useInfiniteQuery } from 'react-query';
import { Fragment } from 'react';

import axios from 'axios';

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
};

export default function QueryInfiniteQueries() {
  const {
    isError,
    error,
    isLoading,
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery(['colors'], fetchColors, {
    // this is how implement you infinite queries with react queries
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
  if (isLoading) {
    return <h2 className='text-center text-4xl p-4 m-4'>Loading...</h2>;
  }
  if (isError) {
    return <h2 className='text-center text-4xl p-4'>{error.message}</h2>;
  }

  const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };

  const Component = () => {
    const codeString = `

      import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import { Fragment } from 'react';

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get('http://localhost:4000/colors?_limit=2&_page=$/{pageParam}');
};

export default function QueryInfiniteQueries() {
  const {
    isError,
    error,
    isLoading,
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(['colors'], fetchColors, {
    // this is how implement you infinite queries with react queries
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
  if (isLoading) {
    return <h2 className='text-center text-4xl p-4 m-4'>Loading...</h2>;
  }
  if (isError) {
    return <h2 className='text-center text-4xl p-4'>{error.message}</h2>;
  }

  const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };
  }
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
        <p className='text-center text-3xl p-4 m-4 underline'>
          Click on button to loading more data{' '}
        </p>
        <p className='text-center text-3xl p-4 m-4'>
          Infinite Queries Rendering lists that can additively "load more" data
          onto an existing set of data or "infinite scroll" is also a very
          common UI pattern. React Query supports a useful version of useQuery
          called useInfiniteQuery for querying these types of lists.
        </p>
        {data?.pages.map((group, i) => {
          return (
            <Fragment key={i}>
              {group.data.map((color) => (
                <h2 className='text-3xl p-4' key={color.id}>
                  {' '}
                  {color.id} - {color.label}
                </h2>
              ))}
            </Fragment>
          );
        })}
      </div>
      <div>
        <bytton
          className='p-4 m-2 bg-green-600 hover:bg-green-800 rounded-lg text-white disabled:opacity-40 text-2xl'
          disabled={!hasNextPage === 4}
          onClick={fetchNextPage}
        >
          Load more...
        </bytton>
      </div>
      <div>
        {isFetching && !isFetchingNextPage ? (
          <span className='p-4 text-3xl mt-4'>'Fetching...'</span>
        ) : null}
      </div>
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
        <p className='text-center text-3xl p-4 m-4 underline'>
          Click on button to loading more data{' '}
        </p>
        <p className='text-center text-3xl p-4 m-4'>
          Infinite Queries Rendering lists that can additively "load more" data
          onto an existing set of data or "infinite scroll" is also a very
          common UI pattern. React Query supports a useful version of useQuery
          called useInfiniteQuery for querying these types of lists.
        </p>{' '}
        <button
          onClick={refetch}
          className='p-4 text-2xl bg-blue-600 hover:bg-blue-800 rounded-2xl text-white m-2'
        >
          Refetch Heroes
        </button>
        {data?.pages.map((group, i) => {
          return (
            <Fragment key={i}>
              {group.data.map((color) => (
                <h2 className='text-3xl p-4' key={color.id}>
                  {' '}
                  {color.id} - {color.label}
                </h2>
              ))}
            </Fragment>
          );
        })}
      </div>
      <div>
        <bytton
          className='p-4 m-2 bg-green-600 hover:bg-green-800 rounded-lg text-white disabled:opacity-40 text-2xl'
          disabled={!hasNextPage === 4}
          onClick={fetchNextPage}
        >
          Load more...
        </bytton>
      </div>
      <div>
        {isFetching && !isFetchingNextPage ? (
          <span className='p-4 text-3xl mt-4'>'Fetching...'</span>
        ) : null}
      </div>

      <Component />
    </div>
  );
}
