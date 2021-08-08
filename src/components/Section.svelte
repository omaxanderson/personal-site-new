<script>
    export let title;
    export let odd = false;
</script>

<div class="section centered {odd ? 'section--odd' : ''}">
    {#if title}
        <h2>{title}</h2>
    {/if}
    <slot></slot>
</div>

<style lang="scss">
    .section {
        background-color: #FFF;
        display: flex;
        padding: 100px;

        &--odd {
            background-color: #000;
            color: #FFF;
        }

    }

    .centered {
        align-items: center;
        justify-content: center;
    }
</style>