import { yekan } from "@/utils/fonts";
import "./globals.css";

export const metadata = {
  title: "املاک | پروژه sj-next",
  description: "سایت خرید و فروش املاک",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
