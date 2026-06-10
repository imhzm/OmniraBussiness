# Downloads all site imagery from Unsplash as WebP with per-file fallbacks.
# Each entry tries candidate photo IDs in order until one downloads successfully.
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$ErrorActionPreference = "SilentlyContinue"

$root = Join-Path $PSScriptRoot "..\public\images"

$targets = @(
    @{ path = "hero/riyadh-skyline.webp"; size = "w=1200&h=1500"; ids = @(
        "photo-1586724237569-f3d0c1dee8c6", "photo-1578895101408-1a36b834405b",
        "photo-1512453979798-5ea266f8880c", "photo-1480714378408-67cf0d13bc1b") },

    @{ path = "sectors/energy.webp"; size = "w=1200&h=900"; ids = @(
        "photo-1509391366360-2e959784a276", "photo-1466611653911-95081537e5b7",
        "photo-1473341304170-971dccb5ac1e") },
    @{ path = "sectors/finance.webp"; size = "w=1200&h=900"; ids = @(
        "photo-1551288049-bebda4e38f71", "photo-1460925895917-afdab827c52f",
        "photo-1559526324-4b87b5e36e44") },
    @{ path = "sectors/logistics.webp"; size = "w=1200&h=900"; ids = @(
        "photo-1494412574643-ff11b0a5c1c3", "photo-1578575437130-527eed3abbec",
        "photo-1605745341112-85968b19335b") },
    @{ path = "sectors/technology.webp"; size = "w=1200&h=900"; ids = @(
        "photo-1518709268805-4e9042af2176", "photo-1558494949-ef010cbdcc31",
        "photo-1531297484001-80022131f5a1") },
    @{ path = "sectors/tourism.webp"; size = "w=1200&h=900"; ids = @(
        "photo-1565019011521-254775dd1d2d", "photo-1506905925346-21bda4d32df4",
        "photo-1469854523086-cc02fe5d8800") },
    @{ path = "sectors/real-estate.webp"; size = "w=1200&h=900"; ids = @(
        "photo-1486406146926-c627a92ad1ab", "photo-1449157291145-7efd050a4d0e",
        "photo-1503387762-592deb58ef4e") },
    @{ path = "sectors/healthcare.webp"; size = "w=1200&h=900"; ids = @(
        "photo-1576091160399-112ba8d25d1f", "photo-1579684385127-1ef15d508118",
        "photo-1538108149393-fbbd81895907") },
    @{ path = "sectors/entertainment.webp"; size = "w=1200&h=900"; ids = @(
        "photo-1492684223066-81342ee5ff30", "photo-1514525253161-7a46d19cd819",
        "photo-1470229722913-7c0e2dbbafd3") },

    @{ path = "articles/article-1.webp"; size = "w=1200&h=675"; ids = @(
        "photo-1450101499163-c8848c66ca85", "photo-1454165804606-c3d57bc86b40") },
    @{ path = "articles/article-2.webp"; size = "w=1200&h=675"; ids = @(
        "photo-1554224155-6726b3ff858f", "photo-1460925895917-afdab827c52f") },
    @{ path = "articles/article-3.webp"; size = "w=1200&h=675"; ids = @(
        "photo-1521737711867-e3b97375f902", "photo-1556761175-b413da4baf72") },
    @{ path = "articles/article-4.webp"; size = "w=1200&h=675"; ids = @(
        "photo-1611974789855-9c2a0a7236a3", "photo-1590283603385-17ffb3a7f29f",
        "photo-1551288049-bebda4e38f71") },
    @{ path = "articles/article-5.webp"; size = "w=1200&h=675"; ids = @(
        "photo-1573497019940-1c28c88b4f3e", "photo-1521791136064-7986c2920216") },
    @{ path = "articles/article-6.webp"; size = "w=1200&h=675"; ids = @(
        "photo-1436491865332-7a61a109cc05", "photo-1488646953014-85cb44e25828") },

    @{ path = "events/event-1.webp"; size = "w=900&h=600"; ids = @(
        "photo-1540575467063-178a50c2df87", "photo-1511578314322-379afb476865") },
    @{ path = "events/event-2.webp"; size = "w=900&h=600"; ids = @(
        "photo-1511578314322-379afb476865", "photo-1505373877841-8d25f7d46678") },
    @{ path = "events/event-3.webp"; size = "w=900&h=600"; ids = @(
        "photo-1505373877841-8d25f7d46678", "photo-1540575467063-178a50c2df87") },

    @{ path = "about/kingdom.webp"; size = "w=1600&h=900"; ids = @(
        "photo-1518684079-3c830dcef090", "photo-1473580044384-7ba9967e16a0",
        "photo-1506905925346-21bda4d32df4") },
    @{ path = "about/office.webp"; size = "w=1600&h=900"; ids = @(
        "photo-1497366216548-37526070297c", "photo-1497366811353-6870744d04b2") }
)

$failed = @()
foreach ($target in $targets) {
    $dest = Join-Path $root $target.path
    $dir = Split-Path $dest -Parent
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }

    $ok = $false
    foreach ($id in $target.ids) {
        $url = "https://images.unsplash.com/$id`?q=80&fm=webp&fit=crop&$($target.size)"
        try {
            Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing -TimeoutSec 60 -ErrorAction Stop
            if ((Test-Path $dest) -and ((Get-Item $dest).Length -gt 15000)) {
                Write-Output "OK    $($target.path)  <-  $id  ($([math]::Round((Get-Item $dest).Length/1KB)) KB)"
                $ok = $true
                break
            }
        } catch {
            # try next candidate
        }
    }
    if (-not $ok) {
        $failed += $target.path
        Write-Output "FAIL  $($target.path)"
    }
}

Write-Output ""
if ($failed.Count -gt 0) {
    Write-Output "FAILED FILES: $($failed -join ', ')"
    exit 1
} else {
    Write-Output "ALL IMAGES DOWNLOADED SUCCESSFULLY"
}
