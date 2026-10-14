import { Check } from "lucide-react";

export function Stepper({ steps, current }: { steps: string[]; current: number }) {
  return <ol className="ui-stepper" aria-label="Progress steps">{steps.map((step, index) => <li key={index} aria-current={index === current ? "step" : undefined} data-complete={index < current || undefined}>
    <span className="ui-step-number" aria-hidden>{index < current ? <Check size={12} /> : index + 1}</span><span>{step}</span>
    <span className="sr-only">{index < current ? ", completed" : index === current ? ", current" : ", upcoming"}</span>
  </li>)}</ol>;
}
