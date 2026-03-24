import { Constants } from '../constants';
import { DataProvider } from '../enum';
import { APIStatus, APITikTokStatus, APITwitterStatus } from '../types/types';
import { formatNumber } from './utils';

export const getSocialProof = (status: APIStatus): string | null => {
   return null;
};

export const getActivitySocialProof = (status: APIStatus): string | null => {
  return null;
};

/* The embed "author" text we populate with replies, reposts, and likes unless it's a video */
export const getSocialTextIV = (status: APITwitterStatus): string | null => {
  return null;
};
