export default function RecentActivity() {
  const activities = [
    { id: 1, user: "أحمد علي", action: "قام بتسجيل الدخول", time: "منذ 5 دقائق" },
    { id: 2, user: "سارة محمود", action: "أضافت منتج جديد", time: "منذ ساعة" },
    { id: 3, user: "خالد عمر", action: "قام بتحديث الملف الشخصي", time: "منذ ساعتين" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-6">
      <h3 className="text-lg font-semibold mb-4">الأنشطة الأخيرة</h3>
      <div className="space-y-4">
        {activities.map((act) => (
          <div key={act.id} className="flex justify-between border-b pb-2">
            <div>
              <p className="font-medium text-sm">{act.user}</p>
              <p className="text-gray-500 text-xs">{act.action}</p>
            </div>
            <span className="text-gray-400 text-xs">{act.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}