import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// import { useQuery } from 'react-query';
// import axios from 'axios';
import useParallelQueriesSuperHeroes from '../../hooks/useParallelQueries';
import useParallelQueriesSuperFriends from '../../hooks/useParallelQueriesFriends';

// const fetchSuperHeroes = () => {
//   return axios.get('http://localhost:4000/superheroes');
// };

// const fetchFriends = () => {
//   return axios.get('http://localhost:4000/friends');
// };

export default function ParallelQueries() {
  const onSuccess = (data) => {
    console.log('Count for loop before 4, cancel', data);
  };

  const onError = (error) => {
    console.log(
      'Perfom side effect after after encountering error fetching',
      error
    );
  };

  const {
    data: superHeroes,
    isError,
    error,
    isLoading,
    isFetching,
  } = useParallelQueriesSuperHeroes(onError, onSuccess);
  const { data: friends } = useParallelQueriesSuperFriends(onError, onSuccess);

  if (isLoading || isFetching) {
    return <h2 className='text-center text-4xl p-4'>Loading...</h2>;
  }
  if (isError) {
    return <h2 className='text-center text-4xl p-4'>{error.message}</h2>;
  }
  const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };

  const Component = () => {
    const codeString = `
mport { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// import { useQuery } from 'react-query';
// import axios from 'axios';
import useParallelQueriesSuperHeroes from '../../hooks/useParallelQueries';
import useParallelQueriesSuperFriends from '../../hooks/useParallelQueriesFriends';

// const fetchSuperHeroes = () => {
//   return axios.get('http://localhost:4000/superheroes');
// };

// const fetchFriends = () => {
//   return axios.get('http://localhost:4000/friends');
// };

export default function ParallelQueries() {
  const onSuccess = (data) => {
    console.log('Count for loop before 4, cancel', data);
  };

  const onError = (error) => {
    console.log(
      'Perfom side effect after after encountering error fetching',
      error
    );
  };

  const {
    data: superHeroes,
    isError,
    error,
    isLoading,
    isFetching,
  } = useParallelQueriesSuperHeroes(onError, onSuccess);
  const { data: friends } = useParallelQueriesSuperFriends(onError, onSuccess);

  if (isLoading || isFetching) {
    return <h2 className='text-center text-4xl p-4'>Loading...</h2>;
  }
  if (isError) {
    return <h2 className='text-center text-4xl p-4'>{error.message}</h2>;
  }
  return (
    <div>
      <div className='text-center text-2xl p-8 border-4 border-blue-700 shadow-inner'>
        <h2 className='text-center text-4xl p-4'>Parallel Queries</h2>
        <h3 className='text-center text-3xl p-4 underline'>Super Heroes:</h3>
        {superHeroes}
        <h3 className='text-center text-3xl p-4 underline'>Friends:</h3>
        {friends}
      </div>
    </div>
  );
}
// And using this useParrallelQueriesSuperHeroes in this case for best flexing work

import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export default function useParallelQueriesSuperHeroes(
  onSuccess,
  onError,
  isError,
  error,
  isLoading,
  isFetching
) {
  return useQuery('super-heroes', fetchSuperHeroes, {
    onError,
    onSuccess,
    isError,
    error,
    isLoading,
    isFetching,
    select: (superHeroes) => {
      return superHeroes.data.map((heroName) => {
        return (
          <ui className='p-2 list-outside' key={heroName.name}>
            <li>{heroName.name}</li>
          </ui>
        );
      });
    },
  });
}

// And using useParallelQueriesSuperFriends for best flexing work

import { useQuery } from 'react-query';
import axios from 'axios';

const fetchFriends = () => {
  return axios.get('http://localhost:4000/friends');
};

export default function useParallelQueriesSuperFriends(
  onSuccess,
  onError,
  isError,
  error,
  isLoading,
  isFetching
) {
  return useQuery('friends', fetchFriends, {
    onError,
    onSuccess,
    isError,
    error,
    isLoading,
    isFetching,
    select: (friends) => {
      return friends.data.map((heroName) => {
        return (
          <ui className='p-2 list-outside' key={heroName.name}>
            <li>{heroName.name}</li>
          </ui>
        );
      });
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

  return (
    <div>
      <h2 className='text-center text-4xl p-4'>ParallelQueries</h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work jQuery <br />
        with parallel queries on one page and with separated parameters on
        useQuery objects!
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
      <div className='text-center text-2xl p-8 border-4 border-blue-700 shadow-inner'>
        <h2 className='text-center text-4xl p-4'>Parallel Queries</h2>
        <h3 className='text-center text-3xl p-4 underline'>Super Heroes:</h3>
        {superHeroes}
        <h3 className='text-center text-3xl p-4 underline'>Friends:</h3>
        {friends}
      </div>
      <Component />
    </div>
  );
}
