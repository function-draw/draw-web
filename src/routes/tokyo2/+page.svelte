<script lang="ts">
  // @ts-nocheck
  import BgGfx from '$lib/tokyo2-bg-gfx.svelte';
  import AnimSlideElem from '$lib/tokyo2-anim-slide.svelte'
  import './page.css'
  import '../default.css'

  // documentがマウントされてから実行することを保証
  import { onMount } from "svelte";

  onMount(() => {
  });
</script>

<svelte:head>
  <meta charset="utf-8" />
  <title>draw(Tokyo);</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <link rel="icon" href="/assets/images/favicon.ico" />
  <link rel="apple-touch-icon" href="/assets/images/favicon.png" sizes="128x128" />
  <link
    rel="icon"
    type="image/png"
    href="/assets/images/favicon.png"
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
  <meta property="og:title" content="draw(Tokyo);" />
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

<main id="page_tokyo2">
  <!-- うにょうにょ背景 -->
  <BgGfx />
  <!-- スライドアニメーション適応 -->
  <AnimSlideElem />

  <!-- Drawのロゴと説明、過去の記録画像を表示する領域 -->
  <div class="root_top">

    <!-- ここにclass=top_iniで未スクロール時の初期状態の要素を書く -->

    <!-- スクロール後表示される領域 -->
    <div id="about">
      <div class="contents">
        <div class="title">
          <img src="/assets/images/draw_logo_tokyo.png" alt="logo"/>
          <h1>Audio/Visual Event <b>"draw(tokyo); #2"</b> at Shibuya 2025/3</h1>
        </div>
        <div class="description">
          <p>クリエイティブチームdraw();によるジェネラティブVJをコンセプトにしたオーディオビジュアルイベント2022年9月に1回目のオンライン配信イベントが開催され、これまでにライブコーディングやマシンライブ、ジェネ系VJ、DJなどのライブパフォーマンスがVRChat、Twitch、オフライン会場で行われた。</p>
        </div>
      </div>

      <!-- スマホでは横並びで表示する領域が足りなさそうなので別要素として表示する? -->
      <div class="capture_pc">
        <img src="/assets/images/tokyo2/capture.png" alt="capture">
      </div>

    </div>
  </div>
  
  <!-- Performer -->
  <div id="performer">
    <div class="root_content">
      <p class="title">Performer</p>
      <img src="/assets/images/tokyo2/box.png" alt="block" class="block">
    </div>
    <div class="border"></div>
    <div class="description">
      <p>
        今回のdraw(tokyo); #2ではAudioはDJ、Live coding(GLSL,Sonic Pi等)、マシンライブ等を用いたLiveが行われ、VisualはLivecoding(GLSL等)、Notch、Unity、WebGL、TouchDesigner等を用いたVJが行われる予定である。
      </p>
    </div>
    <p class="white_box">MainFloor</p>
    <ul>
      <div class="content">
        <p class="black_box">Live</p>
        <p class="text">
          0b5vr(LiveCoding)　Acidclank(Solo Set)　Keijiro Takahashi(A/V Set)　lactoice(LiveCoding)　Niko_14(LiveCoding)
        </p>
      </div>
      <div class="content">
        <p class="black_box">DJ</p>
        <p class="text">
          RIKUPI-X　ymg
        </p>
      </div>
      <div class="content">
        <p class="black_box">VJ</p>
        <p class="text">
          butadiene(LiveCoding)　Renard　Saina　shirasuna　ukonpower　uni101(LiveCoding)　W0NYV
        </p>
      </div>
    </ul>
    <p class="white_box">SubFloor</p>
    <ul>
      <div class="content">
        <p class="black_box">DJ</p>
        <p class="text">
          Aniel　malobug　Nia　sara-arai　toufu0301
        </p>
      </div>
      <div class="content">
        <p class="black_box">VJ</p>
        <p class="text">
          gam0022(LiveCoding)　Kazufumi Shibuya　kinankomoti　monoton　shivaduke
        </p>
      </div>
    </ul>
    <p class="time_table">※タイムテーブル、演者は予告なく変更される場合があります。</p>
  </div>

  <!-- about -->
  <div id="location">
    <div class="root_content">
      <img src="/assets/images/tokyo2/box.png" alt="block" class="block">
      <p class="title">Location</p>
    </div>
    <div class="border"></div>
    <p class="location_text">CIRCUS TOKYO（東京 渋谷区）</p>
    <p class="day_text">
      日付：2024年2月24日（土曜日）<br>
      時間：14:00~20:00<br>
      ※演者、時間帯の変更等、可能性あり<br>
    </p>
    <div class="caution">
      <p class="green">
        未成年でも入場可能です。
      </p>
      <p class="red">
        再入場ができません。荷物預けなどご注意ください。<br
        />顔写真付き身分証明書を必ず持参ください。
      </p>
    </div>
    <p class="map_text">MAP（周辺地図）</p>
    <iframe
      class="navi_map"
      title="navi_map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1146.1939904381697!2d139.70484206026865!3d35.654190530378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5b6e402423%3A0x37689da2d2d701a6!2sCircus%20Tokyo!5e0!3m2!1sja!2sjp!4v1699036317648!5m2!1sja!2sjp"
      allow="fullscreen"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  <!-- under -->
  <footer>
    <p>
      <img src="/assets/images/draw_logo_tokyo.png" alt="draw-logo-tokyo" />
    </p>
    <p class="copyright">Copyright © draw(); All Rights Reserved.</p>
  </footer>
</main>