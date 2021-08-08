<script>
    import Item from "./Item.svelte";
    const items = [
        {
            jobTitle: "Software Engineer",
            company: "Field Nation",
            from: "May 2019",
            to: "Present",
            location: "Minneapolis, MN",
            descriptions: [
                "Worked on a payment processor pipeline that handles hundreds of millions of dollars a year.",
                "Created multiple microservices that facilitated the transition of our company’s business model.",
                "One of the leading members in a map-based data analytics tool to help sell our premier package to multi-million dollar customers.",
            ],
        },
        {
            jobTitle: "Triage Engineer",
            company: "Field Nation",
            from: "August 2018",
            to: "April 2019",
            location: "Minneapolis, MN",
            descriptions: [,
                "Worked closely with customers to resolve problems they were having with the platform.",
                "Performed database fixes, hotfixed critical bugs, and worked with the Development team to prioritize bugs.",
            ]
        },
        {
            jobTitle: "Teacher's Assistant",
            company: "Miami University",
            from: "August 2017",
            to: "May 2018",
            location: "Oxford, OH",
            descriptions: [,
                "Assisted the professor with teaching students the fundamentals of relational database design, SQL, and other skills.",
            ]
        },
        {
            jobTitle: "Bioinformatics Intern",
            company: "Henry Jackson Foundation",
            from: "September 2015",
            to: "September 2016",
            location: "Dayton, OH",
            descriptions: [
                "Helped write a supercomputer pipeline to extract and create large amounts of data about viral RNA strands.",
            ]
        }
    ]
</script>

<div>
    {#each items as item (item.jobTitle)}
        <div class="container">
            <Item {...item} />
        </div>
    {/each}
</div>

<style lang="scss">
    .container {
        & + & {
            border-top: 1px solid #888;
        }
    }
</style>