import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useQuery } from 'react-query';
import axios from 'axios';

const cancelTokenSource = axios.CancelToken.source();

const fetchSuperHeroesQuery = () => {
  return axios.get('http://localhost:4000/superheroes', {
    cancelToken: cancelTokenSource.token,
  });
};

export default function QueryErrorCallback() {
  const onSuccess = (data) => {
    console.log(
      'Countring for loop before 4, cancel',
      data.data.map((item) => item.id)
    );
    for (let i = 0; i < data.data.id; i++) {
      if (data.data.map((item) => item.id[i]) === 4) {
        console.log('Perfom side effect after data fetching', data);
      } else {
        cancelTokenSource.cancel();
        console.log(
          'Countring for loop before 4, cancel',
          data.data.map((item) => item.id)
        );
      }
    }
  };

  const onError = (error) => {
    console.log(
      'Perfom side effect after after encountering error fetching',
      error
    );
  };

  const { isLoading, data, error, isError, refetch, isFetching } = useQuery(
    // In this case we are using onSuccess and onError
    // Which onSucces could uses for success data when it fetched with according message and side effect
    // Another implementing error - onError could uses for error data when it was fetched with some errors on typing URL and other problem and log in console
    // It allowed you to do perform side effect's on the actual response for that individual query
    // You can make use off data within onSuccess callback or within onError callback
    // HomeWork: Need to combine pulling onSucces and onError
    // Use refetch individual every 3 second
    // Add one more superheroes in json
    // Within onSuccess callback check in the numbers of heroes === 4
    // And stop the pulling onSucces if it's true and when onErroe if it's true onError
    'super-heroes',
    fetchSuperHeroesQuery,
    { onSuccess, onError, refetchInterval: 3000 }
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

export default function QueryErrorCallback() {
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
      <h2 className='text-center text-4xl p-4'>QueryErrorCallback</h2>
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
        <h2 className='text-center text-4xl p-4'>QueryErrorCallback</h2>
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
