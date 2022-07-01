import { ChangeEvent } from 'react';

export type inputHandlerType = {
  input: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clear: () => void;
};
