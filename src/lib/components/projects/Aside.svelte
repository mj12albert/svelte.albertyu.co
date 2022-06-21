<script>
  export let services;
</script>

<aside class="project__info">
  <span class="year">
    <slot name="year">
      YYYY
    </slot>
  </span>
  <ul class="project__services">
    {#each services as s}
      <li>{s}</li>
    {/each}
  </ul>
</aside>

<style lang="scss">
  aside {
    width: 90%;
    margin: 0 0 1.618rem;

    @extend %sans-serif;
    text-transform: uppercase;
    font-size: 0.65rem;
    line-height: 1;

    @include mq.media('>=md') {
      flex: 0 0 40%;
      margin: -0.515rem 0 0;
    }
  }

  .year {
    font-size: 130%;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding-left: 0;
  }

  li {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    line-height: 1;

    &:after {
      content: " /";
      margin: 0 0.375rem;
      font-size: 150%;
      font-weight: 300;
    }

    &:last-of-type::after {
      content: "";
    }
  }
</style>