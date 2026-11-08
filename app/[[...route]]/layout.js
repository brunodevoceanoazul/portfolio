import { content } from '../content.js';
import '../site.css';

export default async function Layout({ children, params }) {
  const { route } = await params;
  const lang = route?.[0] === 'en' ? content.en.lang : content.pt.lang;
  return <html lang={lang}><body>{children}</body></html>;
}
