<script lang="ts">
  // @ts-nocheck
  import './layout.css'
  import { onMount } from "svelte";
  onMount(() => {
  });
</script>

<!-- header -->
<div id="layout-tokyo2">
  <div id="header">
    <!-- left -->
    <div class="left">
      <img src="./assets/images/draw_logo_tokyo.png" alt="logo" class="draw_logo"/>
      <a href="#about">about</a>
      <a href="#performer">performers</a>
      <a href="#location">location</a>
    </div>
      
    <!-- right -->
    <div class="right">
      <p><a href="/" class="draw_link">draw(); Website</a></p>
      <div class="border"></div>
      <a href="https://twitter.com/function_draw" target="_blank"><img src="./assets/images/sns_icons/X_logo_2023.svg" alt="draw-X-logo-2023"/></a>
      <a href="https://www.twitch.tv/function_draw" target="_blank"><img src="./assets/images/sns_icons/TwitchGlitchWhite.svg" alt="twitch"/></a>
      <a href="https://draw-tokyo2.peatix.com/" target="_blank"><img src="./assets/images/sns_icons/ticket.png" alt="ticket"/></a>
    </div>
  </div>
</div> 
  
<slot />
  
<style>
  #layout-tokyo2 {
    margin: 0;
    padding: 0;
    color: white;
    font-family: "Jost", Roboto, "M PLUS 1p", "Hiragino Kaku Gothic Pro",
      "ヒラギノ角ゴ Pro W3", Meiryo, メイリオ, "游ゴシック Medium",
      "Yu Gothic Medium", "游ゴシック体", "Yu Gothic", YuGothic, "MS PGothic",
      Osaka, arial, sans-serif;
  }
</style>
  