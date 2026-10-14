export type Meta = {
  id: string;
  title: string;
  caption: string;
  file: string;
  variants?: string[];
  /** other files in this repo the component imports (ids in INTERNAL) — copy these too */
  deps?: string[];
};
/** Shared building blocks that primitives import but that don't get their own
 * gallery card. Copy these alongside any component that lists them in `deps`. */
export const INTERNAL: Record<string, { title: string; path: string }> = {
  button: {
    title: "Button",
    path: "src/components/ui/button.tsx",
  },
  "glide-menu": {
    title: "GlideMenu",
    path: "src/components/ui/glide-menu.tsx",
  },
  "entity-chip": {
    title: "EntityChip",
    path: "src/components/ui/entity-chip.tsx",
  },
  "value-pill": {
    title: "ValuePill",
    path: "src/components/ui/value-pill.tsx",
  },
  shimmer: {
    title: "Shimmer",
    path: "src/components/ui/shimmer.tsx",
  },
  "stream-text": {
    title: "StreamText",
    path: "src/components/ui/stream-text.tsx",
  },
};
export const META: Meta[] = [
  {
    id: "loading-state",
    title: "Loading State",
    caption: "Pixel-grid loader with shimmer and elapsed time.",
    file: "loading-state.tsx",
    variants: ["Drive", "Dots", "Orbit", "Surfer"],
  },
  {
    id: "thinking-state",
    title: "Thinking",
    caption: "Expandable traces — steps, reasoning, search, coding.",
    file: "thinking-state.tsx",
    variants: ["Steps", "Reasoning", "Search", "Coding"],
  },
  {
    id: "streaming-text",
    title: "Streaming Text",
    caption: "Streamed answer with inline sources, actions, and follow-ups.",
    file: "streaming-text.tsx",
  },
  {
    id: "approval-card",
    title: "Approval Card",
    caption: "Human-in-the-loop questions the agent asks before acting.",
    file: "approval-card.tsx",
    deps: ["button", "glide-menu"],
  },
  {
    id: "tool-chips",
    title: "Tool Chips",
    caption: "Code edits and tool calls as compact chips.",
    file: "tool-chips.tsx",
  },
  {
    id: "task-rows",
    title: "Task Rows",
    caption: "Live agent task status — running, failed, completed.",
    file: "task-rows.tsx",
    variants: ["Capsules", "List"],
  },
  {
    id: "chat-composer",
    title: "Chat",
    caption: "Tabbed chat panel with reasoning replies and a composer.",
    file: "chat-composer.tsx",
  },
  {
    id: "prompt-bar",
    title: "Prompt Bar",
    caption:
      "Composer with @ sources, / commands, model picker, and dictation.",
    file: "prompt-bar.tsx",
    variants: ["Rounded", "Pill"],
  },
  {
    id: "recommendation-card",
    title: "Recommendation Card",
    caption: "Agent suggestion with a confidence meter and actions.",
    file: "recommendation-card.tsx",
    deps: ["button", "entity-chip", "value-pill"],
  },
  {
    id: "context-cards",
    title: "Context Cards",
    caption: "Retrieved knowledge chunks with their sources.",
    file: "context-cards.tsx",
  },
  {
    id: "diff-table",
    title: "Diff Table",
    caption: "AI-proposed edits sweeping through tabular data.",
    file: "diff-table.tsx",
    deps: ["button"],
  },
  {
    id: "records-table",
    title: "Records Table",
    caption: "CRM-style grid with tags, sorting, and relationship status.",
    file: "records-table.tsx",
    deps: ["glide-menu"],
  },
  {
    id: "filter-table",
    title: "Filter Table",
    caption: "Status chips that reorganize live data.",
    file: "filter-table.tsx",
  },
  {
    id: "sidebar-nav",
    title: "Sidebar Nav",
    caption:
      "Collapsible workspace and chat navigation with gliding hover states.",
    file: "sidebar-nav.tsx",
    deps: ["glide-menu"],
  },
  {
    id: "search",
    title: "Search",
    caption: "Command search with live filtering and an empty state.",
    file: "search-list.tsx",
    deps: ["glide-menu"],
  },
  {
    id: "flowchart",
    title: "Flowchart",
    caption: "Workflow trigger and condition steps on a dotted canvas.",
    file: "flowchart.tsx",
  },
  {
    id: "insight-cards",
    title: "Insight Cards",
    caption: "Paged agent insights with scrub-ready live charts.",
    file: "insight-cards.tsx",
  },
  {
    id: "code-block",
    title: "Code Block",
    caption: "A line-numbered listing and a unified diff.",
    file: "code-block.tsx",
    variants: ["Code", "Diff"],
  },
  {
    id: "fine-tune-card",
    title: "Fine-tune Card",
    caption: "The agent adjusts design properties in an inspector.",
    file: "fine-tune-card.tsx",
    deps: ["glide-menu"],
  },
  {
    id: "selection-actions",
    title: "Selection Actions",
    caption: "Highlight a passage and hand it to the agent to rewrite.",
    file: "selection-actions.tsx",
    deps: ["button", "shimmer", "stream-text"],
  },
  {
    id: "agent-screen",
    title: "Agent Screen",
    caption: "Watch an agent's screen — open, teach a task, record.",
    file: "agent-screen.tsx",
    deps: ["button"],
    variants: ["Working", "Loading"],
  },
];
