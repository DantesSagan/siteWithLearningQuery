import { useQuery, useMutation, useQueryClient } from 'react-query';
import RequestFN from '../utils/axios-utils';
import axios from 'axios';

const fetchSuperHeroesQuery = () => {
  //   return axios.get('http://localhost:4000/superheroes');
  return RequestFN({ url: '/superheroes' });
};

const addSuperHero = (hero) => {
  //   return axios.post('http://localhost:4000/superheroes', hero);
  return RequestFN({ url: '/superheroes', method: 'post', data: hero });
};

const deleteSuperHero = (hero) => {
  //   return axios.post('http://localhost:4000/superheroes', hero);
  return RequestFN({ url: '/superheroes', method: 'delete', data: hero });
};
function handleRemovalHeroClick(hero) {
  axios
    .delete(`http://localhost:4000/superheroes/`, { data: hero })
    .then((res, error) => {
      if (error) {
        console.log(error);
      } else {
        console.log(hero);
      }
      if (res.data != null) {
        alert('Deleted success!');
      }
    });
  console.log(hero);
}
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
    onSettled: (error) => {
      queryClient.invalidateQueries('super-heroes');
      if (error) {
        console.log(error);
      }
    },
  });
};

export const useDeleteSuperHeroesAxiosInterceptor = () => {
  return useQuery('super-heroes', handleRemovalHeroClick);
};
