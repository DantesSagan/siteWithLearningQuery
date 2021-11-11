import { Suspense } from 'react';
import { useParams } from 'react-router';
import useSuperHeroData from '../../hooks/useSuperHeroData';
import Loader from '../../fallback/loader';

export default function RQSuperHeroesId() {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroData(heroId);
  if (isLoading) {
    return (
      <Suspense fallback={<Loader />}>
        <h2 className='text-center text-4xl p-4'>Loading...</h2>
      </Suspense>
    );
  }
  if (isError) {
    return (
      <Suspense fallback={<Loader />}>
        <h2 className='text-center text-4xl p-4'>{error.message}</h2>;
      </Suspense>
    );
  }
  return (
    <div>
      <h2 className='text-center text-4xl p-2 m-44'>
        List or SuperHeroes(in this case just one ;)
      </h2>
      <div className='text-center text-2xl rounded-lg p-8 border-4 border-blue-700 shadow-inner '>
        {data?.data.name} - {data?.data.alterEgo}{' '}
      </div>
    </div>
  );
}
