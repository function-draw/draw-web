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

  let left_links = [["Contact", ""], ["X", "https://twitter.com/function_draw"], ["Twitch", "https://www.twitch.tv/function_draw"]];
  let right_links = [["Archive", ""], ["#function_draw", ""], ["Youtube", ""]];
  let images = ["./images/image 11.png", "./images/image 10.png", "./images/image 12.png"];
  
  onMount(() => {
  });
</script>

<head>
  <!-- metatags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="keywords" content="">
  <meta name="description" content="">
  <title>draw();</title>
  <link rel="icon" href="./images/favicon.ico">
  <link rel="apple-touch-icon" href="./images/favicon.png" sizes="128x128">
  <link rel="icon" type="image/png" href="./images/favicon.png" sizes="128x128">
  <!-- OGP Settings -->
  <meta property="og:url" content="https://function-draw.com/">
  <meta property="og:title" content="draw();">
  <meta property="og:description" content="オーディオとビジュアルのパフォーマンスを楽しむライブイベント">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://function-draw.com/images/draw_logo_card.png">
  <meta property="og:image:width" content="512">
  <meta property="og:image:height" content="512">
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@function_draw">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
</head>

<body>
  <main>
    <div class="margin"></div>

    <!-- リンクとかがまとまってるところ -->
    <div class="content">
      <div class="frame">
        <div id="top_links">
          <img src="/images/draw_logo_2.png" alt="draw_logo">
          <ul id="container">
            {#each left_links as link}
              <li style="text-align: right">
                <a class="link" href={link[1]}>{link[0]}↗</a>
              </li>
            {/each}
            {#each right_links as link}
              <li style="text-align: left">
                <a class="link" href={link[1]}>{link[0]}↗</a>
              </li>
            {/each}
          </ul>
        </div>
  
        <!-- 各回の絵がプレビューに出ているところ -->
        <div id="images">
          <div style="margin: 20px">
            <img style="position: absolute; right: 20px;" 
              src={images[0]} alt={"image"}>
            <img style="position: absolute; top: 296px;"  
              src={images[1]} alt={"image"}>
            <img style="position: absolute; right: 20px; bottom: 20px;"
              src={images[2]} alt={"image"}> 
          </div>
        </div>
      </div>
    </div>

    <div class="margin"></div>

    <!-- About Draw -->
    <div class="content">
      <div id="about">
        <h1 class="text_highlight">A<br>bout</h1>
        <p class="description">　draw(); とは、オーディオとビジュアルを楽しみイベント。draw(); とは、オーディオとビジュアルを楽しみイベント。draw(); とは、オーディオとビジュアルを楽しみイベント。draw(); とは、オーディオとビジュアルを楽しみイベント。draw(); とは、オーディオとビジュアルを楽しみイベント。draw(); とは、オーディオとビジュアルを楽しみイベント。draw(); とは、オーディオとビジュアルを楽しみイベント。draw(); とは、オーディオとビジュアルを楽しみイベント。</p>
      </div>
    </div>

    <!-- footer-->
    <footer>
      <h5 style="font-weight: lighter">Copyright © draw(); All Rights Reserved.</h5>
    </footer>
  </main>
</body>

<style>
  body {
    margin: 0;
    padding: 0;
    background-color: rgb(0, 0, 0);
    color: white;
    font-family: 'Inter', sans-serif;
  }

  main {
  }

  .content {
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 1405px;
    border: 1px solid #FFFFFF;
  }

  .frame {
    display: flex;
    height: 838px;
    column-gap: 118px;
  }

  #top_links {
    width: 713px;
  }

  #top_links img {
    margin: auto;
    display: block;
    height: 253px;
  }

  #top_links #container {
    margin: auto;
    display: block;
    padding: 0;
    width: 660px;
    column-count: 2;
    column-gap: 100px;
    list-style: none;
  }

  #top_links #container li {
    margin-bottom: 105px;
    width: 280px;
  }

  #top_links #container li .link {
    color: white;
	  text-decoration: none;
    font-size: 32px;
  }

  #images {
    position: relative;
    width: 574px;
    border: 1px solid #FFFFFF;
  }

  footer {
    margin-top: 79px;
    margin-bottom: 79px;
    text-align: center;
  }

  .margin {
    height: 158px;
  }

  #about {
    margin: 158px;
  }

  .text_highlight {
    margin: 0px;
    height: 232px;
    font-size: 96px;
    font-weight: lighter;
    line-height: 1.2em;
  }

  .description {
    margin: 0px;
    height: 352px;
    font-size: 36px;
    line-height: 1.2em;
  }
</style>
