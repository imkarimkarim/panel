export type ConversationStatus = "active" | "waiting" | "ended";

export type ConversationFeel =
  | "normal"
  | "angry"
  | "happy"
  | "confused"
  | "frustrated";

export interface LiveConversation {
  id: string;
  title: string;
  description: string;
  status: ConversationStatus;
  startTime: string;
  duration: string;
  agentName: string;
  customerNumber: string;
  conversationFeel: ConversationFeel;
}
