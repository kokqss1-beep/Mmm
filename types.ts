export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  image?: string; // base64
  isError?: boolean;
  groundingMetadata?: GroundingMetadata;
}

export interface GroundingMetadata {
  groundingChunks?: {
    web?: {
      uri: string;
      title: string;
    };
  }[];
}

export interface Conversation {
  id: string;
  title: string;
  date: number; // timestamp
  type: 'CHAT' | 'LIVE';
  messages: Message[];
}

export enum AppMode {
  CHAT = 'CHAT',
  LIVE = 'LIVE'
}

export interface LiveConnectionState {
  isConnected: boolean;
  isStreaming: boolean;
  error?: string;
}