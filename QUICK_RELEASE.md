# Quick release guide

Watercolor publishes only from a verified SemVer tag. The tag must match the
root and every workspace version.

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
