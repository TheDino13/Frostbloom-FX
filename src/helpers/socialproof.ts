import { Constants } from '../constants';
import { DataProvider } from '../enum';
import { APIStatus, APITikTokStatus, APITwitterStatus } from '../types/types';
import { formatNumber } from './utils';

export const getSocialProof = (status: APIStatus): string | null => {
   return '\u200b'; 
};

export const getActivitySocialProof = (status: APIStatus): string | null => {
  return '\u200b';
};

export const getSocialTextIV = (status: APITwitterStatus): string | null => {
  return '\u200b';
};