<script lang="ts">
    import { onMount } from "svelte";
    import * as THREE from 'three';

    import vertexShader from './tokyo2-bg-gfx.vert?raw';
    import fragmentShader from './tokyo2-bg-gfx.frag?raw'; 

    export let canvas: HTMLCanvasElement;

    onMount(() => {
        
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera();
        const clock = new THREE.Clock();

        const uniforms = {
            resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            globalTime: { value: 0.0 },
        };

        const renderer = new THREE.WebGLRenderer({ canvas });

        const geometry = new THREE.PlaneGeometry();
        const material = new THREE.ShaderMaterial({vertexShader, fragmentShader, uniforms});
        const quad = new THREE.Mesh(geometry, material);
        scene.add(quad);

        requestAnimationFrame(() => {

            uniforms.globalTime.value = clock.getElapsedTime();

            renderer.render(scene, camera);
        });
    });
</script>

<!-- <canvas class="canvas_bg"></canvas> -->
<!-- <canvas bind:this={canvas}></canvas> -->

<p>hoge</p>