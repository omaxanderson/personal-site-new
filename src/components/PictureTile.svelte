<script lang="ts">
  export let src;
  export let title;
  export let hover;

  let image;
  let height, width;

  function translate() {
    width = image.width;
    height = image.height;
    // add the transform
    console.log('img', width, height);
    image.style.transform = `translateX(-${(width - height) / 2}px)`;
  }
</script>
<div class="tile">
  <img
    bind:this={image}
    {src}
    alt={title}
    on:load={translate}
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
    color: #DDD;
    background-color: black;
    transition: .25s ease-in-out;
    z-index: 11;

    &:hover {
      opacity: .8;
    }
  }
</style>
