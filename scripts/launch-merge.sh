#!/bin/bash
# One-shot launch script — merges origin/dev into origin/main and pushes,
# so the Vercel production deploy puts the live site up.
# Run by launchd at 12:32 PM IST on Sep 14, 2026 (see
# ~/Library/LaunchAgents/com.houseofparva.launch.plist).
# Merge recipe: dev wins everywhere (-X theirs); src/app/page.tsx is then
# pinned exactly to dev to drop countdown leftovers that merge cleanly.
# DRY_RUN=1 runs everything except the push (for testing).
set -e
exec >>/tmp/launch-merge.log 2>&1

echo "=== launch merge start: $(date) (DRY_RUN=${DRY_RUN:-0}) ==="

REPO="/Users/yashankd/Ocean and Origin/Parva/Website"
WT="/tmp/launch-release"

cd "$REPO"
git fetch origin main dev -q

git worktree remove --force "$WT" 2>/dev/null || true
git worktree add "$WT" origin/main
cd "$WT"

git merge origin/dev -X theirs --no-commit --no-ff -q
git checkout origin/dev -- src/app/page.tsx

if [ -z "$(git diff origin/dev --stat)" ]; then
  echo "sanity check passed: merged tree is identical to origin/dev"
else
  echo "SANITY CHECK FAILED — merged tree differs from origin/dev:"
  git diff origin/dev --stat
  exit 1
fi

git -c user.name="launch-bot" -c user.email="launch-bot@users.noreply.github.com" \
  commit -qm "launch: merge dev into main — House of Parva goes live"

if [ "${DRY_RUN:-0}" = "1" ]; then
  echo "dry run: merge committed locally in worktree, NOT pushed"
  echo "inspect with: git -C $WT log --oneline -1 && git -C $WT show --stat HEAD"
  exit 0
fi

git push origin HEAD:main
cd "$REPO"
git worktree remove --force "$WT"
git fetch origin -q
echo "=== launch merge done: $(date) ==="
