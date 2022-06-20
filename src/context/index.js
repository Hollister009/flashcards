import { createContext, useState, useContext } from 'react';

export const FlashCardsContext = createContext(null);

FlashCardsContext.displayName = 'FlashCardsContext';

export const FlashCardsProvider = ({ children }) => (
  <FlashCardsContext.Provider value={useState([])}>
    {children}
  </FlashCardsContext.Provider>
);

export const useFlashCards = () => {
  const context = useContext(FlashCardsContext);
  if (context === undefined) {
    throw new Error('useFlashCards must be used within a FlashCardsProvider');
  }
  return context;
};
