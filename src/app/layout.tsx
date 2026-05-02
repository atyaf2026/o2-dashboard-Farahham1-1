import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import DashboardLayout from "@/components/layout/DashboardLayout";

// إعداد الخط
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

// إعدادات الميتا
export const metadata: Metadata = {
  title: "O2 Dashboard Training",
  description: "Training dashboard for O2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={openSans.className}>
        {/* نقوم بتغليف المحتوى بالـ DashboardLayout هنا فقط */}
        <DashboardLayout>
          {children}
        </DashboardLayout>
      </body>
    </html>
  );
}