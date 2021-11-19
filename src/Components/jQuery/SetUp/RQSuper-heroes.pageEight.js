import { Link } from 'react-router-dom';
import { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useQuery, useQueryClient } from 'react-query';

import SuperHeroesAxiosInterceptor, {
  useAddSuperHeroesAxiosInterceptor,
} from '../../hooks/useSuperHeroes.AxiosInterceptor';

// const fetchSuperHeroesQuery = () => {
//   return axios.get('http://localhost:4000/superheroes');
// };

export default function RQSuperHeroesAxiosInterceptor() {
  const [name, setName] = useState('');
  const [alterEgo, setAlterEgo] = useState('');
  const onSuccess = () => {
    console.log('Perform side effect after data fetching', data);
  };

  const onError = () => {
    console.log('Perform side effect after data encountering error', error);
  };

  const { isLoading, data, isError, error, refetch } = useQuery(
    'super-heroes',
    SuperHeroesAxiosInterceptor(onSuccess, onError)
  );

  const {
    mutate: addHero,
    isLoading: mutationLoading,
    isError: mutationIsError,
    error: mutationError,
  } = useAddSuperHeroesAxiosInterceptor();

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

import { useQuery, useQueryClient } from 'react-query';

import SuperHeroesAxiosInterceptor, {
  useAddSuperHeroesAxiosInterceptor,
} from '../../hooks/useSuperHeroes.AxiosInterceptor';

// const fetchSuperHeroesQuery = () => {
//   return axios.get('http://localhost:4000/superheroes');
// };

export default function RQSuperHeroesAxiosInterceptor() {
  const [name, setName] = useState('');
  const [alterEgo, setAlterEgo] = useState('');
  const onSuccess = () => {
    console.log('Perform side effect after data fetching', data);
  };

  const onError = () => {
    console.log('Perform side effect after data encountering error', error);
  };

  const { isLoading, data, isError, error, refetch } = useQuery(
    'super-heroes',
    SuperHeroesAxiosInterceptor(onSuccess, onError)
  );

  const {
    mutate: addHero,
    isLoading: mutationLoading,
    isError: mutationIsError,
    error: mutationError,
  } = useAddSuperHeroesAxiosInterceptor();

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
      <Link to={'/rq-super-heroesFour/$/{hero.id}'} />
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

return (
    <>
      <h2 className='text-center text-4xl p-4'>
        RQSuperHeroesOptimisitcMutations( Axios interceptor)
      </h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-left text-3xl p-4'>
        This is example code to explain and show how to work jQuery <br />
        with useMutation
        <br />
        Thits is example how work useMutation with React and jQuery library and
        also with ResponseMutateQueries and OptimisticUpdates! <br />
        What will be automatically refetch data when it added to it! <br />
        <hr className='border-2 border-red-400' />
        <strong>token_type</strong> is a parameter in Access Token generate call
        to Authorization server, which essentially represents how an
        access_token will be generated and presented for resource access calls.{' '}
        <br />
        <strong>You provide token_type</strong> in the access token generation
        call to an authorization server. <br />
        <strong>
          If you choose Bearer (default on most implementation), an access_token
        </strong>{' '}
        is generated and sent back to you. Bearer can be simply understood as
        "give access to the bearer of this token." <br />
        One valid token and no question asked. On the other hand, if you choose
        Mac and sign_type (default hmac-sha-1 on most implementation), the
        access token is generated and kept as secret in Key Manager as an
        attribute, and an encrypted secret is sent back as access_token.
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
          RQSuperHeroesOptimisticMutations( Axios interceptor)
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
.
.
.
=>
.
.
.
// We are taking this hook with importing RequestFn for interceptor token
import { useQuery, useMutation, useQueryClient } from 'react-query';
import RequestFN from '../utils/axios-utils';

const fetchSuperHeroesQuery = () => {
  //   return axios.get('http://localhost:4000/superheroes');
  return RequestFN({ url: '/superheroes' });
};

const addSuperHero = (hero) => {
  //   return axios.post('http://localhost:4000/superheroes', hero);
  return RequestFN({ url: '/superheroes', method: 'post', data: hero });
};

export default function SuperHeroesAxiosInterceptor(onSuccess, onError) {
  return useQuery('super-heroes', fetchSuperHeroesQuery, {
    onSuccess,
    onError,
    select: (data) => {
      return data.data.map((item) => item.name);
    },
});
}
export const useAddSuperHeroesAxiosInterceptor = () => {
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
.
.
.
=>
.
.
.
// In this case we create const client in independent way
// Then create a function with parameter {...options}
// And then created authtorization = 'Bearer token'
// With onSucces and onError
import axios from 'axios';

const client = axios.create({ baseURL: 'http://localhost:4000' });

// When you create a new 'hero' list was updated
// And if jQuery and mutations work perfectly
// And if you take a look to tab headers 
// You will see correct url and Authorization: "Bearer token" is attached 
// it's marked as work is done
export default function RequestFN({ ...options }) {
  client.defaults.headers.common.Authtorization = 'Bearer token';
  const onSuccess = (response) => response;
  const onError = (error) => {
    // optionally catch errors and add additional logging here
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
}
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
        RQSuperHeroesOptimisitcMutations( Axios interceptor)
      </h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-left text-3xl p-4'>
        This is example code to explain and show how to work jQuery <br />
        with useMutation
        <br />
        Thits is example how work useMutation with React and jQuery library and
        also with ResponseMutateQueries and OptimisticUpdates! <br />
        What will be automatically refetch data when it added to it! <br />
        <hr className='border-2 border-red-400' />
        <strong>token_type</strong> is a parameter in Access Token generate call
        to Authorization server, which essentially represents how an
        access_token will be generated and presented for resource access calls.{' '}
        <br />
        <strong>You provide token_type</strong> in the access token generation
        call to an authorization server. <br />
        <strong>
          If you choose Bearer (default on most implementation), an access_token
        </strong>{' '}
        is generated and sent back to you. Bearer can be simply understood as
        "give access to the bearer of this token." <br />
        One valid token and no question asked. On the other hand, if you choose
        Mac and sign_type (default hmac-sha-1 on most implementation), the
        access token is generated and kept as secret in Key Manager as an
        attribute, and an encrypted secret is sent back as access_token.
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
          RQSuperHeroesOptimisticMutations( Axios interceptor)
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
