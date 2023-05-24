<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'kids' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'NL)C.nWHS(pR;XSJ4,%ARVya4m7r7iu=9Xlayc&)spVjzAXD}YtV-!G<Clb!F%*s' );
define( 'SECURE_AUTH_KEY',  '9yqrpm6O1v>waB&!g.Htmn(Ot4&[UF$A_UZULM,ivo0%;~C}8SG25?.h9;V!T!ya' );
define( 'LOGGED_IN_KEY',    'bXF%*0X8j}[hmQn<b`c%R^>Wkbbs|M)&?@JP:kWcjT287x~%q@u*[6I.V)Q&Ypu(' );
define( 'NONCE_KEY',        'y0[S5E`W88Sg3IYv!k,0:)Ut_M0<hQo7DD8/*AR`GY|r6M4[QCw46NB[uLN4mAA4' );
define( 'AUTH_SALT',        'Yt&ot|^GU#+.Ul8QF)lKv:OH<lc:D7OJ~[wQb}*gDoDam1mc~3uFHc8d23OeXG#6' );
define( 'SECURE_AUTH_SALT', 'a]nm.n_~Kj*B1yvl[#@KAq;[jGTxR?~IMd)xKM~UaYB{yft##O>@}*x<zb:+fL1-' );
define( 'LOGGED_IN_SALT',   'Qb}?*72Pq/R1+mCf)w|]r Z>oH3F{S(v.W)vydK^)P_Rq#wvl^8QH~v(%!./M;&7' );
define( 'NONCE_SALT',       'AQkiJS32K_k<!X5Qbu3Ax/#~>:#,l:mEf^D{giIUzj9pSs#VfWg[n)fpNYi>6e{&' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
