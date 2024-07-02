<script>
    export let title = '';
    export let keys = [];
    import { pressedKeys } from "../../store/store.js";

</script>

<li>
    <h3>{title}</h3>
    <div>
        {#each keys as key (key)}
            <span class:selected={$pressedKeys.find(item => item.toLowerCase() === key.toLowerCase())}>
                {key}
            </span>
        {/each}
    </div>
</li>

<style>
    li {
        border: 1px solid var(--color-5);
        border-radius: 6px;
        padding: 18px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        justify-content: center;
        box-shadow: 1px 1px 1px var(--color-4);
    }

    h3 {
        font-size: var(--size-4);
        white-space: nowrap;
    }

    div {
        font-size: var(--size-0);
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 28px;
    }

    span {
        display: inline-block;
        text-transform: capitalize;
        min-width: 50px;
        text-align: center;
        padding: 8px;
        border-radius: 4px;
        border: 1px solid lightgray;
        box-shadow: 2px 2px 0 1px lightgray;
        transition: color .2s, background-color .2s, box-shadow .2s;
    }

    .selected {
        color: white;
        background-color: var(--color-1);
        box-shadow: none;
    }
</style>