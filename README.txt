ACCRUE - INSTALLABLE APP PACKAGE
================================

Chrome only installs apps that come from a web address (https://...).
A file opened from your phone's storage cannot be installed.
Put this folder online once (free), then install it from Chrome.

FASTEST WAY (Netlify Drop, about 2 minutes)
1. On a computer, unzip accrue-app.zip. You get a folder called "accrue-app".
2. Open https://app.netlify.com/drop and drag the "accrue-app" folder onto the page.
   (Create a free account when asked, or the site is deleted after an hour.)
3. Netlify gives you a link like https://something.netlify.app
4. On your phone, open that link in Chrome.
5. Tap "Install" when Chrome offers it, or tap the menu (three dots) > "Install app".
6. Open Accrue from your home screen. It opens fullscreen, like any app.

UPDATING TO A NEW VERSION
Drag the new "accrue-app" folder onto your existing site's Deploys page on Netlify
(Sites > your site > Deploys). Keep the same web address: your data is stored on
your phone under that address, so it stays. A brand-new Netlify Drop gives a new
address and an empty app. Then open the installed app with internet, close it,
and open it again. Export a backup first to be extra safe.

Moving your progress: the installed app has its own storage. In the old copy,
go to You > Backup & restore > Export backup. In the installed app, use Import backup.

The full user manual (Accrue-User-Manual.md) has more options, including GitHub Pages.

Files in this folder
- index.html               the app
- manifest.webmanifest     app name, icons and fullscreen mode
- sw.js                    lets the app open without internet after the first visit
- icon-*.png               app icons
