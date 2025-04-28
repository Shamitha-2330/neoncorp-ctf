FROM httpd:2.4

# Copy web content to Apache document root
COPY ./html/ /usr/local/apache2/htdocs/

# Enable .htaccess, mod_rewrite, and mod_ratelimit
RUN sed -i '/LoadModule rewrite_module/s/^#//g' /usr/local/apache2/conf/httpd.conf
RUN sed -i '/LoadModule ratelimit_module/s/^#//g' /usr/local/apache2/conf/httpd.conf
RUN sed -i 's/AllowOverride None/AllowOverride All/g' /usr/local/apache2/conf/httpd.conf

# Ensure directory indexing is disabled
RUN echo "Options -Indexes" >> /usr/local/apache2/conf/httpd.conf

# Expose port 80
EXPOSE 80
