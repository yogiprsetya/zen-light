import { ZenLightEnum } from '@/types/color';
import { createContext, useContext } from 'react';
import { createStore, useStore as useZustandStore } from 'zustand';

interface StoreInterface {
  light: ZenLightEnum;
  setLight: (light: ZenLightEnum) => void;
}

const getDefaultInitialState = () => ({
  light: ZenLightEnum.CANDLE
});

export type StoreType = ReturnType<typeof initializeStore>;

const zustandContext = createContext<StoreType | null>(null);

export const Provider = zustandContext.Provider;

export const useStore = <T>(selector: (state: StoreInterface) => T) => {
  const store = useContext(zustandContext);

  if (!store) throw new Error('Store is missing the provider');

  return useZustandStore(store, selector);
};

export const initializeStore = (preloadedState: Partial<StoreInterface> = {}) => {
  return createStore<StoreInterface>((set) => ({
    ...getDefaultInitialState(),
    ...preloadedState,
    setLight: (light) => set({ light })
  }));
};
