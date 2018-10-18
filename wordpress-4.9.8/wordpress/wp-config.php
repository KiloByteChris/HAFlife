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
define('DB_NAME', 'haflife');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

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
define('AUTH_KEY',         'hv#cDhi!9jA@G++rXAUamSR+a,W6po`i)Q{^^u|`.mjr`AopR]S2FmDMu#27Hn?p');
define('SECURE_AUTH_KEY',  '/s&qkmde9iMH|M[nFi)$`]dQo#FU65rCjxdQY<.yPvR_E|z4Cb5zT,)}m?;)Ms]G');
define('LOGGED_IN_KEY',    'GG-ry=[/cmvLv8GM?&o2cJp70PReys/eOefd?`p7J Zn}lx9}<J)w(eJX067SPNn');
define('NONCE_KEY',        '+/^PpX#a~Ad[(m=99}G#ldyp.vb{V 8yjWa2f{_q]WTkA~gS=[]5os4fE{_i3oXf');
define('AUTH_SALT',        'mvX9<w/4,;)y.Va93S|7{9%_nlaxy=dW;a64aA=WJ8eGIz@rp)2c$kJL8Syxl/VI');
define('SECURE_AUTH_SALT', 'AhceS~iqzs.0HZsrV=M]:Big}~s>SUSt)`b[`DODk.Jc+M!PwkuKb4swRW!$_0*0');
define('LOGGED_IN_SALT',   '(}7X;th{wh_/`V<^4iWDo2It0:S,CLxxd[A(v$+wKxekk;uhB<evEk3OFtSm[~`}');
define('NONCE_SALT',       '3#!vDFyBZQESk3!NY`M69~g2@J,paKRrH M4Y)x],LltQRR+(iVA!ex|o@MPK{HM');

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
