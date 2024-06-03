import { ReactNode } from 'react';
import { Header } from './components/Header';
import { useAuth } from './hooks/useAuth';
import { HeaderFeed } from './components/HeaderFeed';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { signedIn } = useAuth();

  return (
    <>
      {signedIn ? <HeaderFeed /> : <Header />}
      <main>{children}</main>
    </>
  );
}
