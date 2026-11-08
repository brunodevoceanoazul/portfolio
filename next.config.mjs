const basePath = process.env.PAGES_BASE_PATH || '';

export default {
  output: 'export',
  trailingSlash: true,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  poweredByHeader: false,
};
