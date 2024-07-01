<script>
  import { derived } from "svelte/store";
  import { searchedKey } from "../../store/store.js";
  import WIN_SHORTCUTS from "../../constants/WIN_SHORTCUTS.js";
  import ListItem from "./ListItem.svelte";
  import ListNoItem from "./ListNoItem.svelte";

  export const searchedShortcuts = derived(searchedKey, () =>
    WIN_SHORTCUTS.filter(({ desc }) => desc.toLowerCase().includes($searchedKey.toLowerCase()))
  );
</script>

<ul>
    {#if $searchedShortcuts.length <= 0}
        <ListNoItem/>
    {/if}
    {#each $searchedShortcuts as shortcut (shortcut.desc)}
        <ListItem desc={shortcut.desc}
                  keys={shortcut.keys}/>
    {/each}
</ul>

<style>
    ul {
        list-style-type: none;
        margin: 40px 100px;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>