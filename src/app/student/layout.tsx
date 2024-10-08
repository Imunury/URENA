import RootLayout from "../components/layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout>
      {children}
    </RootLayout>
  );
}
