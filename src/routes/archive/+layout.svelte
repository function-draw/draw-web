<!-- header -->
<head>
    <meta charset="utf-8" />
    <title>draw();</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <link rel="icon" href="./images/draw_favicon.webp" />
    <link rel="apple-touch-icon" href="./images/draw_favicon.webp" sizes="128x128" />
    <link
      rel="icon"
      type="image/png"
      href="./images/draw_favicon.webp"
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
    <meta property="og:title" content="draw;" />
    <meta property="og:type" content="website" />
    <meta property="og:image:width" content="512" />
    <meta property="og:image:height" content="512" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@function_draw" />
</head>
  
<body>
    <div class="header">
      <ul>
        <li>
          <p><a href="./">draw(); WEBSITE</a></p>
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
    width: 300px;
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

a {
    color: white;
    text-decoration: none;
}

a:visited {
    color: white;
    text-decoration: none;
}
</style>
