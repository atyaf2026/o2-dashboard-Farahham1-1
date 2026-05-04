import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Sidebar from "@/components/layout/Sidebar";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr"> {/* تأكدي أن الاتجاه ltr هنا */}
      <body className="flex min-h-screen">
        <Sidebar /> {/* السايدبار سيظهر تلقائياً على اليسار */}
        <main className="flex-1 bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}