import { NextPage } from 'next';
import dynamic from 'next/dynamic';

export const clientSideRender = (Page: NextPage) => {
  console.log('server');

  if (typeof window !== 'undefined') {
    console.log('client');
  }

  return dynamic(() => Promise.resolve(Page), { ssr: false });
};
