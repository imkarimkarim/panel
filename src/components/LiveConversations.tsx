import { mockLiveConversations } from "../mocks/liveConversations";

const statusColors = {
  active: "bg-green-100 text-green-700 border-green-300",
  waiting: "bg-yellow-100 text-yellow-700 border-yellow-300",
  ended: "bg-gray-100 text-gray-600 border-gray-300",
};

const statusText = {
  active: "در حال مکالمه",
  waiting: "در انتظار",
  ended: "پایان یافته",
};

const feelMap: Record<string, { label: string; color: string; icon: string }> =
  {
    normal: { label: "عادی", color: "text-blue-500", icon: "🙂" },
    happy: { label: "راضی", color: "text-green-500", icon: "😃" },
    angry: { label: "عصبانی", color: "text-red-500", icon: "😡" },
    confused: { label: "گیج", color: "text-yellow-500", icon: "😕" },
    frustrated: { label: "ناامید", color: "text-orange-500", icon: "😣" },
  };

export const LiveConversations = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-right">مکالمات زنده</h2>
      <div className="flex flex-col gap-4">
        {mockLiveConversations.map((c) => (
          <div
            key={c.id}
            className="flex items-center justify-between bg-white rounded-2xl shadow border border-gray-200 px-6 py-4 transition hover:shadow-lg"
          >
            {/* Main Info */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-xl">{c.title}</h3>
              </div>
              <span className="text-gray-500 text-sm mb-2">
                {c.description}
              </span>
              <div className="flex gap-8 text-gray-600 text-xs">
                <div>
                  <span className="font-semibold">کارشناس:</span> {c.agentName}
                </div>
                <div>
                  <span className="font-semibold">شماره مشتری:</span>{" "}
                  {c.customerNumber}
                </div>
              </div>
            </div>
            {/* Status */}
            <div className={`flex flex-col items-center min-w-[90px] mr-2`}>
              <span
                className={`border rounded-xl px-4 py-2 font-semibold text-sm mb-2 ${
                  statusColors[c.status]
                }`}
              >
                {statusText[c.status]}
              </span>
              <span
                className={`flex items-center gap-1 text-xs font-bold ${
                  feelMap[c.conversationFeel].color
                }`}
              >
                {feelMap[c.conversationFeel].icon}{" "}
                {feelMap[c.conversationFeel].label}
              </span>
            </div>
            {/* Time Info */}
            <div className="flex flex-col items-end min-w-[120px] text-xs text-gray-700">
              <div>
                <span className="font-semibold">زمان شروع:</span> {c.startTime}
              </div>
              <div>
                <span className="font-semibold">مدت:</span> {c.duration}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
