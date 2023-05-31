FROM php:7.2.10-apache

RUN apt-get update && apt-get install -y \
    mysql-client libmagickwand-dev git zip unzip supervisor lame --no-install-recommends \
    && pecl install imagick \
    && docker-php-ext-enable imagick \
    && docker-php-ext-install pdo_mysql mbstring xml json tokenizer zip bcmath

WORKDIR /var/www

RUN curl --silent --show-error https://getcomposer.org/installer | php
RUN mv /var/www/composer.phar /usr/local/bin/composer

ADD ./apache.conf /etc/apache2/sites-available
ADD ./abc.ini /usr/local/etc/php/conf.d/abc.ini

RUN a2dissite 000-default.conf
RUN a2ensite apache.conf
RUN a2enmod rewrite

ADD ./ /var/www
RUN composer install
RUN chown -R www-data:www-data .

