import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <header className='bg-gray-800 text-white text-center py-4'>
        <h1 className='text-2xl font-bold'>Minimalist Personal Blog</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;