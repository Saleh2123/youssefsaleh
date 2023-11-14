import type { ReactNode } from "react";

export type Slots<K extends PropertyKey = never> = Record<K | "children", ReactNode>;
