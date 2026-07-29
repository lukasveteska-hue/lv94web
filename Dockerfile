FROM php:8.4-apache

RUN set -eux; \
    docker-php-ext-install mysqli pdo_mysql; \
    a2enmod rewrite; \
    { \
        echo '<Directory /var/www/html>'; \
        echo '    AllowOverride All'; \
        echo '</Directory>'; \
    } > /etc/apache2/conf-available/lv94.conf; \
    a2enconf lv94

WORKDIR /var/www/html

COPY src/ /var/www/html/
