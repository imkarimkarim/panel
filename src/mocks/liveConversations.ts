import type { LiveConversation } from "../types/conversation";

export const mockLiveConversations: LiveConversation[] = [
  {
    id: "1",
    title: "مشکل در پرداخت آنلاین",
    description: "مشتری در مورد مشکل پرداخت آنلاین در سایت سوال می‌پرسد",
    status: "active",
    startTime: "14:30",
    duration: "00:05:23",
    agentName: "علی محمدی",
    customerNumber: "09123456789",
    conversationFeel: "frustrated",
  },
  {
    id: "2",
    title: "درخواست استرداد وجه",
    description: "مشتری درخواست استرداد وجه برای خرید ناموفق دارد",
    status: "waiting",
    startTime: "14:35",
    duration: "00:02:15",
    agentName: "مریم احمدی",
    customerNumber: "09187654321",
    conversationFeel: "angry",
  },
  {
    id: "3",
    title: "سوال در مورد محصول جدید",
    description: "مشتری در مورد ویژگی‌های محصول جدید سوال می‌پرسد",
    status: "active",
    startTime: "14:40",
    duration: "00:03:45",
    agentName: "رضا کریمی",
    customerNumber: "09123456790",
    conversationFeel: "happy",
  },
];
