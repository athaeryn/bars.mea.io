#!/bin/bash

gulp && rsync -a --progress build/ serverus:www/bars
