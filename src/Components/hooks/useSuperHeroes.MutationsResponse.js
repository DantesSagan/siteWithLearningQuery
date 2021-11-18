import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
const fetchSuperHeroesQuery = () => {
  return axios.get('http://localhost:4000/superheroes');
};

const addSuperHero = (hero) => {
  return axios.post('http://localhost:4000/superheroes', hero);
};

export default function SuperHeroesMutationResponse(onSuccess, onError) {
  return useQuery('super-heroes', fetchSuperHeroesQuery, {
    onSuccess,
    onError,
    select: (data) => {
      return data.data.map((item) => item.name);
    },
  });
}
export const useAddSuperHeroesMutationResponse = () => {
    // This is how you can handle MutationsResponse
    // It saves you additional network request 
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onSuccess: (data) => {
      //   queryClient.invalidateQueries('super-heroes');
      queryClient.setQueryData('super-heroes', (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    },
  });
};
