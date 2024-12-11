<script>
  import GenerationAppLayout from "./layout/GenerationAppLayout.svelte";
  import MyDesignCard from "./comps/MyDesignCard.svelte";
</script>

<GenerationAppLayout>
  <div class="p-10 max-h-full overflow-y-auto">
    <div class="mb-12 text-4xl font-semibold">My Generations</div>

    <div class="grid grid-cols-5 gap-x-6 gap-y-8">
      <MyDesignCard name="Design 1" />
      <MyDesignCard name="Design 2" />
      <MyDesignCard name="Design 3" />
      <MyDesignCard name="Design 4" />
      <MyDesignCard name="Design 5" />
      <MyDesignCard name="Design 6" />
      <MyDesignCard name="Design 7" />
      <MyDesignCard name="Design 8" />
      <MyDesignCard name="Design 9" />
      <MyDesignCard name="Design 10" />
    </div>
  </div>
</GenerationAppLayout>
