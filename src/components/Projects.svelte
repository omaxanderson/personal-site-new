<div class="container">
    <h4>Online Werewolf Game</h4>
    <p>
        When COVID hit, my friends and I couldn't play one of our favorite games in-person any more,
        so I decided to build an online version. After working out a few bugs the first time we played,
        it has been a great way to be able to play games with friends again.
    </p>
    <div class="tech-stack">
        <h5>Tech Stack</h5>
        <ul>
            <li>NodeJS</li>
            <li>TypeScript</li>
            <li>WebSockets</li>
            <li>React</li>
            <li>Redis</li>
        </ul>
    </div>
</div>

<div class="container">
    <h4>Personal site</h4>
    <p>
        I re-built my personal site (this site!) after nearly three years of being a professional engineer and used
        this as an opportunity to learn something new: <a href="https://svelte.dev/">Svelte</a>.
        This lightweight frontend framework acts as a compiler into vanilla HTML, CSS, and Javascript
        as opposed to something like React that maintains a virtual DOM.
    </p>
    <div class="tech-stack">
        <h5>Tech Stack</h5>
        <ul>
            <li>Svelte</li>
            <li>TypeScript</li>
            <li>SCSS</li>
        </ul>
    </div>
</div>

<div class="container">
    <h4>Spotify playlist mixer</h4>
    <p>
        I make a lot of Spotify playlists and one day I had an idea that it would be nice to be able to listen
        to two playlists at the same time, essentially "zipping" the playlist together so a song from the first
        playlist would play, then the second playlist, possibly the third, and then repeat. Using Spotify's API
        I was able to do so, with the ability to mix playlists, artists, and albums.
    </p>
    <div class="tech-stack">
        <h5>Tech Stack</h5>
        <ul>
            <li>NodeJS</li>
            <li>WebSockets</li>
            <li>TypeScript</li>
            <li>Redis</li>
        </ul>
    </div>
</div>

<style>
    div + div {
        border-top: 1px solid #888;
    }

    .tech-stack {
        float: right;
    }
</style>