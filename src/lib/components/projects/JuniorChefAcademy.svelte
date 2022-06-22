<script>
  import Lede from './Lede.svelte';
  import Aside from './Aside.svelte';
  import Figure from './Figure.svelte';
  import Caption from './Caption.svelte';
</script>

<section class="juniorchefacademy">
  <div class="background" />
  <article class="column">
    <h2>Junior Chef Academy</h2>

    <Lede>
      <Aside services={['art direction', 'identity', 'web design', 'code']}>
        <span slot="year"> 2013 </span>
      </Aside>

      <div>
        <p>
          Junior Chef Academy offers a one-of-a-kind extra-curricular learning
          experience for kids and teenagers, which happens to be a particularly
          crowded space in Hong Kong. Founder Judy Li subverts the typical
          recipe-based approach to cooking classes, instead teaching basic
          kitchen skills and simple preparations with a focus on nutritional,
          wholesome eating, giving her students a headstart on building healthy
          eating habits and self-sufficiency in the kitchen. This project was a
          joy to work on! The visual identity design struck a great balance
          between the playfulness of the class experience and the seriousness of
          underlying teachings. Print collateral and a landing page was created
          to promote their inaugural series of summer classes.
        </p>

        <small
          >Graphic Design: Bronson Fung <span class="slash">&nbsp;/&nbsp;</span>
          Production: Progressive Press</small
        >
      </div>
    </Lede>

    <Figure cols={2}>
      <picture class="border-white fixed">
        <source
          srcset="/images/juniorchefacademy/jca-bear-doodle-lg.jpg, /images/juniorchefacademy/jca-bear-doodle-lg@2x.jpg 2x"
          media="(min-width: 48.0625em)"
        />
        <source
          srcset="/images/juniorchefacademy/jca-bear-doodle-md.jpg, /images/juniorchefacademy/jca-bear-doodle-md@2x.jpg 2x"
          media="(min-width: 30.0625em)"
        />
        <source
          srcset="/images/juniorchefacademy/jca-bear-doodle-sm.jpg, /images/juniorchefacademy/jca-bear-doodle-sm@2x.jpg 2x"
          media="(min-width: 20.0625em)"
        />
        <img
          srcset="/images/juniorchefacademy/jca-bear-doodle-xs.jpg, /images/juniorchefacademy/jca-bear-doodle-xs@2x.jpg 2x"
          alt=""
        />
      </picture>
      <Caption class="project__caption--jca project__caption--right"
        >This fellow was Judy’s initial “self-portrait” of her brand, and
        somehow found its way into our initial email conversations about the
        project. It provided a good starting point for discussing topics like
        personality, purpose, and values – the intangible qualities yet critical
        qualities that make a strong brand.</Caption
      >
    </Figure>

    <Figure>
      <picture class="border-white">
        <source
          srcset="/images/juniorchefacademy/jca-personality-lg.jpg, /images/juniorchefacademy/jca-personality-lg@2x.jpg 2x"
          media="(min-width: 48.0625em)"
        />
        <source
          srcset="/images/juniorchefacademy/jca-personality-md.jpg, /images/juniorchefacademy/jca-personality-md@2x.jpg 2x"
          media="(min-width: 30.0625em)"
        />
        <source
          srcset="/images/juniorchefacademy/jca-personality-sm.jpg, /images/juniorchefacademy/jca-personality-sm@2x.jpg 2x"
          media="(min-width: 20.0625em)"
        />
        <img
          srcset="/images/juniorchefacademy/jca-personality-xs.jpg, /images/juniorchefacademy/jca-personality-xs@2x.jpg 2x"
          alt=""
        />
      </picture>
      <Caption class="project__caption--jca project__caption--below right"
        >The design challenge pretty much came down to putting a “fun twist” on
        education, which is probably by far the most common way that people
        position educational programs and activities for children. To
        differentiate the identity, we eliminated the word “fun” from our
        vocabulary, and explored typographical representations of Judy’s most
        distinct personality traits. The casual, sophistication of Pacifico’s
        cursive letterforms, large strokes, and generous curves captured exactly
        what we were looking for.</Caption
      >
    </Figure>

    <hr class="hr" />

    <Figure cols={2}>
      <Caption
        class="project__caption--jca project__caption--left"
        id="jca-bear-doodle-highlight-caption"
        >Practical, everyday skills is the most important thing Judy wanted to
        teach her students. As an enthusiastic home-cook myself, I understood
        the importance of using good tools for developing kitchen skills and
        gaining practical experience. Junior Chef Academy’s graphic identity
        began with repurposing this whisk.</Caption
      >
      <picture class="border-white fixed" id="jca-bear-doodle-highlight">
        <source
          srcset="/images/juniorchefacademy/jca-bear-doodle-highlight-md.jpg, /images/juniorchefacademy/jca-bear-doodle-highlight-md@2x.jpg 2x"
          media="(min-width: 30.0625em)"
        />
        <source
          srcset="/images/juniorchefacademy/jca-bear-doodle-highlight-sm.jpg, /images/juniorchefacademy/jca-bear-doodle-highlight-sm@2x.jpg 2x"
          media="(min-width: 20.0625em)"
        />
        <img
          srcset="/images/juniorchefacademy/jca-bear-doodle-highlight-xs.jpg, /images/juniorchefacademy/jca-bear-doodle-highlight-xs@2x.jpg 2x"
          alt=""
        />
      </picture>
    </Figure>

    <Figure cols={2}>
      <picture class="border-white fixed">
        <source
          srcset="/images/juniorchefacademy/jca-utensils-lg.jpg, /images/juniorchefacademy/jca-utensils-lg@2x.jpg 2x"
          media="(min-width: 48.0625em)"
        />
        <source
          srcset="/images/juniorchefacademy/jca-utensils-md.jpg, /images/juniorchefacademy/jca-utensils-md@2x.jpg 2x"
          media="(min-width: 30.0625em)"
        />
        <source
          srcset="/images/juniorchefacademy/jca-utensils-sm.jpg, /images/juniorchefacademy/jca-utensils-sm@2x.jpg 2x"
          media="(min-width: 20.0625em)"
        />
        <img
          srcset="/images/juniorchefacademy/jca-utensils-xs.jpg, /images/juniorchefacademy/jca-utensils-xs@2x.jpg 2x"
          alt=""
        />
      </picture>
      <Caption class="project__caption--jca project__caption--right"
        >Whisks happen to be a very common graphical device for anything related
        to food and cooking. Yet most cooks, celebrity, professional and amateur
        alike, would argue that the knife is a cook’s single most important
        tool. Judy believes that being practical in the kitchen means making use
        of all the tools at your disposal at the right time and occasion.</Caption
      >
    </Figure>

    <Figure>
      <picture class="">
        <source
          srcset="/images/juniorchefacademy/jca-pattern-lg.jpg, /images/juniorchefacademy/jca-pattern-lg@2x.jpg 2x"
          media="(min-width: 48.0625em)"
        />
        <source
          srcset="/images/juniorchefacademy/jca-pattern-md.jpg, /images/juniorchefacademy/jca-pattern-md@2x.jpg 2x"
          media="(min-width: 30.0625em)"
        />
        <source
          srcset="/images/juniorchefacademy/jca-pattern-sm.jpg, /images/juniorchefacademy/jca-pattern-sm@2x.jpg 2x"
          media="(min-width: 20.0625em)"
        />
        <img
          srcset="/images/juniorchefacademy/jca-pattern-xs.jpg, /images/juniorchefacademy/jca-pattern-xs@2x.jpg 2x"
          alt=""
        />
      </picture>
      <Caption class="project__caption--jca project__caption--below left"
        >We fashioned a a whole set of kitchen tools, which was tiled into a
        pattern, forming the backbone of Junior Chef Academy’s identity.
        Repetition is inherently pleasing to the eye, and the playfulness of the
        pattern took the edge off its stern arrangement. The solid strokes and
        gently edges of the pattern was informed by the letterforms of Pacifico,
        which was used as a titling font.</Caption
      >
    </Figure>

    <Figure cols={2}>
      <picture class="border-red ">
        <source
          srcset="/images/juniorchefacademy/jca-bacon-lg@2x.jpg"
          media="(min-width: 48.0625em)"
        />
        <source
          srcset="/images/juniorchefacademy/jca-bacon-md@2x.jpg"
          media="(min-width: 30.0625em)"
        />
        <source
          srcset="/images/juniorchefacademy/jca-bacon-sm@2x.jpg"
          media="(min-width: 20.0625em)"
        />
        <img srcset="/images/juniorchefacademy/jca-bacon-xs@2x.jpg" alt="" />
      </picture>
      <picture class="border-gray  last">
        <source
          srcset="/images/juniorchefacademy/jca-print-a-lg.jpg, /images/juniorchefacademy/jca-print-a-lg@2x.jpg 2x"
          media="(min-width: 48.0625em)"
        />
        <source
          srcset="/images/juniorchefacademy/jca-print-a-md.jpg, /images/juniorchefacademy/jca-print-a-md@2x.jpg 2x"
          media="(min-width: 30.0625em)"
        />
        <source
          srcset="/images/juniorchefacademy/jca-print-a-sm.jpg, /images/juniorchefacademy/jca-print-a-sm@2x.jpg 2x"
          media="(min-width: 20.0625em)"
        />
        <img
          srcset="/images/juniorchefacademy/jca-print-a-xs.jpg, /images/juniorchefacademy/jca-print-a-xs@2x.jpg 2x"
          alt=""
        />
      </picture>
      <Caption class="project__caption--jca project__caption--below right"
        >Print collateral included a brochure and business cards. The pattern
        proved to be eye-catching even at smaller sizes.</Caption
      >
    </Figure>

    <Figure cols={2}>
      <picture class="border-gray ">
        <source
          srcset="/images/juniorchefacademy/jca-print-b-lg.jpg, /images/juniorchefacademy/jca-print-b-lg@2x.jpg 2x"
          media="(min-width: 48.0625em)"
        />
        <source
          srcset="/images/juniorchefacademy/jca-print-b-md.jpg, /images/juniorchefacademy/jca-print-b-md@2x.jpg 2x"
          media="(min-width: 30.0625em)"
        />
        <source
          srcset="/images/juniorchefacademy/jca-print-b-sm.jpg, /images/juniorchefacademy/jca-print-b-sm@2x.jpg 2x"
          media="(min-width: 20.0625em)"
        />
        <img
          srcset="/images/juniorchefacademy/jca-print-b-xs.jpg, /images/juniorchefacademy/jca-print-b-xs@2x.jpg 2x"
          alt=""
        />
      </picture>

      <picture class="border-red  last">
        <source
          srcset="/images/juniorchefacademy/jca-pasta-lg@2x.jpg"
          media="(min-width: 48.0625em)"
        />
        <source
          srcset="/images/juniorchefacademy/jca-pasta-md@2x.jpg"
          media="(min-width: 30.0625em)"
        />
        <source
          srcset="/images/juniorchefacademy/jca-pasta-sm@2x.jpg"
          media="(min-width: 20.0625em)"
        />
        <img srcset="/images/juniorchefacademy/jca-pasta-xs@2x.jpg" alt="" />
      </picture>
    </Figure>

    <Figure>
      <picture class="border">
        <source
          srcset="/images/juniorchefacademy/jca-docs-lg.jpg, /images/juniorchefacademy/jca-docs-lg@2x.jpg 2x"
          media="(min-width: 48.0625em)"
        />
        <source
          srcset="/images/juniorchefacademy/jca-docs-md.jpg, /images/juniorchefacademy/jca-docs-md@2x.jpg 2x"
          media="(min-width: 30.0625em)"
        />
        <source
          srcset="/images/juniorchefacademy/jca-docs-sm.jpg, /images/juniorchefacademy/jca-docs-sm@2x.jpg 2x"
          media="(min-width: 20.0625em)"
        />
        <img
          srcset="/images/juniorchefacademy/jca-docs-xs.jpg, /images/juniorchefacademy/jca-docs-xs@2x.jpg 2x"
          alt=""
        />
      </picture>
      <Caption class="project__caption--jca project__caption--below right"
        >Avenir was chosen as the text face for its cordial, sensible appeal,
        and was used for text-heavy applications like forms, schedules, and
        course materials.</Caption
      >
    </Figure>

    <Figure>
      <picture>
        <source
          srcset="/images/juniorchefacademy/jca-responsive-lg.png, /images/juniorchefacademy/jca-responsive-lg@2x.png 2x"
          media="(min-width: 48.0625em)"
        />
        <source
          srcset="/images/juniorchefacademy/jca-responsive-md.png, /images/juniorchefacademy/jca-responsive-md@2x.png 2x"
          media="(min-width: 30.0625em)"
        />
        <source
          srcset="/images/juniorchefacademy/jca-responsive-sm.png, /images/juniorchefacademy/jca-responsive-sm@2x.png 2x"
          media="(min-width: 20.0625em)"
        />
        <img
          srcset="/images/juniorchefacademy/jca-responsive-xs.png, /images/juniorchefacademy/jca-responsive-xs@2x.png 2x"
          alt=""
        />
      </picture>
    </Figure>

    <Figure>
      <video autoplay loop class="border">
        <source
          src="/images/juniorchefacademy/jca-features.webm"
          type="video/webm; codecs=vp8"
        />
        <source
          src="/images/juniorchefacademy/jca-features.mp4"
          type="video/mp4; codecs=avc1.42E01E"
        />
        <source
          src="/images/juniorchefacademy/jca-features.ogv"
          type="video/ogg; codecs=theora"
        />
      </video>
      <Caption class="project__caption--jca project__caption--below left"
        >While the fundamental “learn to cook” premise needs little explanation,
        the goal of the website was to communicate Junior Chef Academy’s unique
        angle – practicality, nutrition, and building good habits.</Caption
      >
    </Figure>
  </article>
</section>

<style lang="scss">
  section {
    background-color: #f5f5f4;
    color: #5d000a;
    padding-bottom: 6.425rem;
  }

  article {
    @extend %column;
    margin-top: -10rem;
  }

  .background {
    height: 15rem;
    background-image: url('/images/juniorchefacademy/jca-header-pattern.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    @include mq.media('>=md') {
      height: 25rem;
    }

    &:after {
      @extend %project-header-gradient-layer;

      background-image: linear-gradient(
        to bottom,
        rgba(245, 245, 244, 0.07),
        rgba(245, 245, 244, 0.85) 55%,
        rgba(245, 245, 244, 1)
      );
    }
  }

  h2 {
    @extend %project-title;
    color: #920010;
    border-color: rgba(#920010, 0.45);
  }

  .juniorchefacademy :global(aside) {
    color: lighten(#4e0008, 3);
  }

  .juniorchefacademy :global(aside li:after) {
    color: rgba(#b40014, 0.8);
  }

  small {
    @extend %project-credits;
    color: lighten(desaturate(lighten(#4e0008, 40), 75), 20);
    .slash {
      color: lighten(desaturate(lighten(#4e0008, 40), 25), 15);
    }
  }

  .border {
    box-shadow: 0 0 0 1px desaturate(lighten(rgba(146, 0, 16, 0.15), 40), 16);
  }

  .border-red {
    box-shadow: 0 0 0 1px rgba(146, 0, 16, 0.4);
  }

  .border-white {
    box-shadow: 0 0 0 1px #efeeee;
  }

  .border-gray {
    box-shadow: 0 0 0 1px darken(desaturate(rgba(247, 246, 242, 1), 8), 15);
  }

  // caption arrow color should be color: #0375B3
  .juniorchefacademy :global(figcaption) {
    color: darken(#a85d63, 2);
    &:before,
    &:after {
      color: #b40014;
      font-weight: 400;
    }
  }

  .hr {
    background-color: lighten(#4e0008, 6);
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgba(#920010, 0.6);
  }

  // specific image positions
  #jca-bear-doodle-highlight {
    clear: both;
    margin: 1.618rem 0 0;

    @include mq.media('>=sm') {
      clear: none;
      width: 66%;
      margin-left: 1.5rem;
    }

    @include mq.media('>=lg') {
      width: 50%;
    }
  }

  #jca-bear-doodle-highlight-caption {
    text-indent: 0;
    margin: 0 1.215rem 1.618rem 0;

    @include mq.media('>=sm') {
      margin-left: 1.215rem;
    }
  }

  #jca-bear-doodle-highlight-caption:before {
    position: absolute;

    @include mq.media('<sm') {
      // Arrow points DOWN for < 480
      content: '\2193';
      bottom: -1.348rem;
      right: -1.25rem;
    }

    @include mq.media('>=sm') {
      display: none;
    }
  }
</style>
