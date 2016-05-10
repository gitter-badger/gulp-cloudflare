/**
 * @author    Maik Ellerbrock
 * @link      https://github.com/frapweb/gulp-cloudflare
 * @version   1.0.0
 * @license   MIT
 */

'use strict';

var
  gulp = require( 'gulp' ),
  exec = require( 'child_process' ).exec;

// Cloudflare Settings
var
  conf_cloudflare = {
    options: {
      token : '',
      email : '',
      domain: '',
      action: 'fpurge_ts'
    }
  };

var conf_exec = {
  // Turn on Development Mode
  DevOn: "curl https://www.cloudflare.com/api_json.html \
                  -d 'a=devmode' \
                  -d 'tkn=" + conf_cloudflare.options.token + "' \
                  -d 'email=" + conf_cloudflare.options.email + "'\
                  -d 'z=" + conf_cloudflare.options.domain + "'\
                  -d 'v=1'",

  // Turn off Development Mode
  DevOff: "curl https://www.cloudflare.com/api_json.html \
                  -d 'a=devmode' \
                  -d 'tkn=" + conf_cloudflare.options.token + "' \
                  -d 'email=" + conf_cloudflare.options.email + "'\
                  -d 'z=" + conf_cloudflare.options.domain + "'\
                  -d 'v=0'",

  // Purge Cache for Domain
  PurgeCache: "curl https://www.cloudflare.com/api_json.html \
                  -d 'a=fpurge_ts' \
                  -d 'tkn=" + conf_cloudflare.options.token + "' \
                  -d 'email=" + conf_cloudflare.options.email + "'\
                  -d 'z=" + conf_cloudflare.options.domain + "'\
                  -d 'v=1'"
};

gulp.task( 'cloudflare-purge-cache', function ( cb ) {
  exec( conf_exec.PurgeCache, function ( err, stdout, stderr ) {
    console.log( stdout );
    console.log( stderr );
    cb( err );
  } )
} );

gulp.task( 'cloudflare-devmode-on', function ( cb ) {
  exec( conf_exec.DevOn, function ( err, stdout, stderr ) {
    console.log( stdout );
    console.log( stderr );
    cb( err );
  } )
} );

gulp.task( 'cloudflare-devmode-off', function ( cb ) {
  exec( conf_exec.DevOff, function ( err, stdout, stderr ) {
    console.log( stdout );
    console.log( stderr );
    cb( err );
  } )
} );
