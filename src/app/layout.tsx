import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../../styles/globals.scss";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "lezzthanthree",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={OpenSans.className}>{children}</body>
        </html>
    );
}
