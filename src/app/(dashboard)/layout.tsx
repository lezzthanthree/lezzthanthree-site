"use client";

import { Open_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.scss";
import "../../../styles/globals.scss";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const route = usePathname();
    console.log(route);
    return (
        <>
            <header className={styles.dashboard__header}>
                <Link href="/" className={styles.dashboard__home}>
                    <Image
                        src="/img/sp_dedede.png"
                        alt="Logo"
                        width={60}
                        height={60}
                    />
                </Link>
                <nav className={styles.dashboard__nav}>
                    <Link
                        href="/blogs"
                        className={
                            route == "/blogs"
                                ? styles.dashboard__nav_link_selected
                                : styles.dashboard__nav_link
                        }
                    >
                        blogs.
                    </Link>
                    <Link
                        href="/codes"
                        className={
                            route == "/codes"
                                ? styles.dashboard__nav_link_selected
                                : styles.dashboard__nav_link
                        }
                    >
                        codes.
                    </Link>
                    <Link
                        href="/edits"
                        className={
                            route == "/edits"
                                ? styles.dashboard__nav_link_selected
                                : styles.dashboard__nav_link
                        }
                    >
                        edits.
                    </Link>
                    <Link
                        href="/contacts"
                        className={
                            route == "/contacts"
                                ? styles.dashboard__nav_link_selected
                                : styles.dashboard__nav_link
                        }
                    >
                        contacts.
                    </Link>
                </nav>
            </header>
            <main>{children}</main>
        </>
    );
}
