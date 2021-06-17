#! /bin/sh

echo "Initializing Git Hooks"
cp scripts/hooks/pre-commit .git/hooks/pre-commit
cp scripts/hooks/pre-push .git/hooks/pre-push
echo "Done"