<?php
/**
 * Proxy untuk Google Sheets export.
 * Menghindari CORS dan mempercepat fetch di production.
 */
$sheetId = '1iiRQkmHqMarmgjAkbcE3suVcTtH9aniYAf1wr75aQeY';
$gid = isset($_GET['gid']) ? preg_replace('/[^0-9]/', '', $_GET['gid']) : '0';
if ($gid === '') $gid = '0';
$url = "https://docs.google.com/spreadsheets/d/{$sheetId}/export?format=csv&gid={$gid}";

$ctx = stream_context_create([
  'http' => [
    'timeout' => 15,
    'header' => "User-Agent: Mozilla/5.0 (compatible; Haccbox/1.0)\r\n"
  ]
]);

$csv = @file_get_contents($url, false, $ctx);
if ($csv === false) {
  http_response_code(502);
  header('Content-Type: text/plain; charset=utf-8');
  exit('Failed to fetch sheet');
}

header('Content-Type: text/csv; charset=utf-8');
header('Cache-Control: public, max-age=300');
echo $csv;
