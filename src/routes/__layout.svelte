<script>
  import './modern-normalize.css';
  import SpriteSheet from '$lib/components/SpriteSheet.svelte';
  import Overlay from '$lib/components/Overlay.svelte';
</script>

<SpriteSheet />

<main>
  <slot></slot>
</main>

<Overlay />

<style lang="scss">
  $blue: #0074d9;
  $aqua:  #7fdbff;

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

    div,
    article,
    picture {
      position: relative;
      display: block;
    }

    h1, h2, h3, h4, h5, h6 {
      @extend %sans-serif;
    }

    p {
      margin: auto auto 1rem;
    }

    a {
      transition: color 200ms ease-in-out, background-color 200ms ease-in-out;

      &:link,
      &:visited {
        color: $blue;
      }

      &:hover,
      &:focus,
      &:active {
        color: $aqua;
      }
    }

    hr {
      width: 25%;
      height: 2px;
      border: 0;

      margin: 2.945rem auto;

      @include mq.media('>=md') {
        display: none;
      }
    }
  }

  main {
    position: relative;
    z-index: 90;
    background-color: #fdfdfd;
    box-shadow: 0 0 1px 0 $neon-1;
    transition: transform 350ms 100ms;

    &.overlay-open {
      opacity: 0.6;
      transition: transform 450ms;

      &.top {
        transform: translateY(-9%) scale(0.8);
      }

      &.bottom {
        transform: translateY(9%) scale(0.8);
      }
    }
  }
</style>