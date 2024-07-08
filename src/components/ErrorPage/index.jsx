import Nav from "../Nav";
import Footer from "../Footer";

function ErrorPage() {
    return (
        <>
            <Nav />
            <main className="mx-3">
                <h1>404</h1>
                <p>Page not found</p>
            </main>
            <Footer />
        </>
    );
}

export default ErrorPage;
