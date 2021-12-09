const mix = require("laravel-mix");

mix
    .sass('src/assets/scss/base.scss', 'public/assets/css/')
    .sass('src/assets/scss/start.scss', 'public/assets/css/')
    .sass('src/assets/scss/scan.scss', 'public/assets/css/')
    .sass('src/assets/scss/man1.scss', 'public/assets/css/')
    .sass('src/assets/scss/man4.scss', 'public/assets/css/')
    .sass('src/assets/scss/done.scss', 'public/assets/css/')
    .sass('src/assets/scss/loser.scss', 'public/assets/css/')