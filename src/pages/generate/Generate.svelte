<script>
  import { IconTools, IconArrowRight } from "@tabler/icons-svelte";
  import ConfigSidebar from "./comps/ConfigSidebar.svelte";
  import DesignPreview from "./comps/DesignPreview.svelte";
  import GenerationAppLayout from "./layout/GenerationAppLayout.svelte";

  let startPick = true;
</script>

<GenerationAppLayout>
  <ConfigSidebar />

  {#if startPick}
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
   <DesignPreview selected />
   <DesignPreview />
   <DesignPreview/>
   <DesignPreview />
   <DesignPreview />
   <DesignPreview />
  </div>

  <button
    type="button"
    class="btn w-full max-w-2xl btn-secondary py-6 mt-12 gap-x-2 "
  >
    <strong>Continue with this design</strong>
    <IconArrowRight />
  </button>
</div>
  {:else}
    <div class="flex-1 flex flex-col items-center pt-32">
      <div class="opacity-50">
        <img src="/gen_neutral.svg" class="w-[500px]" />
      </div>
      <div class="alert alert-success max-w-lg mt-10">
        <IconTools size={28} class="text-success" />
        <div class="flex flex-col">
          <span class="text-content2">
            Tweak the settings to your liking, and hit "Generate"
          </span>
        </div>
      </div>
    </div>
  {/if}
</GenerationAppLayout>
