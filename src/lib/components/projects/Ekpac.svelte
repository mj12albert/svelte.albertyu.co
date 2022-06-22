<script>
  import Lede from './Lede.svelte';
  import Aside from './Aside.svelte';
  import Figure from './Figure.svelte';
  import Caption from './Caption.svelte';
</script>

<section class="ekpac">
  <div class="background" />
  <article class="column">
    <h2>Ekpac Sourcing</h2>

    <Lede>
      <Aside services={['identity', 'web design', 'code']}>
        <span slot="year"> 2013 </span>
      </Aside>

      <div>
        <p>
          Ekpac started in Hong Kong as seafaring merchants, evolving over the
          course of a century into an industrial conglomerate operating across
          diverse construction and manufacturing sectors. A standalone marketing
          website was commissioned as part of an initiative to grow the sourcing
          division into a core line-of-business for the group. The nature of
          sourcing for large scale industrial organization means generating
          sales comes down to the efforts and expertise of Ekpac’s global sales
          force. The website was designed accordingly around the purpose of
          reinforcing the company’s reputation for quality and service.
          Additionally, a concept for a visual identity redesign was developed
          for Ekpac to explore the possibility of a broader refresh of the
          corporate brand.
        </p>

        <small>Additional Graphic Design: Bronson Fung</small>
      </div>
    </Lede>

    <Figure>
      <picture>
        <source
          srcset="/images/ekpac/ekpac-responsive-lg.png, /images/ekpac/ekpac-responsive-lg@2x.png 2x"
          media="(min-width: 48.0625em)"
        />
        <source
          srcset="/images/ekpac/ekpac-responsive-md.png, /images/ekpac/ekpac-responsive-md@2x.png 2x"
          media="(min-width: 30.0625em)"
        />
        <source
          srcset="/images/ekpac/ekpac-responsive-sm.png, /images/ekpac/ekpac-responsive-sm@2x.png 2x"
          media="(min-width: 20.0625em)"
        />
        <img
          srcset="/images/ekpac/ekpac-responsive-xs.png, /images/ekpac/ekpac-responsive-xs@2x.png 2x"
          alt=""
        />
      </picture>
    </Figure>

    <Figure>
      <video autoplay loop class="">
        <source
          src="/images/ekpac/ekpac-process.webm"
          type="video/webm; codecs=vp8"
        />
        <source
          src="/images/ekpac/ekpac-process.mp4"
          type="video/mp4; codecs=avc1.42E01E"
        />
        <source
          src="/images/ekpac/ekpac-process.ogv"
          type="video/ogg; codecs=theora"
        />
      </video>
      <Caption class="project__caption--below left"
        >The sourcing business’s process and approach was presented as candidly
        as possible to stand out in China’s industrial sector, which is often
        perceived as opaque and impenetrable.</Caption
      >
    </Figure>

    <Figure cols={2}>
      <picture class="border">
        <source
          srcset="/images/ekpac/ekpac-products-lg@2x.jpg"
          media="(min-width: 48.0625em)"
        />
        <source
          srcset="/images/ekpac/ekpac-products-md@2x.jpg"
          media="(min-width: 30.0625em)"
        />
        <source
          srcset="/images/ekpac/ekpac-products-sm@2x.jpg"
          media="(min-width: 20.0625em)"
        />
        <img srcset="/images/ekpac/ekpac-products-xs@2x.jpg" alt="" />
      </picture>

      <hr class="hr" />

      <picture class="border">
        <source
          srcset="/images/ekpac/ekpac-excellence-lg@2x.jpg"
          media="(min-width: 48.0625em)"
        />
        <source
          srcset="/images/ekpac/ekpac-excellence-md@2x.jpg"
          media="(min-width: 30.0625em)"
        />
        <source
          srcset="/images/ekpac/ekpac-excellence-sm@2x.jpg"
          media="(min-width: 20.0625em)"
        />
        <img srcset="/images/ekpac/ekpac-excellence-xs@2x.jpg" alt="" />
      </picture>
    </Figure>

    <hr class="hr" />

    <Figure>
      <picture class="border">
        <source
          srcset="/images/ekpac/ekpac-id-beforeAfter-lg.jpg, /images/ekpac/ekpac-id-beforeAfter-lg@2x.jpg 2x"
          media="(min-width: 48.0625em)"
        />
        <source
          srcset="/images/ekpac/ekpac-id-beforeAfter-md.jpg, /images/ekpac/ekpac-id-beforeAfter-md@2x.jpg 2x"
          media="(min-width: 30.0625em)"
        />
        <source
          srcset="/images/ekpac/ekpac-id-beforeAfter-sm.jpg, /images/ekpac/ekpac-id-beforeAfter-sm@2x.jpg 2x"
          media="(min-width: 20.0625em)"
        />
        <img
          srcset="/images/ekpac/ekpac-id-beforeAfter-xs.jpg, /images/ekpac/ekpac-id-beforeAfter-xs@2x.jpg 2x"
          alt=""
        />
      </picture>

      <Caption class="project__caption--below left"
        >The new mark is distinguished by a sleek, agile form – a visualization
        of Ekpac’s persistent forward momentum. The redesign as a whole
        preserves and repurposes elements of the old identity, paying respect to
        the company’s rich heritage.</Caption
      >
    </Figure>

    <Figure cols={2}>
      <picture class="border">
        <source
          srcset="/images/ekpac/ekpac-id-heritage-lg.jpg, /images/ekpac/ekpac-id-heritage-lg@2x.jpg 2x"
          media="(min-width: 48.0625em)"
        />
        <source
          srcset="/images/ekpac/ekpac-id-heritage-md.jpg, /images/ekpac/ekpac-id-heritage-md@2x.jpg 2x"
          media="(min-width: 30.0625em)"
        />
        <source
          srcset="/images/ekpac/ekpac-id-heritage-sm.jpg, /images/ekpac/ekpac-id-heritage-sm@2x.jpg 2x"
          media="(min-width: 20.0625em)"
        />
        <img
          srcset="/images/ekpac/ekpac-id-heritage-xs.jpg, /images/ekpac/ekpac-id-heritage-xs@2x.jpg 2x"
          alt=""
        />
      </picture>

      <picture class="border">
        <source
          srcset="/images/ekpac/ekpac-id-wordmark-lg.jpg, /images/ekpac/ekpac-id-wordmark-lg@2x.jpg 2x"
          media="(min-width: 48.0625em)"
        />
        <source
          srcset="/images/ekpac/ekpac-id-wordmark-md.jpg, /images/ekpac/ekpac-id-wordmark-md@2x.jpg 2x"
          media="(min-width: 30.0625em)"
        />
        <source
          srcset="/images/ekpac/ekpac-id-wordmark-sm.jpg, /images/ekpac/ekpac-id-wordmark-sm@2x.jpg 2x"
          media="(min-width: 20.0625em)"
        />
        <img
          srcset="/images/ekpac/ekpac-id-wordmark-xs.jpg, /images/ekpac/ekpac-id-wordmark-xs@2x.jpg 2x"
          alt=""
        />
      </picture>
    </Figure>

    <Figure cols={2}>
      <picture class="border">
        <source
          srcset="/images/ekpac/ekpac-id-lockups-lg.jpg, /images/ekpac/ekpac-id-lockups-lg@2x.jpg 2x"
          media="(min-width: 48.0625em)"
        />
        <source
          srcset="/images/ekpac/ekpac-id-lockups-md.jpg, /images/ekpac/ekpac-id-lockups-md@2x.jpg 2x"
          media="(min-width: 30.0625em)"
        />
        <source
          srcset="/images/ekpac/ekpac-id-lockups-sm.jpg, /images/ekpac/ekpac-id-lockups-sm@2x.jpg 2x"
          media="(min-width: 20.0625em)"
        />
        <img
          srcset="/images/ekpac/ekpac-id-lockups-xs.jpg, /images/ekpac/ekpac-id-lockups-xs@2x.jpg 2x"
          alt=""
        />
      </picture>

      <picture class="border">
        <source
          srcset="/images/ekpac/ekpac-id-colors-lg.jpg, /images/ekpac/ekpac-id-colors-lg@2x.jpg 2x"
          media="(min-width: 48.0625em)"
        />
        <source
          srcset="/images/ekpac/ekpac-id-colors-md.jpg, /images/ekpac/ekpac-id-colors-md@2x.jpg 2x"
          media="(min-width: 30.0625em)"
        />
        <source
          srcset="/images/ekpac/ekpac-id-colors-sm.jpg, /images/ekpac/ekpac-id-colors-sm@2x.jpg 2x"
          media="(min-width: 20.0625em)"
        />
        <img
          srcset="/images/ekpac/ekpac-id-colors-xs.jpg, /images/ekpac/ekpac-id-colors-xs@2x.jpg 2x"
          alt=""
        />
      </picture>
    </Figure>
  </article>
</section>

<style lang="scss">
  section {
    background-color: darken(#093054, 5);
    color: rgba(#fafafa, 0.99);
    padding-bottom: 6.425rem;
  }

  article {
    @extend %column;
    margin-top: -20rem;
  }

  .background {
    height: 25rem;
    background-image: url('/images/ekpac/ekpac-header.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    &::after {
      @extend %project-header-gradient-layer;

      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(7, 35, 61, 0.1),
        rgba(7, 35, 61, 0.5) 32%,
        rgba(7, 35, 61, 0.88) 62%,
        darken(#093054, 5)
      );
    }

    @include mq.media('>=md') {
      height: 35rem;
    }
  }

  h2 {
    @extend %project-title;
    margin-left: -0.1111111111rem;
  }

  .ekpac :global(aside li:after) {
    color: #fecb00;
  }

  small {
    @extend %project-credits;
    color: rgba(#cfcfcf, 0.99);
  }

  .border {
    box-shadow: 0 0 0 1px lighten(#093054, 8);
  }

  // caption arrow color should be color: #fecb00
  .ekpac :global(figcaption) {
    color: #f2f2f2;
  }

  .hr {
    background-color: lighten(#093054, 15);
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-color: rgba(#fecb00, 0.75);
  }
</style>
