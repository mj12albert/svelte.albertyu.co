<script>
  export let align = 'left';
  export let block = true;
</script>

<figcaption
  style="
    grid-column: span {block ? 2 : 1};
    justify-self: {{left: 'start', right: 'end', }[align]};
  "
>
  <slot />
</figcaption>

<style lang="scss">
  figcaption {
    font-family: 'calluna-sans';
    font-size: 0.9rem;
    line-height: 1.348;
    position: relative;
    max-width: 65ch;
  }
</style>
