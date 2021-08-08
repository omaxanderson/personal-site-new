<script lang="ts">
  export let src;
  export let title;
  export let hover;

  let hovered = false;

  function onHover(isHovered: boolean) {
      hovered = isHovered;
      console.log('hovered', hovered);
  }
</script>
<div class="tile">
  <img
    on:mouseenter={() => onHover(true)}
    on:mouseleave={() => onHover(false)}
    {src}
    alt={title}
  />
  <div class="overlay">
    {hover}
  </div>
</div>

<style lang="scss">
  $pictureWidth: 300px;

  img {
    height: $pictureWidth;
  }

  .tile {
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 10;
  }

  .overlay {
    box-sizing: border-box;
    text-align: center;
    max-width: $pictureWidth;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: #DDD;
    color: black;
    transition: .25s ease-in-out;
    z-index: 11;

    &:hover {
      opacity: 1;
    }
  }
</style>
