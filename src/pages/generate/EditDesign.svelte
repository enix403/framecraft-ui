<script>
  import {
    IconArrowLeft,
    IconChartScatter3d,
    IconCircleX,
    IconEdit,
    IconPackages
  } from "@tabler/icons-svelte";
  import ConfigSidebar from "./comps/ConfigSidebar.svelte";
  import GenerationAppLayout from "./layout/GenerationAppLayout.svelte";
</script>

<GenerationAppLayout>
  <div class="max-h-full flex items-center justify-center flex-1">
    <img src="/plan2.jpg" class="h-[700px]" />
  </div>

  <div
    class="flex w-full max-w-sm flex-col gap-6 bg-backgroundSecondary p-8 shrink-0"
  >
    <div class="flex gap-4">
      <!-- Length -->
      <div class="form-control relative flex-1">
        <span
          class="absolute inset-y-0 left-4 inline-flex items-center text-content3"
        >
          <IconEdit size={20} />
        </span>

        <input
          class="input w-full max-w-full px-10"
          placeholder="Name"
          value="Design 1"
        />
      </div>

      <button type="button" class="btn btn-solid-warning gap-x-2">
        <strong>Save</strong>
      </button>
    </div>

    <div class="flex w-full overflow-x-auto">
      <table class="table table-compact table-zebra max-w-full">
        <thead>
          <tr>
            <th>Room</th>
            <th>Length</th>
            <th>Width</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Living Room</th>
            <td>10 ft</td>
            <td>12 ft</td>
          </tr>
          <tr>
            <th>Bedroom 1</th>
            <td>10 ft</td>
            <td>12 ft</td>
          </tr>
          <tr>
            <th>Bedroom 2</th>
            <td>10 ft</td>
            <td>12 ft</td>
          </tr>
        </tbody>
      </table>
    </div>

    <button
      type="button"
      class="btn w-full max-w-2xl btn-secondary py-6 gap-x-2"
    >
      <IconPackages />
      <strong>Export</strong>
    </button>

    <button type="button" class="btn w-full max-w-2xl btn-success py-6 gap-x-2">
      <IconChartScatter3d />
      <strong>Render 3D Model</strong>
    </button>

    <button
      type="button"
      class="btn w-full max-w-2xl btn-solid-error py-6 gap-x-2 mt-auto"
    >
      <IconArrowLeft />
      Discard and go back
    </button>
  </div>
</GenerationAppLayout>
