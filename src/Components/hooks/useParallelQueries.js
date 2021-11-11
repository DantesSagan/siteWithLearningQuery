import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export default function useParallelQueriesSuperHeroes(onSuccess, onError) {
  return useQuery('super-heroes', fetchSuperHeroes, {
    onError,
    onSuccess,
    select: (data) => {
      return data.data.map((heroName) => heroName.name);
    },
  });
}
