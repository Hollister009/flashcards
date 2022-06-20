import { useState } from 'react';
import {
  createContext,
  useContext,
  useContextSelector,
} from 'use-context-selector';

export const FlashCardsContext = createContext(null);

FlashCardsContext.displayName = 'FlashCardsContext';

export const FlashCardsContextProvider = ({ children }) => (
  <FlashCardsContext.Provider value={useState([])}>
    {children}
  </FlashCardsContext.Provider>
);

const categorySelector = (id) => (s) =>
  s[0].find((c) => c.id === id)?.data || [];

export const useCategories = () => useContext(FlashCardsContext);
export const useCategoryById = (id) =>
  useContextSelector(FlashCardsContext, categorySelector(id));
