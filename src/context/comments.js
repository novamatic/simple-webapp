import { createContext, useContext } from 'react';

export const commentsContext = createContext();

export function useComments() {
  return useContext(commentsContext);
}
