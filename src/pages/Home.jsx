import React from 'react';
import { useNavigate } from 'react-router-dom';

const values = ['CRUD', 'TODO', 'DARK THEME', 'COUNTER APP'];

const Home = () => {
  const navigate = useNavigate(); 
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 p-6 gap-4'>
      {values.map((value, index) => (
        <div
          key={index}
          className='max-w-sm rounded overflow-hidden shadow-lg bg-white p-5 relative cursor-pointer hover:shadow-xl transition-shadow duration-300'
          onClick={() => navigate(`/${value}`)} 
        >
          <h2 className='text-xl font-bold mb-2'>{value}</h2>
          <p className='text-gray-700'>Click to navigate to {value} page</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
