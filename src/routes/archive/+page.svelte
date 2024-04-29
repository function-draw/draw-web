<script lang="ts">
  // documentがマウントされてから実行することを保証

  export let title: string = "";
  export let actors: string[] = [];
  export let flyer: string = "";
  export let records: string[] = [];
  export let movie: string = "";
  
  // アーカイブページ用の変数
  class ArchiveContainer {
    title: string;
    actors: string[];
    flyer: string;
    records: string[];
    movie: string;

    constructor(title: string, actors: string[], flyer: string, records: string[], movie: string){
      this.title = title;
      this.actors = actors;
      this.flyer = flyer;
      this.records = records;
      this.movie = movie;
    }
  }

  let archive1 = new ArchiveContainer(
    "#1 - 2022/09/25",
    ["RIKUPI-X × W0NYV", "ymg × uni101", "maguro × Saina"],
    "./images/draw-1-flyer.png",
    [
      "./images/1/1_1.png",
      "./images/1/1_2.png",
      "./images/1/1_3.png",
      "./images/1/1_4.png",
    ],
    ""
  );
  let archive2 = new ArchiveContainer(
    "#2 - 2023/01/30",
    ["yomo × Saina", "ymg × W0NYV", "moistpeace"],
    "./images/draw-2-flyer.png",
    [
      "./images/2/2_1.png",
      "./images/2/2_2.png",
      "./images/2/2_3.png",
      "./images/2/2_4.png",
    ],
    ""
  );
  let archive3 = new ArchiveContainer(
    "#3 - 2023/08/06",
    ["KAAS/Free × Syoronpo.", "RIKUPI-X × Saina B2B W0NYV", "Nyolfen × fotfla"],
    "./images/draw-2-flyer.png",
    [
      "./images/3/3_1.webp",
      "./images/3/3_2.webp",
      "./images/3/3_3.webp",
      "./images/3/3_4.webp",
    ],
    ""
  );
  let archives: ArchiveContainer[] = [archive3, archive2, archive1];
  
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
