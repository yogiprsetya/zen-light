import { ZenLightEnum } from '@/types/color';
import { cn } from '@/lib/utils';
import { ArrowLeftCircle, Palette } from 'lucide-react';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { useOutsideEvent } from 'hooks/useOutsideEvent';
import { useStore } from 'state/store';

const useLight = () => {
  return useStore((store) => ({
    light: store.light,
    setLight: store.setLight
  }));
};

export const ControlPanel = () => {
  const { light, setLight } = useLight();
  const [openColorPanel, setOpenColorPanel] = useState<boolean>(false);
  const wrap = useOutsideEvent(() => setOpenColorPanel(false));

  return (
    <aside className="absolute left-6 sm:left-2 top-1/2 transform -translate-y-1/2">
      <div className="flex sm:flex-col" ref={wrap}>
        <Collapsible open={openColorPanel} onOpenChange={setOpenColorPanel}>
          <div className="flex items-center justify-between gap-2">
            <CollapsibleTrigger asChild>
              <Button className="h-auto sm:px-2">
                <div
                  className={cn(
                    'w-10 h-10 sm:h-8 sm:w-8 rounded-full flex items-center justify-center text-black',
                    light
                  )}
                >
                  {openColorPanel ? <ArrowLeftCircle /> : <Palette />}
                </div>

                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>

            <CollapsibleContent className="space-y-2">
              <div className="flex sm:flex-col p-2 gap-1 bg-zinc-950/50 rounded">
                {Object.values(ZenLightEnum).map((color) => (
                  <button key={color} onClick={() => setLight(color)} aria-label={color}>
                    <div className={cn('w-10 h-10 rounded-full', color)} />
                  </button>
                ))}
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>
      </div>
    </aside>
  );
};
