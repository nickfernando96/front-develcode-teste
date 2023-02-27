const concatPaths = (path1 = '', path2 = '') => {
  const path1EndsWithSlash = path1.endsWith('/');
  const path2StartsWithSlash = path2.startsWith('/');
  if (path1EndsWithSlash && path2StartsWithSlash) {
    return path1.substring(0, path1.lastIndexOf('/')) + path2;
  }
  if (!path1EndsWithSlash && !path2StartsWithSlash) {
    return `${path1}/${path2}`;
  }
  return `${path1}${path2}`;
}

export const Uri = {
  concatPaths
};