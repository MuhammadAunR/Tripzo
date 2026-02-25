const GoldRule = () => (
    <span className="block w-12 h-px bg-(--color-secondary) mb-6" />
);

const Stat = ({ value, label }) => (
    <div className="border-t border-(--color-secondary) pt-5">
        <p
            className="text-(--color-tertiary) font-light leading-none"
            style={{ fontSize: "2.6rem" }}
        >
            {value}<em className="text-(--color-secondary) not-italic">+</em>
        </p>
        <p className="text-(--color-tertiary)/50 text-[0.6rem] tracking-[0.24em] uppercase mt-1">
            {label}
        </p>
    </div>
);

const ValueCard = ({ title, body }) => (
    <div className="border-t border-(--color-primary)/15 pt-8">
        <h3
            className="text-(--color-primary) font-light mb-3"
            style={{ fontSize: "1.5rem" }}
        >
            {title}
        </h3>
        <p className="text-(--color-primary)/55 font-light text-sm leading-relaxed">
            {body}
        </p>
    </div>
);

export default function About() {
    return (
        <div className="bg-(--color-tertiary)">

            {/* ── HERO ── */}
            <section className="bg-(--color-primary) px-8 py-24 md:py-36">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-end">
                    <div>
                        <GoldRule />
                        <p className="text-(--color-secondary) text-[0.62rem] tracking-[0.28em] uppercase font-light mb-5">
                            Est. 2004 · Geneva
                        </p>
                        <h1
                            className="text-(--color-tertiary) font-light leading-[1.08]"
                            style={{ fontSize: "clamp(2.8rem,5.5vw,5rem)" }}
                        >
                            Crafted with <em>purpose.</em>
                            <br />Defined by <em>excellence.</em>
                        </h1>
                    </div>

                    <div>
                        <p className="text-(--color-tertiary)/60 font-light leading-relaxed text-sm mb-14 max-w-sm">
                            We are a house built on the belief that true luxury is never loud.
                            It lives in the weight of fine fabric, the silence of a perfectly
                            balanced room, the unhurried attention of someone who genuinely cares.
                        </p>
                        <div className="flex gap-12">
                            <Stat value="20" label="Years" />
                            <Stat value="140" label="Artisans" />
                            <Stat value="38" label="Markets" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── STORY ── */}
            <section className="px-8 py-24">
                <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-16">
                    <div>
                        <GoldRule />
                        <p className="text-(--color-secondary) text-[0.62rem] tracking-[0.28em] uppercase font-light mb-4">
                            Our Story
                        </p>
                        <h2
                            className="text-(--color-primary) font-light leading-[1.15]"

                        >
                            A single atelier.<br />
                            <em>A relentless pursuit<br />of the exceptional.</em>
                        </h2>
                    </div>

                    <div className="space-y-5 text-(--color-primary)/60 font-light text-sm leading-relaxed self-end">
                        <p>
                            It began in a modest Geneva workshop in 2004. Our founder, Henri Leclair,
                            had spent fifteen years learning from the last great European craftsmen —
                            watchmakers, weavers, perfumers — before distilling everything he had
                            learned into a single house with a single purpose.
                        </p>
                        <p>
                            To make things that matter. Objects and experiences that carry meaning
                            beyond their surface. That improve, subtly, with time. That are never
                            fashionable because they are never bound to fashion.
                        </p>
                        <p>
                            Today, Maison Élite operates across four continents. Yet every decision
                            still passes through the same question Henri asked on day one:{" "}
                            <em className="text-(--color-primary)">does this deserve to exist?</em>
                        </p>
                    </div>
                </div>
            </section>

            {/* ── DIVIDER ── */}
            <div className="max-w-5xl mx-auto px-8">
                <span className="block w-full h-px bg-(--color-primary)/10" />
            </div>

            {/* ── QUOTE ── */}
            <section className="px-8 py-20">
                <div className="max-w-3xl mx-auto text-center">
                    <span
                        className="text-(--color-secondary) select-none"
                        style={{ fontSize: "4rem", lineHeight: 1 }}
                    >
                        &ldquo;
                    </span>
                    <p
                        className="text-(--color-primary) font-light leading-snug -mt-4"
                    >
                        Luxury is not about expense. It is about the courage to care about
                        every detail, even the ones no one will notice.
                    </p>
                    <p className="text-(--color-secondary) text-[0.62rem] tracking-[0.28em] uppercase font-light mt-6">
                        — Henri Leclair, Founder
                    </p>
                </div>
            </section>

            {/* ── DIVIDER ── */}
            <div className="max-w-5xl mx-auto px-8">
                <span className="block w-full h-px bg-(--color-primary)/10" />
            </div>

            {/* ── VALUES ── */}
            <section className="px-8 py-24">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-14">
                        <GoldRule />
                        <p className="text-(--color-secondary) text-[0.62rem] tracking-[0.28em] uppercase font-light mb-4">
                            What We Stand For
                        </p>
                        <h2
                            className="text-(--color-primary) font-light"

                        >
                            Our Principles
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        <ValueCard
                            title="Mastery"
                            body="We employ only artisans who have spent years — often decades — honing a single craft. Speed is never a virtue within these walls."
                        />
                        <ValueCard
                            title="Permanence"
                            body="We design for longevity, not seasons. Each piece is made to outlast trends, to be inherited, to hold stories across generations."
                        />
                        <ValueCard
                            title="Restraint"
                            body="The hardest discipline is knowing what to leave out. Every superfluous element removed is a gesture of respect toward the person who will live with it."
                        />
                    </div>
                </div>
            </section>

            {/* ── CTA BAND ── */}
            <section className="bg-(--color-primary) px-8 py-16">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div>
                        <GoldRule />
                        <h3
                            className="text-(--color-tertiary) font-light"
                            style={{ fontSize: "clamp(1.5rem,2.5vw,2.2rem)" }}
                        >
                            Ready to experience <em>the difference?</em>
                        </h3>
                    </div>
                    <button className="shrink-0 bg-(--color-secondary) text-(--color-primary) text-[0.65rem] tracking-[0.24em] uppercase font-medium rounded-lg px-8 py-4 hover:opacity-85 transition-opacity cursor-pointer">
                        Get in Touch
                    </button>
                </div>
            </section>
        </div>
    );
}
