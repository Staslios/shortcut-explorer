<script>
  import Button from "./Button.svelte";
  import { onMount, onDestroy } from 'svelte';
  import { pressedKeys } from "../store/store.js";
  import KEYBOARD from "../constants/KEYBOARD.js";


  function handleKeyDown(event) {
    const { key, repeat } = event

    if (repeat) return;

    if (!$pressedKeys.includes(key)) {
      pressedKeys.set([...$pressedKeys, key])
    }

    console.log(`You pressed: ${key}`);
  }

  function handleKeyUp(event) {
    const { key, repeat } = event

    if (repeat) return;

    if ($pressedKeys.includes(key)) {
      pressedKeys.set($pressedKeys.filter(item => item !== key))
    }

    console.log(`You released: ${key}`);
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

<div class="keyboard">
    {#each KEYBOARD as row}
        <div class="row">
            {#each row as key}
                <Button buttonValue={key}/>
            {/each}
        </div>
    {/each}
</div>

<style>
    .keyboard {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .row {
        display: flex;
        margin-bottom: 5px;
    }
</style>