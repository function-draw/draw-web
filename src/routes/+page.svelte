<script>
  //import "../app.css";
  import Archive from "./archive/+page.svelte";
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
    <Archive path="images/draw-3-flyer.webp" />
    <div class="border"></div>
    <Archive path="/images/draw-2-flyer.png" />
    <div class="border"></div>
    <Archive path="/images/draw-1-flyer.png" />
    <div class="border"></div>
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
