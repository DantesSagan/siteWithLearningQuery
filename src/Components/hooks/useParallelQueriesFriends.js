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
