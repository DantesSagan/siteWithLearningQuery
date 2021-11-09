import { useQuery } from 'react-query';
import axios from 'axios';
const fetchSuperHeroesQuery = () => {
  return axios.get('http://localhost:4000/superheroes');
};
export const SuperHeroesData = (onSuccess, onError) => {
  return useQuery('super-heroes', fetchSuperHeroesQuery, {
    onSuccess,
    onError,
    refetchInterval: 3000,
    select: (data) => {
      return data.data.map((item) => item.name);
    },
  });
};
