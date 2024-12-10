<script>
  import { IconSparkles, IconTools } from "@tabler/icons-svelte";
  import AppBar from "./comps/AppBar.svelte";
</script>

<AppBar />

<div class="flex flex-1">
  <div class="flex w-full max-w-sm flex-col gap-6 bg-backgroundSecondary p-8">
    <!-- Plot Dimension s-->
    <div>
      <label class="form-label mb-2">Plot Dimensions</label>
      <div class="flex gap-4">
        <!-- Length -->
        <div class="form-control relative w-full">
          <input class="input input-lg max-w-full" placeholder="Length" />

          <span
            class="absolute inset-y-0 right-4 inline-flex items-center text-content3"
          >
            (in)
          </span>
        </div>
        <!-- Width -->
        <div class="form-control relative w-full">
          <input class="input input-lg max-w-full" placeholder="Width" />

          <span
            class="absolute inset-y-0 right-4 inline-flex items-center text-content3"
          >
            (in)
          </span>
        </div>
      </div>
    </div>

    <!-- Number of rooms -->
    <div>
      <label class="form-label mb-2">Rooms Count</label>
      <input class="input input-lg max-w-full" placeholder="Number of rooms" />
    </div>

    <div>
      <label class="form-label mb-2">Generation Mode</label>
      <div class="flex mt-2 gap-x-2">
        <button class="btn flex-1 btn-secondary">Quality</button>
        <button class="btn flex-1 btn-solid-secondary">Fast</button>
      </div>
    </div>

    <div>
      <label class="form-label mb-2">Number of maps</label>
      <div class="flex mt-2 gap-x-2">
        <button class="btn flex-1 btn-secondary">1</button>
        <button class="btn flex-1 btn-solid-secondary">2</button>
        <button class="btn flex-1 btn-solid-secondary">3</button>
        <button class="btn flex-1 btn-solid-secondary">4</button>
        <button class="btn flex-1 btn-solid-secondary">5</button>
      </div>
    </div>

    <button
      type="button"
      class="btn w-full bg-gradient-to-r py-6 from-pink-600 to-blue-500 mt-8 gap-x-2"
    >
      <IconSparkles />
      <strong>Generate</strong>
    </button>
  </div>

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
</div>
