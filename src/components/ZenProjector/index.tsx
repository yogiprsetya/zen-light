import { cn } from '@/lib/utils';
import { useStore } from 'state/store';

const useLight = () => {
  return useStore((store) => ({
    light: store.light
  }));
};

export const ZenProjector = () => {
  const { light } = useLight();

  return (
    <div className={cn('w-full h-full', light)}>
      <div />
    </div>
  );
};
