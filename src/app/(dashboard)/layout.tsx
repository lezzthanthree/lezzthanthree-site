import "../../../styles/globals.scss";
import Navigation from "@/components/Navigation";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navigation />
            <main>{children}</main>
        </>
    );
}
