import { useState } from "react";
import type { ConversationSentiment } from "../types/conversation";
import { mockCategorizedConversations } from "../mocks/conversations";

const sentimentColors = {
  positive: "bg-green-100 text-green-700 border-green-300",
  negative: "bg-red-100 text-red-700 border-red-300",
  neutral: "bg-gray-100 text-gray-600 border-gray-300",
};

const sentimentIcons = {
  positive: "😊",
  negative: "😞",
  neutral: "😐",
};

export const CategorizedConversations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSentiment, setSelectedSentiment] = useState<
    ConversationSentiment | "all"
  >("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const filteredConversations = mockCategorizedConversations
    .filter((conv) => {
      const matchesSearch =
        conv.category.includes(searchTerm) ||
        conv.description.includes(searchTerm) ||
        conv.agentName.includes(searchTerm) ||
        conv.customerNumber.includes(searchTerm);

      const matchesSentiment =
        selectedSentiment === "all" || conv.sentiment === selectedSentiment;

      return matchesSearch && matchesSentiment;
    })
    .sort((a, b) => {
      const dateA = new Date(
        a.date.replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
      );
      const dateB = new Date(
        b.date.replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
      );
      return sortOrder === "newest"
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    });

  return (
    <div>
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="جستجو در دسته‌بندی، خلاصه، کارشناس یا شماره مشتری..."
          className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={selectedSentiment}
          onChange={(e) =>
            setSelectedSentiment(
              e.target.value as ConversationSentiment | "all"
            )
          }
        >
          <option value="all">همه احساسات</option>
          <option value="positive">راضی</option>
          <option value="negative">ناراضی</option>
          <option value="neutral">خنثی</option>
        </select>
        <select
          className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
        >
          <option value="newest">جدیدترین</option>
          <option value="oldest">قدیمی‌ترین</option>
        </select>
      </div>

      <div className="flex flex-col gap-4">
        {filteredConversations.map((conv) => (
          <div
            key={conv.id}
            className="flex items-center justify-between bg-white rounded-2xl shadow border border-gray-200 px-6 py-4 transition hover:shadow-lg"
          >
            {/* Main Info */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-xl">{conv.category}</h3>
              </div>
              <span className="text-gray-500 text-sm mb-2">
                {conv.description}
              </span>
              <div className="flex gap-8 text-gray-600 text-xs">
                <div>
                  <span className="font-semibold">کارشناس:</span>{" "}
                  {conv.agentName}
                </div>
                <div>
                  <span className="font-semibold">شماره مشتری:</span>{" "}
                  {conv.customerNumber}
                </div>
              </div>
            </div>

            {/* Sentiment */}
            <div className="flex flex-col items-center min-w-[90px] mr-2">
              <span
                className={`border rounded-xl px-4 py-2 font-semibold text-sm mb-2 ${
                  sentimentColors[conv.sentiment]
                }`}
              >
                {sentimentIcons[conv.sentiment]}
              </span>
            </div>

            {/* Time Info */}
            <div className="flex flex-col items-end min-w-[120px] text-xs text-gray-700">
              <div>
                <span className="font-semibold">تاریخ:</span> {conv.date}
              </div>
              <div>
                <span className="font-semibold">مدت:</span> {conv.duration}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
