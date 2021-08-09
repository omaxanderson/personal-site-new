<script>
  import About from './components/About.svelte';
  import Experience from './components/Experience/Experience.svelte';
  import Header from './components/Header.svelte';
  import Pictures from './components/Pictures.svelte';
  import Projects from './components/Projects.svelte';
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

  <div class='bg-dark text-light'>
    <div class='container pt-5 pb-4 content-section footer'>

      <div class='d-flex justify-content-center'>
        <p><a href='mailto:omaxwellanderson@gmail.com'>omaxwellanderson@gmail.com</a> |
          (612) 236-7330 |
          <a target='_blank' href='https://www.linkedin.com/in/o-maxwell-anderson'>LinkedIn</a> |
          <a target='_blank' href='https://www.github.com/omaxanderson'>GitHub</a></p>
      </div>
    </div>
  </div> <!-- End Footer -->

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
