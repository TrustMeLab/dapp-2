import { ReactNode } from 'react'

import type { NextPage } from 'next'
import {Connector} from "wagmi";

export enum PageAuth {
  Public, // Anyone can access
  Private, // Only logged users can access
  UnPrivate, // Only unlogged users can access
  Admin, // Only admin users can access
}

export type ExtendedPage<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode
  auth?: PageAuth
}

export type IUser = {
  id: string;
  handle: string;
  address: string;
  description?: IUserDetails;
};

export type IUserDetails = {
  title: string;
  name: string;
  role: string;
  image_url: string;
  video_url?: string;
  about: string;
  skills_raw: string;
};

export type IAccount = {
  address?: `0x${string}`;
  connector?: Connector;
  isConnecting: boolean;
  isReconnecting: boolean;
  isConnected: boolean;
  isDisconnected: boolean;
  status: 'connecting' | 'reconnecting' | 'connected' | 'disconnected';
};