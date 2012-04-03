#!/bin/bash

# Script to backup mysql gcbc database using dropbox+ system.

echo "> Creating archive..."
mysqldump -v -u gcbc -p.... --databases gcbc > /tmp/mysql-gcbc.sql
tar cvzf /tmp/mysql-gcbc.sql.tar.gz /tmp/mysql-gcbc.sql

echo "> Backing up archive using dropbox+ system..."
/opt/scripts/db+_backup.sh /tmp/mysql-gcbc.sql.tar.gz

echo "> Removing temporary files...".
rm -v /tmp/mysql-gcbc.sql /tmp/mysql-gcbc.sql.tar.gz
