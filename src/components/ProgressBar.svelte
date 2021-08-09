<script lang="ts">
    import { onMount } from 'svelte';
    export let skill: string;
    export let percent: number;
    export let index: number;

    let circle;

    const dimension = 150;
    const strokeWidth = 4;
    const center = dimension / 2;
    const radius = (dimension / 2) - (strokeWidth * 2)
    const circumference = 2 * Math.PI * radius;
    // stroke-dashoffset = 0  ----> full progress
    // stroke-dashoffset = circumference  ----> 0% progress

    function setOffset(percent: number) {
        const offset = circumference - percent / 100 * circumference;
        circle.style.strokeDashoffset = offset;
    }

    var observer = new IntersectionObserver(
        function([element]) {
            if(element.intersectionRatio === 1) {
                setTimeout(() => setOffset(percent), 250 + (25 * index));
            } else if (element.intersectionRatio === 0 && element.boundingClientRect.y > 0) {
                setOffset(0);
            }
        },
        { threshold: [0, 1] },
    );

    onMount(() => {
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        observer.observe(circle);
    });

</script>

<div>
    <svg
        class="ring"
        height="{dimension}px"
        width="{dimension}px"
    >
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#fa5aaa" />
            <stop offset="100%" stop-color="#34ebc3" />
            </linearGradient>
        </defs>
        <circle
            bind:this={circle}
            id={`skill_${skill}`}
            class="circle"
            stroke="url(#gradient)"
            stroke-width={strokeWidth}
            fill="transparent"
            r={radius}
            cx={center}
            cy={center}
        >
        </circle>
        <text
            x="50%"
            y="45%"
            fill="white"
            dominant-baseline="central"
            text-anchor="middle"
        >
            {skill}
        </text>
        <text
            x="50%"
            y="60%"
            fill="white"
            dominant-baseline="central"
            text-anchor="middle"
        >
            {percent}%
        </text>

    </svg>
    
</div>

<style lang="scss">
    .ring {
        stroke-dasharray: 10px 20px;
        stroke-dashoffset: 10px;
    }

    circle {
        transition: stroke-dashoffset .75s ease-in-out;
        transform: rotate(90deg);
        transform-origin: 50% 50%,
    }

    text {
        color: white;
    }
</style>