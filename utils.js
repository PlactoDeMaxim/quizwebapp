export function createPageUrl(pageName) {
  const basePath = '/';
  if (pageName === 'Home') {
    return basePath;
  }
  return `${basePath}${pageName.toLowerCase()}`;
}

