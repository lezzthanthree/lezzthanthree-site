"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Navigation.module.scss";
import Logo from "@/public/img/sp_dedede.png";
import { usePathname } from "next/navigation";

const Navigation = () => {
    const route = usePathname();

    return (
        <header className={styles.dashboard__header}>
            <Link href="/" className={styles.dashboard__home}>
                <Image src={Logo} alt="Logo" width={60} height={60} />
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
    );
};

export default Navigation;
