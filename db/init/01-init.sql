CREATE DATABASE IF NOT EXISTS lv94
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE lv94;

CREATE TABLE IF NOT EXISTS app_healthcheck (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    message VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE=InnoDB;

INSERT INTO app_healthcheck (message)
SELECT 'Database initialization OK'
WHERE NOT EXISTS (
    SELECT 1
    FROM app_healthcheck
    WHERE message = 'Database initialization OK'
);
