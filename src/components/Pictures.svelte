<script lang="ts">
    import TileContainer from './TileContainer.svelte';
</script>
<div>
  <TileContainer
    tiles={[
      {
        src: './static/crater_lake.jpg',
        title: 'Crater Lake in Oregon',
        hover: 'One of the many beautiful stops on a west-coast road trip during the summer of \'21',
      },
      {
        src: './static/hockey.jpg',
        title: 'Hockey!',
        hover: 'I started playing hockey at the end of college and love to play organized and pond hockey',
      },
      {
        src: './static/skiing.jpg',
        title: 'Skiing at sunset',
        hover: 'My sister snapped a pic through the trees during a particularly beautiful sunset',
      },
      {
        src: './static/cabin_friends.jpg',
        title: 'Cabin trip',
        hover: 'Trying to take a decent picture at the cabin with the sun right in our eyes',
      },
      {
        src: './static/winery.jpg',
        title: 'Napa Valley winery',
        hover: 'At a winery just north of San Francisco in Napa Valley',
      },
    ]}
  />
</div>