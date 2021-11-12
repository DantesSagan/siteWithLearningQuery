import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useQueries } from 'react-query';
import axios from 'axios';

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export default function DynamicParallelPage({ heroIds }) {
  const queryResult = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );
  console.log({ queryResult });

  const Component = () => {
    const codeString = `
import { useQueries } from 'react-query';
import axios from 'axios';

const fetchSuperHero = (heroId) => {
  return axios.get('http://localhost:4000/superheroes/$/{heroId}');
};

export default function DynamicParallelPage({ heroIds }) {
  const queryResult = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );
  console.log({ queryResult });
return (
    <div>
      <div className='text-center text-2xl rounded-lg p-8 border-4 border-blue-700 shadow-inner '>
        DynamicParallelQueries
        <br />
        to see what happening open console and find log of <i>
          queryResult
        </i>{' '}
        and u will see strings [1, 3] what was declared
      </div>
    </div>
  );
}

  `;
    return (
      <SyntaxHighlighter language='javascript' style={dark}>
        {codeString}
      </SyntaxHighlighter>
    );
  };

  const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };

  return (
    <div>
      <h2 className='text-center text-4xl p-4'>DynamicParallelQueries</h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work jQuery <br />
        with using "useQueries" to achieve it and get db.json by id what are u
        looking for if u want to use it.
        <br />
        Thits is example to improve how to work refetch data ! With jQuery!
      </h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-center text-3xl p-4'>
        And{' '}
        <i
          onClick={ScrollDown}
          className='italic 
          py-1 px-2
          text-white rounded-lg shadow-md
          bg-blue-500 
          hover:bg-blue-700 focus:outline-none '
          style={{ cursor: 'pointer' }}
        >
          example
        </i>{' '}
        below how it code works!
      </h2>
      <div className='text-center text-2xl rounded-lg p-8 border-4 border-blue-700 shadow-inner '>
        DynamicParallelQueries
        <br />
        to see what happening open console and find log of <i>
          queryResult
        </i>{' '}
        and u will see strings [1, 3] what was declared
      </div>
      <Component />
    </div>
  );
}
