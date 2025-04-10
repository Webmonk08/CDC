'use client';

import { usePathname, useRouter } from 'next/navigation';
import SideNav from './SideNav';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavChange = (section) => {
    const routes = {
      'statistics': '/Statistics',
      'organizations-add': '/Organization/Add',
      'organizations-list': '/Organization/List',
      'admin-add': '/Admin/Add',
      'admin-list': '/Admin/List',
      'analytics': '/Analytics',
      'contentManagement': '/Content',
      'systemSettings': '/Settings',
    };

    if (routes[section]) {
      router.push(routes[section]);
    }
  };

  const userProfile = {
    avatar: '👤',
    name: 'John Doe',
    role: 'Admin',
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div >
        <SideNav
          activeSection={pathname}
          onNavChange={handleNavChange}
          userProfile={userProfile}
        />
      </div>
      <main style={{ flex: 1 }}>
        {children}
      </main>
    </div>
  );
}
