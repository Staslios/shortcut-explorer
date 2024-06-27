<script>
  import { pressedKeys } from "../store/store.js";

  export let buttonValue = ' ';

  $: isActive = $pressedKeys.includes(buttonValue);
  $: isHint = false
</script>


<div class:active={isActive} class:hint={isHint}>
    <span>{buttonValue}</span>
</div>

<style>
div {
    display: inline-block;
    height: 48px;
    line-height: 48px;
    font-size: 22px;
    min-width: 48px;
    padding: 0 2px;
    border: 1px solid var(--col-5);
    text-align: center;
    margin: 3px;
    border-radius: 4px;
    box-shadow: 0 1px 2px var(--col-6);
    transition: color .2s, transform 0.2s, background-color .2s, box-shadow .2s, border .2s;
}


.active {
    color: var(--col-4);
    background-color: var(--col-1);
    border: 1px solid var(--col-1);

}

.hint {
    font-weight: 800;
    animation: tilt-shaking .65s infinite;
}

@keyframes tilt-shaking {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(12deg); }
    20% { transform: rotate(0deg); }
    30% { transform: rotate(-12deg); }
    40% { transform: rotate(0deg); }
}
</style>
