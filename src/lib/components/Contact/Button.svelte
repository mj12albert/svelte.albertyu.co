<script lang="ts">
  import { menuState } from '$lib/store';

  const handleClick = (ev: MouseEvent) => {
    ev.preventDefault();
    menuState.update((s) => {
      return {
        isOpen: !s.isOpen,
        theme: 'light',
      };
    });
  };
</script>

<button class="trigger-overlay bottom" on:click={handleClick}>
  <span class="arrow" /><slot>Label</slot>
</button>

<style lang="scss">
  button {
    @extend %noTap;
    @extend %sans-serif;
    appearance: none;
    background-color: transparent;
    display: block;
    width: 100%;
    overflow: hidden;
    border-color: darken(#a2a2a2, 15);
    border-width: 1px;
    border-style: solid;
    padding: 1.348rem 2.618rem;
    text-transform: uppercase;
    font-size: 0.938rem;
    line-height: 1;
    text-align: center;
    color: darken(#c4c4c4, 15);

    @include mq.media('>=30em') {
      display: inline-block;
      width: auto;
      padding: 0.938rem 2.618rem;
      font-size: 0.833rem;
    }

    &:hover,
    &:focus {
      outline: none;
      border-color: #f2f2f2;
      background-color: #f2f2f2;
      color: #2e2e2e;
      cursor: pointer;
    }

    &:active {
      border-color: darken(#f2f2f2, 30);
      background-color: darken(#f2f2f2, 30);
      color: #2e2e2e;
    }

    &:hover,
    &:focus,
    &:active {
      .arrow {
        opacity: 1;
        margin-left: 0;
        transition: margin 200ms, opacity 120ms;
      }
    }
  }

  .arrow {
    opacity: 0;
    margin-left: -2rem;
    transition: margin 200ms, opacity 180ms;

    &:before {
      content: '→';
      margin-right: 1rem;
    }
  }
</style>
