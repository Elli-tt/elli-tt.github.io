export const siteName = 'ElPlugins';
export const siteUrl = 'https://elplugins.com';
export const defaultDescription = 'ElPlugins - For all your plugin needs.';
export const defaultImagePath = '/images/elpluginshdlogo.png';

export const discordUrl = 'https://discord.gg/Fa4BdBvg2c';
export const webstoreUrl = `${siteUrl}/plugins/`;
export const changelogUrl = 'mailto:Elliott@ElPlugins.com';

export const routes = {
  splash: '',
  home: 'home/',
  plugins: 'plugins/',
  faq: 'faq/',
  tos: 'tos/',
  privacy: 'privacy/'
};

export const navItems = [
  { label: 'Home', route: routes.home },
  { label: 'Plugins', route: routes.plugins },
  { label: 'FAQ', route: routes.faq },
  { label: 'ToS', route: routes.tos },
  { label: 'Splash', route: routes.splash }
];

export function withBasePath(base, path = '') {
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;

  return `${normalizedBase}${normalizedPath}`;
}
