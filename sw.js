const staticCacheName = "site-static";

const assets = [
	"/",
	"/index.html",
	"/manifest.json",
	"/css/bootstrap.css",
	"/css/font-awesome.min.css",
	"/css/style.css",
	"/js/jquery-3.2.1.min.js",
	"/js/popper.js",
	"/js/bootstrap.min.js",
	"/js/app.js",
	"/js/theme.js",
	"/vendors/isotope/imagesloaded.pkgd.min.js",
	"/vendors/isotope/isotope-min.js",
	"https://fonts.googleapis.com/css?family=Roboto:400,500|Rubik:500,700",
	"http://localhost:5500/fonts/fontawesome-webfont.woff2?v=4.5.0",
	"https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7Eyjmmd8WA.woff2",
	"https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7F6iGmd8WA.woff2",
	"https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4.woff2",
	"https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2",
	"/img/skills/aws.svg",
	"/img/skills/html5.svg",
	"/img/skills/lets-encrypt.svg",
	"/img/skills/postgresql.svg",
	"/img/skills/webpack.svg",
	"/img/skills/bash.svg",
	"/img/skills/java.svg",
	"/img/skills/mongodb.svg",
	"/img/skills/react.svg",
	"/img/skills/css3.svg",
	"/img/skills/jquery.svg",
	"/img/skills/nginx.svg",
	"/img/skills/sass.svg",
	"/img/skills/digitalocean.svg",
	"/img/skills/js.svg",
	"/img/skills/nodejs.svg",
	"/img/skills/surge.svg",
	"/img/skills/docker.svg",
	"/img/skills/kubernetes.svg",
	"/img/skills/oauth.svg",
	"/img/skills/vue.svg",
	"/img/services/s1.png",
	"/img/services/s2.png",
	"/img/services/s3.png",
	"/img/services/s4.png",
	"/img/banner/home-right.png",
	"/img/about-us.png",
	"/img/body-bg.png",
	"/img/icons/favicon.ico",
];

self.addEventListener("install", (e) => {
	console.log("Installed service worker");
	e.waitUntil(
		caches
			.open(staticCacheName)
			.then((cache) => {
				console.log("Caching resources");
				cache.addAll(assets);
			})
			.catch(console.log)
	);
});

self.addEventListener("activate", (e) => {
	console.log("Installed service activate");
});

self.addEventListener("fetch", (e) => {
	e.respondWith(
		caches.match(e.request).then((cachesRes) => {
			return cachesRes || fetch(e.request);
		})
	);
});
