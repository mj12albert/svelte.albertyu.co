<script lang="ts">
  import { menuState } from '$lib/store';

  const handleClick = () => {
    menuState.update((s) => {
      return {
        isOpen: !s.isOpen,
        theme: 'dark',
      };
    });
  };

  const scrollIntoView = ({ currentTarget }: Event) => {
    const el = document.querySelector(currentTarget.getAttribute('href'));
    if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth',
    });
  };
</script>

<nav>
  <ul class="navigation">
    <li>
      <a class="link" on:click|preventDefault={scrollIntoView} href="#projects"
        >Projects</a
      >
    </li>
    <li>
      <a
        class="link"
        on:click|preventDefault={scrollIntoView}
        href="#information">Info<span class="clip">rmation</span></a
      >
    </li>
    <li><span class="link" disabled>Journal</span></li>
    <li>
      <button
        class="link trigger-overlay top"
        href="#contact"
        on:click|preventDefault={handleClick}>Contact</button
      >
    </li>
  </ul>
</nav>

<style lang="scss">
  $neon-pink: rgb(238, 95, 129);

  nav {
    @extend %sans-serif;
    backface-visibility: hidden;
    margin: 3.1rem 0 0.618rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding-left: 0;
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
    content: ' /';
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

  button {
    appearance: none;
    background: none;
    border: 0;
    font-weight: 600;

    &:hover {
      cursor: pointer;
    }
  }

  .link {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.695rem;
    line-height: 1;

    &,
    &:link,
    &:visited {
      color: #a4a4a4;
    }

    &:hover,
    &:focus,
    &:active {
      color: #6b6b6b;
    }

    &,
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

  [disabled] {
    color: #ebebeb;
    text-decoration: line-through;
    pointer-events: none;
    cursor: default;
  }
</style>
