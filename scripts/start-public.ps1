# Fully-automated starter: stop stale processes, free port, start dev, start ngrok,
# fetch the public URL from ngrok API, then open a small priming page that sends
# the required header (`ngrok-skip-browser-warning`) and redirects the browser.
Set-Location 'D:\my-next-app1'

Write-Host "Stopping any existing ngrok processes..."
Get-Process ngrok -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.Id -Force }

# Free port 3000 if a process is listening
$port = 3000
$listeners = netstat -aon | Select-String ":$port\b"
if ($listeners) {
		$pids = ($listeners -split "\r?\n") | ForEach-Object {
				($_ -split '\s+')[-1]
		} | Select-Object -Unique
		foreach ($pidVal in $pids) {
				if ($pidVal -match '^[0-9]+$') {
						try { Stop-Process -Id [int]$pidVal -Force -ErrorAction Stop; Write-Host "Stopped PID $pidVal on port $port" } catch { }
				}
		}
}

Write-Host "Starting Next dev server..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd 'D:\my-next-app1'; pnpm dev"

Start-Sleep -Seconds 2

Write-Host "Starting ngrok..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd 'D:\my-next-app1'; ngrok http 3000 --host-header=localhost:3000"

# Wait for ngrok to report a tunnel via local API
Write-Host "Waiting for ngrok to publish a tunnel (this may take a few seconds)..."
$publicUrl = $null
for ($i=0; $i -lt 30; $i++) {
		try {
				$json = Invoke-RestMethod -Uri 'http://127.0.0.1:4040/api/tunnels' -UseBasicParsing -ErrorAction Stop
				if ($json.tunnels -and $json.tunnels.Count -gt 0) {
						$publicUrl = $json.tunnels[0].public_url
						break
				}
		} catch { }
		Start-Sleep -Seconds 1
}

if (-not $publicUrl) {
		Write-Host "Could not determine ngrok public URL. Check ngrok inspector at http://127.0.0.1:4040" -ForegroundColor Yellow
		exit 1
}

Write-Host "ngrok public URL: $publicUrl"

# Build a tiny data URL page that sends the header then redirects the browser
$html = @"
<!doctype html>
<meta charset='utf-8'>
<title>Open Public Site</title>
<p>Opening site...</p>
<script>
	(async function(){
		try {
			await fetch('$publicUrl', { method: 'GET', headers: { 'ngrok-skip-browser-warning': '1' }, mode: 'cors' });
		} catch(e) {
			console.log('priming fetch failed', e);
		}
		window.location.href = '$publicUrl';
	})();
</script>
"@

$data = 'data:text/html;charset=utf-8,' + [uri]::EscapeDataString($html)
Start-Process $data

Write-Host "Opened browser priming page and redirecting to $publicUrl" -ForegroundColor Green
