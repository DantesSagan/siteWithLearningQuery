import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroesQuery = () => {
  // if change this url link to
  // http://localhost:4000/superheroes1 or
  // http://localhost:4000/sup
  // What broke url link and the page response with following message like this:
  // "Request failed with status code 404"
  // Until the URL link will be fixed
  return axios.get('http://localhost:4000/superheroes');
};

export default function HandlingQueryError() {
  const { isLoading, data, error, isError } = useQuery(
    'super-heroes',
    fetchSuperHeroesQuery,
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
// In this example we are learning how to fetch data with jQuery
// What can be used for more simplified than instead React hooks
// Whitch is more simple 
// And additionaly we create error message in jQuery what can sent Error message if something goes wrong
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
      <h2 className='text-center text-4xl p-4'>HandlingQueryError</h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work jQuery <br /> to
        fetch data with axios and Query!
        <br />
        Thits is example to improve how to work Errors if smth goes wrong! With
        jQuery!
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
        <h2 className='text-center text-4xl p-4'>HandlingQueryError</h2>
        {data?.data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>;
        })}
      </div>
      <Component />
    </>
  );
}
