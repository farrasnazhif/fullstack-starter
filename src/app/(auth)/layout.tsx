export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      id="main-content"
      className="min-h-dvh flex items-center justify-center px-6 py-16"
    >
      {children}
    </main>
  );
}
