<script lang="ts">
  // documentがマウントされてから実行することを保証

  export let title: string = "";
  export let actors: string[] = [];
  export let flyer: string = "";
  export let records: string[] = [];
  export let movie: string = "";
  
</script>

<body>
  <main>
    <h2>{title}</h2>
    <ul>
      {#each actors as actor, i}
        <li>{i + 1}. {actor}</li>
      {/each}
    </ul>
    <div class="flyer">
        <img src={flyer} alt="content" />
      <p>
    </div>
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
  </main>
</body>

<style>
@media (min-width: 1280px) {
  li {
      list-style: none;
  }
  main {
      margin: 0 auto;
      width: 1280px;
  }
  .flexbox {
      display: flex;
      align-items: flex-start;
  }

  .fade {
      width: 60%;
      margin: 0 2%;
      padding: 0;
      height: auto;
  }

      .fade img {
          width: 100%;
      }

  .flyer {
      width: 30%;
      margin-top: 16px;
  }

      .flyer img {
          width: 100%;
      }
}

@media (max-width: 1280px) {
  main {
      padding: 40px;
      margin: 0 auto;
  }
  .fade {
      width: 100%;
      margin: 0;
      padding: 0;
      height: auto;
  }

      .fade img {
          width: 100%;
      }

  .flyer {
      margin: 0 auto;
      width: 80%;
  }

      .flyer img {
          width: 100%;
      }
}

@media (max-width: 1000px) {
  main {
      padding: 4%;
      margin: 0 auto;
  }
  .flyer {
      margin: 0 auto;
      width: 100%;
  }
}
</style>
