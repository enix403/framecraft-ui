<script lang="ts">
  import { IconEye } from "@tabler/icons-svelte";
  import clsx from "clsx";

  export let selected: boolean = false;
</script>

<button
  class={clsx("overflow-hidden relative rounded-lg border-4", selected && "border-pink-500")}
>
  <img
    class="h-auto max-w-full"
    src="/plan1.jpg"
    alt=""
  />

  <div class="absolute inset-0">
    <div class="w-full h-full p-2 flex flex-col items-end">
      <button class="btn btn-circle bg-black/40">
        <IconEye />
      </button>
    </div>
  </div>
</button>

<!--

<div>
  <img
    class="h-auto max-w-full rounded-lg border-4 border-pink-500"
    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
    alt=""
  />
</div>
<div>
  <img
    class="h-auto max-w-full rounded-lg"
    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
    alt=""
  />
</div>
<div>
  <img
    class="h-auto max-w-full rounded-lg"
    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
    alt=""
  />
</div>
<div>
  <img
    class="h-auto max-w-full rounded-lg"
    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
    alt=""
  />
</div>
<div>
  <img
    class="h-auto max-w-full rounded-lg"
    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
    alt=""
  />
</div>
<div>
  <img
    class="h-auto max-w-full rounded-lg"
    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
    alt=""
  />
</div>

-->
