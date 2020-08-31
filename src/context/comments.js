import { createContext, useContext } from 'react';

export const CommentsContext = createContext();

export function useComments() {
  return useContext(CommentsContext);
}
