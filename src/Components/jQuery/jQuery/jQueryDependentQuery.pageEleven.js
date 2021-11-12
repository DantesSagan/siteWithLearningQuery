import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};
const fetchCourses = (courses) => {
  return axios.get(`http://localhost:4000/channels`);
};
// const fetchChannels = (channels) => {
//   return axios.get(`http://localhost:4000/channels/${channels}`);
// };
// const fetchCourses = (courses) => {
//   return axios.get(`http://localhost:4000/channels/${courses}`);
// };
export default function QueryDependetQuery({ email, channels }) {
  const onSuccess = (data) => {
    console.log('Count for loop before 4, cancel', data);
  };

  const onError = (error) => {
    console.log(
      'Perfom side effect after after encountering error fetching',
      error
    );
  };
  const {
    data: user,
    isError,
    error,
    isLoading,
    isFetching,
  } = useQuery(['user', email], () =>
    fetchUserByEmail(email, onError, onSuccess)
  );

  const channelId = user?.data.channelId;
  useQuery(
    ['courses', channelId],
    () => fetchCoursesByChannelId(channelId, onError, onSuccess),
    {
      enabled: !!channelId,
    }
  );

  const { data: listOfCourses } = useQuery('listOfCourses', fetchCourses, {
    select: (listCourses) => {
      return listCourses.data.map((item) => {
        return (
          // need to fix problem: 1) add space between words; 2) or just destruct in another array in objects
          <ui className='p-4 list-outside space-y-6' key={item.courses}>
            <li className='space-y-6'>{item.courses}</li>
          </ui>
        );
      });
    },
  });
  // const { data: listCourses } = useQuery(['id', channels], () => {
  //   fetchChannels(channels, onSuccess, onError);
  // });

  // const courses = listCourses?.data.courses;
  // useQuery(
  //   ['listOfCourses', courses],
  //   fetchCourses(courses, onSuccess, onError)
  // );

  if (isLoading || isFetching) {
    return <h2 className='text-center text-4xl p-4'>Loading...</h2>;
  }
  if (isError) {
    return <h2 className='text-center text-4xl p-4'>{error.message}</h2>;
  }
  const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };

  const Component = () => {
    const codeString = `
// In this case we have dependent channelId from email Query
// It might be useful if u need to control you jQuery in another jQuery 
// Otherwise it seem's to hardcoded but i may be wrong
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUserByEmail = (email) => {
  return axios.get('http://localhost:4000/users/$/{email}');
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get('http://localhost:4000/channels/$/{channelId}');
};

export default function QueryDependetQuery({ email }) {
  const onSuccess = (data) => {
    console.log('Count for loop before 4, cancel', data);
  };

  const onError = (error) => {
    console.log(
      'Perfom side effect after after encountering error fetching',
      error
    );
  };
  const {
    data: user,
    isError,
    error,
    isLoading,
    isFetching,
  } = useQuery(['user', email], () =>
    fetchUserByEmail(email, onError, onSuccess)
  );

  const channelId = user?.data.channelId;
  useQuery(
    ['courses', channelId],
    () => fetchCoursesByChannelId(channelId, onError, onSuccess),
    {
      enabled: !!channelId,
    }
  );
  if (isLoading || isFetching) {
    return <h2 className='text-center text-4xl p-4'>Loading...</h2>;
  }
  if (isError) {
    return <h2 className='text-center text-4xl p-4'>{error.message}</h2>;
  }
  const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };
    return (
      <div className='p-4 text-2xl text-center'>{channelId}</div>
    )
    `;
    return (
      <SyntaxHighlighter language='javascript' style={dark}>
        {codeString}
      </SyntaxHighlighter>
    );
  };
  return (
    <div>
      <h2 className='text-center text-4xl p-4'>DependentQuery</h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work jQuery <br />
        with dependent query when <br />
        channelId jQuery === have dependency <br />
        from email jQuery and in this main case!
        <br />
        Thits is example to improve how to work dependent query! With jQuery!
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
      <div className='text-center text-2xl p-8 border-4 border-blue-700 shadow-inner'>
        <h2 className='p-4 text-4xl text-center'>Dependent Query</h2>
        {channelId}
        <h2 className='p-4 text-4xl text-center'>List of Courses:</h2>
        {listOfCourses}
      </div>
      <Component />
    </div>
  );
}
