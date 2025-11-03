export const metadata = {
  title: "Home Meta Information",
  description: "Home Meta Description",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html>
        <body>
          <header></header>
          <main style={{ backgroundColor: "aliceblue", color: "white" }}>
            {children}
          </main>
          <footer></footer>
        </body>
      </html>
    </>
  );
}
