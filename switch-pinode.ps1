param (
    [string]$target = "mainnet"
)

# Container-Namen
$mainnet = "mainnet"
$testnet = "testnet2"

Write-Host "`n>>> Aktueller Zielmodus: $target" -ForegroundColor Cyan

if ($target -eq "mainnet") {
    Write-Host ">> Stoppe Testnet-Container ($testnet) falls aktiv..."
    docker stop $testnet | Out-Null

    Write-Host ">> Starte Mainnet-Container ($mainnet)..."
    docker start $mainnet
}
elseif ($target -eq "testnet") {
    Write-Host ">> Stoppe Mainnet-Container ($mainnet) falls aktiv..."
    docker stop $mainnet | Out-Null

    Write-Host ">> Starte Testnet-Container ($testnet)..."
    docker start $testnet
}
else {
    Write-Host "Ungültiger Parameter. Bitte benutze: mainnet oder testnet" -ForegroundColor Red
}
