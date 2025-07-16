FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy everything
COPY . .

# Install all dependencies (dev + prod for testing)
RUN yarn install --frozen-lockfile

# Build the Astro app
RUN yarn build

# Set environment variables
ENV HOST=0.0.0.0
ENV PORT=3000

# Expose port
EXPOSE 3000

# Run the built server
CMD ["node", "dist/server/entry.mjs"]
