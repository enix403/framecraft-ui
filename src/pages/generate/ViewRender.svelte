<script>
  import { IconArrowLeft } from "@tabler/icons-svelte";
  import GenerationAppLayout from "./layout/GenerationAppLayout.svelte";
</script>

<GenerationAppLayout>
  <div class="max-h-full flex items-center justify-center flex-1">
    <img src="/render1.jpg" class="w-full h-full" />
  </div>

  <div
    class="flex w-full max-w-sm flex-col gap-6 bg-backgroundSecondary p-8 shrink-0"
  >
    <button type="button" class="btn w-full max-w-2xl btn-solid py-6 gap-x-2">
      <IconArrowLeft />
      Go Back
    </button>
  </div>
</GenerationAppLayout>
