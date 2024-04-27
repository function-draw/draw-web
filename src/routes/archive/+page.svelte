<script lang="ts">
  // documentがマウントされてから実行することを保証

  export let title: string = "";
  export let actors: string[] = [];
  export let flyer: string = "";
  export let records: string[] = [];
  export let movie: string = "";
  
</script>

<body>
  <h2>{title}</h2>
  <ul>
    {#each actors as actor, i}
      <li>{i + 1}. {actor}</li>
    {/each}
  </ul>
  <img src={flyer} alt="content" />
  <div class="flexbox">
    <div class="fade">
      {#each records as record}
        <p><img src={record} alt="record" /></p>
      {/each}
    </div>
  </div>
  <div>
    <img src={movie} alt="movie" />
  </div>
</body>

<style>
</style>
