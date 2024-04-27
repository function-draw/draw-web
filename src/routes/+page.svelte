<script lang="ts">
  // @ts-nocheck

  //import "../app.css";
  import Archive from "./archive/+page.svelte";

  // documentがマウントされてから実行することを保証
  import { onMount } from "svelte";

  // アーカイブページ用の変数
  class ArchiveContainer {
    title: string;
    actors: string[];
    flyer: string;
    records: string[];
    movie: string;

    constructor(title: title, actors: actors, flyer: fliyer, records: records, movie: movie){
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
  let archives: ArchiveContent[] = [archive3, archive2, archive1];
  
  onMount(() => {
  });
</script>

<body>
  <header>
    <!-- top logo -->
    <img src="/images/draw_logo.png" alt="logo" />
  </header>
  <main>
    <div class="border"></div>

    <!-- top info -->
    <div class="top_info">
      <p>
        2024/2/24 (Sat) draw(tokyo);<br /><a href="./tokyo"
          ><p>Official Web Site</p>
          <img src="/images/draw_cover.png" alt="draw-tokyo" />
        </a>
      </p>
    </div>

    <div class="border"></div>

    <!-- description -->
    <div>
      <ul class="description">
        <li>
          <h2>What is draw();</h2>
          <p>
            X Official: <a href="https://twitter.com/function_draw"
              >@function_draw</a
            >
          </p>
          <p>
            X Hashtag: <a
              href="https://twitter.com/hashtag/function_draw?src=hashtag_click"
              >#function_draw</a
            >
          </p>
          <p>
            Twitch: <a href="https://www.twitch.tv/function_draw"
              >https://www.twitch.tv/function_draw</a
            >
          </p>
        </li>

        <li>
          <h2>Staff</h2>
          <p>Organizer: W0NYV & Saina</p>
          <p>World Creator: ymg</p>
          <p>Streaming Server Engineer: RIKUPI-X</p>
          <p>U# Programmer: uni101 & RIKUPI-X</p>
          <p>Crew DJ: maguro</p>
        </li>
      </ul>
    </div>

    <div class="border"></div>

    <div>
      {#each archives as archive}
        <Archive
          title={archive.title}
          actors={archive.actors}
          fliyer={archive.fliyer}
          records={archive.records}
          movie={archive.movie}
        />
        <div class="border"></div>
      {/each}
    </div>
  </main>
</body>

<style>
  :root {
    color: white;
    background-color: rgba(8, 15, 19, 1);
    font-family: Roboto, "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3",
      Meiryo, メイリオ, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック体",
      "Yu Gothic", YuGothic, "MS PGothic", Osaka, arial, sans-serif;
  }
  .border {
    border: solid 1px white;
  }
  .top_info {
    text-align: center;
    font-size: 18pt;
  }
  .description {
    display: flex;
    flex-direction: row;
  }

  .description li:first-child {
    margin-right: 100px;
  }
</style>
