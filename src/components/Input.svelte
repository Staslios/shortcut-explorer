<script>
    import { searchedShortcuts } from "../store/store.js";

    export const placeholder = 'example: copy'
</script>


<input type='search'
       bind:value={$searchedShortcuts}
       placeholder={placeholder} />


<style>
    input {
        border-radius: 8px;
        min-width: 25vw;
        outline: none;
        font-size: var(--size-0);
        box-shadow: 0 1px 1px 0 var(--color-5);
        border: none;
        padding: 8px 6px 8px 40px;
        background: url('public/search.svg') no-repeat 4%;
        transition: transform .15s;
    }

    input:focus {
        transform: scale(1.1);
    }
</style>