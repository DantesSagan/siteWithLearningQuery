import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroesQuery = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export default function RefrechDefaults() {
  const { isLoading, data, error, isError } = useQuery(
    'super-heroes',
    fetchSuperHeroesQuery,
    // In this lessons we are learn about hot to work refetchOnMout and refetchOnWindowFocus
    // Where refetchOnMoutn work like when you fetch data this commands will refetch data instantly
    // on boolean expression: true, and not refetch data when boolean expression set's on:false
    // refetchOnWindowFocus - this is important than refetchOnMount
    // When you tab any time loses focus and gains focus again background refetch will initiated
    // When the refetch completed UI is updated with date retrieved
    // And you can set it to false where you UI not refetch on window focus
    // Or you can set it to "always" irrespective of whether the query data is stale or not (независимо устарели ли данные запросы или нет)
    { staleTime: 0, refetchOnMount: true, refetchOnWindowFocus: 'always' }
  );
  if (isLoading) {
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

export default function RQSuperHeroes() {
  const { isLoading, data, error, isError } = useQuery(
    'super-heroes',
    fetchSuperHeroesQuery
  );
  if (isLoading) {
    return <h2 className='text-center text-4xl p-4'>Loading...</h2>;
  }
  if (isError) {
    return <h2 className='text-center text-4xl p-4'>{error.message}</h2>;
  }
  return (
    <>
        <h2 className='text-center text-4xl p-4'>HandlingQueryError</h2>
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
      <h2 className='text-center text-4xl p-4'>jQueryRefetchDefaults</h2>
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
        <h2 className='text-center text-4xl p-4'>jQueryRefetchDefaults</h2>
        {data?.data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>;
        })}
      </div>
      <Component />
    </>
  );
}
