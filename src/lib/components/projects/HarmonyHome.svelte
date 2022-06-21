<script>
  import Lede from './Lede.svelte';
  import Aside from './Aside.svelte';
  import Figure from './Figure.svelte';
  import Caption from './Caption.svelte';
</script>

<section class="harmonyhome">
  <div class="background"></div>
  <article class="column">
    <h2>Home Psychological Services</h2>

    <Lede>
      <Aside services={['design', 'code', 'backend']}>
        <span slot="year">
          2014
        </span>
      </Aside>

      <p>Home is a partnership between Eliza and Winnie, clinical psychologists specializing in child development and family services, with a strong emphasis on practising positive psychology. Their new website was designed around a serene, uplifting graphical identity that reflects the personality and values of the practice. The old content-management system was also stripped out and replaced with leaner, more specialized components to simplify creating structured content like articles and workshops, and to significantly reduce maintenance overhead. The responsive site was templated and built with <a href="https://jekyllrb.com/">Jekyll</a>, hosted on <a href="https://pages.github.com/">Github Pages</a>, and integrated with <a href="https://developmentseed.org/blog/2013-03-20-building-a-new-prose">Prose.io</a> for writing and publishing.</p>
    </Lede>

    <Figure>
      <picture>
        <source srcset="/images/harmonyhome/hh-responsive-lg.png, /images/harmonyhome/hh-responsive-lg@2x.png 2x" media="(min-width: 48.0625em)">
        <source srcset="/images/harmonyhome/hh-responsive-md.png, /images/harmonyhome/hh-responsive-md@2x.png 2x" media="(min-width: 30.0625em)">
        <source srcset="/images/harmonyhome/hh-responsive-sm.png, /images/harmonyhome/hh-responsive-sm@2x.png 2x" media="(min-width: 20.0625em)">
        <img srcset="/images/harmonyhome/hh-responsive-xs.png, /images/harmonyhome/hh-responsive-xs@2x.png 2x">
      </picture>
    </Figure>

    <Figure cols={2}>
      <picture class="border">
        <source srcset="/images/harmonyhome/hh-style-tile-a-lg@2x.jpg" media="(min-width: 48.0625em)">
        <source srcset="/images/harmonyhome/hh-style-tile-a-md@2x.jpg" media="(min-width: 30.0625em)">
        <source srcset="/images/harmonyhome/hh-style-tile-a-sm@2x.jpg" media="(min-width: 20.0625em)">
        <img srcset="/images/harmonyhome/hh-style-tile-a-xs@2x.jpg">
      </picture>

      <picture class="border">
        <source srcset="/images/harmonyhome/hh-style-tile-b-lg@2x.jpg" media="(min-width: 48.0625em)">
        <source srcset="/images/harmonyhome/hh-style-tile-b-md@2x.jpg" media="(min-width: 30.0625em)">
        <source srcset="/images/harmonyhome/hh-style-tile-b-sm@2x.jpg" media="(min-width: 20.0625em)">
        <img srcset="/images/harmonyhome/hh-style-tile-b-xs@2x.jpg">
      </picture>

      <Caption class="project__caption--below right">Style tiles and element collages were used to quickly explore visual styles and elements. The final design is characterized by a soft color palette derived from the existing logo and subtle photography treatments.</Caption>
    </Figure>

    <Figure>
      <picture class="border">
        <source srcset="/images/harmonyhome/hh-prose-interface-lg.jpg, /images/harmonyhome/hh-prose-interface-lg@2x.jpg 2x" media="(min-width: 48.0625em)">
        <source srcset="/images/harmonyhome/hh-prose-interface-md.jpg, /images/harmonyhome/hh-prose-interface-md@2x.jpg 2x" media="(min-width: 30.0625em)">
        <source srcset="/images/harmonyhome/hh-prose-interface-sm.jpg, /images/harmonyhome/hh-prose-interface-sm@2x.jpg 2x" media="(min-width: 20.0625em)">
        <img srcset="/images/harmonyhome/hh-prose-interface-xs.jpg, /images/harmonyhome/hh-prose-interface-xs@2x.jpg 2x">
      </picture>

      <Caption class="project__caption--below left">On the backend, Prose was chosen for its simple and intuitive interface that only exposes writing and editing capabilities. Combining that with Github Pages allowed effortless publishing and backups. A lot of technical debt created by the previous, conventional CMS was eliminated.</Caption>
    </Figure>

    <Figure cols={2}>
      <picture class="border">
        <source srcset="/images/harmonyhome/hh-profile-lg@2x.jpg" media="(min-width: 48.0625em)">
        <source srcset="/images/harmonyhome/hh-profile-md@2x.jpg" media="(min-width: 30.0625em)">
        <source srcset="/images/harmonyhome/hh-profile-sm@2x.jpg" media="(min-width: 20.0625em)">
        <img srcset="/images/harmonyhome/hh-profile-xs@2x.jpg">
      </picture>

      <hr class="hr">

      <picture class="border">
        <source srcset="/images/harmonyhome/hh-services-lg@2x.jpg" media="(min-width: 48.0625em)">
        <source srcset="/images/harmonyhome/hh-services-md@2x.jpg" media="(min-width: 30.0625em)">
        <source srcset="/images/harmonyhome/hh-services-sm@2x.jpg" media="(min-width: 20.0625em)">
        <img srcset="/images/harmonyhome/hh-services-xs@2x.jpg">
      </picture>
    </Figure>

  </article>
</section>

<style lang="scss">
  section {
    background-color: lighten(#8dd7c3, 27);
    color: darken(#8dd7c3, 57);
    padding-bottom: 6.425rem;
  }

  article {
    @extend %column;
    margin-top: -10rem;
  }

  .background {
    height: 15rem;
    background-image:url('/images/harmonyhome/hh-header.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    @include mq.media('>=md') {
      height: 25rem;
    }

    &:after {
      @extend %project-header-gradient-layer;

      background-image: linear-gradient(to bottom,
        rgba(255, 255, 255, 0.0001),
        lighten(#8dd7c3, 27)
      );
    }
  }

  h2 {
    @extend %project-title;
    color: rgba(#1a4b3e, 0.85);
    border-color: rgba(lighten(#1a4b3e, 12), 0.85);
  }

  .border {
    box-shadow: 0 0 0 1px #f2f2f2;
  }

  // caption arrow color should be color: #0375B3
  .harmonyhome :global(figcaption) {
    color: desaturate(lighten(#1a4b3e, 20), 20%);
  }
</style>
