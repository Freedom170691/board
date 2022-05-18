#!/bin/sh
mkdir projects
cd projects
mkdir my-project
cd my-project
mkdir -p derictory1/subderictory1
mkdir derictory2
mkdir -p derictory3/subderictory2
cd derictory2
touch hello.txt
echo Hello from JS > hello.txt
