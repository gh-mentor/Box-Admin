# GitHub CLI api
# https://cli.github.com/manual/gh_api

# authenticate to GitHub
gh auth login

echo "get the billing information for the Atmosera-Copilot-Dev organization:\n"
gh api \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  orgs/Atmosera-CoPilot-Dev/copilot/billing

echo "get all copilot business seat assignments for the Atmosera-Copilot-Dev organization:\n"
gh api \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  orgs/Atmosera-CoPilot-Dev/copilot/billing/seats

