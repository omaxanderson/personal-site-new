<script lang="ts">
    import ProgressBar from "./ProgressBar.svelte";
</script>

<div>
    <ProgressBar skill="NodeJS" percent={95} />
    <ProgressBar skill="React" percent={90} />
    <ProgressBar skill="TypeScript" percent={90} />
    <ProgressBar skill="MySQL" percent={90} />
    <ProgressBar skill="PostgresQL" percent={60} />
    <ProgressBar skill="ElasticSearch" percent={85} />
    <ProgressBar skill="Logstash" percent={75} />
    <ProgressBar skill="AWS" percent={80} />
    <ProgressBar skill="Docker" percent={80} />
    <ProgressBar skill="Kubernetes" percent={70} />
    <ProgressBar skill="C++" percent={50} />
    <ProgressBar skill="PHP" percent={65} />
    <ProgressBar skill="Python" percent={25} />
</div>

<style>
    div {
        display: flex;
        gap: 25px;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>