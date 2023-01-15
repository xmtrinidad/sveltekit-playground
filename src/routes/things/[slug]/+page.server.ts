import type { PageServerLoad } from './$types';

export const load = (async ( { params } ) => {
  console.log(params);
}) satisfies PageServerLoad