#!/bin/bash

set -ex

svg=$1

sed -i -e 's/fill="none"/fill="transparent"/g' $svg
