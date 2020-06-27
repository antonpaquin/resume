#! /bin/bash

wkhtmltopdf \
    --margin-bottom 0px \
    --margin-left 0px \
    --margin-right 0px \
    --margin-top 0px \
    --enable-local-file-access \
    --page-height 1169px \
    --page-width 827px \
    --dpi 144 \
    resume.html \
    resume.pdf
