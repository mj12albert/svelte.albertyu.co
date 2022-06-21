<script>
  export let cols = 1;
</script>

<figure style:grid-template-columns="repeat({cols}, 1fr">
  <slot></slot>
</figure>

<style lang="scss">
  figure {
    position: relative;
    width: 100%;
    clear: both;
    margin: 2.618rem 0;

    @include mq.media('>=md') {
      margin: 4.236rem 0;
      display: grid;
      grid-gap: 1.5rem;
    }
  }

  figure :global(img),
  figure :global(video), {
    max-width: 100%;
  }
</style>