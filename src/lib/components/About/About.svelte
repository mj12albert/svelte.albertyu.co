<section>
  <article>
    <svg><use xlink:href="#icon--logo"/></svg>

    <h2>I’m a designer and developer dedicated to building meaningful experiences that distill clarity from complexity, marry form to function, and connect ideas to people.</h2>

    <p>I make digital products like websites, applications, anything that goes on the web or on a screen. I occasionally dabble in print, packaging, and other shenanigans. Visual identity projects with a strong digital focus gets me really excited. I produce my best work partnering with clients who value intelligent, purposeful communication.</p>

    <p>I start projects with rich conversations to establish tone and voice, before venturing into ideation and execution. Instead of force-fitting your project into a rigid process, I tailor methods and deliverables to best meet the circumstances and challenges of every engagement.</p>

    <p>I work well by myself or as part of a team. I can sweat the details without losing sight of the big picture. Working remotely keeps my mind fresh and keeps costs low for everyone. I’m good at choosing the right tools for the job at hand, and I’m always learning new things to add to my toolbox. I do not wear trendy glasses.</p>
  </article>
</section>

<style lang="scss">
  section {
    padding: 2.945rem 0;

    @include mq.media('>=md') {
      padding: 6.425rem 0;
    }
  }

  article {
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

  svg {
    display: block;
    height: 5.2523888889rem;
    width: 2.3163888889rem;
    margin: 0 auto 2.618rem;
    padding-right: 0.833rem;
  }

  h2 {
    @extend %text;
  }
</style>