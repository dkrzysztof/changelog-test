#!/bin/bash
previousVersion=$(git tag --sort version:refname | tail -n 1)

latestCommitSHA=$(git log -n 1 --pretty=format:"%H")

git diff $previousVersion $latestCommitSHA --name-only
git diff $previousVersion $latestCommitSHA --quiet
if [ $? -eq 0 ]; then
    echo "Exiting, because no changes were added between origin/main HEAD commit and latest tag"
    exit 1
else
    echo "Detected new changes, bumping version"
    exit 0
fi