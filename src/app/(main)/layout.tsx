import React from 'react';

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <div className="w-full ml-2 mt-2">{children}</div>
    </div>
  );
};

export default Layout;
