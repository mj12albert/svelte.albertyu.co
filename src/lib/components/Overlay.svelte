<script>
  import { menuState } from '$lib/store';

  $: isOpen = $menuState.isOpen;

  const handleClose = (ev) => {
     ev.preventDefault();

     menuState.update(v => {
      return {
        isOpen: !v.isOpen,
        theme: null,
      };
    })
  }
</script>

<div
  class="overlay zoom"
  style="
    visibility: {isOpen ? 'visible' : 'hidden'};
    z-index: {isOpen ? 95 : 0};
    transform: translateY({isOpen ? '0%' : '100%'});
    transition: {isOpen ? 'transform 400ms 50ms' : 'transform 350ms, visibility 0s 350ms'}
  "
>
  <button type="button" class="overlay-close" on:click={handleClose}>
    <svg class="icon--close"><use xlink:href="#icon--close"></svg>
  </button>

  <ul>
    <li>
      <a href="mailto:albert@albertyu.co" class="contact-link">
        <span class="label">Mail</span>
        <span class="value mail">albert@albertyu.co</span>
      </a>
    </li>
    <li>
      <a href="tel:+85263051181" class="contact-link">
        <span class="label">Call</span>
        <span class="value call">+852 63051181</span>
      </a>
    </li>
    <li>
      <a href="https://twitter.com/mj12albert" class="contact-link">
        <span class="label">Follow</span>
        <span class="value follow">@mj12albert</span>
      </a>
    </li>
  </ul>
</div>

<style lang="scss">
  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(18, 18, 18, 0.96);
  }

  button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    overflow: hidden;
    background: none;
    border: none;
    outline: none;
    z-index: 100;
    height: 3rem;
    width: 3rem;
    font-size: 0;
    line-height: 0;

    & > svg {
      height: 3rem;
      width: 3rem;
      fill: rgba(255, 255, 255, 0.5);
      transition: fill 220ms ease-in-out;
    }

    &:hover,
    &:focus,
    &:active {
      cursor: pointer;
      > svg {
        fill: rgba(255, 255, 255, 0.9);
        transition: fill 220ms ease-in-out;
      }
    }
  }

  ul {
    padding-left: 0;
    list-style: none;
    position: relative;
    margin-left: 5%;
    padding-top: 17.5%;

    @include mq.media('>=md') {
      width: 80%;
      max-width: 66.6666666667rem; // 1200px/18
      margin: 0 auto;
      padding-top: 7.5%;
    }

    @include mq.media('>=lg') {
      max-width: 48.4848484848rem;
    }
  }

  a {
    @extend %noTap;

    display: inline-block;
    position: relative;
    margin-bottom: 1.82rem;
    padding: 0 1rem 0.618rem 0;
    text-decoration: none;

    @include mq.media('>=lg') {
      margin-bottom: 1.618rem;
    }

    &,
    &:link,
    &:visited {
      .label {
        color: rgba(255, 255, 255, 0.22);
      }

      .value {
        color: rgba(255, 255, 255, 0.225);
        transition: color 200ms ease-in-out;
      }
    }

    &:hover,
    &:focus {
      .value {
        color: rgba(255, 255, 255, 0.9);
        transition: color 200ms ease-in-out;
      }

      .value:after {
        opacity: 1;
        // @include translateX(0);
        max-width: 100%;
        transition: max-width 250ms, opacity 250ms;
      }
    }
  }

  // TODO: colors if touch events supported
  a.touchevents {
    &:link,
    &:visited,
    &:active {
      .label,
      .value {
        color: rgba(255, 255, 255, 0.55);
      }
    }
  }

  .touchevents .value:after {
    opacity: 1;
    max-width: 100%;
  }

  .label {
    display: block;
    font-size: 2.618rem;
    line-height: 1;
    color: #3e3e3e;

    @include mq.media('>=md') {
      font-size: 3.53rem;
    }

    @include mq.media('>=lg') {
      font-size: 4.236rem;
    }
  }

  .value {
    display: inline-block;
    position: relative;
    padding-right: 0.197rem;

    @extend %sans-serif;
    font-weight: 300;
    text-indent: 0.179rem;
    letter-spacing: 1px;

    @include mq.media('>=lg') {
      font-size: 1.1rem;
    }

    &:after {
      content: "";
      position: absolute;
      right: 0;
      bottom: -1px;
      left: 0;
      height: 1px;
      opacity: 0;
      // @include translateX(-50%);
      max-width: 0;
      transition: max-width 200ms, opacity 300ms;
    }

    &.mail:after {
      background: $neon-1;
    }

    &.call:after {
      background: $neon-4;
    }

    &.follow:after {
      background: $neon-5;
    }
  }
</style>