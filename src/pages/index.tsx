import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { clientSideRender } from 'utils/clientSideRender';
import { ZenLightEnum } from '@/types/color';
import { useState } from 'react';
import { ControlPanel } from 'components/ControlPanel';

const inter = Inter({ subsets: ['latin'] });

function Home() {
  const [light, setLight] = useState<ZenLightEnum>(ZenLightEnum.CANDLE);

  return (
    <main className={cn('flex h-screen flex-col items-center justify-between p-24', light, inter.className)}>
      <ControlPanel setLight={setLight} light={light} />
    </main>
  );
}

export default clientSideRender(Home);
