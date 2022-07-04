import { ChangeEvent } from 'react';

export type inputHandlerType = {
  input: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChangeNumber: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  clear: () => void;
};
