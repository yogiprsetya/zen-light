import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { clientSideRender } from 'utils/clientSideRender';
import { ControlPanel } from 'components/ControlPanel';
import { GetStaticProps } from 'next';
import { initializeStore } from 'state/store';
import { ZenProjector } from 'components/ZenProjector';

const inter = Inter({ subsets: ['latin'] });

function Home() {
  return (
    <main className={cn('w-full h-screen', inter.className)}>
      <ControlPanel />
      <ZenProjector />
    </main>
  );
}

export default clientSideRender(Home);

export const getStaticProps: GetStaticProps = () => {
  const zustandStore = initializeStore();

  return {
    props: {
      // the "stringify and then parse again" piece is required as next.js
      // isn't able to serialize it to JSON properly
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      initialZustandState: JSON.parse(JSON.stringify(zustandStore.getState()))
    }
  };
};
