import React from 'react';
import Sidebar from '@/components/sidebar';
import Infobar from '@/components/infobar';

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">
        <Infobar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
