import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NotFoundPage from "./NotFoundPage";

export default function NotFound() {
  return (
    <>
      <a href="#not-found-main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="not-found-main">
        <NotFoundPage />
      </main>
      <Footer />
    </>
  );
}
