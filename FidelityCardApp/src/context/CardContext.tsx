import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Card {
  id: string;
  name: string;
  logo: string;
  barcode: string;
}

interface CardContextProps {
  cards: Card[];
  isLoading: boolean;
  addCard: (card: Card) => void;
  removeCard: (cardId: string) => void;
}

const CardContext = createContext<CardContextProps | undefined>(undefined);

interface CardContextProviderProps {
  children: ReactNode;
}

export const CardContextProvider: React.FC<CardContextProviderProps> = ({ children }) => {
  const [cards, setCards] = useState<Card[]>([
    { id: '1', name: 'Card 1', logo: 'logo1', barcode: '1234567890' },
    { id: '2', name: 'Card 2', logo: 'logo2', barcode: '0987654321' },
    { id: '3', name: 'Card 3', logo: 'logo3', barcode: '1357924680' },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const addCard = (card: Card) => {
    setCards([...cards, card]);
  };

  const removeCard = (cardId: string) => {
    setCards(cards.filter((card) => card.id !== cardId));
  };

  return (
    <CardContext.Provider value={{ cards, isLoading, addCard, removeCard }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCardContext must be used within a CardContextProvider');
  }
  return context;
};