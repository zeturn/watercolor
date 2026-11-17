# Quick release guide

Watercolor publishes only from a verified SemVer tag. The tag must match the
root and every workspace version.

Solid and Astro are private, unpublished source workspaces. The release gates
check every published package; private source experiments can be checked directly
with `npm run typecheck -w packages/solid` when developing them.

All internal package references, examples, and lockfiles are updated together by
`scripts/sync-versions.mjs`. The website consumes local core/React workspaces, so
release checks do not depend on the new version being available from npm first.

```bash
# Start from a clean, up-to-date main branch.
git switch main
git pull --ff-only

# Run the versioned release helper.
npm run release:patch
```

The helper refuses a dirty worktree, runs the source and package quality gates,
updates all workspace versions, stages only version manifests, commits, tags,
and pushes. GitHub Actions then repeats the full release gate before npm
Trusted Publishing begins.

Do not run `npm publish` locally and do not create a tag whose version differs
from any package manifest.

See [发布与集成指南](note/%E5%8F%91%E5%B8%83%E4%B8%8E%E9%9B%86%E6%88%90%E6%8C%87%E5%8D%97.md) for the complete contract.
