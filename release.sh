#!/usr/bin/env bash
set -euo pipefail

version_type="${1:-patch}"
case "$version_type" in
  patch|minor|major) ;;
  *) echo "Usage: ./release.sh [patch|minor|major]" >&2; exit 1 ;;
esac

npm run "release:$version_type"
