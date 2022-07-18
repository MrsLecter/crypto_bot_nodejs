## Crypto Bot

### Description
<p> Telegram bot helps to monitor the rate of cryptocurrency.</p>
<p>Works in conjunction with the api [<i>https://github.com/MrsLecter/crypto_api_nodejs_typescript</i>]</p>

### Technology
<ul>
<li>NodeJS</li>
<li>node-telegram-bot-api</li>
<li>MySQL</li>
<li>Heroku</li>
</ul>

### URL on Heroku
<p>https://crypto098-bot.herokuapp.com/</p>

### Available endpoints
<div>
<p><code>/start</code> - return greeting message</p>
<p><code>/help</code> - return greeting message</p>
<p><code>/listRecent</code> - return greeting message returns <code>/[currency] $[price]</code></p>
<p><code>/[currency]</code> - get currency info (menu becomes available (30 min, 1h, 3h, 6h, 12h, 24h) - for which period to derive the average value of the price</p>
<p><code>addToFavourite_[currency]</code> - add to favourite</p>
<p><code>/listFavourite</code> - show favourite currencies</p>
<p><code>/deleteFavourite_[currency]</code> - delete from favourite list</p>
</div>

### How to use

<p><code>npm install</code> - install required packages</p>
<p><code>npm start</code> - run bot</p>
