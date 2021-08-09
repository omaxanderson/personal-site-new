<script lang="ts">
    export let title: string;
    export let link: string;
    export let description: string;
    export let techStack: string[];
</script>

<div class="container">
    <h4>{title}</h4>
    <p><a href={link} target="_blank">See the code on GitHub</a></p>
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