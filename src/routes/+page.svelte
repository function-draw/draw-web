<script lang="ts">
    // @ts-nocheck
  
    import './default.css'
    
    // documentがマウントされてから実行することを保証
    import { onMount } from "svelte";
  
    const left_links = [["Tokyo2", "./tokyo2"], ["X", "https://twitter.com/function_draw"], ["Twitch", "https://www.twitch.tv/function_draw"]];
    const right_links = [["Contact", "https://forms.gle/Nqdaeocg3NoUBDVj9"], ["#function_draw", "https://twitter.com/hashtag/function_draw?src=hashtag_click"], ["Youtube", "https://www.youtube.com/@function_draw"]];
    const images_pc = "./assets/images/top/draw_web_pc.png";
    const images_mobile = "./assets/images/top/draw_web_mobile.png";
  
    const description = "　draw(); とは、オーディオビジュアルを楽しむイベント。2022年9月に1回目のオンライン配信イベントが開催され、これまでにライブコーディングやマシンライブ、ジェネ系VJ、DJなどのライブパフォーマンスが見受けられた。現在では、主にVRChat, Twitch でのオンライン配信イベントと現実でのライブイベントを開催している。";
    
    onMount(() => {
    });
</script>

<!-- metatags -->
<svelte:head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="keywords" content="">
  <meta name="description" content="">
  <title>draw();</title>
  <link rel="icon" href="./assets/images/draw_favicon.webp">
  <link rel="apple-touch-icon" href="./assets/images/draw_favicon.webp" sizes="128x128">
  <link rel="icon" type="image/png" href="./assets/images/draw_favicon.webp" sizes="128x128">
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
</svelte:head>

<main id="page_main">
  <div class="container">
    <!-- リンクとかがまとまってるところ -->
    <div class="top">
      <img class="bg"  src="./assets/images/topbg.png" alt="bg">
      <div class="wrapper_links">
        <img style="width:100%" src="./assets/images/draw_logo.png" alt="draw_logo">
        <ul>
          {#each left_links as link}
            <li style="text-align: right">
              <a href={link[1]}>{link[0]}<img class="icon_arrow" src="./assets/images/icon_arrow.webp"></a>
            </li>
          {/each}
          {#each right_links as link}
            <li style="text-align: left">
              <a href={link[1]}>{link[0]}<img class="icon_arrow" src="./assets/images/icon_arrow.webp"></a>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- 各回の絵がプレビューに出ているところ(PCサイズでのみ表示) -->
    <div class="images_pc">
      <div class="frame">
        <img src={images_pc} alt="images_pc">
      </div>
    </div>
  </div>

  <div class="margin"></div>

  <!-- About Draw -->
  <div class="frame">
    <div class="about">
      <h1 class="text_highlight">A<br>bout</h1>
      <p class="description">{description}</p>
    </div>
  </div>

  <!-- 各回の絵がプレビューに出ているところ(tabletでのみ表示) -->
  <div class="images_tablet">
    <div class="margin"></div>
    <div class="frame">
      <img src={images_pc} alt="images_tablet">
    </div>
  </div>

  <!-- 各回の絵がプレビューに出ているところ(smartphoneでのみ表示) -->
  <div class="images_smartphone">
    <div class="margin"></div>
    <div class="frame">
      <img src={images_mobile} alt="images_smartphone">
    </div>
  </div>

  <!-- footer-->
  <footer>
    <h5 style="font-weight: lighter">Copyright © draw(); All Rights Reserved.</h5>
  </footer>
</main>