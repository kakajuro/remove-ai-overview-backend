FROM node:22-alpine AS base
WORKDIR /app
# By copying only the package.json and yarn.lock here, we ensure that the following -deps steps are independent of the source code.
# Therefore, the -deps steps will be skipped if only the source code changes.
COPY package.json yarn.lock ./

FROM base AS deps
RUN yarn install --frozen-lockfile

FROM deps AS build
COPY . .
RUN yarn build

FROM base AS runtime
COPY package.json yarn.lock ./
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000
CMD node .app/dist/server/entry.mjs
