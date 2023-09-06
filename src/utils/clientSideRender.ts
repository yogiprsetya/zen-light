import { NextPage } from 'next';
import dynamic from 'next/dynamic';

export const clientSideRender = (Page: NextPage) => {
  return dynamic(() => Promise.resolve(Page), { ssr: false });
};
