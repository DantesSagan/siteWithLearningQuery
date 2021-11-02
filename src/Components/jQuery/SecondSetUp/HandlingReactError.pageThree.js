import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function HandlingReactError() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const Component = () => {
    const codeString = `
// We are fetching data with axios and use useEffect for this 
// With custom json serve we fetch data and showing it below
// And additionaly we create error message in React what can sent Error message if something goes wrong
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Superheroes() {
const [isLoading, setIsLoading] = useState(true);
const [data, setData] = useState([]);
const [error, setError] = useState('');
  useEffect(() => {
    axios
      .get('http://localhost:4000/superheroes')
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2 className='text-4xl p-4'>Loading...</h2>;
  }

  if (error) {
    return <h2 className='text-4xl p-4'>{error}</h2>;
  }

  return (
    <div>
    <h2 className='text-center text-4xl p-4'>HandlingReactError</h2>
      {data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
      <div></div>
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
  useEffect(() => {
    // if change this url link to
    // http://localhost:4000/superheroes1 or
    // http://localhost:4000/sup
    // What broke url link and the page response with following message like this:
    // "Request failed with status code 404"
    // Until the URL link will be fixed
    axios
      .get('http://localhost:4000/superheroes')
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <h2 className='text-4xl p-4'>Loading...</h2>;
  }
  if (error) {
    return <h2 className='text-4xl p-4'>{error}</h2>;
  }
  const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };

  return (
    <div>
      <h2 className='text-center text-4xl p-4'>HandlingReactError</h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work jQuery <br /> to
        fetch data with axios!
        <br />
        Thits is example to improve how to work Errors if smth goes wrong! With
        React useEffect.
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
      <div className=' text-center text-2xl rounded-lg p-8 border-4 border-blue-700 shadow-inner '>
        <h2 className='text-center text-4xl p-4'>HandlingReactError</h2>
        {data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>;
        })}
      </div>
      <div>
        <Component />
      </div>
    </div>
  );
}
