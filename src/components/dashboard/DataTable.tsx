export default function DataTable() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <h3 className="font-bold mb-4">أحدث الطلبات</h3>
      <table className="w-full text-left">
        <thead><tr className="text-gray-400 text-sm border-b"><th className="pb-3">الطلب</th><th className="pb-3">الحالة</th><th className="pb-3">السعر</th></tr></thead>
        <tbody className="text-sm"><tr><td className="py-4 font-medium">#O2-4412</td><td className="py-4 text-green-500">مكتمل</td><td className="py-4">$129.00</td></tr></tbody>
      </table>
    </div>
  );
}