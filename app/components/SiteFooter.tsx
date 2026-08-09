import { contact } from "@/content/resume";

export function SiteFooter() {
  return (
    <footer id="contact" className="site-foot">
      <div className="wrap">
        <div className="foot-inner">
          <div className="foot-copy">
            <h2 className="serif">{contact.heading}</h2>
            <p>{contact.body}</p>
          </div>
          <div className="contacts">
            {contact.links.map((link) => (
              <a key={link.href} href={link.href}>
                <span className="label">{link.label}</span>
                <span className="value">{link.value}</span>
              </a>
            ))}
          </div>
        </div>
        <p className="copyright">{contact.copyright}</p>
      </div>
    </footer>
  );
}
