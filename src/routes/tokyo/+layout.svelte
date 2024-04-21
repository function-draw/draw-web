<!-- header -->
<body>
  <div class="header">
    <ul>
      <li>
        <p>
          <a href="#top"><img src="/images/draw_logo_tokyo.png" alt="logo" /></a
          >
        </p>
      </li>
      <li>
        <p><a href="#about"> ABOUT</a></p>
      </li>
      <li>
        <p><a href="#performer">PERFORMER</a></p>
      </li>
      <li>
        <p><a href="../">draw(); WEBSITE</a></p>
      </li>
    </ul>
  </div>
</body>

<slot />

<style>
  body {
    margin: 0;
    padding: 0;
    background-color: black;
    color: white;
    font-family: "Jost", Roboto, "M PLUS 1p", "Hiragino Kaku Gothic Pro",
      "ヒラギノ角ゴ Pro W3", Meiryo, メイリオ, "游ゴシック Medium",
      "Yu Gothic Medium", "游ゴシック体", "Yu Gothic", YuGothic, "MS PGothic",
      Osaka, arial, sans-serif;
  }

  .header {
    position: fixed;
    z-index: 100;
    width: 100%;
    top: 0;
    background-image: linear-gradient(
      0deg,
      rgba(85, 85, 85, 0.15),
      rgba(0, 0, 0, 1)
    );
  }
  .header ul {
    display: flex;
    flex-wrap: nowrap;
    width: 600px;
    height: 50px;
    margin: 0 auto;
    padding: 0;
  }

  .header li {
    vertical-align: middle;
    width: 100%;
    margin: 0;
    padding: 0;
    display: inline-block;
    list-style: none;
  }

  .header li p {
    font-size: 13pt;
    font-weight: 500;
    position: relative;
    text-align: center;
  }

  .header li p img {
    position: absolute;
    top: -8px;
    left: 36px;
    width: 60%;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:visited {
    color: white;
    text-decoration: none;
  }
</style>
