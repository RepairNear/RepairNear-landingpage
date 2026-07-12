import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <div className="container-page py-24">
          <h1 className="text-4xl font-extrabold tracking-tight">
            RepairNear landing page
          </h1>
          <p className="mt-4 text-ink-soft">
            Sprint 2 shell is in place — nav and footer are live. Sections come
            next.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
