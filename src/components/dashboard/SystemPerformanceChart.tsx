export default function SystemPerformanceChart() {
  // بيانات تجريبية لارتفاع الأعمدة
  const bars = [40, 60, 30, 85, 45, 60, 50, 90, 70];
  
  return (
    <div className="flex items-end justify-between gap-1 h-32 w-full mt-4">
      {bars.map((height, index) => (
        <div 
          key={index} 
          className={`w-full rounded-t-sm transition-all duration-500 ${index % 2 === 0 ? 'bg-indigo-600' : 'bg-indigo-100'}`}
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}