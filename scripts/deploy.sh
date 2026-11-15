#!/usr/bin/env bash
#
# Build the site locally and push ONLY the static files (the /out folder)
# to the `main` branch on GitHub. Hostinger pulls `main` into public_html.
#
# Your Next.js source code lives on the `source` branch.
#
# Usage:  npm run deploy
#         npm run deploy -- "Optional commit message"
#
set -euo pipefail
cd "$(dirname "$0")/.."

DEPLOY_BRANCH="main"
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

echo "→ Building static site..."
rm -rf out
npm run build

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

if gitx ls-remote --exit-code --heads "$REPO_URL" "$DEPLOY_BRANCH" >/dev/null 2>&1; then
  gitx clone --quiet --depth 1 --branch "$DEPLOY_BRANCH" "$REPO_URL" "$TMP"
else
  git -C "$TMP" init --quiet -b "$DEPLOY_BRANCH"
  git -C "$TMP" remote add origin "$REPO_URL"
fi

# Replace everything in the deploy branch with the fresh build.
rsync -a --delete --exclude ".git" out/ "$TMP"/

cd "$TMP"
git add -A
if git diff --cached --quiet; then
  echo "✓ Nothing changed since the last deploy."
  exit 0
fi
git commit --quiet -m "$MESSAGE"
gitx push --quiet origin "$DEPLOY_BRANCH"
echo "✓ Static site pushed to '$DEPLOY_BRANCH'. Hostinger will pick it up on the next pull/auto-deploy."
