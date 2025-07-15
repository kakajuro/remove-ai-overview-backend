
# Remove AI Overview backend

Remove AI Overview is an open source browser extension which allows you to remove AI Overview sections from Google's search page.

This repo is made up of:
- The website (Astro + React)
- The web analytics service (Umami)
- The reverse proxy (Caddy)

## Where's the extension?

The repo for the actual extension can be found [here](https://github.com/kakajuro/remove-ai-overview)

## Build Locally

Clone the project

```bash
  git clone https://github.com/kakajuro/remove-ai-overview-backend.git my-project
```

Go to the project directory

```bash
  cd my-project
```

### Running the website individually

For the website:

```bash
  cd web
  yarn dev
```


### Running the services together

The services can be ran together using Docker and Docker Compose.

### Development:

```bash
  docker compose -f "docker-compose.dev.yml" up -d
```

This will start up the website container with Caddy as a reverse proxy to it. The site will be available ```test.localhost```.

### Production:

The production build can be ran through the other compose file. This will include the previous services as well as the web analytics.

```bash
  docker compose up -d
```

Also make sure to replace the env.example files with .env files in these file locations:

```bash
caddy/.env
umami/.env

```

### License

This project is licensed under the GPLv3 License - see [LICENSE.md](LICENSE) file for more information
