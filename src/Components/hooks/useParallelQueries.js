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
          <ui className='p-4 hover:bg-gray-500 rounded-lg' key={heroName.name}>
            <li>{heroName.name}</li>
          </ui>
        );
      });
    },
  });
}
