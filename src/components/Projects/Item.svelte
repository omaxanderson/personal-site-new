<script lang="ts">
    export let title: string;
    export let codeLink: string;
    export let projectLink: string;
    export let description: string;
    export let techStack: string[];
</script>

<div class="container">
    <h4>{title}</h4>
    <p><a href={codeLink} target="_blank">See the code on GitHub</a></p>
    {#if projectLink}
        <p><a href={projectLink} target="_blank">Go to project</a></p>
    {/if}
    <p>{@html description}</p>
    <div class="tech-stack">
        <h5>Tech Stack</h5>
        <ul>
            {#each techStack as tech (tech)}
                <li>{tech}</li>
            {/each}
        </ul>
    </div>
</div>