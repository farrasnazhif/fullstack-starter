"use client";
import type { ComponentType } from "react";
import { META, type Meta } from "./meta";
import LoadingState from "./loading-state";
import ThinkingState from "./thinking-state";
import StreamingText from "./streaming-text";
import ApprovalCard from "./approval-card";
import ToolChips from "./tool-chips";
import TaskRows from "./task-rows";
import ChatComposer from "./chat-composer";
import PromptBar from "./prompt-bar";
import RecommendationCard from "./recommendation-card";
import ContextCards from "./context-cards";
import DiffTable from "./diff-table";
import RecordsTable from "./records-table";
import FilterTable from "./filter-table";
import SidebarNav from "./sidebar-nav";
import SearchList from "./search-list";
import Flowchart from "./flowchart";
import InsightCards from "./insight-cards";
import CodeBlock from "./code-block";
import FineTuneCard from "./fine-tune-card";
import SelectionActions from "./selection-actions";
import AgentScreen from "./agent-screen";
export type Entry = Meta & { Demo: ComponentType<{ variant?: string }> };
const DEMOS: Record<string, ComponentType<{ variant?: string }>> = {
  "loading-state": LoadingState,
  "thinking-state": ThinkingState,
  "streaming-text": StreamingText,
  "approval-card": ApprovalCard,
  "tool-chips": ToolChips,
  "task-rows": TaskRows,
  "chat-composer": ChatComposer,
  "prompt-bar": PromptBar,
  "recommendation-card": RecommendationCard,
  "context-cards": ContextCards,
  "diff-table": DiffTable,
  "records-table": RecordsTable,
  "filter-table": FilterTable,
  "sidebar-nav": SidebarNav,
  search: SearchList,
  flowchart: Flowchart,
  "insight-cards": InsightCards,
  "code-block": CodeBlock,
  "fine-tune-card": FineTuneCard,
  "selection-actions": SelectionActions,
  "agent-screen": AgentScreen,
};
export const REGISTRY: Entry[] = META.map((m) => ({ ...m, Demo: DEMOS[m.id] }));
