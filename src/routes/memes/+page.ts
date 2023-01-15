import type { PageLoad } from './$types';
// export const ssr = false;
// export const csr = false;

export const load = (({ params, url }) => {
  console.log(url);
}) satisfies PageLoad