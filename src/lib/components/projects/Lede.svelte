<header>
  <slot />
</header>

<style lang="scss">
  header {
    display: flex;
    flex-flow: column nowrap;
    align-content: flex-start;
    width: 90%;
    margin: 0 auto;

    @include mq.media('>=md') {
      flex-flow: row nowrap;
      width: 100%;
    }
  }
</style>
