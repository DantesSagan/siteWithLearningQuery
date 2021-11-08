import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroesQuery = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export default function QueryOnClick() {
  const { isLoading, data, error, isError, refetch, isFetching } = useQuery(
    // In this case we are using enabled setting to false
    // Which is mean Set this to false to disable automatic refetching when the query mounts or changes query keys. 
    // To refetch the query, use the refetch method returned from the useQuery instance. 
    // Defaults to true.
    // And creating a button with a refetch useQuery what updates data when we click on it
    // Additionally isFetching uses for updating whole page to see ReLoading page 
    // Fetching data of click of the button - it's way of common scenario in any app 
    'super-heroes',
    fetchSuperHeroesQuery,
    { enabled: false }
  );
  if (isLoading || isFetching) {
    return <h2 className='text-center text-4xl p-4'>Loading...</h2>;
  }
  if (isError) {
    return <h2 className='text-center text-4xl p-4'>{error.message}</h2>;
  }
  const Component = () => {
    const codeString = `
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroesQuery = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export default function QueryOnClick() {
    const { isLoading, data, error, isError, refetch, isFetching } = useQuery(
    'super-heroes',
    fetchSuperHeroesQuery,
    { enabled: false }
  );
  if (isLoading) {
    return <h2 className='text-center text-4xl p-4'>Loading...</h2>;
  }
  if (isError) {
    return <h2 className='text-center text-4xl p-4'>{error.message}</h2>;
  }
  return (
    <>
        <h2 className='text-center text-4xl p-4'>jQueryOnClick</h2>
        <button
          className='py-1 px-2 text-white rounded-lg shadow-md bg-green-500 hover:bg-green-700 focus:outline-none'
          onClick={refetch}
        >
          RefetchData
        </button>
        {data?.data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>;
        })}
    </>
  );
}

  `;
    return (
      <SyntaxHighlighter language='javascript' style={dark}>
        {codeString}
      </SyntaxHighlighter>
    );
  };

  const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };

  return (
    <>
      <h2 className='text-center text-4xl p-4'>jQueryOnClick</h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work jQuery <br /> to
        refetchOnMout && refetchOnWindowFocus!
        <br />
        Thits is example to improve how to work refetch data ! With jQuery!
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
        <h2 className='text-center text-4xl p-4'>jQueryOnClick</h2>
        <button
          className='py-1 px-2 text-white rounded-lg shadow-md bg-green-500 hover:bg-green-700 focus:outline-none'
          onClick={refetch}
        >
          RefetchData
        </button>
        {data?.data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>;
        })}
      </div>
      <Component />
    </>
  );
}
