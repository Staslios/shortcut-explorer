<script>
  import { derived } from "svelte/store";
  import { searchedShortcuts, pressedKeys } from "../../store/store.js";
  import WIN_SHORTCUTS from "../../constants/WIN_SHORTCUTS.js";
  import ListItem from "./ListItem.svelte";
  import ListNoItem from "./ListNoItem.svelte";
  import { onDestroy, onMount } from "svelte";

  export const filteredShortcuts = derived(searchedShortcuts, () =>
    WIN_SHORTCUTS.filter(({ title }) => title.toLowerCase().includes($searchedShortcuts.toLowerCase()))
  );

  function handleKeyDown(event) {
    const { key, repeat } = event

    if (repeat) return;

    if (!$pressedKeys.includes(key)) {
      pressedKeys.set([...$pressedKeys, key])
    }
  }

  function handleKeyUp(event) {
    const { key, repeat } = event

    if (repeat) return;

    if ($pressedKeys.includes(key)) {
      pressedKeys.set($pressedKeys.filter(item => item !== key))
    }
  }

  // adds the event listener when the component is mounted
  onMount(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
  });

  // removes the event listener when the component is destroyed
  onDestroy(() => {
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('keyup', handleKeyUp);
  });
</script>

<ul>
    {#if $filteredShortcuts.length <= 0}
        <ListNoItem/>
    {/if}
    {#each $filteredShortcuts as shortcut (shortcut.title)}
        <ListItem title={shortcut.title}
                  keys={shortcut.keys}/>
    {/each}
</ul>

<style>
    ul {
        list-style-type: none;
        margin: 40px 100px;
        padding: 0;
        display: flex;
        flex-direction: row;
        gap: 10px;
        flex-wrap: wrap;
    }
</style>