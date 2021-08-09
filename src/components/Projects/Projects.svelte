<script lang="ts">
import Item from "./Item.svelte";

    const projects = [
        {
            title: 'Online Werewolf Game',
            codeLink: 'http://github.com/omaxanderson/werewolf',
            projectLink: 'http://omaxwellanderson.com:3000',
            description: `When COVID hit, my friends and I couldn't play one of our favorite games in-person any more,
                so I decided to build an online version. After working out a few bugs the first time we played,
                it has been a great way to be able to play games with friends again.`,
            techStack: ['NodeJS', 'TypeScript', 'WebSockets', 'React', 'Redis'],
        },
        {
            title: 'Spotify playlist mixer',
            codeLink: 'http://github.com/omaxanderson/spotify-multi-playlist',
            description: `I make a lot of Spotify playlists and one day I had an idea that it would be nice to be able to listen
                to two playlists at the same time, essentially "zipping" the playlist together so a song from the first
                playlist would play, then the second playlist, possibly the third, and then repeat. Using Spotify's API
                I was able to do so, with the ability to mix playlists, artists, and albums.`,
            techStack: ['NodeJS', 'TypeScript', 'React'],
        },
        {
            title: 'Personal site',
            codeLink: 'http://github.com/omaxanderson/personal-site-new',
            description: `I re-built my personal site after nearly three years of being a professional engineer and used
                this as an opportunity to learn something new: <a href="https://svelte.dev/">Svelte</a>.
                This lightweight frontend framework acts as a compiler into vanilla HTML, CSS, and Javascript
                as opposed to something like React that maintains a virtual DOM.`,
            techStack: ['Svelte', 'TypeScript', 'SCSS'],
        },
    ]
</script>

<div class="container">
    {#each projects as project}
        <div>
            <Item {...project} />
        </div>
    {/each}
</div>

<style>
    div + div {
        border-top: 1px solid #888;
    }
</style>