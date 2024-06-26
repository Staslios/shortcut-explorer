<script>
import Button from "./components/Button.svelte";
import Keyboard from "./components/Keyboard.svelte";
import Title from "./components/Title.svelte";
</script>


<Title/>
<p>Select the context and press keyboard buttons to see available shortcuts</p>
<div>
    <div>Select keyboard context</div>
    <select id="cars">
        <option value="volvo">Windows 11</option>
        <option value="saab">Word</option>
        <option value="opel">Excel</option>
    </select>
</div>

<main>
    <Button buttonDesc="button"/>
    <Keyboard/>
</main>

<div>
    <div>Shortcuts history</div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Changa:wght@200..800&display=swap');
</style>
