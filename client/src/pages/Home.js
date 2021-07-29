import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS } from '../utils/queries';
import ThoughtList from '../components/ThoughtList/ThoughtList.js';

const Home = () => {
  // use useQuery hook to make a query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];
  console.log(thoughts);
  console.log(loading);
  console.log(data);
  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>{/* PRINT THOUGHT LIST */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList thoughts={thoughts} title="some Feed for thought(s)..." />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
