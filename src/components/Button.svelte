<script>
    export let buttonDesc = 'A';
    export let buttonClass = '';
</script>

<div class:buttonClass>
    <span>{buttonDesc}</span>
</div>

<style>
div {
    display: inline-block;
    height: 38px;
    line-height: 38px;
    font-weight: bold;
    font-size: 22px;
    min-width: 38px;
    padding: 0 2px;
    border: 1px solid gray;
    text-align: center;
    margin: 1px;
    border-radius: 4px;
    box-shadow: 1px 1px 1px gray;
}
</style>
