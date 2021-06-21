FROM node:16-alpine AS build-stage
COPY . .
RUN yarn
RUN yarn build

FROM node:16-alpine
WORKDIR /app
COPY --from=build-stage dist ./dist
COPY --from=build-stage package.json .
COPY --from=build-stage migrations ./migrations
RUN yarn --prod
CMD yarn migration:run && yarn start