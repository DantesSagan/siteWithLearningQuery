import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import axios from 'axios';
import { SuperHeroesData } from '../../hooks/SuperHeroesData';

const cancelTokenSource = axios.CancelToken.source();

export default function QueryErrorCallback() {
  const onSuccess = (data) => {
    for (
      let i = 0;
      i <
      ((data) => {
        return data.data.map((item) => item.id);
      });
      i++
    ) {
      if (
        data.data.map((item) => item.id[i]) >=
        data.data.map((item) => item.id[4])
      ) {
        console.log('Perfom side effect after data fetching', data);
      } else {
        cancelTokenSource.cancel();
        console.log(
          'Count for loop before 4, cancel',
          data.data.map((item) => item.id)
        );
      }
    }
    console.log('Count for loop before 4, cancel', data);
  };

  const onError = (error) => {
    console.log(
      'Perfom side effect after after encountering error fetching',
      error
    );
  };

  const { isLoading, data, error, isError, refetch, isFetching } =
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
    SuperHeroesData(onSuccess, onError);
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
    const onSuccess = (data) => {
    for (
      let i = 0;
      i <
      ((data) => {
        return data.data.map((item) => item.id);
      });
      i++
    ) {
      if (
        data.data.map((item) => item.id[i]) >=
        data.data.map((item) => item.id[4])
      ) {
        console.log('Perfom side effect after data fetching', data);
      } else {
        cancelTokenSource.cancel();
        console.log(
          'Count for loop before 4, cancel',
          data.data.map((item) => item.id)
        );
      }
    }
    console.log('Count for loop before 4, cancel', data);
  };

  const onError = (error) => {
    console.log(
      'Perfom side effect after after encountering error fetching',
      error
    );
  };

  const { isLoading, data, error, isError, refetch, isFetching } =
  SuperHeroesData(onSuccess, onError);
  if (isLoading || isFetching) {
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
        {data.map((heroName) => {
          return <div key={heroName}>{heroName}</div>;
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
        {/* {data?.data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>;
        })} */}
        {data.map((heroName) => {
          return <div key={heroName}>{heroName}</div>;
        })}
      </div>
      <Component />
    </>
  );
}
