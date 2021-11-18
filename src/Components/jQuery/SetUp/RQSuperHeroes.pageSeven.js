import { Link } from 'react-router-dom';
import { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useQuery, useQueryClient } from 'react-query';
// import axios from 'axios';

import SuperHeroesOptimisticMutation, {
  useAddSuperHeroesOptimisticMutation,
} from '../../hooks/useSuperHeroes.OptimisticMutations';

// const fetchSuperHeroesQuery = () => {
//   return axios.get('http://localhost:4000/superheroes');
// };

export default function RQSuperHeroesOptimisticUpdateMutation() {
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
    SuperHeroesOptimisticMutation(onSuccess, onError)
  );

  const {
    mutate: addHero,
    isLoading: mutationLoading,
    isError: mutationIsError,
    error: mutationError,
  } = useAddSuperHeroesOptimisticMutation();

  // import useMutation and called, passing in the mutation function
  // The Invalidation function automatically recieved  any argument you pass
  // When you invoke the mutate function in the component
  // In our case it is = hero =
  // Also on a side note destructured only mutate function
  // When use mutation also returnes is loading which you can use isLoading, isError, isFetching indicator
  const handleAddHeroClick = () => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    addHero(hero);
  };

  const queryClient = useQueryClient();
  const handleRemovalHeroClick = (hero) => {
    console.log({ name, alterEgo });
    const removeHero = queryClient.removeQueries(
      <Link to={`/rq-super-heroesFour/${hero.id}`} />
    );
    addHero(removeHero);
  };
  if (isLoading) {
    return <h2 className='text-center text-4xl p-4'>Loading...</h2>;
  }

  if (isError) {
    return <h2 className='text-center text-4xl p-4'>{error.message}</h2>;
  }

  if (mutationLoading) {
    return <h2 className='text-center text-4xl p-4'>Loading hero...</h2>;
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

import SuperHeroesMutationResponse, {
  useAddSuperHeroesMutationResponse,
} from '../../hooks/useSuperHeroes.MutationsResponse';

// const fetchSuperHeroesQuery = () => {
//   return axios.get('http://localhost:4000/superheroes');
// };

export default function RQSuperHeroesOptimisticUpdateMutation() {
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
    SuperHeroesOptimisticMutation(onSuccess, onError)
  );

  const {
    mutate: addHero,
    isLoading: mutationLoading,
    isError: mutationIsError,
    error: mutationError,
  } = useAddSuperHeroesOptimisticMutation();

  // import useMutation and called, passing in the mutation function
  // The Invalidation function automatically recieved  any argument you pass
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
    return <h2 className='text-center text-4xl p-4'>Loading hero...</h2>;
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
        RQSuperHeroesInvalidation( Fetching Data with useQuery)
      </h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work jQuery <br />
        with useMutation
        <br />
        Thits is example how work useMutation with React and jQuery library and
        also with InvalidateQueries ! <br />
        What will be automatically refetch data when it added to it! <br />
        <hr className='border-2 border-red-400' />
        Waiting for queries to become stale before they are fetched again
        doesn't always work, especially when you know for a fact that a query's
        data is out of date because of something the user has done. <br />
        For that purpose, the QueryClient has an invalidateQueries method that
        lets you intelligently mark queries as stale and potentially refetch
        them too!
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
        <h2 className='text-center text-4xl p-4'>RQSuperHeroesOptimisticMutation</h2>
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
              <Link to={'/rq-super-heroesFour/$/{hero.id}''}>{hero.name}</Link>
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

import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
const fetchSuperHeroesQuery = () => {
  return axios.get('http://localhost:4000/superheroes');
};

const addSuperHero = (hero) => {
  return axios.post('http://localhost:4000/superheroes', hero);
};

export default function SuperHeroesOptimisticMutation(onSuccess, onError) {
  return useQuery('super-heroes', fetchSuperHeroesQuery, {
    onSuccess,
    onError,
    select: (data) => {
      return data.data.map((item) => item.name);
    },
  });
}
export const useAddSuperHeroesOptimisticMutation = () => {
  // This is how you can handle MutationsResponse
  // It saves you additional network request
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    // onSuccess: (data) => {
    //   queryClient.invalidateQueries('super-heroes');
    //   queryClient.setQueryData('super-heroes', (oldQueryData) => {
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, data.data],
    //     };
    //   });
    // },
    onMutate: async (newHero) => {
      await queryClient.cancelQueries('super-heroes');
      const prevHeroData = queryClient.getQueryData('super-heroes');
      queryClient.setQueryData('super-heroes', (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            { id: oldQueryData?.data?.length + 1, ...newHero },
          ],
        };
      });
      return {
        prevHeroData,
      };
    },
    onError: (_error, _hero, context) => {
      queryClient.getQueryData('super-heroes', context.prevHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries('super-heroes');
    },
  });
};



  `;
    return (
      <SyntaxHighlighter language='javascript' style={dark}>
        {codeString}
      </SyntaxHighlighter>
    );
  };

  const ScrollDown = () => {
    window.scrollTo({ top: 1450, behavior: 'smooth' });
  };

  return (
    <>
      <h2 className='text-center text-4xl p-4'>
        RQSuperHeroesOptimisitcMutations( Fetching Data with useQuery)
      </h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work jQuery <br />
        with useMutation
        <br />
        Thits is example how work useMutation with React and jQuery library and
        also with ResponseMutateQueries and OptimisticUpdates! <br />
        What will be automatically refetch data when it added to it! <br />
        <hr className='border-2 border-red-400' />
        When you optimistically update your state before performing a mutation,
        there is a chance that the mutation will fail.
        <br />
        In most of these failure cases, you can just trigger a refetch for your
        optimistic queries to revert them to their true server state. <br />
        In some circumstances though, refetching may not work correctly and the
        mutation error could represent some type of server issue that won't make
        it possible to refetch. <br />
        In this event, you can instead choose to rollback your update.
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
        <h2 className='text-center text-4xl p-4'>
          RQSuperHeroesOptimisticMutations
        </h2>
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
              {/* <button key={hero.id} onClick={handleRemovalHeroClick}>
                Remove Hero
              </button> */}
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
