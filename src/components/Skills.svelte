<script lang="ts">
    import ProgressBar from "./ProgressBar.svelte";
    const skills = [
        { skill: 'NodeJS', percent: 95 },
        { skill: 'React', percent: 90 },
        { skill: 'TypeScript', percent: 90 },
        { skill: 'MySQL', percent: 90 },
        { skill: 'PostgresQL', percent: 60 },
        { skill: 'ElasticSearch', percent: 85 },
        { skill: 'Logstash', percent: 75 },
        { skill: 'AWS', percent: 80 },
        { skill: 'Docker', percent: 80 },
        { skill: 'Kubernetes', percent: 70 },
        { skill: 'C++', percent: 50 },
        { skill: 'PHP', percent: 65 },
        { skill: 'Python', percent: 25 },
    ]
</script>

<div>
    {#each skills as skill, index (skill.skill)}
        <ProgressBar {...skill} {index} />
    {/each}
</div>

<style>
    div {
        display: flex;
        gap: 25px;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>