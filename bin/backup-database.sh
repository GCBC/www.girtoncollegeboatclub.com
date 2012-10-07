#!/bin/sh

# Performs backup of database to git.
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

mysqldump -v -u $USER -p --databases $DB > $GIT/database/$DB.sql
