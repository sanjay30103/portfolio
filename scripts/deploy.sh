#!/usr/bin/env bash
#
# Build the site locally and push ONLY static files to GitHub:
#
#   main      → built for the domain root   (Hostinger pulls this)
#   gh-pages  → built for /portfolio        (GitHub Pages serves this)
#
# Your Next.js source code lives on the `source` branch.
#
# Usage:  npm run deploy
#         npm run deploy -- "Optional commit message"
#
set -euo pipefail
cd "$(dirname "$0")/.."

PAGES_BASE_PATH="/portfolio"   # = /<repo-name> for username.github.io/<repo-name>
REPO_URL="$(git remote get-url origin)"
MESSAGE="${1:-Deploy static site ($(date '+%Y-%m-%d %H:%M'))}"

# Use the GitHub CLI login for git if it's installed.
gitx() {
  if command -v gh >/dev/null 2>&1; then
    git -c credential.helper= -c 'credential.helper=!gh auth git-credential' "$@"
  else
    git "$@"
  fi
}

# build_and_push <branch> <base-path>
build_and_push() {
  local branch="$1" base="$2"
  echo ""
  echo "→ Building for '$branch' (base path: '${base:-/}')..."
  rm -rf out
  NEXT_PUBLIC_BASE_PATH="$base" npm run build >/dev/null

  local tmp
  tmp="$(mktemp -d)"
  if gitx ls-remote --exit-code --heads "$REPO_URL" "$branch" >/dev/null 2>&1; then
    gitx clone --quiet --depth 1 --branch "$branch" "$REPO_URL" "$tmp"
  else
    git -C "$tmp" init --quiet -b "$branch"
    git -C "$tmp" remote add origin "$REPO_URL"
  fi

  # Replace everything in the branch with the fresh build.
  rsync -a --delete --exclude ".git" out/ "$tmp"/

  (
    cd "$tmp"
    git add -A
    if git diff --cached --quiet; then
      echo "✓ '$branch': nothing changed."
    else
      git commit --quiet -m "$MESSAGE"
      gitx push --quiet origin "$branch"
      echo "✓ '$branch': pushed."
    fi
  )
  rm -rf "$tmp"
}

build_and_push "gh-pages" "$PAGES_BASE_PATH"
build_and_push "main" ""   # built last, so /out stays the Hostinger version

echo ""
echo "Done. Hostinger pulls 'main'; GitHub Pages serves 'gh-pages'."
