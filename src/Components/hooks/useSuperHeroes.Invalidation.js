import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
const fetchSuperHeroesQuery = () => {
  return axios.get('http://localhost:4000/superheroes');
};

const addSuperHero = (hero) => {
  return axios.post('http://localhost:4000/superheroes', hero);
};

export default function SuperHeroesDataInvalidation(onSuccess, onError) {
  return useQuery('super-heroes', fetchSuperHeroesQuery, {
    onSuccess,
    onError,
    select: (data) => {
      return data.data.map((item) => item.name);
    },
  });
}
export const useAddSuperHeroesDataInValidation = () => {
  // By invalidating the Query
  // React Query will refetch the super-heroes query
  // In a simple words that means:
  // When you write to both input's values and click to button "add Hero"
  // React Query automatically refetch data and add to db.json this value's what be written to it
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onSuccess: () => {
      queryClient.invalidateQueries('super-heroes');
    },
  });
};
