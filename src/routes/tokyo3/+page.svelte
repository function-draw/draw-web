<script lang="ts">
  // @ts-nocheck
  import AnimSlideElem from '$lib/tokyo3-anim-slide.svelte'
  import './page.css'
  import '../default.css'

  // documentがマウントされてから実行することを保証
  import { onMount } from "svelte";

  onMount(() => {
  });
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
  <meta property="og:url" content="https://function-draw.com/tokyo" />
  <meta property="og:title" content="draw(tokyo); #3" />
  <meta
    property="og:description"
    content="draw(tokyo); は、VRChatで行われた&quot;draw();&quot;をリアル会場で開催するイベントです。draw();とは、オーディオビジュアルを楽しむイベントであり、ライブコーディングやマシンライブ、ジェネ系VJ、DJなどのライブパフォーマンスを見ることができます。"
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

<main id="page_tokyo3">
  <canvas class="canvas_bg"></canvas>
  <!-- スライドアニメーション適応 -->
  <AnimSlideElem />

  <!-- Drawのロゴと説明、過去の記録画像を表示する領域 -->
  <div class="root_top">

    <!-- ここにclass=top_iniで未スクロール時の初期状態の要素を書く -->

    <!-- スクロール後表示される領域 -->
    <div id="about">
      <div class="contents">
        <div class="title">
          <img src="./assets/images/draw_logo_tokyo.png" alt="logo"/>
          <h1>Audio/Visual Event <b>"draw(tokyo); #3"</b> at Shibuya 2025/10</h1>
        </div>
        <div class="description">
          <p>　クリエイティブチームdraw();によるジェネラティブVJをコンセプトにしたオーディオビジュアルイベントが2022年9月に1回目のオンライン配信イベントが開催され、これまでにライブコーディングやマシンライブ、ジェネ系VJ、DJなどのライブパフォーマンスがVRChat、Twitch、オフライン会場で行われた。</p>
        </div>
      </div>

      <!-- スマホでは横並びで表示する領域が足りなさそうなので別要素として表示する? -->
      <div class="capture_pc">
        <img src="./assets/images/tokyo2/capture.png" alt="capture">
      </div>

    </div>
  </div>
  
  <!-- Performer -->
  <div id="performer">
    <div class="root_content">
      <p class="title">Performers</p>
      <img src="./assets/images/tokyo2/box.png" alt="block" class="block">
    </div>
    <div class="border"></div>
    <div class="description">
      <!-- <p>
        　draw(tokyo); #3ではDJ、マシンライブ、ジェネ系VJ、Ableton Live、Bitwig Studio、Shader Live Coding、Unity、openFrameworks、TouchDesigner、GLSL、Unreal Engine、WebGL等を用いたパフォーマンスが行われる予定である。
      </p> -->
    </div>
    <p class="white_box">MainStage</p>
    <ul>
      <div class="content">
        <p class="black_box">Live</p>
        <p class="text">
          Nyolfen　Phasma　Atsushi Tadokoro
        </p>
      </div>
      <div class="content">
        <p class="black_box">DJ</p>
        <p class="text">
          yomo b2b Celken　Fellsius　DJ SHARPNEL　Nhato　RIKUPI-X　ymg
        </p>
      </div>
      <div class="content">
        <p class="black_box">VJ</p>
        <p class="text">
          Syoronpo. b2b monoton　避雷　Keijiro Takahashi　nyu　Kezzardrix　phi16 + fotfla　Saina　wonyu
        </p>
      </div>
    </ul>
    <p class="white_box">SubStage</p>
    <ul>
      <div class="content">
        <p class="black_box">Live</p>
        <p class="text">
          sola　moistpeace　Friends of Wires
        </p>
      </div>
      <div class="content">
        <p class="black_box">DJ</p>
        <p class="text">
          さだきち　NxPC.Lab b2b Technoboo(Sigria)
        </p>
      </div>
      <div class="content">
        <p class="black_box">VJ</p>
        <p class="text">
          TsumikiRoom　egg eye　Flow　gam0022　NxPC.Lab b2b Technoboo(Yajim.)
        </p>
      </div>
    </ul>
     <p class="white_box">Lounge</p>
    <ul>
      <div class="content">
        <p class="black_box">Live</p>
        <p class="text">
          Yebisu303
        </p>
      </div>
      <div class="content">
        <p class="black_box">DJ</p>
        <p class="text">
          けんじゃ　KBSNK　HB b2b suleiman.jp　MöBIUS　icesawder　maku693　Iceyveins
        </p>
      </div>
      <div class="content">
        <p class="black_box">VJ</p>
        <p class="text">
          MEMEMIYA b2b 90n83i　さきやま　Shinya Kitajima　shiho　moka　Kakuya Shiraishi　甲斐ひろあき　Noi
        </p>
      </div>
    </ul>
    <p class="time_table">※タイムテーブル、演者は予告なく変更される場合があります。</p>
  </div>

  <!-- about -->
  <div id="location">
    <div class="root_content">
      <img src="./assets/images/tokyo2/box.png" alt="block" class="block">
      <p class="title">Location</p>
    </div>
    <div class="border"></div>
    <p class="location_text">clubasia（東京 渋谷区）</p>
    <p class="day_text">
      日付：2025年10月12日（日曜日）<br>
      時間：12:50~20:30<br>
      ※演者、時間帯などの変更の可能性あり<br>
    </p>
    <div class="caution">
      <p class="green">
        未成年でも入場可能！
      </p>
      <p class="red">
        ※顔写真付き身分証明書を必ず持参ください。<br
        />※再入場ができません。荷物預けなどご注意ください。
      </p>
    </div>
    <p class="map_text">MAP（周辺地図）</p>
    <iframe
      class="navi_map"
      title="navi_map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.730875007419!2d139.6927285130704!3d35.65900173107756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188caa3c015555%3A0xa54d4d3a970d7889!2sclubasia!5e0!3m2!1sja!2sjp!4v1759153716082!5m2!1sja!2sjp"
      allow="fullscreen"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  <!-- under -->
  <footer>
    <p>
      <img src="./assets/images/draw_logo_tokyo.png" alt="draw-logo-tokyo" />
    </p>
    <p class="copyright">Copyright © draw(); All Rights Reserved.</p>
  </footer>
</main>