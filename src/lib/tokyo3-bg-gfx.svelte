<script lang="ts">
    import { onMount } from "svelte";
    import * as THREE from 'three';

    import vertexShader from './tokyo3-bg-gfx.vert?raw';
    import fragmentShader from './tokyo3-bg-gfx.frag?raw'; 
    import { browser } from "$app/environment";

    export let canvas: HTMLCanvasElement;

    const getMobileOS = () => {
        if (!browser) return "";

        const ua = navigator.userAgent;
        if (/android/i.test(ua)) {
            return "Android";
        }
        else if ((/iPad|iPhone|iPod/.test(navigator.userAgent)) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)){
            return "iOS";
        }
        return "Other";
    };

    onMount(() => {

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera();
        const clock = new THREE.Clock();

        const getResolution = () => {            
            let x = window.innerWidth < 1500 ? 1500 : window.innerWidth;
            let y = window.innerHeight < 1200 ? 1200 : window.innerHeight;

            return new THREE.Vector2(x, y);
        }

        const uniforms = {
            resolution: { value: getResolution() },
            globalTime: { value: 0.0 }
        };

        const renderer = new THREE.WebGLRenderer({ canvas });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const geometry = new THREE.PlaneGeometry();
        const material = new THREE.ShaderMaterial({vertexShader, fragmentShader, uniforms});
        const quad = new THREE.Mesh(geometry, material);
        scene.add(quad);


        onresize = (e) => {
            renderer.setSize(window.innerWidth, window.innerHeight);                    
            uniforms.resolution.value = getResolution();
        };


        let frame: number;

        const loop = () => 
        {
            uniforms.globalTime.value = clock.getElapsedTime();
            renderer.render(scene, camera);

            frame = requestAnimationFrame(loop);
        };

        loop();

        return () => {
            cancelAnimationFrame(frame);
        }
    });
</script>

{#if getMobileOS() === "iOS"}
<canvas class="canvas_bg_fallback"></canvas>
{:else}
<canvas class="canvas_bg" bind:this={canvas}></canvas>
{/if}