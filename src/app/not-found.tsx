import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="max-w-xl rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-10 text-center shadow-[var(--shadow-soft)]">
        <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-terracotta)]">Página no encontrada</p>
        <h1 className="mt-4 font-[family-name:var(--font-heading)] text-5xl text-[var(--color-ink)]">
          Esta ruta todavía no forma parte de la experiencia.
        </h1>
        <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
          La base del proyecto ya está lista para crecer desde aquí.
        </p>
        <Link
          className="mt-8 inline-flex rounded-full border border-[var(--color-line)] px-5 py-3 text-sm font-semibold transition hover:border-[var(--color-terracotta)] hover:text-[var(--color-terracotta)]"
          href="/"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
