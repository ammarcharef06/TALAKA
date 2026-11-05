$ErrorActionPreference = 'Stop'
$ua = @{ 'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36' }
$url = 'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=IBM+Plex+Sans+Arabic:wght@400;500;700&display=swap'
$cssResp = Invoke-WebRequest -Uri $url -Headers $ua -UseBasicParsing
$css = $cssResp.Content
$blockPattern = '/\*\s*([a-z-]+)\s*\*/\s*@font-face\s*\{([^}]+)\}'
$blocks = [regex]::Matches($css, $blockPattern)
$fontDir = 'C:\Users\ANONYCHAT\Desktop\AREN\src\assets\fonts'
New-Item -ItemType Directory -Force -Path $fontDir | Out-Null
$fontCss = "/* Talaqa - self-hosted fonts (no external servers) */`n"
foreach ($b in $blocks) {
  $subset = $b.Groups[1].Value
  if ($subset -notin @('arabic', 'latin')) { continue }
  $body = $b.Groups[2].Value
  $fam = ([regex]::Match($body, "font-family:\s*'([^']+)'")).Groups[1].Value
  $wgt = ([regex]::Match($body, 'font-weight:\s*(\d+)')).Groups[1].Value
  $u = ([regex]::Match($body, 'url\(([^)]+)\)')).Groups[1].Value
  $range = ([regex]::Match($body, 'unicode-range:\s*([^;]+);')).Groups[1].Value
  $fname = ($fam -replace '\s', '') + '-' + $wgt + '-' + $subset + '.woff2'
  $out = Join-Path $fontDir $fname
  Invoke-WebRequest -Uri $u -OutFile $out -UseBasicParsing
  $fontCss += "@font-face {`n  font-family: '$fam';`n  font-style: normal;`n  font-weight: $wgt;`n  font-display: swap;`n  src: url('./assets/fonts/$fname') format('woff2');`n  unicode-range: $range;`n}`n"
}
Set-Content -Path 'C:\Users\ANONYCHAT\Desktop\AREN\src\fonts.css' -Value $fontCss -Encoding utf8
Get-ChildItem $fontDir | Format-Table Name, Length
