<script lang="ts">
  export let name: string;
</script>

<div class="card card-image-cover">
  <img src="/plan1.jpg" alt="" />
  <div class="card-body px-6 pb-8 pt-4">
    <h2 class="card-header">{name}</h2>
    <div class="flex w-full overflow-x-auto">
      <table class="table table-compact table-zebra max-w-full">
        <tbody>
          <tr>
            <th>Plot Dimension</th>
            <td>
              <p class="text-right">10 ft x 12 ft</p>
            </td>
          </tr>
          <tr>
            <th>Room Count</th>
            <td>
              <p class="text-right">3</p>
            </td>
          </tr>
          <tr>
            <th>Created At</th>
            <td>
              <p class="text-right">August 11, 2024</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card-footer mt-4">
      <button class="btn-secondary btn w-full">View</button>
    </div>
  </div>
</div>
