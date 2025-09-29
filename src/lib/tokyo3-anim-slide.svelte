<script lang="ts">
    // @ts-nocheck
    import './tokyo2-anim-slide.css'

    function easeOutQuint(x: number): number {
        return 1.0 - Math.pow(1.0 - x, 5.0);
    }

    function easeOutCubic(x: number): number {
        return 1.0 - Math.pow(1.0 - x, 3.0);
    }

    // documentがマウントされてから実行することを保証
    import { onMount } from "svelte";
  
    onMount(() => {
        let isScrolled = false;

        function onLoaded() {
            const rate = 0.065;
            // 
            const layoutHeaderLogoDefaultValue = -209;

            const domTokyo2 = document.getElementById("page_tokyo2");
            // 初期状態で表示される要素
            const domTopIni = domTokyo2?.getElementsByClassName("top_ini")[0];
            // スクロールして表示される要素
            const domTopMain = document.getElementById("about");
            // ヘッダーのロゴ(スクロール表示)
            const domLayoutHeaderLeft = document.getElementById("header")?.getElementsByClassName("left")[0];
            const domLayoutHeaderLogo = domLayoutHeaderLeft?.getElementsByClassName("draw_logo")[0];

            const scrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;

            let timeValue = 1.0;
            const updateView = (): void => {
                timeValue *= 1.0 - rate;
                if (timeValue <= .001) {
                    timeValue = 0;
                }
                const easeQuintValue = easeOutQuint(timeValue);
                const easeCubicValue = easeOutCubic(timeValue); 

                if (scrollTop > 0) {
                    // スクロールしたとき
                    domTopIni.style.opacity = easeCubicValue;
                    domTopMain.style.opacity = 1.0 - easeCubicValue;
                    domLayoutHeaderLeft.style.transform = `translateX(${layoutHeaderLogoDefaultValue * easeCubicValue}px)`;
                    domLayoutHeaderLogo.style.opacity = 1.0 - easeQuintValue;
                } else {
                    // 初期状態に戻す
                    domTopIni.style.opacity = 1.0 - easeCubicValue;
                    domTopMain.style.opacity = easeCubicValue;
                    domLayoutHeaderLeft.style.transform = `translateX(${layoutHeaderLogoDefaultValue * (1.0 - easeCubicValue)}px)`;
                    domLayoutHeaderLogo.style.opacity = easeQuintValue;
                }

                if (timeValue > .001) {
                    requestAnimationFrame(updateView);
                }
            }

            if (scrollTop > 0 && !isScrolled) {
                isScrolled = true;
                updateView();
            } 
            // else if (scrollTop == 0) {
            //     isScrolled = false;
            //     updateView();
            // }
        }

        function waitOnLoad() {
            if (document.readyState == "complete") {
                window.addEventListener("scroll", onLoaded);
            } else {
                requestAnimationFrame(waitOnLoad);
            }
        }

        waitOnLoad();
    });
</script>

<div class="top_ini">
    <div class="title">
      <img src="./assets/images/draw_logo_tokyo.png" alt="logo"/>
      <p>Audio/Visual Event<b> "draw(tokyo); #3" </b>at Shibuya 2025/10</p>
    </div>
</div>