<script>
  import './modern-normalize.css';
  import Icons from './_icons.svelte';
</script>

<Icons />

<main class="container">
  <slot></slot>
</main>

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
    article {
      position: relative;
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
  }
</style>