# CSV Persons Loader

## Developing

To facilitate the development and local execution of the backend application, it was encapsulated in a Docker container to executes both, the application and the database, making easier the connection between them.

> Running the application with `docker-compose`:

It is necessary to have the Docker and docker-compose installed to execute.

1. Navigate to the `backend` folder
    ```
    $> cd backend
    ```
2. Building the Docker image
    ```
    $> npm run compose:build
    ```
3. Running the application
    ```
    $> npm run compose:dev:up
    ```
    After done running the application, execute the clean up command
        ```
        $> npm run compose:dev:down
        ```

If necessary, use `sudo` within the commands.
```
$> sudo npm run ...
```

## Testing

1. Navigate to the `backend` folder
    ```
    $> cd backend
    ```
2. Building the Docker image
    ```
    $> npm run compose:build
    ```
3. Running the tests
    ```
    $> npm run compose:test:up
    ```
    After done running the tests, execute the clean up command
        ```
        $> npm run compose:test:down
        ```

If necessary, use `sudo` within the commands.
```
$> sudo npm run ...
```
