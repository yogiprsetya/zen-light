import { cn } from '@/lib/utils';
import { useStore } from 'state/store';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import { useEffect, useState } from 'react';
import ReactNoSleep from 'react-no-sleep';

const useLight = () => {
  return useStore((store) => ({
    light: store.light
  }));
};

export const ZenProjector = () => {
  const { light } = useLight();
  const { toast } = useToast();
  const [keepOnAllowed, setKeepOnAllowed] = useState<boolean>(false);

  useEffect(() => {
    const cleanUp = setTimeout(() => {
      if (!keepOnAllowed) {
        toast({
          title: 'Need Permission!',
          duration: 1000 * 60 * 15,
          description: 'We need your permission to keep screen alive.',
          action: (
            <ReactNoSleep>
              {({ enable }) => (
                <ToastAction
                  altText="Allow"
                  onClick={() => {
                    setKeepOnAllowed(true);
                    enable();
                  }}
                >
                  Allow
                </ToastAction>
              )}
            </ReactNoSleep>
          )
        });
      }
    }, 1000);

    return () => clearTimeout(cleanUp);
  }, [keepOnAllowed, toast]);

  return <div className={cn('w-full h-full', light)} />;
};
