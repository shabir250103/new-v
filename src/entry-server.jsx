import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { SiteApp } from './App.jsx';

export function render(pathname) {
  return renderToString(
    <StaticRouter location={pathname}>
      <SiteApp />
    </StaticRouter>,
  );
}
