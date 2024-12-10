<script>
  import { IconArrowRight } from "@tabler/icons-svelte";
  import SingleDesign from "./SingleDesign.svelte";
</script>

<div
  class="p-10 pt-8 overflow-y-auto max-h-full flex flex-col items-center w-full"
>
  <div class="mb-12 text-4xl font-semibold">
    <h1
      class="bg-gradient-to-r from-pink-600 via-purple-400 to-blue-500 inline-block text-transparent bg-clip-text"
    >
      Pick a design to get started
    </h1>
  </div>
  <!-- <h2 class="">Pick a design to get started</h2> -->

  <div class="grid grid-cols-3 gap-x-6 gap-y-8 max-w-4xl">
   <SingleDesign selected />
   <SingleDesign />
   <SingleDesign/>
   <SingleDesign />
   <SingleDesign />
   <SingleDesign />
  </div>

  <button
    type="button"
    class="btn w-full max-w-2xl btn-secondary py-6 mt-12 gap-x-2 "
  >
    <strong>Continue with this design</strong>
    <IconArrowRight />
  </button>
</div>
