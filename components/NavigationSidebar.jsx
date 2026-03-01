import { useState } from 'react';
import { useRouter } from 'next/router';

// All 11 navigation items for OpenClaw Control Board
const NAV_ITEMS = [
  { id: 'control',    label: 'Command Center',  icon: '⚡', href: '/' },
  { id: 'openclaw',   label: 'Custom Commands', icon: '⌘', href: '/commands' },
  { id: 'businesses', label: 'Business Board',  icon: '◉', href: 'https://vizard-clips-app.vercel.app/businesses' },
  { id: 'team',       label: 'Team Board',      icon: '▦', href: 'https://kanban-rho-ivory.vercel.app' },
  { id: 'vault',      label: 'Operator Vault',  icon: '□', href: 'https://vizard-clips-app.vercel.app/vault' },
  { id: 'projects',   label: 'Project Board',   icon: '▶', href: 'https://vizard-clips-app.vercel.app/projects' },
  { id: 'articles',   label: 'Article Board',   icon: '◈', href: 'https://vizard-clips-app.vercel.app/articles' },
  { id: 'ideas',      label: 'Idea Board',      icon: '☆', href: 'https://vizard-clips-app.vercel.app/ideas' },
  { id: 'video',      label: 'Video Cue',       icon: '⊞', href: 'https://vizard-clips-app.vercel.app/dashboard' },
  { id: 'shopping',   label: 'Wish List',       icon: '⊡', href: 'https://vizard-clips-app.vercel.app/shopping' },
  { id: 'bookmarks',  label: 'Resource Library',icon: '▣', href: 'https://vizard-clips-app.vercel.app/bookmarks' },
];

export default function NavigationSidebar() {
  const { pathname } = useRouter();
  const [hoveredItem, setHoveredItem] = useState(null);

  const sidebarStyle = {
    width: '56px',
    height: '100%',
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
    borderRight: '1px solid #1f2937',
    display: 'flex',
    flexDirection: 'column'
  };

  const logoContainerStyle = {
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid #1f2937'
  };

  const logoStyle = {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const navStyle = {
    flex: 1,
    paddingTop: '8px',
    paddingBottom: '8px'
  };

  return (
    <div style={sidebarStyle}>
      {/* Logo */}
      <div style={logoContainerStyle}>
        <div style={logoStyle}>
          <span style={{ color: 'white', fontSize: '12px', fontWeight: 'bold' }}>P</span>
        </div>
      </div>

      {/* Nav Items */}
      <nav style={navStyle}>
        {NAV_ITEMS.map((item) => {
          const isExternal = item.href.startsWith('http');
          const isActive = pathname === item.href;
          
          const linkStyle = {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '48px',
            color: isActive ? '#c084fc' : '#6b7280',
            backgroundColor: isActive ? '#111827' : 'transparent',
            textDecoration: 'none',
            transition: 'all 0.2s',
            cursor: 'pointer'
          };

          const tooltipStyle = {
            position: 'absolute',
            left: '100%',
            marginLeft: '8px',
            padding: '6px 12px',
            backgroundColor: '#111827',
            color: 'white',
            fontSize: '12px',
            fontWeight: '500',
            borderRadius: '6px',
            whiteSpace: 'nowrap',
            zIndex: 50,
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.3)',
            border: '1px solid #374151'
          };

          const arrowStyle = {
            position: 'absolute',
            left: '0',
            top: '50%',
            transform: 'translate(-4px, -50%)',
            width: 0,
            height: 0,
            borderTop: '5px solid transparent',
            borderBottom: '5px solid transparent',
            borderRight: '5px solid #111827'
          };

          const content = (
            <>
              <span style={{ fontSize: '18px', fontWeight: '300' }}>{item.icon}</span>
              
              {hoveredItem === item.id && (
                <div style={tooltipStyle}>
                  {item.label}
                  <div style={arrowStyle} />
                </div>
              )}
            </>
          );

          if (isExternal) {
            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => {
                  setHoveredItem(item.id);
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.backgroundColor = '#111827';
                }}
                onMouseLeave={(e) => {
                  setHoveredItem(null);
                  if (!isActive) {
                    e.currentTarget.style.color = '#6b7280';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {content}
              </a>
            );
          }

          return (
            <a
              key={item.id}
              href={item.href}
              style={linkStyle}
              onMouseEnter={(e) => {
                setHoveredItem(item.id);
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.backgroundColor = '#111827';
              }}
              onMouseLeave={(e) => {
                setHoveredItem(null);
                if (!isActive) {
                  e.currentTarget.style.color = '#6b7280';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {content}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

