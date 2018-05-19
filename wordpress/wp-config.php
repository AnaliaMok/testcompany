<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'testcompany');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'WDyo)L8v=M8+O|v4=0A5?q+TbIM2uh)Ea-KHPl`l{95f}/G y7ebY}]Y;G-#$#?.');
define('SECURE_AUTH_KEY',  'S2}bTQ^q{CDi}MG*_u:xx-pfmFW:4HPCB}Db&rAR:zY9uC+KI)zl-S(fy2=XE)a|');
define('LOGGED_IN_KEY',    '|R7O<zf7!lgF:|)|o +m-g6D|e?~lNru7B|Ixeg0f@|_ P}ZpV&7M-E7/i+hi>~c');
define('NONCE_KEY',        'z|cOLY3t*Xt][+.^{enn%iXyPY@j+p 0mpe?rW$C.^ic@ -*o_it/ahkuEZ=|,2r');
define('AUTH_SALT',        'bf:GY4I$|[1sB|o26sGvF_HPWAO$BJ|#r? )`#+{|^^pGJjhr5]cF=d{?DR!Nj?l');
define('SECURE_AUTH_SALT', '^oesmCe#q1;*B]|L4W[!Sp0-#q*ky)-!0)>uqL6:29:4~^,K;+RUdWn)Al3$s>Cn');
define('LOGGED_IN_SALT',   'ycd_vw#UqwHbkxH2Nhgk|P<C7}M=XD5|^%!`]79<([|/D7*o(wCA{vost*|~uZQ6');
define('NONCE_SALT',       '`kv8_e,Ywh4DCMEQ|sO~T;Tj Y|mq(hY-.CC!5P(?n!.#-d!7dfe|q|;@h@p==<_');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
