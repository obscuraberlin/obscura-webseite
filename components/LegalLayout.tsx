import Link from "next/link";
import Footer from "./Footer";

export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-line bg-canvas">
        <div className="container-x flex items-center justify-between py-5">
          <Link href="/" className="text-xl font-extrabold tracking-tight">
            OBSCURA<sup className="text-lime">®</sup>
          </Link>
          <Link href="/" className="text-sm font-medium text-ink/60 hover:text-ink">
            ← Zur Startseite
          </Link>
        </div>
      </header>
      <main className="container-x py-16">
        <nav className="mb-6 text-xs text-ink/40" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-ink">Start</Link> / {title}
        </nav>
        <h1 className="text-display font-extrabold">{title}</h1>
        <div className="prose mt-8 max-w-2xl space-y-4 text-ink/75 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
