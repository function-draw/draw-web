<script lang="ts">
  // @ts-nocheck

  //import "../app.css";
  import './default.css'

  import Archive from "./archive/+page.svelte";

  // documentがマウントされてから実行することを保証
  import { onMount } from "svelte";

  let left_links = [["Contact", ""], ["X", "https://twitter.com/function_draw"], ["Twitch", "https://www.twitch.tv/function_draw"]];
  let right_links = [["Archive", ""], ["#function_draw", "https://twitter.com/hashtag/function_draw?src=hashtag_click"], ["Youtube", ""]];
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
    <div class="frame">
      <!-- 
        <img style="position: absolute" src="./images/Links Frame.png" alt="draw_logo">
      -->
      <div id="topinfo">
        <img style="width:100%" src="./images/draw_logo_2.png" alt="draw_logo">
        <ul>
          {#each left_links as link}
            <li style="text-align: right">
              <a href={link[1]}>{link[0]}↗</a>
            </li>
          {/each}
          {#each right_links as link}
            <li style="text-align: left">
              <a href={link[1]}>{link[0]}↗</a>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <div class="frame">
      <!-- 各回の絵がプレビューに出ているところ -->
      <div id="images">
        <div>
          <img src={images[0]} alt={"image"}>
          <img src={images[1]} alt={"image"}>
          <img src={images[2]} alt={"image"}> 
        </div>
      </div>
    </div>

    <div class="margin"></div>

    <!-- About Draw -->
    <div class="frame">
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