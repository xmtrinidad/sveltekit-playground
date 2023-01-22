import type { PageLoad } from './$types';
// export const ssr = false;
// export const csr = false;

export const load = (({ params, url, route }) => {
  console.log(route);

  return {
    thing: 'returned from the load'
  }
}) satisfies PageLoad