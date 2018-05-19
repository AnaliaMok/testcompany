# TestCompany

A testing/sandbox project to experiment with Headless Wordpress and React. This project's structure and foundation is based off Postlight's [WordPress + React Starter Kit](https://github.com/postlight/headless-wp-starter) with many adjustments for my own needs and environment restrictions (Windows 10 Home). This project was not created through the provided scripts due to lack of Windows support.

## Dependencies
* [Yarn](https://yarnpkg.com/en/)
* [Node 7](https://nodejs.org/en/)
* [Wordpress CLI](https://wp-cli.org/)
* MySQL 5.6^
* PHP 5.6^

When the installation process completes successfully:

*   The WordPress REST API is available at [http://localhost:8080](http://localhost:8080)
*   The WordPress GraphQL API is available at [http://localhost:8080/graphql](http://localhost:8080/graphql)
*   The WordPress admin is at [http://localhost:8080/wp-admin/](http://localhost:8080/wp-admin/)

## Tailored Wordpress Installation
To Be Written

To start wordpress backend (after installation), run the following commands:

```zsh
> cd wordpress && yarn install && yarn start
```

or 

```zsh
> cd wordpress && wp start
```
### Plugins
* [ACF to WP API](https://wordpress.org/plugins/acf-to-wp-api/)
* [WP-REST-API V2 Menus](https://wordpress.org/plugins/wp-rest-api-v2-menus/)
* [ACF](https://wordpress.org/plugins/advanced-custom-fields/) Standard edition
* [GraphQL API for WordPress](https://wpgraphql.com/)

## React Frontend

**Prerequisite:** Node 7 is required.

To spin up the frontend client app, run the following commands:

```zsh
> cd frontend && yarn install && yarn run dev
```

The Next.js app will be running on [http://localhost:3000](http://localhost:3000).

## Docker

I have no intentions of using or learning Docker at this time so Docker related yarn commands were removed. However, the starter files were kept for the future.

