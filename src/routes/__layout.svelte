<script>
  import './modern-normalize.css';
  import Icons from './_icons.svelte';
</script>

<Icons />

<main class="container">
  <slot></slot>
</main>

<style lang="scss">
  :global {
    html {
      font: normal 112.5%/1.65 serif;
      -webkit-backface-visibility: hidden;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
      font-family: 'calluna';
      font-weight: 300;
      color: #212121;
      margin: 0;
    }

    p {
      margin: auto auto 1rem;
    }
  }

  main {
    position: relative;
    z-index: 90;
    background-color: #fdfdfd;
  }
</style>