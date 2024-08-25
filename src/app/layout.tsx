import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./styles/globals.css";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "assignment-bounty",
    description: "hunt homework bounties from all disciplines",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={roboto_mono.className}>{children}</body>
        </html>
    );
}
