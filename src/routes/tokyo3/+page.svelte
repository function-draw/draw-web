<script lang="ts">
  import BgGfx from '$lib/tokyo3-bg-gfx.svelte';
  import './page.css'

  import { onMount } from "svelte";

  // コンポーネントがDOMにマウントされた後に実行を保証する
  onMount(() => {});
</script>

<svelte:head>
  <meta charset="utf-8" />
  <title>draw(tokyo); #3</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <link rel="icon" href="./assets/images/favicon.ico" />
  <link rel="apple-touch-icon" href="./assets/images/favicon.png" sizes="128x128" />
  <link
    rel="icon"
    type="image/png"
    href="./assets/images/favicon.png"
    sizes="128x128"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Roboto"
    rel="stylesheet"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+JP&family=Jost:wght@400;500&family=M+PLUS+1p&display=swap"
    rel="stylesheet"
  />
  <!-- OGP Settings -->
  <meta property="og:url" content="https://function-draw.com/tokyo3" />
  <meta property="og:title" content="draw(Tokyo); #3" />
  <meta
    property="og:description"
    content="draw(Tokyo); は、VRChatで行われた&quot;draw();&quot;をリアル会場で開催するイベントです。draw();とは、オーディオビジュアルを楽しむイベントであり、ライブコーディングやマシンライブ、ジェネ系VJ、DJなどのライブパフォーマンスを見ることができます。"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://function-draw.com/images/draw_logo_tokyo_card.png"
  />
  <meta property="og:image:width" content="512" />
  <meta property="og:image:height" content="512" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@function_draw" />
</svelte:head>

<div id="page_tokyo3">
  <BgGfx />

  <div id="startView">
    <h1>
      <img src="./assets/images/draw_logo_tokyo.png" alt="draw-logo-tokyo" />
    </h1>
    <div id="description">
      <p>Audio/Visual Event <b>"draw(); #3"</b> <br> at <b>clubasia</b>, Shibuya, Tokyo <br> 2025/10/12 12:00~21:00</p>
      <p id="attention_text">※1時間前後、時間帯が変更する可能性があります</p>
      <p><br><br> Comming soon...</p>
    </div>
    <footer>
      <p>Copyright © draw(); All Rights Reserved.</p>
    </footer>
  </div>
</div>