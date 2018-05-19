# Test Company

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
_Starting with the original Postlight Wordpress and React Starter kit_
1. Create a local mysql db with collation `utf8_general_ci`
2. At the root of the directory, run `wp core download --version=4.9.5 --locale=en_US --force`
3. Either using the wp-cli or by direct file editing of `wp-config`, apply database settings (i.e. dbname, dbusername, dbpassword, etc)
4. Then run 
```
wp core install
  --url=localhost:8080 --title="Your Website Title" --admin_user="username" --admin_password="password" --admin_email="your_email_or_fake_email" --skip-email
```
5. __Make sure to copy the generated password so that you can login to the admin__
  * _At this point, you should have a valid wordpress installation and can login in the wp-admin_
6. Delete the default wordpress themes, and default plugins through either the WP-CLI (while in the `wordpress` directory), direct file manipulation, or by logging into the admin. _At this point, feel free to rename the `postlist-headless-wp` theme to whatever you want_
7. Change permalinks to use custom permalink structure
  * Run the following `wp rewrite structure "/%year%/%monthnum%/%day%/%postname%/"`
  * __OR__ Go to your admin dashboard. Then go to Settings > Permalinks. Select `custom structure` and enter "/%year%/%monthnum%/%day%/%postname%/". Remember to save changes.
8. At this point, you're ready to move on to setting up the react frontend

To start wordpress backend (after installation), run the following commands:

```zsh
> cd wordpress && yarn install && yarn start
```

or use the the WP-CLI's `wp server`

```zsh
> cd wordpress && wp start
```
### Included Plugins
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

