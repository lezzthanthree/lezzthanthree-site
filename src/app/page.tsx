import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <main className={styles.home}>
            <Image
                src="/img/sp_dedede.png"
                alt="Logo"
                width={256}
                height={256}
            />
            <nav className={styles.home_nav}>
                <Link className={styles.home_nav_links} href="/blogs">
                    blogs.
                </Link>
                <Link className={styles.home_nav_links} href="/codes">
                    codes.
                </Link>
                <Link className={styles.home_nav_links} href="/edits">
                    edits.
                </Link>
                <Link className={styles.home_nav_links} href="/contacts">
                    contacts.
                </Link>
            </nav>
        </main>
    );
}
