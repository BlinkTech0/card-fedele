import React, { createContext, useContext, useState } from 'react';
import { Promotion } from '../types/Promotion';

interface PromotionContextProps {
  promotions: Promotion[];
  addPromotion: (promotion: Promotion) => void;
  removePromotion: (promotionId: string) => void;
}

const PromotionContext = createContext<PromotionContextProps | undefined>(undefined);

export const PromotionContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [promotions, setPromotions] = useState<Promotion[]>([
    { id: '1', title: 'Promotion 1', description: 'Description for Promotion 1', image: 'image1', startDate: new Date(), endDate: new Date() },
    { id: '2', title: 'Promotion 2', description: 'Description for Promotion 2', image: 'image1', startDate: new Date(), endDate: new Date() },
    { id: '3', title: 'Promotion 3', description: 'Description for Promotion 3', image: 'image1', startDate: new Date(), endDate: new Date() },
  ]);

  const addPromotion = (promotion: Promotion) => {
    setPromotions([...promotions, promotion]);
  };

  const removePromotion = (promotionId: string) => {
    setPromotions(promotions.filter((promotion) => promotion.id !== promotionId));
  };

  const contextValue: PromotionContextProps = {
    promotions,
    addPromotion,
    removePromotion,
  };

  return (
    <PromotionContext.Provider value={contextValue}>
      {children}
    </PromotionContext.Provider>
  );
};

export const usePromotionContext = () => {
  const context = useContext(PromotionContext);
  if (!context) {
    throw new Error('usePromotionContext must be used within a PromotionContextProvider');
  }
  return context;
};