<script lang="ts">
  import PictureTile from './PictureTile.svelte';
  interface TileData {
    src: string;
    title: string;
    hover: string;
  }
  export let tiles: TileData[] = [];
</script>

<div class="container">
  {#each tiles as tile, index (tile.src)}
    <div class="item">
      <PictureTile {...tile} />
    </div>
  {/each}
</div>

<style lang="scss">
  $width: 300px;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
  }

  .item {
    height: $width;
    width: $width;
    overflow: hidden;
  }
</style>
