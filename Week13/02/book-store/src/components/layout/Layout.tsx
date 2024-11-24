import Footer from "../common/Footer";
import Header from "../common/Header";

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({children}: LayoutProps) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;