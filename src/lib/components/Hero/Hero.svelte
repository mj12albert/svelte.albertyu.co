<script context="module">
  import Navigation from './Navigation.svelte';
</script>

<section class="hero">
  <header class="header">
    <h1 class="heading">
      Albert Yu is a freelance designer and developer in Hong Kong. He does not
      write nor speak in the third person.
    </h1>
    <Navigation />
  </header>
</section>

<style lang="scss">
  .hero {
    position: relative;
    width: 95%;
    min-height: 80vh;
    margin-left: 5%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    @include mq.media('>=md') {
      width: 80%;
      max-width: 66.6666666667rem;
      margin: 0 auto;
    }

    @include mq.media('>=xl') {
      max-width: 48.4848484848rem;
    }
  }

  .header {
    position: relative;
    width: 90%;
    max-width: 20.185rem;
    margin: 0 auto 0 0;

    @include mq.media('>=md') {
      width: 85%;
      max-width: 29.03rem;
    }

    @include mq.media('>=lg') {
      max-width: 34.8306782768rem;
    }
  }

  .heading {
    -webkit-backface-visibility: hidden;
    font-family: 'calluna';
    font-weight: 300;
    font-size: 1.82rem;
    line-height: 1.2;
    color: #3e3e3e;
    margin: 0;
    margin-top: 4rem;

    @include mq.media('>=md') {
      font-size: 2.182rem;
    }

    @include mq.media('>=lg') {
      font-size: 2.618rem;
    }
  }
</style>
