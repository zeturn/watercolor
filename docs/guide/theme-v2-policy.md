# Theme v2 stability policy

Theme v2 is the stable customization contract for Watercolor 1.2.x.

## JSON schema

The public schema is `@zeturn/watercolor-core/theme-v2.schema.json`.

- `version` remains `2` for all Watercolor `1.2.x` releases.
- Unknown keys are rejected at every level.
- Theme JSON cannot contain selectors, arbitrary CSS, component overrides, scripts, or HTML.
- New optional tokens may be added only when Watercolor already exposes the matching semantic CSS variable.
- Existing token names and meanings cannot be removed or repurposed in `1.2.x`.
- Breaking schema changes are reserved for Theme v3.

## Token stability

Stable Theme v2 mode tokens:

`canvas`, `surfaceSubtle`, `surfaceRaised`, `surfaceOverlay`, `actionHover`, `actionActive`, `actionSelected`, `actionSelectedHover`, `actionDisabled`, `textPrimary`, `textSecondary`, `textTertiary`, `textDisabled`, `textInverse`, `borderDefault`, `borderStrong`, `borderSubtle`, `onAccent`, `accent`, `accentHover`, `accentActive`, `accentSubtle`, `danger`, `dangerHover`, `dangerSubtle`, `backdrop`, `shadowSm`, `shadowMd`, `shadowLg`, `shadowXl`, `focusRing`.

Stable palette names:

`primary`, `secondary`, `neutral`, `success`, `warning`, `error`, `info`, `purple`, `pink`, `teal`, `indigo`, `orange`, `cyan`.

Stable palette shades:

`0`, `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950`, `1000`.

## Contrast audit

Runtime validation warns for these hexadecimal color pairs:

- `textPrimary` against `canvas`: minimum `4.5:1`.
- `onAccent` against `accent`: minimum `4.5:1`.
- `danger` against `canvas`: minimum `3:1`.
- `focusRing` against `canvas`: minimum `3:1`.

Warnings do not block local application, but release tooling treats the strict audit as part of the Theme v2 quality gate.
