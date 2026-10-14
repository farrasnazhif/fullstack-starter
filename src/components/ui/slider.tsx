"use client";

import { Slider as BaseSlider } from "@base-ui/react/slider";

export function Slider({ label, ...props }: BaseSlider.Root.Props<number> & { label: string }) {
  return <BaseSlider.Root {...props}>
    <div className="mb-3 flex justify-between text-xs"><BaseSlider.Label>{label}</BaseSlider.Label><BaseSlider.Value /></div>
    <BaseSlider.Control className="ui-slider-control"><BaseSlider.Track className="ui-slider-track">
      <BaseSlider.Indicator className="ui-slider-fill" /><BaseSlider.Thumb className="ui-slider-thumb" />
    </BaseSlider.Track></BaseSlider.Control>
  </BaseSlider.Root>;
}
