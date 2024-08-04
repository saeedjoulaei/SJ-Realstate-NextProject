import { yekan } from "@/utils/fonts";
import "./globals.css";
import Layout from "@/layout/Layout";

export const metadata = {
  title: "املاک | پروژه sj-next",
  description: "سایت خرید و فروش املاک",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <div>
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
}
