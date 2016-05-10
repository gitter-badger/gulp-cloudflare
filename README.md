![gulp-cloudflare](https://static.frapsoft.com/markdown/github/gulp-cloudflare.jpg?v2)  

# gulp-cloudflare

[![Join the chat at https://gitter.im/frapsoft/gulp-cloudflare](https://badges.gitter.im/frapsoft/gulp-cloudflare.svg)](https://gitter.im/frapsoft/gulp-cloudflare?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

gulp task for cloudflare caching and development mode.  

### Tasks

* clear cloudflare cache
* turn development mode on / off

### Configuration

setup your cloudflare settings:  

```
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
```

### Usage

`gulp cloudflare-purge-cache` clear cache  
`gulp cloudflare-devmode-on` turn development mode on  
`gulp cloudflare-devmode-off` turn development mode off  

[![frapsoft on twitter](https://static.frapsoft.com/markdown/github/twitter.png)](https://twitter.com/frapsoft)

## License

Copyright (c) 2016 Maik Ellerbrock  
MIT: <https://opensource.org/licenses/mit-license.php>