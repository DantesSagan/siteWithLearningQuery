import { Link } from 'react-router-dom';
import { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useQuery } from 'react-query';
// import axios from 'axios';
import SuperHeroesData, {
  useAddSuperHeroesData,
} from '../../hooks/useSuperHeroes.Mutations';

// const fetchSuperHeroesQuery = () => {
//   return axios.get('http://localhost:4000/superheroes');
// };

export default function RQSuperHeroesMutations() {
  const [name, setName] = useState('');
  const [alterEgo, setAlterEgo] = useState('');
  const onSuccess = () => {
    console.log('Perform side effect after data fetching', data);
  };

  const onError = () => {
    console.log('Perform side effect after data encountering error', error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    'super-heroes',
    SuperHeroesData(onSuccess, onError)
  );

  const {
    mutate: addHero,
    isLoading: mutationLoading,
    isError: mutationIsError,
    error: mutationError,
  } = useAddSuperHeroesData();

  // import useMutation and called, passing in the mutation function
  // The mutations function automatically recieved  any argument you pass
  // When you invoke the mutate function in the component
  // In our case it is = hero =
  // Also on a side note destructured only mutate function
  // When use mutation also returnes is loading which you can use isLoading, isError, isFetching indicator
  const handleAddHeroClick = () => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    addHero(hero);
  };

  if (isLoading || isFetching) {
    return <h2 className='text-center text-4xl p-4'>Loading...</h2>;
  }

  if (isError) {
    return <h2 className='text-center text-4xl p-4'>{error.message}</h2>;
  }

  if (mutationLoading || isFetching) {
    return <h2 className='text-center text-4xl p-4'>LoadingMutations...</h2>;
  }

  if (mutationIsError) {
    return (
      <h2 className='text-center text-4xl p-4'>{mutationError.message}</h2>
    );
  }
  const Component = () => {
    const codeString = `
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useQuery } from 'react-query';
// import axios from 'axios';
import SuperHeroesData, {
  useAddSuperHeroesData,
} from '../../hooks/useSuperHeroes.Mutations';

// const fetchSuperHeroesQuery = () => {
//   return axios.get('http://localhost:4000/superheroes');
// };

export default function RQSuperHeroesMutations() {
  const [name, setName] = useState('');
  const [alterEgo, setAlterEgo] = useState('');
  const onSuccess = () => {
    console.log('Perform side effect after data fetching', data);
  };

  const onError = () => {
    console.log('Perform side effect after data encountering error', error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    'super-heroes',
    SuperHeroesData(onSuccess, onError)
  );

  const {
    mutate: addHero,
    isLoading: mutationLoading,
    isError: mutationIsError,
    error: mutationError,
  } = useAddSuperHeroesData();

  // import useMutation and called, passing in the mutation function
  // The mutations function automatically recieved  any argument you pass
  // When you invoke the mutate function in the component
  // In our case it is = hero =
  // Also on a side note destructured only mutate function
  // When use mutation also returnes is loading which you can use isLoading, isError, isFetching indicator
  const handleAddHeroClick = () => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    addHero(hero);
  };

  if (isLoading || isFetching) {
    return <h2 className='text-center text-4xl p-4'>Loading...</h2>;
  }

  if (isError) {
    return <h2 className='text-center text-4xl p-4'>{error.message}</h2>;
  }

  if (mutationLoading || isFetching) {
    return <h2 className='text-center text-4xl p-4'>LoadingMutations...</h2>;
  }

  if (mutationIsError) {
    return (
      <h2 className='text-center text-4xl p-4'>{mutationError.message}</h2>
    );
  }

  const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };

  return (
    <>
      <h2 className='text-center text-4xl p-4'>
        RQSuperHeroesMutations( Fetching Data with useQuery)
      </h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work jQuery <br /> to
        fetch data with axios and Query!
        <br />
        Thits is example how work axios with jQuery with more simplifited. And
        using less code string than with classic React hooks - useState and
        useEffect!
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
        <h2 className='text-center text-4xl p-4'>RQSuperHeroesMutations</h2>
        <div>
          <input
            className='p-2 border-2 border-black m-2'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='p-2 border-2 border-black m-2'
            type='text'
            value={alterEgo}
            onChange={(e) => setAlterEgo(e.target.value)}
          />
        </div>
        <button
          onClick={handleAddHeroClick}
          className='p-4 text-2xl bg-green-600 hover:bg-green-800 rounded-2xl text-white m-2'
        >
          Add Hero
        </button>
        {data?.data.map((hero) => {
          return (
            <div key={hero.id} className='p-4 hover:bg-gray-500 rounded-lg'>
              <Link to={'/rq-super-heroesFour/$/{hero.id}'}>{hero.name}</Link>
            </div>
          );
        })}
        <button
          onClick={refetch}
          className='p-4 text-2xl bg-blue-600 hover:bg-blue-800 rounded-2xl text-white m-2'
        >
          Refetch Heroes
        </button>
      </div>
      <Component />
    </>
  );
}

// And we need to add this export const for working mutations state in jQuery
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';
const fetchSuperHeroesQuery = () => {
  return axios.get('http://localhost:4000/superheroes');
};

const addSuperHero = (hero) => {
  return axios.post('http://localhost:4000/superheroes', hero);
};

export default function SuperHeroesData(onSuccess, onError) {
  return useQuery('super-heroes', fetchSuperHeroesQuery, {
    onSuccess,
    onError,
    select: (data) => {
      return data.data.map((item) => item.name);
    },
  });
}
export const useAddSuperHeroesData = () => {
  return useMutation(addSuperHero);
};

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
        RQSuperHeroesMutations( Fetching Data with useQuery)
      </h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work jQuery <br />
        with useMutation
        <br />
        Thits is example how work useMutation with React and jQuery library!
        Unlike queries, mutations are typically used to create/update/delete
        data or perform server side-effects. For this purpose, React Query
        exports a useMutation hook.
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
        <h2 className='text-center text-4xl p-4'>RQSuperHeroesMutations</h2>
        <div>
          <input
            className='p-2 border-2 border-black m-2'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='p-2 border-2 border-black m-2'
            type='text'
            value={alterEgo}
            onChange={(e) => setAlterEgo(e.target.value)}
          />
        </div>
        <button
          onClick={handleAddHeroClick}
          className='p-4 text-2xl bg-green-600 hover:bg-green-800 rounded-2xl text-white m-2'
        >
          Add Hero
        </button>
        {data?.data.map((hero) => {
          return (
            <div key={hero.id} className='p-4 hover:bg-gray-500 rounded-lg'>
              <Link to={`/rq-super-heroesFour/${hero.id}`}>{hero.name}</Link>
            </div>
          );
        })}
        <button
          onClick={refetch}
          className='p-4 text-2xl bg-blue-600 hover:bg-blue-800 rounded-2xl text-white m-2'
        >
          Refetch Heroes
        </button>
      </div>
      <Component />
    </>
  );
}
