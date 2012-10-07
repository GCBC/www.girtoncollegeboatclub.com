#! /bin/bash

# $GCBC is a global variable set in .bashrc, .zshrc or somewhere similiar

echo "> Mounting gcbc:/home/cje46 at /media/gcbc-cje46..."
sshfs -o idmap=user $GCBC:/home/cje46 /media/gcbc-cje46
echo "> Mounting gcbc:/var/www at /media/gcbc-www..."
sshfs -o idmap=user $GCBC:/var/www /media/gcbc-www
echo "> Starting SSH session ($GCBC), launching byobu..."
ssh -t $GCBC byobu
echo "> ...SSH session closed"
echo "> Unmounting gcbc:/home/cje46 at /media/gcbc-cje46..."
fusermount -u /media/gcbc-cje46
echo "> Unmounting gcbc:/var/www at /media/gcbc-www..."
fusermount -u /media/gcbc-www
read var
