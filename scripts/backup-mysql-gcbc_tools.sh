#!/bin/bash

# Script to backup mysql gcbc_tools database using dropbox+ system.

echo "> Creating archive..."
mysqldump -v -u gcbc_tools -p.... --databases gcbc_tools > /tmp/mysql-gcbc_tools.sql
tar cvzf /tmp/mysql-gcbc_tools.sql.tar.gz /tmp/mysql-gcbc_tools.sql

echo "> Backing up archive using dropbox+ system..."
/opt/scripts/db+_backup.sh /tmp/mysql-gcbc_tools.sql.tar.gz

echo "> Removing temporary files...".
rm -v /tmp/mysql-gcbc_tools.sql /tmp/mysql-gcbc_tools.sql.tar.gz
