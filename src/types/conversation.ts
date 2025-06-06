export type ConversationStatus = "active" | "waiting" | "ended";

export type ConversationFeel =
  | "normal"
  | "angry"
  | "happy"
  | "confused"
  | "frustrated";

export type ConversationSentiment = "positive" | "negative" | "neutral";

export interface BaseConversation {
  id: string;
  title: string;
  description: string;
  agentName: string;
  customerNumber: string;
  startTime: string;
  duration: string;
}

export interface LiveConversation extends BaseConversation {
  status: ConversationStatus;
  conversationFeel: ConversationFeel;
}

export interface CategorizedConversation extends BaseConversation {
  sentiment: ConversationSentiment;
  category: string;
  date: string;
}
