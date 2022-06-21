<nav>
  <ul class="navigation">
    <li><a data-scroll href="#projects">Projects</a></li>
    <li><a data-scroll href="#information">Info<span class="clip">rmation</span></a></li>
    <li><a href="http://journal.albertyu.co" class="disabled">Journal</a></li>
    <li><a href="#contact" class="trigger-overlay top">Contact</a></li>
  </ul>
</nav>

<style lang="scss">
  $neon-pink: rgb(238, 95, 129);

  nav {
    @extend %sans-serif;
    -webkit-backface-visibility: hidden;
    margin: 3.1rem 0 0.618rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding-left: 0;
    text-transform: uppercase;
    font-size: 0.695rem;
    line-height: 1;
    display: flex;
    flex-flow: row nowrap;

    @include mq.media('>=400px') {
      letter-spacing: 1px;
    }

    @include mq.media('>=md') {
      font-size: 0.833rem;
    }

    @include mq.media('lg') {
      max-width: 34.8306782768rem;
    }
  }

  li {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-left: 0.1666666667rem;
  }

  li:after {
    content: " /";
    font-size: 150%;
    font-weight: 300;
    color: $neon-pink;
    margin: 0 2px;

    @include mq.media('>=400px') {
      font-style: italic;
      margin-left: 0.1666666667rem;
    }
  }

  li:last-of-type::after {
    color: transparent;
  }

  a {
    text-decoration: none;
    &:link,
    &:visited {
      color: #a4a4a4;
    }

    &:hover,
    &:focus,
    &:active {
      color: #6b6b6b;
    }

    &:link,
    &:visited,
    &:hover,
    &:focus,
    &:active {
      @extend %noTap;
    }
  }

  .clip {
    display: none;
    @include mq.media('>=520px') {
      display: inline;
    }
  }

  .disabled {
    &:link,
    &:visited,
    &:hover,
    &:focus,
    &:active {
      color: #ebebeb;
      text-decoration: line-through;
      pointer-events: none;
      cursor: default;
    }
  }
</style>