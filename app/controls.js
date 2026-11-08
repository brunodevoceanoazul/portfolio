'use client';

import { useState } from 'react';

export function PrintButton({ label }) {
  return <button className="button button-light" type="button" onClick={() => window.print()}>{label}</button>;
}

export function PressVideo({ label, title }) {
  const [open, setOpen] = useState(false);
  return open ? (
    <iframe
      className="press-frame"
      src="https://www.youtube-nocookie.com/embed/6zPafpwKPs4"
      title={title}
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  ) : <button className="button button-light" type="button" onClick={() => setOpen(true)}>{label}</button>;
}
