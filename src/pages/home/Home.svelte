<script>
  import { IconPlayerTrackNextFilled } from "@tabler/icons-svelte";

  import { Link } from "svelte-routing";
</script>

<div class="flex w-screen h-screen items-center justify-center">
  <Link to="/" class="btn btn-secondary btn-lg gap-x-4 mb-4">
    <span class="font-bold">Lauch FrameCraft</span>
    <IconPlayerTrackNextFilled size={28} />
  </Link>
</div>
