# syntax=docker.io/docker/dockerfile:1

############################
# Base image with pnpm
############################
FROM node:24-alpine AS base

# Recommended for some native deps (e.g., sharp) on Alpine
RUN apk add --no-cache libc6-compat

# Enable pnpm via corepack and put it on PATH
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PNPM_HOME}:${PATH}"
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app


############################
# Dependencies (install)
############################
FROM base AS deps

# Copy root manifests first for better caching
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./

# Copy workspace package manifests for better caching
# Add/adjust globs below to match your repo layout (apps/, packages/, services/, etc.)
# These COPY lines are safe even if some paths don't exist, thanks to the wildcard.
#COPY apps/*/package.json apps/*/package.json
#COPY packages/*/package.json packages/*/package.json
#COPY services/*/package.json services/*/package.json

# Install all workspace deps (no source yet → maximizes cache hits)
# Use a cached pnpm store to speed up rebuilds
RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile


############################
# Build
############################
FROM base AS builder
WORKDIR /app

# Reuse node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Now bring in the rest of the source
COPY . .

# If you use Next.js telemetry and want it off at build time, uncomment:
ENV NEXT_TELEMETRY_DISABLED=1

# Build your app (Next.js example with "output: standalone")
RUN pnpm run build


############################
# Runtime (minimal)
############################
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# If you want to disable Next telemetry at runtime:
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Static assets
COPY --from=builder /app/public ./public

# Copy the Next.js standalone output (includes server.js and needed node_modules)
# Docs: https://nextjs.org/docs/pages/api-reference/config/next-config-js/output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# server.js is created by Next.js when using "output: 'standalone'"
CMD ["node", "server.js"]
