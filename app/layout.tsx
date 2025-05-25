import './globals.css';


export const metadata = {
  title: "CHASEBUILD",
  description: "Website for CHASE Program",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <main className="min-h-screen w-screen overflow-hidden">{children}</main>

      </body>
    </html>
  );
}
