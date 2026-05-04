import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  value: string;
  mainIcon: LucideIcon;
  topRightIcon?: LucideIcon;
  topRightText?: string; 
  badge?: string;
  footerText?: string;
  footerIcon?: LucideIcon;
  showProgress?: boolean;
  progressPercentage?: number;
};

export default function StatCard({
  title,
  value,
  mainIcon: MainIcon,
  topRightIcon: TopIcon,
  topRightText = "Active",
  badge,
  footerText,
  footerIcon: FooterIcon,
  showProgress,
  progressPercentage = 66,
  isWide = false// إضافة خاصية للتحكم بالعرض
}: Props) {
  return (
    <div 
      dir="ltr" 
      className={`text-left bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-full ${
        isWide ? 'col-span-2' : ''
      }`}
      style={{ minHeight: '100px' }} // تصغير الارتفاع
    >
      
      {/* الصف العلوي - أصغر */}
      <div className="flex items-center justify-between w-full px-2 pt-2">
        <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
          <MainIcon size={12} /> 
        </div>

        {TopIcon ? (
          <div className="flex items-center gap-0.5 bg-green-50 text-green-600 px-1.5 py-0.5 rounded-full border border-green-100">
            <TopIcon size={7} />
            <span className="text-[7px] font-bold uppercase">{topRightText}</span>
          </div>
        ) : badge ? (
          <span className="bg-green-100 text-green-600 text-[8px] px-1.5 py-0.5 rounded-full font-medium">
            {badge}
          </span>
        ) : null}
      </div>

      {/* العنوان والرقم - ضيق جداً */}
      <div className="px-2">
        <p className="text-[9px] text-gray-400 font-medium">{title}</p>
        <h3 className="text-base font-bold text-gray-800 leading-tight">{value}</h3>
      </div>

      {/* الـ Footer */}
      {footerText && (
        <div className="px-2 pb-2 text-[8px] text-gray-500 font-medium truncate">
          {footerText}
        </div>
      )}

      {/* الخط الأخضر */}
      {showProgress && (
        <div className="w-full h-0.5 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-green-500 transition-all duration-500" 
            style={{ width: `${progressPercentage}%` }} 
          />
        </div>
      )}
    </div>
  );
}