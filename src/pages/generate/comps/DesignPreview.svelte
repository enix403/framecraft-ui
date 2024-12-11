<script lang="ts">
  import { IconEye } from "@tabler/icons-svelte";
  import clsx from "clsx";

  export let selected: boolean = false;
</script>

<button class="relative group cursor-pointer">
  <div
    class={clsx(
      "absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur",
      selected ? "opacity-100" : "opacity-25"
    )}
  ></div>
  <div
    class={clsx(
      "relative bg-white rounded-2xl border-4 overflow-hidden",
      selected ? "border-pink-400" : ""
    )}
  >
    <div class="relative bg-black">
      <img class="h-auto max-w-full" src="/plan1.jpg" alt="" />

      <div class="absolute inset-0">
        <div class="w-full h-full p-2 flex flex-col items-end">
          <button class="btn btn-circle bg-black/40">
            <IconEye />
          </button>
        </div>
      </div>
    </div>
  </div>
</button>
