import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <nav>
                <Link href="/blogs">blogs.</Link>
                <a href="/codes">codes.</a>
                <a href="/edits">edits.</a>
                <a href="/contacts">contacts.</a>
            </nav>
        </main> 
    );
}
