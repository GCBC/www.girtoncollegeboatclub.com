#!/bin/bash

# Script to create a backup of file or directory within dropbox+ system
# https://github.com/CalumJEadie/dropbox-plus
# Author: Calum J. Eadie

BACKUP_DIR="/opt/dropbox+/home/Dropbox/IT/backups/new"

usage() {
    echo "Usage: db+backup.sh <file/directory>"
}

# Check whether file supplied
if [ $# -eq 0 ]; then
    usage
    exit
fi

# Copy to dropbox+
echo "> Copying to dropbox+..."
date_string=`date +%Y-%m-%d-%H-%M-%S`
source_basename=`basename $1`
dest="$BACKUP_DIR/$date_string-$source_basename"
cp -v -R $1 $dest

# Set correct permissions
# Set up mode so that file owner can read and write and any user in the dropbox+ group can do.
# Add execute permission to directories to allow file listing.
echo "> Setting correct permissions..."
chmod -v -R u+rw,g+rw,o= $dest
find $dest -type d -exec chmod -v u+x,g+x {} \;
