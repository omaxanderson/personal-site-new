<script lang="ts">
    export let company: string;
    export let from: string;
    export let to: string;
    export let location: string;
    export let jobTitle: string;
    export let descriptions: string[];
</script>

<div class="container">
    <h3><u>{jobTitle}</u> - {company}</h3>
    <h5>{location}</h5>
    <h5>{from} - {to}</h5>
    {#each descriptions as desc, index (index)}
        <p>{desc}</p>
    {/each}
</div>

<style lang="scss">
    .container {
        padding: 16px;
    }
</style>