import { nav, site } from "@/content/resume";

export function SiteHeader() {
  return (
    <header className="site-head">
      <div className="wrap head-inner">
        <p className="brand">
          <span className="brand-name">{site.name}</span>
          <span className="brand-role">
            {site.role} · {site.field}
          </span>
        </p>
        <a className="cta" href="#contact">
          문의
        </a>
        <nav className="nav" aria-label="주요 섹션">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
