<style>
  .title-name {
    display: flex;
    align-content: center;
    justify-content: center;
  }

  #header-img {
    width: 100vw;
    position: fixed;
    z-index: -1;
  }

  .flex {
    display: flex;
  }

  .justify-content {
    justify-content: center;
  }

  .align-items {
    align-items: center;
  }

  h1 {
    position: absolute;
    top: 20%;
    color: white;
  }
</style>

<script>
    let img, imageHeight;
    function onImageLoad() {
        imageHeight = img.offsetHeight;
        console.log(imageHeight);
    }
</script>

<div class="title">
  <div
    class="flex justify-content align-items"
    style="height: {imageHeight}px"
  >
    <img
      id="header-img"
      bind:this={img}
      on:load={onImageLoad}
      src="./static/seattle.jpg"
      alt="Seattle from Pike Place"
    />
    <h1>O Max Anderson</h1>
  </div>
</div>
