#!/bin/sh -e
cp /tmp/$DOMAIN_NAME.conf /etc/nginx/conf.d/$DOMAIN_NAME.conf
cp /tmp/$SUB_DOMAIN_NAME.conf /etc/nginx/conf.d/$SUB_DOMAIN_NAME.conf

sed -i s/DOMAIN_NAME/$DOMAIN_NAME/g /etc/nginx/conf.d/$DOMAIN_NAME.conf
sed -i s/SUB_DOMAIN_NAME/$SUB_DOMAIN_NAME/g /etc/nginx/conf.d/$SUB_DOMAIN_NAME.conf

exec nginx -g "daemon off;"
