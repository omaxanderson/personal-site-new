<script>
  import About from './components/About.svelte';
  import Experience from './components/Experience/Experience.svelte';
  import Footer from './components/Footer.svelte';
  import Header from './components/Header.svelte';
  import Pictures from './components/Pictures.svelte';
  import Projects from './components/Projects/Projects.svelte';
  import Section from './components/Section.svelte';
  import Skills from './components/Skills.svelte';
</script>

<svelte:head>
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Raleway:100%7CRoboto+Slab:100%7CRoboto:100" rel="stylesheet">
</svelte:head>

<div>
  <Header />
  <Section flexDirection="column">
    <About />
  </Section>

  <Section odd>
    <Pictures />
  </Section>

  <Section title="Experience" column>
    <Experience />
  </Section>

  <Section odd title="Skills" column>
    <Skills />
  </Section>

  <Section title="Personal projects" column>
    <Projects />
  </Section>

  <Section odd>
    <Footer />
  </Section>

</div>

<style lang="scss">
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Slab', sans-serif;
  }

  :global(.odd) {
    background-color: #BBB;
  }

  :global(.centered) {
    justify-content: center;
  }
</style>
