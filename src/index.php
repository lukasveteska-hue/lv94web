<?php
declare(strict_types=1);

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$dbHost = getenv('DB_HOST') ?: 'db';
$dbPort = (int) (getenv('DB_PORT') ?: 3306);
$dbName = getenv('DB_NAME') ?: 'lv94';
$dbUser = getenv('DB_USER') ?: '';
$dbPassword = getenv('DB_PASSWORD') ?: '';

$phpVersion = PHP_VERSION;
$mysqliLoaded = extension_loaded('mysqli');
$pdoMysqlLoaded = extension_loaded('pdo_mysql');
$dbStatus = 'Not connected';
$dbInfo = [];
$dbError = null;

try {
    $mysqli = new mysqli($dbHost, $dbUser, $dbPassword, $dbName, $dbPort);
    $result = $mysqli->query('SELECT DATABASE() AS database_name, VERSION() AS mysql_version, NOW() AS server_time');
    $dbInfo = $result->fetch_assoc() ?: [];
    $dbStatus = 'Connected';
} catch (Throwable $exception) {
    $dbError = $exception->getMessage();
}

function e(mixed $value): string
{
    return htmlspecialchars((string) $value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}
?>
<!doctype html>
<html lang="sk">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>LV94 PHP Test</title>
    <style>
        :root {
            color-scheme: light dark;
            font-family: Arial, Helvetica, sans-serif;
            line-height: 1.5;
        }

        body {
            margin: 0;
            padding: 32px;
            background: #f5f7fb;
            color: #172033;
        }

        main {
            max-width: 760px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #d9e0ea;
            border-radius: 8px;
            padding: 28px;
            box-shadow: 0 16px 40px rgba(23, 32, 51, 0.08);
        }

        h1 {
            margin-top: 0;
        }

        code {
            background: #eef2f8;
            border-radius: 4px;
            padding: 2px 6px;
        }

        .ok {
            color: #0f7b45;
        }

        .fail {
            color: #b42318;
        }

        @media (prefers-color-scheme: dark) {
            body {
                background: #101624;
                color: #eef2f8;
            }

            main {
                background: #172033;
                border-color: #2c3850;
            }

            code {
                background: #243047;
            }
        }
    </style>
</head>
<body>
<main>
    <h1>LV94 PHP Test</h1>

    <p>Apache serves PHP from <code>/var/www/html</code>, mapped from local <code>src</code>.</p>

    <h2>PHP</h2>
    <ul>
        <li>PHP version: <strong><?= e($phpVersion) ?></strong></li>
        <li>mysqli extension: <strong class="<?= $mysqliLoaded ? 'ok' : 'fail' ?>"><?= $mysqliLoaded ? 'Loaded' : 'Missing' ?></strong></li>
        <li>pdo_mysql extension: <strong class="<?= $pdoMysqlLoaded ? 'ok' : 'fail' ?>"><?= $pdoMysqlLoaded ? 'Loaded' : 'Missing' ?></strong></li>
    </ul>

    <h2>Database</h2>
    <ul>
        <li>Host: <code><?= e($dbHost) ?>:<?= e($dbPort) ?></code></li>
        <li>Database: <code><?= e($dbName) ?></code></li>
        <li>Status: <strong class="<?= $dbError === null ? 'ok' : 'fail' ?>"><?= e($dbStatus) ?></strong></li>
    </ul>

    <?php if ($dbError === null): ?>
        <p>MySQL version: <strong><?= e($dbInfo['mysql_version'] ?? 'unknown') ?></strong></p>
        <p>Server time: <strong><?= e($dbInfo['server_time'] ?? 'unknown') ?></strong></p>
    <?php else: ?>
        <p class="fail">Connection error: <?= e($dbError) ?></p>
    <?php endif; ?>
</main>
</body>
</html>
