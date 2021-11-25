import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTESINNTER from '../routesInner/routes';

export default function NavBarJQuery() {
  useEffect(() => {
    const btn = document.querySelector('.mobilemenu');
    const sidebar = document.querySelector('.sidebar');

    btn.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');
    });
  }, []);
  return (
    <header className='relative md:flex'>
      <div
        className='bg-red-300 flex justify-between m-4 md:m-2 md:block rounded-lg xl:hidden'
        style={{ top: 0, right: 0, position: 'fixed' }}
      >
        <span className='block p-4 md:p-2 font-bold'>
          Menu for <br />
          sidebar
        </span>
        <button className='p-4 md:p-2 hover:outline-none hover:bg-red-500 mobilemenu'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>
      <div
        className=' transform -translate-x-full transition duration-200 ease-in-out xl:relative xl:translate-x-0  sidebar m-4 xl:m-2 absolute grid grid-cols-1 p-2 m-2 rounded-2xl border-black xl:hidden'
        id='navbar'
      >
        <div
          id='navOne'
          className='col-span-4 button'
          style={{ backgroundColor: 'white', color: 'black' }}
        >
          <div>
            <Link to={ROUTESINNTER.SetUpMain}>Home(jQuery)</Link>
          </div>
        </div>

        <div className=' p-2 rounded-lg' style={{ display: 'inline-block' }}>
          <hr className='border-2 border-white mb-4' />
          <button
            className='buttonM dropdown hover:border-red-600'
            style={{ display: 'inline-block', backgroundColor: 'white' }}
          >
            jQueryFetching <br />
            Data
            <div className='dropdown-content'>
              <div className='button'>
                <Link to={ROUTESINNTER.SetUpSuperHeroes}>SuperHeroes</Link>
              </div>
              <div className='button'>
                <Link to={ROUTESINNTER.SetUpRQSuperHeroes}>
                  Fetching Data with useQuery
                </Link>
              </div>
            </div>
          </button>{' '}
        </div>

        <div
          className='col-span-4 p-2 rounded-lg'
          style={{ display: 'inline-block' }}
        >
          <button
            className='buttonM dropdown hover:border-red-600'
            style={{ display: 'inline-block', backgroundColor: 'white' }}
          >
            jQueryErrors <br />
            Data
            <div className='dropdown-content'>
              <div className='button'>
                <Link to={ROUTESINNTER.SetUpHandlingReactError}>
                  HandlingReactError
                </Link>
              </div>
              <div className='button'>
                <Link to={ROUTESINNTER.SetUpHandlingQueryError}>
                  HandlingQueryError
                </Link>
              </div>
            </div>
          </button>{' '}
        </div>

        <div
          className='col-span-4 p-2 rounded-lg'
          style={{ display: 'inline-block' }}
        >
          <button
            className='buttonM dropdown hover:border-red-600'
            style={{ display: 'inline-block', backgroundColor: 'white' }}
          >
            jQueryDevTools
            <div className='dropdown-content'>
              <div className='button'>
                <Link to={ROUTESINNTER.SetUpjQueryDevTools}>
                  SetUpjQueryDevTools
                </Link>
              </div>

              <div className='button'>
                <Link to={ROUTESINNTER.SetUpjQueryRefetchDefaults}>
                  SetUpjQueryRefetchDefaults
                </Link>
              </div>

              <div className='button'>
                <Link to={ROUTESINNTER.SetUpjQueryIntervalRefetch}>
                  SetUpjQueryIntervalRefetch
                </Link>
              </div>

              <div className='button'>
                <Link to={ROUTESINNTER.SetUpjQueryOnClick}>
                  SetUpjQueryOnClick
                </Link>
              </div>

              <div className='button'>
                <Link to={ROUTESINNTER.SetUpjQueryOnSuccessOnError}>
                  SetUpjQueryOnSuccessOnError
                </Link>
              </div>

              <div className='button'>
                <Link to={ROUTESINNTER.SetRQSuperHeroesTwo}>
                  SetRQSuperHeroesTwo
                </Link>
              </div>
            </div>
          </button>{' '}
        </div>

        <div
          className='col-span-4 p-2 rounded-lg'
          style={{ display: 'inline-block' }}
        >
          <button
            className='buttonM dropdown hover:border-red-600'
            style={{ display: 'inline-block', backgroundColor: 'white' }}
          >
            jQueryParallel <br />
            Queries
            <div className='dropdown-content'>
              <div className='button'>
                <Link to={ROUTESINNTER.SetUpParallelQueries}>
                  ParallelQueries
                </Link>
              </div>

              <div className='button'>
                <Link to={ROUTESINNTER.SetUpDynamicParallelQueries}>
                  DynamicParallelQueries
                </Link>
              </div>

              <div className='button'>
                <Link to={ROUTESINNTER.SetUpDependetQuery}>DependetQuery</Link>
              </div>
            </div>
          </button>{' '}
        </div>

        <div
          className='col-span-4 p-2 rounded-lg'
          style={{ display: 'inline-block' }}
        >
          <button
            className='buttonM dropdown hover:border-red-600'
            style={{ display: 'inline-block', backgroundColor: 'white' }}
          >
            jQueryInitial <br />
            Queries
            <div className='dropdown-content'>
              <div className='button'>
                <Link to={ROUTESINNTER.SetUpInitialQueryData}>
                  InitialQueryData
                </Link>
              </div>
              <div className='button'>
                <Link to={ROUTESINNTER.SetUpPaginatedQueries}>
                  PaginatedQueries
                </Link>
              </div>
              <div className='button'>
                <Link to={ROUTESINNTER.SetUpInfiniteQueries}>
                  InfiniteQueries
                </Link>
              </div>
            </div>
          </button>{' '}
        </div>
        <div
          className='col-span-4 p-2 rounded-lg'
          style={{ display: 'inline-block' }}
        >
          <button
            className='buttonM dropdown hover:border-red-600'
            style={{ display: 'inline-block', backgroundColor: 'white' }}
          >
            jQueryMutations <br />
            Queries
            <div className='dropdown-content'>
              <div className='button'>
                <Link to={ROUTESINNTER.SetRQSuperHeroesMutations}>
                  MutationsQueries
                </Link>
              </div>
              <div className='button'>
                <Link to={ROUTESINNTER.SetRQSuperHeroesInvalidation}>
                  InvalidationQueries
                </Link>
              </div>
              <div className='button'>
                <Link to={ROUTESINNTER.SetRQSuperHeroesMutationResponse}>
                  MutationReponseQueries
                </Link>
              </div>
              <div className='button'>
                <Link to={ROUTESINNTER.SetRQSuperHeroesOptimisticMutation}>
                  OptimisticMutation
                </Link>
              </div>
              <div className='button'>
                <Link to={ROUTESINNTER.SetRQSuperHeroesAxiosInterceptor}>
                  AxiosInterceptor
                </Link>
              </div>
            </div>
          </button>{' '}
        </div>
      </div>
    </header>
  );
}
