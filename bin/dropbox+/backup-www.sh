#!/bin/bash

# Script to backup /var/www using dropbox+ system.
# Author: Calum J. Eadie

# p - preserve permissions
echo "> Creating archive..."
tar cpvzf /tmp/www.tar.gz /var/www

echo "> Backing up archive using dropbox+ system..."
/opt/scripts/db+_backup.sh /tmp/www.tar.gz

echo "> Removing temporary files..."
rm -v /tmp/www.tar.gz
