<script lang="ts">
  import { page } from '$app/stores';
  import type { PageData } from "./$types";

  export let data: PageData;

  console.log(data);
</script>

<h2>Things: {$page.params.slug}</h2>