$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $repoRoot

Write-Host "Repo root: $repoRoot"

if (Get-Command git -ErrorAction SilentlyContinue) {
  git config core.hooksPath .githooks | Out-Null
  Write-Host "Configured git hooksPath => .githooks"
}
else {
  throw "git not found. Install Git for Windows first."
}

$extensionsFile = Join-Path $repoRoot ".vscode\extensions.json"
$extensionIds = @()

if (Test-Path $extensionsFile) {
  $extJson = Get-Content $extensionsFile -Raw | ConvertFrom-Json
  $extensionIds = @($extJson.recommendations)
}
else {
  Write-Host "No .vscode/extensions.json found; skipping extension install."
}

function Install-Extensions($cli) {
  foreach ($ext in $extensionIds) {
    Write-Host "Installing extension: $ext"
    & $cli --install-extension $ext --force | Out-Null
  }
}

$cliCandidates = @("trae", "code", "code-insiders")
$installedCli = $null

foreach ($candidate in $cliCandidates) {
  if (Get-Command $candidate -ErrorAction SilentlyContinue) {
    $installedCli = $candidate
    break
  }
}

if ($installedCli -and $extensionIds.Count -gt 0) {
  Write-Host "Using CLI: $installedCli"
  Install-Extensions $installedCli
  Write-Host "Extensions installed."
}
else {
  Write-Host "No CLI found for automatic extension install (trae/code)."
  Write-Host "Install recommended extensions manually from .vscode/extensions.json."
}

Write-Host "Setup complete."
Write-Host "Next steps:"
Write-Host "  1) npm install"
Write-Host "  2) Run tasks: deps: npm install, quality: lint, quality: build"
