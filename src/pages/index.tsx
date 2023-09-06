import { Inter } from 'next/font/google';
import { cn } from 'lib/utils';
import { clientSideRender } from 'lib/clientSideRender';
import { Button } from '@/components/ui/button';

const inter = Inter({ subsets: ['latin'] });

function Home() {
  return (
    <main
      className={cn('flex min-h-screen flex-col items-center justify-between p-24', inter.className)}
    ></main>
  );
}

export default clientSideRender(Home);
