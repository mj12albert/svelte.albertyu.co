<script>
  import Button from './Button.svelte';
</script>

<section>
  <div class="inner">
    <h2>Currently available for new projects, or collaborations with other designers, programmers, artists, or engineers. I love diving into new challenges and meeting new friends.</h2>

    <Button>
      Get in touch
    </Button>
  </div>
</section>

<style lang="scss">
  section {
    background-color: #2e2e2e;
    padding: 2.945rem 0;
    display: flex;

    @include mq.media('>=md') {
      padding: 6.425rem 0;
    }

    @include mq.media('>=lg') {
      padding: 9.241rem 0;
    }
  }

  .inner {
    width: 90%;
    margin: 0 auto;

    @include mq.media('>=md') {
      width: 48%;
      max-width: 29.0909090909rem;
    }

    @include mq.media('>=lg') {
      max-width: 48.4848484848rem;
    }
  }

  h2 {
    @extend %text;
    font-weight: 300;
    font-size: 1.348rem;
    line-height: 1.2;
    color: #c4c4c4;
    margin-bottom: 2.618rem;

    @include mq.media('>=sm') {
      font-size: 1.618rem;
    }

    @include mq.media('>=md') {
      font-size: 1.348rem;
    }

    @include mq.media('>=lg') {
      font-size: 1.618rem;
    }
  }
</style>