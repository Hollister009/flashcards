import { createContext, useState, useContext } from 'react';

export const FlashCardsContext = createContext(null);

FlashCardsContext.displayName = 'FlashCardsContext';

export const FlashCardsProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const value = [categories, setCategories];

  return (
    <FlashCardsContext.Provider value={value}>
      {children}
    </FlashCardsContext.Provider>
  );
};


export const useFlashCards = () => {
  const context = useContext(FlashCardsContext);
  if (context === undefined) {
    throw new Error('useFlashCards must be used within a FlashCardsProvider');
  }
  return context;
};
