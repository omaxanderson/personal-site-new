<script>
    export let title;
    export let odd = false;
    export let column = false;
</script>

<div class="section centered {odd && 'section--odd'} {column && 'column'}">
    {#if title}
        <h2>{title}</h2>
    {/if}
    <slot></slot>
</div>

<style lang="scss">
    h2 {
        margin-top: 0;
        margin-bottom: 30px;
    }

    .section {
        background-color: #FFF;
        display: flex;
        padding: 100px;

        &--odd {
            background-color: #000;
            color: #FFF;
        }

    }

    .column {
        flex-direction: column;
    }

    .centered {
        align-items: center;
        justify-content: center;
    }
</style>