<script>
  import Title from "../components/Title.svelte";
  import Input from "../components/Input.svelte";
</script>

<div class="head">
    <span class="head-left">
        <a href="/">
            <Title/>
        </a>
    </span>
    <span class="head-center">
        <Input/>
    </span>
</div>

<style>
    .head {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border-bottom: 1px solid var(--color-4);
        box-shadow: 1px 1px 1px var(--color-4);
        padding: 14px;
    }

    .head-left {
        position: absolute;
        left: 10px;
    }

    .head-center {
        flex: 1;
        text-align: center;
    }

    a {
        @media (max-width: 820px) {
            display: none;
        }
    }
</style>