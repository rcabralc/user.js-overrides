# Firefox hardening - user.js overrides

This is meant to override
[https://github.com/pyllyukko/user.js](https://github.com/pyllyukko/user.js):

```bash
$ cd /path/to/somewhere
$ git clone git@github.com:pyllyukko/user.js
$ git clone git@github.com:rcabralc/user.js-overrides
$ cd user.js-overrides
$ ln -s ../user.js/user.js default-user.js
$ cat default-user.js overrides.js > user.js
```

Then symlink `user.js-overrides/user.js` in the Firefox profile folder.

This solution was adopted because:

-  It doesn't mess with installation directories as required when using
   `mozilla.cfg`.
-  It doesn't require a fork of the original user.js repo.
