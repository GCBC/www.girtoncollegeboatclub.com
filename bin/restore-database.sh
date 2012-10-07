#!/bin/sh

# Restores database from backup in git.
#
# Calum J. Eadie

if [ $# -ne 2 ]
then
    echo "Usage: `basename $0` <user>"
    exit 1
fi

USER=$1
DB=gcbc
GIT=$(dirname $0)/..

mysql -v --show-warnings -u $USER -p < $GIT/database/$DB.sql
