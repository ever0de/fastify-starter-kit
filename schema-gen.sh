#!/bin/zsh

rm -rf prisma/schema.prisma; cat prisma/env.prisma prisma/models/**/*.prisma > prisma/schema.prisma && npx prisma generate
