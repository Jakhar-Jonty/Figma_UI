// import React from 'react'
// import { Link } from 'react-router-dom';

// export const Header = (props) => {
//   let menuVal =props.data
//   return (
//     <div className=' justify-between items-center py-4 flex sm:grid sm:grid-cols-2 lg:grid-cols-4'>
//       <div className='sm:order-1'>
//         <Link to='/' className='text-3xl font-bold h-12 '>
//           Brainwave.io
//         </Link>
//       </div>
//       <div className='flex justify-between items-center text-lg font-bold pl-16  h-12 sm:order-3 sm:col-span-2 lg:order-2 sm:p-4 lg:p-0'>

//         {
//         menuVal.map((item,index)=>{
//           return(<Link to={item[0]} className=' hover:text-[#473BF0]' key={index}>{item[1]}</Link>)
//         })
//         }

//       </div>

//       <div className='flex justify-end h-12 sm:order-2 lg:order-3'>
//         <Link to='/log-in' className='w-32 text-[#473BF0] h-12 rounded-lg text-2xl font-bold flex justify-center items-center  hover:text-white hover:bg-[#070341]'>Log In</Link>
//         <Link to='/sign-up' className=' w-32 bg-[#473BF0] h-12 rounded-lg text-2xl text-white font-bold flex justify-center items-center hover:bg-[#070341]'>Sign Up</Link>
//       </div>

//     </div>
//   )
// }
import React from 'react';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  const menuVal = props.data;
  return (
    <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 items-center justify-between py-4 px-4'>
      {/* Logo Section */}
      <div className='sm:order-1'>
        <Link to='/' className='text-2xl sm:text-3xl font-bold'>
          Brainwave.io
        </Link>
      </div>

      {/* Menu Section */}
      <div className='flex flex-col sm:flex-row sm:col-span-2 lg:order-2 justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-4 sm:mt-0'>
        {menuVal.map((item, index) => (
          <Link to={item[0]} className='hover:text-[#473BF0] text-lg font-medium' key={index}>
            {item[1]}
          </Link>
        ))}
      </div>

      {/* Buttons Section */}
      <div className='flex space-x-4 mt-4 sm:mt-0 sm:order-2 lg:order-3'>
        <Link
          to='/log-in'
          className='w-28 sm:w-32 text-[#473BF0] border-2 border-[#473BF0] rounded-lg text-lg font-bold flex justify-center items-center py-2 hover:bg-[#070341] hover:text-white'
        >
          Log In
        </Link>
        <Link
          to='/sign-up'
          className='w-28 sm:w-32 bg-[#473BF0] rounded-lg text-lg text-white font-bold flex justify-center items-center py-2 hover:bg-[#070341]'
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};
