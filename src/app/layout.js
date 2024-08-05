import { yekan } from "@/utils/fonts";
import "./globals.css";
import Layout from "@/layout/Layout";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata = {
  title: "املاک | پروژه sj-next",
  description: "سایت خرید و فروش املاک",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <div>
          <NextAuthProvider>
            <Layout>{children}</Layout>
          </NextAuthProvider>
        </div>
      </body>
    </html>
  );
}
