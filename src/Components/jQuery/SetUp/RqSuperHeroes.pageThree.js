import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// import axios from 'axios';
import { Link } from 'react-router-dom';
import useSuperHeroDataTwo from '../../hooks/useSuperHeroDataTwo';
import { SuperHeroesDataTwo } from '../../hooks/SuperHeroesDataTwo';

// const cancelTokenSource = axios.CancelToken.source();
export default function RQSuperHeroesThree() {
  const onSuccess = (data) => {
    // for (
    //   let i = 0;
    //   i <
    //   ((data) => {
    //     return data.data.map((item) => item.id);
    //   });
    //   i++
    // ) {
    //   if (
    //     data.data.map((item) => item.id[i]) >=
    //     data.data.map((item) => item.id[4])
    //   ) {
    //     console.log('Perfom side effect after data fetching', data);
    //   } else {
    //     cancelTokenSource.cancel();
    //     console.log(
    //       'Count for loop before 4, cancel',
    //       data.data.map((item) => item.id)
    //     );
    //   }
    // }
    console.log('Count for loop before 4, cancel', data);
  };

  const onError = (error) => {
    console.log(
      'Perfom side effect after after encountering error fetching',
      error
    );
  };

  const { isLoading, data } = SuperHeroesDataTwo(onSuccess, onError);
  if (isLoading) {
    return <h2 className='text-center text-4xl p-4'>Loading...</h2>;
  }

  const Component = () => {
    const codeString = `
// In this example we are learning how to fetch data with jQuery
// What can be used for more simplified than instead React hooks
// Whitch is more simple
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroesQuery = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export default function RQSuperHeroesThree() {
  const { isLoading, data } = useQuery('super-heroes', fetchSuperHeroesQuery);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-blue-700 shadow-inner '>
        <h2 className='text-center text-4xl p-4'>RQSuperHeroesPageThree</h2>
        {data?.data.map((hero) => {
          return (
            <div key={hero.id}>
              <Link to={'/rq-super-heroesThree/$/{hero.id}'}>{hero.name}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
// In this case we are using component useSuperHeroDataTwo
// For better loading screen 
import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get('http://localhost:4000/superheroes/$/{heroId}');
};

export default function useSuperHeroDataTwo(heroId) {
  const queryClient = useQueryClient();
  return useQuery(['super-hero', heroId], fetchSuperHero, {
    initialData: () => {
      const hero = queryClient
        .getQueryData('super-heroes')
        ?.data?.find((hero) => hero.id === parseInt(heroId));

      if (hero) {
        return {
          data: hero,
        };
      } else {
        // if initial data is undefined React Query set that Query a hard loading state thus saving us from runtime error
        // otherwise u be trying to access data.data.name when it doesn't exist yet 
        return undefined;
      }
    },
  });
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
      <h2 className='text-center text-4xl p-4'>
        SuperHeroesPageThree( Fetching Data with useQuery)
      </h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work jQuery <br />
        with useQueryClient to achieve preloading data without loading screen.
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
        <h2 className='text-center text-4xl p-4'>RQSuperHeroesPageThree</h2>
        {data?.data.map((hero) => {
          return (
            <div key={hero.id}>
              <Link to={`/rq-super-heroesThree/${hero.id}`}>{hero.name}</Link>
            </div>
          );
        })}
      </div>
      <Component />
    </>
  );
}
