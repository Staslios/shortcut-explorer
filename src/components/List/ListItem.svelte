<script>
    export let desc = '';
    export let keys = [];
</script>

<li>
    <h3>{desc}</h3>
    <div>
        {#each keys as key (key)}
            <span>{key}</span>
        {/each}
    </div>
</li>

<style>
    li {
        border: 1px solid var(--col-6);
        border-radius: 6px;
        padding: 12px;
    }

    h3 {
        font-size: 36px;
        margin: 6px 0;
        text-transform: capitalize;
    }

    div {
        font-size: 26px;
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 40px;
        margin: 6px 0;
    }

    span {
        display: inline-block;
        text-transform: capitalize;
        min-width: 50px;
        font-size: 20px;
        text-align: center;
        padding: 8px;
        border-radius: 4px;
        border: 1px solid lightgray;
        box-shadow: 2px 2px 0 1px lightgray;
    }

    span:not(:last-child):after {
        content: '+';
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        display: inline-block;
        position: absolute;
        margin-left: 10px;
    }
</style>