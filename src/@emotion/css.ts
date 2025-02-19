export type { CSSInterpolation, CSSObject, Css, Cx, CxArg } from "../types";
import { cssAndCxFactory } from "../cssAndCx";
import { getTssDefaultEmotionCache } from "../cache";

/** NOTE: These function use the default cache ("tss-react/cache") */
export const { css, cx } = cssAndCxFactory({
    "cache": getTssDefaultEmotionCache(),
});

export { keyframes } from "@emotion/react";
