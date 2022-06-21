<footer>
  <div class="inner">
    <small>&copy; 2014 Albert Yu</small>
    <ul>
      <li>
        <a href="tel:+85252178261" class="icon--phone">
          <svg class="icon"><use xlink:href="#icon--phone"/></svg>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/mj12albert" target="_blank" class="icon--twitter">
          <svg class="icon"><use xlink:href="#icon--twitter"/></svg>
        </a>
      </li>
      <li>
        <a href="http://instagram.com/mj12albert" target="_blank" class="icon--instagram">
          <svg class="icon"><use xlink:href="#icon--instagram"/></svg>
        </a>
      </li>
      <li>
        <a href="mailto:albert@albertyu.co" class="icon--email">
          <svg class="icon"><use xlink:href="#icon--email"/></svg>
        </a>
      </li>
    </ul>
  </div>
</footer>

<style lang="scss">
  $neon-1: #EC5587;
  $neon-2: #FCEB3D;
  $neon-3: #A7DB7D;
  $neon-4: #52B8C4;
  $neon-5: #D336FF;

  footer {
    line-height: 1;
    background-color: #262626;
    color: #808080;
  }

  .inner {
    @include mq.media('>=25em') {
      width: auto;
      margin: 0 1rem;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  a {
    display: block;
    position: relative;
    @extend %noTap;
    outline: none;

    &:hover,
    &:focus {
      svg {
        fill: #c4c4c4;
      }
    }

    &:active.icon {
      &--phone svg {
        fill: $neon-1;
      }

      &--twitter svg {
        fill: $neon-2;
      }

      &--instagram svg {
        fill: $neon-3;
      }

      &--email svg {
        fill: $neon-5;
      }
    }

    &.icon {
      &--phone {
        &::before,
        &::after {
          border-color: $neon-1;
        }
      }

      &--twitter {
        &::before,
        &::after {
          border-color: $neon-2;
        }
      }

      &--instagram {
        &::before,
        &::after {
          border-color: $neon-3;
        }
      }

      &--email {
        &::before,
        &::after {
          border-color: $neon-5;
        }
      }
    }

    &:before,
    &:after {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 2.5rem;
      height: 2.5rem;
      border-width: 1px;
      border-style: solid;
      border-radius: 50%;
      content: '';
      opacity: 0;
      -webkit-transition: -webkit-transform 200ms, opacity 200ms;
      -moz-transition: -moz-transform 200ms, opacity 200ms;
      transition: transform 200ms, opacity 200ms;
      -webkit-transform: translateX(-50%) translateY(-50%) scale(0.2);
      -moz-transform: translateX(-50%) translateY(-50%) scale(0.2);
      transform: translateX(-50%) translateY(-50%) scale(0.2);

      @include mq.media('>=25em') {
        width: 1.9rem;
        height: 1.9rem;
      }
    }

    // Interaction effect hover/focus/touch states
    &:hover::before,
    &:hover::after,
    &:focus::before,
    &:focus::after,
    &:active::before,
    &:active::after {
      opacity: 1;
      -webkit-transform: translateX(-50%) translateY(-50%) scale(1);
      -moz-transform: translateX(-50%) translateY(-50%) scale(1);
      transform: translateX(-50%) translateY(-50%) scale(1);
    }
  }

  li:not(:last-of-type) {
    margin-right: 1.125rem;

    @include mq.media('>=25em') {
      margin-right: 0.2222222222rem;
    }
  }

  svg {
    height: 4.236rem;
    width: 2rem;
    fill: #555555;

    @include mq.media('>=25em') {
      height: 3rem;
    }
  }

  small {
    @include mq.media('<sm') {
      display: none;
    }
  }
</style>