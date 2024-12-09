<script lang="ts">
  // @ts-nocheck
  import './layout.css'
  import { onMount } from "svelte";
  onMount(() => {
  });
</script>

<!-- header -->
<body>
  <div class="header">
    <!-- left -->
    <div id="left">
      <img src="../../assets/images/draw_logo_tokyo.png" alt="logo" class="draw_logo"/>
      <p>about</p>
      <p>performer</p>
      <p>location</p>
    </div>
      
    <!-- right -->
    <div id="right">
      <p><a href="/" class="draw_link">draw(); Website</a></p>
      <div id="border"></div>
      <a href="https://twitter.com/function_draw" target="_blank"><img src="../../assets/images/sns_icons/X_logo_2023.svg" alt="draw-X-logo-2023"/></a>
      <a href="https://www.twitch.tv/function_draw" target="_blank"><img src="../../assets/images/sns_icons/TwitchGlitchWhite.svg" alt="twitch"/></a>
      <a href="https://draw-tokyo.peatix.com/" target="_blank"><img src="../../assets/images/sns_icons/ticket.png" alt="ticket"/></a>
    </div>
  </div>
</body> 
  
<slot />
  
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
</style>
  