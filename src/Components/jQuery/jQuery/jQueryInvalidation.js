import { useParams } from 'react-router';
import useSuperHeroDataTwo from '../../hooks/useSuperHeroDataTwo';

export default function QueryInvalidationData() {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroDataTwo(heroId);
  if (isLoading) {
    return <h2 className='text-center text-4xl p-4'>Loading...</h2>;
  }
  if (isError) {
    return <h2 className='text-center text-4xl p-4'>{error.message}</h2>;
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
