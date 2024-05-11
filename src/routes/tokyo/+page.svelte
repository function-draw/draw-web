<script lang="ts">
  import { onMount } from "svelte";

  //動画サイズの指定
  const videoWidth = 1280;
  const videoHeight = 720;

  function resizeVideo() {
    if (document == undefined) {
      return;
    }

    const window_w = window.innerWidth;
    const window_h = window.innerHeight;

    const wrapper = document.getElementById("wrapper")!;
    const video = document.getElementById("video")!;

    wrapper.style.height = window_h + "px";

    //画面アスペクト比を計算して余白ができないように優先する
    if (window_w / window_h > 16 / 9) {
      video.style.width = window_w + "px";
      video.style.height = "auto";
      video.style.left = (window_w - video.offsetWidth) / 2 + "px";
    } else {
      video.style.width = "auto";
      video.style.height = window_h + "px";
      video.style.left = (window_w - video.offsetWidth) / 2 + "px";
    }
  }

  // コンポーネントがDOMにマウントされた後に実行を保証する
  onMount(() => {
    resizeVideo();

    window.addEventListener("resize", (event) => {
      resizeVideo();
    });
  });
</script>

<head>
  <meta charset="utf-8" />
  <title>draw(Tokyo);</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <link rel="icon" href="./images/favicon.ico" />
  <link rel="apple-touch-icon" href="./images/favicon.png" sizes="128x128" />
  <link
    rel="icon"
    type="image/png"
    href="./images/favicon.png"
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
    href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&family=M+PLUS+1p&display=swap"
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
</head>

<body>
  <video id="video" src="./videos/drawtokyoback.mp4" autoplay loop muted></video>
  <div id="wrapper"></div>
  <div id="startView">
    <h1>
      <img src="./images/draw_logo_tokyo.png" alt="draw-logo-tokyo" />
    </h1>
    <div class="description">
      <p>Audio/Visual Event <b>"draw();"</b> at Tokyo 2024/2</p>
      <ul class="social">
        <li>
          <p>
            <a href="https://twitter.com/function_draw" target="_blank"
              ><img
                src="./images/sns_icons/X_logo_2023.svg"
                alt="draw-X-logo-2023"
              /><br />function_draw</a
            >
          </p>
        </li>
        <li>
          <p>
            <a href="https://www.twitch.tv/function_draw" target="_blank"
              ><img
                src="./images/sns_icons/TwitchGlitchWhite.svg"
                alt="twitch"
              /><br />function_draw</a
            >
          </p>
        </li>
        <li>
          <p class="ticket">
            <a href="https://draw-tokyo.peatix.com/" target="_blank"
              ><img src="./images/sns_icons/ticket.png" alt="ticket" /><br
              />ticket site</a
            >
          </p>
        </li>
      </ul>
    </div>
  </div>
  <div id="about"></div>
  <div class="about">
    <p><b>ABOUT</b></p>
    <p class="about_description">
      オーディオとビジュアルの<br />パフォーマンスを楽しむリアルイベント
    </p>
    <p>日付：2024年2月24日（土曜日）</p>
    <p>時間：14:00~20:00</p>
    <p class="annotation">※演者、時間帯の変更等、可能性あり</p>
    <p>場所：CIRCUS TOKYO（東京 渋谷区）</p>
    <p class="caution">
      未成年でも入場可能です。<br
      />再入場ができません。荷物預けなどご注意ください。<br
      />顔写真付き身分証明書を必ず持参ください。
    </p>
    <iframe
      class="navi_map"
      title="navi_map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1146.1939904381697!2d139.70484206026865!3d35.654190530378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5b6e402423%3A0x37689da2d2d701a6!2sCircus%20Tokyo!5e0!3m2!1sja!2sjp!4v1699036317648!5m2!1sja!2sjp"
      allow="fullscreen"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  <div id="performer"></div>
  <div class="performer">
    <p><b>PERFORMER</b></p>
    <p class="role">[Main Live]</p>
    <p class="name">moistpeace　Nyolfen<br />Phasma　Yebisu303</p>
    <p class="role">[Main DJ]</p>
    <p class="name">RIKUPI-X　ymg　yomo</p>
    <p class="role">[Main VJ]</p>
    <p class="name">kaiware style　Renard　Saina<br />sp4ghet　uni101　W0NYV</p>
    <p class="role"></p>
    <p class="role">[Sub DJ]</p>
    <p class="name">ELVON　kamoi<br />MÖBIUS　Pinieon　ZAZEN</p>
    <p class="role">[Sub VJ]</p>
    <p class="name">hacha　MEMEMIYA<br />msr tainaka　shoch0922　Syoronpo.</p>
  </div>
  <footer>
    <p>
      <img src="/images/draw_logo_tokyo.png" alt="draw-logo-tokyo" />
    </p>
    <p>Copyright © draw(); All Rights Reserved.</p>
  </footer>
</body>

<style>
  body {
    margin: 0;
    padding: 0;
    color: white;
    font-family: "Jost", Roboto, "M PLUS 1p", "Hiragino Kaku Gothic Pro",
      "ヒラギノ角ゴ Pro W3", Meiryo, メイリオ, "游ゴシック Medium",
      "Yu Gothic Medium", "游ゴシック体", "Yu Gothic", YuGothic, "MS PGothic",
      Osaka, arial, sans-serif;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:visited {
    color: white;
    text-decoration: none;
  }

  b {
    font-weight: 500;
  }

  #video {
    margin: 0;
    padding: 0;
    top: 0;
    position: fixed;
    z-index: -2;
    overflow: hidden;
  }

  #wrapper {
    background: url(./images/bg_trans.png) repeat;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    z-index: -1;
    overflow: hidden;
  }

  .navi_map {
    border: 0;
  }

  #startView {
    margin: 0;
    padding: 0;
    height: 100vh;
  }

  h1 {
    padding-top: 20vh;
    text-align: center;
  }

  h1 img {
    display: block;
    margin: auto;
  }

  .description {
    width: 600px;
    background-color: rgba(10, 10, 10, 0.8);
    padding: 0.5%;
    margin: 10vh auto;
    border-radius: 6px;
  }

  .description p {
    font-size: 18pt;
    text-align: center;
  }

  .social {
    margin: 0 auto;
    width: 60%;
    opacity: 0.9;
    display: flex;
    flex-wrap: nowrap;
    padding: 0;
  }

  .social li {
    width: 100%;
    text-align: center;
    vertical-align: middle;
    list-style: none;
  }

  .social li p {
    margin: 2% 0 10% 0;
    font-size: 12pt;
  }
  .social li p img {
    height: 40px;
  }

  .about {
    width: 500px;
    background-color: rgba(10, 10, 10, 0.8);
    padding: 0.5%;
    margin: 4% auto 0 auto;
    border-radius: 6px;
    text-align: center;
  }

  .about p:first-child {
    font-size: 18pt;
  }

  .about p {
    line-height: 40%;
    font-size: 13pt;
  }

  .about iframe {
    width: 450px;
    height: 450px;
    filter: grayscale(50%) invert(92%) contrast(83%);
  }

  .about_description {
    margin: 2% 0 2% 0;
    display: inline-block;
    font-size: 11pt !important;
    line-height: 1.5 !important;
  }
  .about .annotation {
    padding: 0 0 2% 0;
    font-size: 11pt !important;
  }
  .about .caution {
    font-size: 13px;
    line-height: 1.2;
    text-align: left;
    width: 70%;
    background-color: rgba(39, 39, 39, 0.8);
    color: #f79999;
    padding: 2%;
    margin: 3% auto;
    border-radius: 6px;
  }

  .performer {
    width: 500px;
    background-color: rgba(10, 10, 10, 0.8);
    padding: 0.5%;
    margin: 4% auto 4% auto;
    border-radius: 6px;
    text-align: center;
  }

  .performer p:first-child {
    font-size: 18pt;
  }

  .performer .role {
    margin: 0;
    font-size: 13pt;
  }
  .performer .name {
    margin: 0 0 2% 0;
    font-weight: 500;
    font-size: 14pt;
  }

  footer {
    padding: 2% 0 0 0;
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1),
      rgba(15, 15, 15, 0.2)
    );
    text-align: center;
  }

  footer p {
    margin: 0;
  }

  footer p:first-child {
    margin-bottom: 1%;
  }

  footer p:first-child img {
    width: 8%;
  }

  footer p:last-child {
    padding-bottom: 1%;
  }

  #about,
  #performer {
    padding-top: 1px;
  }

  @media (max-height: 520px) {
    #startView {
      margin: 0;
      padding: 0;
      height: 520px;
    }
  }

  @media (max-width: 1000px) {
    footer p:first-child img {
      width: 200px;
    }
  }

  @media (max-width: 760px) {
    h1 {
      padding-top: 15vh;
    }

    h1 img {
      width: 80%;
      display: block;
      margin: auto;
    }

    .description {
      width: 80%;
    }

    .social {
      width: 90%;
    }

    .social li p {
      margin: 2% 0 20% 0;
      font-size: 11pt;
    }

    .about {
      width: 80%;
    }

    .about p {
      font-size: 11pt;
    }

    .about_description {
      font-size: 10pt !important;
      line-height: 1.5 !important;
    }
    .about .caution {
      width: 85%;
    }

    .about iframe {
      width: 90%;
      height: 400px;
      filter: grayscale(50%) invert(92%) contrast(83%);
    }

    .performer {
      width: 80%;
    }

    footer p {
      font-size: 10pt;
    }

    footer p:first-child img {
      width: 120px;
    }
  }
</style>
