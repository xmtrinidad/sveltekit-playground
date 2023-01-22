import * as db from '$lib/server/db';
import type { PageServerLoad } from './$types';
 
export const load = (async ({ params }) => {

  db.startDB();
  
  console.log('memes load function')
}) satisfies PageServerLoad;