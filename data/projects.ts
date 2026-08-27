import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "preset-setup-accelerator",
    title: "Preset Setup Accelerator",
    tagline: "Batch imaging-setting changes across every preset on a transducer.",
    description:
      "A control on the ultrasound cart that applies an imaging setting across all presets tied to a transducer in one pass, replacing preset-by-preset manual configuration and cutting sales team setup time by 87%.",
    date: "Aug. 2026",
    featured: true,
    proprietary: true,
    outcomes: [
      { metric: "87%", label: "Reduction in setup time" },
      { metric: "One pass", label: "Instead of preset-by-preset edits" },
      { metric: "On-cart", label: "Built into the system UI" },
    ],
    stack: ["C++", "UI Development", "Automation", "Validation Testing", "Ultrasound Imaging"],
    links: {},
    caseStudy: {
      problem:
        "Client-specific imaging conditions have to be applied consistently across every preset on a system. There was no way to do that in bulk — each preset on each transducer had to be opened and edited by hand with the same change. Across several transducers with dozens of presets each, that turned routine setup into hours of repetitive work, and every manual pass was a chance to miss one.",
      approach: [
        "Built a UI element on the ultrasound cart that scopes an imaging setting change to every preset associated with a selected transducer.",
        "Designed the interaction to live inside the existing on-cart preset workflow, so no separate tool or external hardware is needed in the field.",
        "Handled per-preset variation so a batch change applies cleanly across presets that don't share identical parameter sets.",
        "Validated batch-applied settings against live scan models to confirm imaging behavior matched a manually configured preset.",
      ],
      decisions: [
        {
          title: "Transducer as the batch scope",
          body: "Client conditions are almost always transducer-specific, so scoping the operation to a transducer's preset set matched how the team already reasons about configuration. The control needed no explanation to be useful.",
        },
        {
          title: "On-cart UI instead of an external utility",
          body: "Setup happens at the cart. Putting the control in the system UI meant it fit an existing workflow rather than adding a step that depends on a laptop, a service account, or someone who knows the tooling.",
        },
        {
          title: "Consistency as the real win",
          body: "Speed was the headline, but applying one change across every preset in a single operation also removes the silent failure mode — a missed preset that nobody notices until a clinician hits it mid-exam.",
        },
      ],
      result:
        "Setup time dropped by 87%. Applying a client-specific condition across a transducer's presets became a single operation instead of an afternoon of repetitive edits, letting the team spend setup time on clinical tasks rather than configuration.",
    },
  },
  {
    slug: "legacy-restore",
    title: "Legacy Restore",
    tagline: "Version rollback for ultrasound imaging presets.",
    description:
      "Ultrasound presets are tied to specific software versions, so upgrading meant losing the old ones. Legacy Restore makes preset changes reversible, letting clinical teams upgrade confidently knowing they can return to a known-good configuration.",
    date: "June 2026",
    featured: true,
    proprietary: true,
    outcomes: [
      { metric: "~70%", label: "Faster sales demo setup" },
      { metric: "Side-by-side", label: "Preset comparison for demos" },
      { metric: "Reversible", label: "Upgrades across software versions" },
    ],
    stack: ["Python", "C++", "SQL", "Database Design", "Validation Testing"],
    links: {},
    caseStudy: {
      problem:
        "Ultrasound presets are tied to the software version they shipped with, so once a system upgraded there was no supported path back. That made every upgrade a one-way decision: if a clinician preferred the previous preset, or a new one underperformed, the old configuration was effectively gone. A single failing preset could stop a line while a fix was developed.",
      approach: [
        "Designed an internal database and directory architecture that keeps legacy presets addressable per software version.",
        "Built Python and C++ tooling to automate preset recovery and keep deployments consistent across imaging systems.",
        "Added batch processing so a full preset set could be prepared in one pass instead of configured by hand.",
        "Validated against live scan models with sonographers and clinical scientists before rollout.",
      ],
      decisions: [
        {
          title: "Rollback as a supported operation, not a recovery job",
          body: "Treating restoration as a first-class workflow is what makes upgrades safe to attempt. The risk of upgrading drops to the cost of rolling back, which changes how willing teams are to adopt new software at all.",
        },
        {
          title: "Versioned preset storage instead of in-place updates",
          body: "Keeping presets addressable by software version means no upgrade destroys prior state. That property is also what makes side-by-side comparison possible — you can't demo old against new if the old one was overwritten.",
        },
        {
          title: "Batch processing for demo preparation",
          body: "Sales engineers were configuring demo systems by hand. Batching preset preparation cut setup time by roughly 70% and made side-by-side demos practical rather than a special request.",
        },
      ],
      result:
        "Upgrades became reversible. A single problematic preset can be rolled back while a fix is developed instead of halting a line, and the sales team can demo old and new presets side by side to show measurable imaging improvements.",
    },
  },
  {
    slug: "philips-delivery-tool",
    title: "Philips Delivery Tool",
    tagline: "One GUI for the entire preset delivery workflow — Git, PRs, docs, and array-level diffs.",
    description:
      "A Python GUI that wraps the Git CLI and GitHub REST API to collapse preset delivery — branch, commit, push, PR, reviewer assignment, Change Set Document, preflight — into a single reviewed workflow, with index-specific diffs for array-based JSON parameters.",
    date: "June 2026",
    featured: true,
    proprietary: true,
    outcomes: [
      { metric: "Hours/week", label: "Of admin work reclaimed" },
      { metric: "Index-level", label: "Diffs for array parameters" },
      { metric: "One surface", label: "Replaces five tool context switches" },
    ],
    stack: ["Python", "Git", "GitHub REST API", "GUI Development", "JSON", "Automation"],
    links: {},
    caseStudy: {
      problem:
        "Once a transducer preset is optimized, the change has to land in the central repository for every ultrasound preset across transducers. Getting it there meant a long chain of manual steps: Git operations, a Change Set Document, a pull request, chasing approvals, then starting preflight. Engineers collectively lost hours every week to it. The same change was documented twice, once in the Change Set Document and again in the PR description. Reviewers were added by hand on every PR. And reviewing the change itself was the worst part — preset parameters live in large one- and multi-dimensional arrays, so standard diff tools report that a value changed without identifying which index it belongs to, leaving engineers counting array positions by hand.",
      approach: [
        "Built a Python GUI wrapping the Git CLI so branch creation, staging, commit, push, and pull all happen in one place.",
        "Integrated the GitHub REST API to fetch repo collaborators, assign reviewers automatically, open pull requests, detect when the approval threshold is met, and start preflight.",
        "Wrote a JSON diff layer that reports changes by parameter name and array index — including pointer type and pointer index — instead of raw value-level output.",
        "Generated Change Set Documents and PR descriptions from the same parameter-change summary, eliminating the duplicate write-up.",
      ],
      decisions: [
        {
          title: "Centralize the delivery workflow in one GUI",
          body: "Most preset delivery steps follow a predictable pattern that doesn't require engineering judgment, so wrapping them in a GUI removed the context switching between Git Bash, VS Code, GitHub, documentation folders, and browser tabs. It also made the process consistent across engineers, prevented common Git errors, and gave newer engineers a path to follow instead of tribal knowledge.",
        },
        {
          title: "Keep engineers in control instead of automating every step",
          body: "The tool never commits or delivers without confirmation. Engineers still review changed files before staging, select what to commit, edit the commit message, review generated summaries and PR descriptions, and decide whether to start preflight. Preset updates need engineering judgment — the goal was to remove the administrative overhead around review, not the review itself.",
        },
        {
          title: "Generate both high-level and low-level change summaries",
          body: "Different reviewers need different detail. The high-level summary gives scope — affected transducer, affected preset, changed parameter names, type of change — while the low-level summary carries exact value changes with pointer type and index. Producing both means a reviewer can skim or verify without asking someone to reconstruct the change.",
        },
        {
          title: "Index-specific diffs for array-based parameters",
          body: "This is the decision that addresses the sharpest pain point. Standard diffs show that an array value moved but not which parameter index it maps to, so engineers were counting positions manually. Surfacing the index directly makes large arrays transparent and removes the class of review error where an unintended parameter change slips past unnoticed.",
        },
        {
          title: "Selective value restores during diff review",
          body: "Real optimization work often produces a file where most changes are good and a few specific values or pointer indices are not. Allowing a restore at the individual value level — rather than accepting or rejecting a whole file — avoids sending engineers back to hand-edit JSON buried inside large arrays, which is exactly where mistakes happen.",
        },
      ],
      result:
        "Preset delivery went from a multi-tool chain to a single reviewed workflow. Engineers stopped counting array indices by hand, stopped writing the same change summary twice, and stopped manually assigning reviewers — while keeping approval over every step that requires judgment. The reclaimed hours went back to optimization work instead of administration.",
    },
  },
  {
    slug: "abcmouth",
    title: "ABCMouth",
    tagline: "An accessible speech-learning platform for people traditional therapy leaves out.",
    description:
      "A self-paced mobile and web experience combining pronunciation exercises, facial movement training, and guided audio lessons — built for people with speech impediments and non-native English speakers.",
    date: "Jan. 2026",
    featured: true,
    outcomes: [
      { metric: "Runner-up", label: "Hackathon finish" },
      { metric: "20+", label: "Screens and user flows" },
      { metric: "2", label: "Platforms designed" },
    ],
    stack: ["Figma", "UX Research", "Prototyping", "Usability Testing", "UI Design"],
    links: {
      // TODO: add repo and prototype links
      demo: undefined,
      github: undefined,
    },
    caseStudy: {
      problem:
        "Speech therapy carries real barriers: cost, scheduling, geographic access, and the self-consciousness of practicing out loud in front of a stranger. Non-native English speakers face a parallel problem with almost no dedicated tooling — most language apps teach vocabulary, not the physical mechanics of producing an unfamiliar sound.",
      approach: [
        "Interviewed and tested with non-native English speakers to find where existing tools break down.",
        "Mapped user flows for two distinct audiences with overlapping needs but different motivations.",
        "Designed 20+ screens across mobile and web, covering pronunciation drills, facial movement training, and guided audio lessons.",
        "Ran usability sessions and rebuilt navigation and lesson pacing based on what testers actually struggled with.",
      ],
      decisions: [
        {
          title: "Gamification as a confidence mechanism, not a growth hack",
          body: "Levels, leaderboards, rewards, and daily streaks were chosen specifically because the hardest part of speech practice is sustaining it through early embarrassment. The reward loop is tuned for consistency, not engagement time.",
        },
        {
          title: "Facial movement training as a first-class feature",
          body: "Audio-only feedback tells you that you got it wrong, not how to fix it. Visual mouth-position guidance gives users a physical correction they can act on immediately.",
        },
        {
          title: "Designing for two audiences without splitting the product",
          body: "Rather than building separate tracks, the lesson system adapts difficulty and framing while sharing one underlying exercise engine — keeping the experience coherent and the scope achievable.",
        },
      ],
      result:
        "ABCMouth earned runner-up recognition at a competitive hackathon. Usability testing directly reshaped navigation and lesson flow, and the final prototype covered a complete onboarding-to-mastery journey across both platforms.",
    },
  },
  {
    slug: "nextstep",
    title: "NextStep",
    tagline: "AI-powered job matching that meets candidates in their own language.",
    description:
      "Reads a resume, recommends relevant roles, and removes the language barrier that keeps qualified international candidates out of the running — including a multilingual Chrome extension with real-time translation.",
    date: "Oct. 2025",
    featured: true,
    outcomes: [
      { metric: "3", label: "Integrated surfaces" },
      { metric: "Multilingual", label: "Real-time translation" },
      { metric: "Local AI", label: "Ollama-powered, private" },
    ],
    stack: ["JavaScript", "Python", "Node.js", "Ollama API", "HTML/CSS", "Git"],
    links: {
      // TODO: add repo and deployed links
      github: undefined,
      demo: undefined,
    },
    caseStudy: {
      problem:
        "Job seekers with non-U.S. experience face a formatting and language penalty before a human ever reads their application. Their resume describes real, relevant work — but in a structure and vocabulary that neither applicant tracking systems nor recruiters parse well.",
      approach: [
        "Built resume analysis that extracts skills and experience, then matches against relevant opportunities.",
        "Developed a Chrome extension so candidates get help on the job boards they already use, instead of a separate destination site.",
        "Created a translation and auto-generation pipeline that converts foreign-language experience into polished U.S.-standard resumes.",
        "Integrated an AI chatbot for in-context questions during the application process.",
      ],
      decisions: [
        {
          title: "Ollama for local inference",
          body: "Resumes are sensitive documents. Running models locally through the Ollama API meant candidate data never had to leave their machine for a third-party API — a privacy property that would be hard to retrofit later.",
        },
        {
          title: "A browser extension instead of another portal",
          body: "Candidates don't want a new site to check. Meeting them inside LinkedIn, Indeed, and company career pages meant the tool fit an existing habit rather than competing with one.",
        },
        {
          title: "Translation as a pipeline, not a feature",
          body: "Converting a resume between languages is more than word substitution — it requires restructuring for U.S. formatting conventions. Treating it as a multi-stage pipeline kept translation, restructuring, and polish independently testable.",
        },
      ],
      result:
        "NextStep delivered a working end-to-end path from a foreign-language resume to a U.S.-standard document with matched job recommendations, wrapped in a browser extension that works where candidates already search.",
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectStacks = Array.from(
  new Set(projects.flatMap((project) => project.stack)),
).sort();
