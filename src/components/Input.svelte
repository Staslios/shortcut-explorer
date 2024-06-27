<script>
    export const inputType = 'search'
    export const placeholder = 'Type something here'
</script>

<input type={inputType}
       placeholder={placeholder} />

<style>
    input {
        border-radius: 8px;
        outline: none;
        font-size: var(--size-0);
        box-shadow: 0 1px 1px 0 var(--col-6);
        border: none;
        padding: 6px 6px 6px 40px;
        height: var(--size-6);
        background: url('public/search.svg') no-repeat 4%;
        transition: transform .15s;
    }

    input:focus {
        transform: scale(1.1);
    }
</style>