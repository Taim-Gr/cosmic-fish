if (!self.define) {
  let e,
    i = {};
  const a = (a, s) => (
    (a = new URL(a + ".js", s).href),
    i[a] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = i), document.head.appendChild(e);
        } else (e = a), importScripts(a), i();
      }).then(() => {
        let e = i[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, n) => {
    const o =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[o]) return;
    let r = {};
    const c = (e) => a(e, o),
      d = { module: { uri: o }, exports: r, require: c };
    i[o] = Promise.all(s.map((e) => d[e] || c(e))).then((e) => (n(...e), r));
  };
}
define(["./workbox-fe792590"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/dynamic-css-manifest.json",
          revision: "d751713988987e9331980363e24189ce",
        },
        {
          url: "/_next/static/chunks/341.df3329d77a5faa19.js",
          revision: "df3329d77a5faa19",
        },
        {
          url: "/_next/static/chunks/472.a3826d29d6854395.js",
          revision: "a3826d29d6854395",
        },
        {
          url: "/_next/static/chunks/4bd1b696-647ed93fb4e77618.js",
          revision: "oTost3Gg6ssvLfecQ3b41",
        },
        {
          url: "/_next/static/chunks/63-dc7fe6fd6777165e.js",
          revision: "oTost3Gg6ssvLfecQ3b41",
        },
        {
          url: "/_next/static/chunks/653-cb24025773b8e05b.js",
          revision: "oTost3Gg6ssvLfecQ3b41",
        },
        {
          url: "/_next/static/chunks/684-cee429f36b129f0b.js",
          revision: "oTost3Gg6ssvLfecQ3b41",
        },
        {
          url: "/_next/static/chunks/874-75e48b7437da3a73.js",
          revision: "oTost3Gg6ssvLfecQ3b41",
        },
        {
          url: "/_next/static/chunks/8e1d74a4-64a83b29767b8d70.js",
          revision: "oTost3Gg6ssvLfecQ3b41",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-e6362b9be0aab909.js",
          revision: "oTost3Gg6ssvLfecQ3b41",
        },
        {
          url: "/_next/static/chunks/app/layout-c3a63dc2d81650f9.js",
          revision: "oTost3Gg6ssvLfecQ3b41",
        },
        {
          url: "/_next/static/chunks/app/leaderboard/page-5b8d22710af199cf.js",
          revision: "oTost3Gg6ssvLfecQ3b41",
        },
        {
          url: "/_next/static/chunks/app/loading-496e9b6d322436a8.js",
          revision: "oTost3Gg6ssvLfecQ3b41",
        },
        {
          url: "/_next/static/chunks/app/market/page-a267aab7cbff1ba5.js",
          revision: "oTost3Gg6ssvLfecQ3b41",
        },
        {
          url: "/_next/static/chunks/app/page-ac92a9a5b31b762c.js",
          revision: "oTost3Gg6ssvLfecQ3b41",
        },
        {
          url: "/_next/static/chunks/framework-f593a28cde54158e.js",
          revision: "oTost3Gg6ssvLfecQ3b41",
        },
        {
          url: "/_next/static/chunks/main-69baeca2f31426d2.js",
          revision: "oTost3Gg6ssvLfecQ3b41",
        },
        {
          url: "/_next/static/chunks/main-app-8ebe035baee68488.js",
          revision: "oTost3Gg6ssvLfecQ3b41",
        },
        {
          url: "/_next/static/chunks/pages/_app-92f2aae776f86b9c.js",
          revision: "oTost3Gg6ssvLfecQ3b41",
        },
        {
          url: "/_next/static/chunks/pages/_error-71d2b6a7b832d02a.js",
          revision: "oTost3Gg6ssvLfecQ3b41",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-f855fdb14b37f732.js",
          revision: "oTost3Gg6ssvLfecQ3b41",
        },
        {
          url: "/_next/static/oTost3Gg6ssvLfecQ3b41/_buildManifest.js",
          revision: "b4c33310e1ff7eac06c3a4a6101b47fb",
        },
        {
          url: "/_next/static/oTost3Gg6ssvLfecQ3b41/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/android/android-launchericon-144-144.png",
          revision: "b75a9cc1f28e0f29199e60b78094122d",
        },
        {
          url: "/android/android-launchericon-192-192.png",
          revision: "1ba77501e69e836ba4ce10c06fd685ba",
        },
        {
          url: "/android/android-launchericon-48-48.png",
          revision: "da339cd137ca9c5fdb2b17e84f695171",
        },
        {
          url: "/android/android-launchericon-512-512.png",
          revision: "9d3d0856c628267611d33e4a3b5f8791",
        },
        {
          url: "/android/android-launchericon-72-72.png",
          revision: "4f6376d57f51366251173c89af28cd81",
        },
        {
          url: "/android/android-launchericon-96-96.png",
          revision: "54aebe37e07d8fd6cdfd59ba57982d45",
        },
        { url: "/file.svg", revision: "d09f95206c3fa0bb9bd9fefabfd0ea71" },
        {
          url: "/fonts/AirStrike/airstrike.ttf",
          revision: "7525099bebdd632e7f6b79a961bb1b53",
        },
        {
          url: "/fonts/Press_Start_2P/OFL.txt",
          revision: "99b3402e66b4c5d957e43ab30654670d",
        },
        {
          url: "/fonts/Press_Start_2P/PressStart2P-Regular.ttf",
          revision: "f98cd910425bf727bd54ce767a9b6884",
        },
        { url: "/globe.svg", revision: "2aaafa6a49b6563925fe440891e32717" },
        { url: "/icons.json", revision: "5dbbc3fe59816e65ba28e355a58ea45c" },
        {
          url: "/icons/android-144x144.png",
          revision: "bc64e755149e956bdb9ce2c60dbf43ec",
        },
        {
          url: "/icons/android-192x192.png",
          revision: "2907be3d278305b44e81f66b43be641c",
        },
        {
          url: "/icons/android-36x36.png",
          revision: "b1ea377a5b08fc36f9719e7087042775",
        },
        {
          url: "/icons/android-48x48.png",
          revision: "c4166c2dc0de2e678607ae8b0fc3d03a",
        },
        {
          url: "/icons/android-72x72.png",
          revision: "0f576563d1aef95ac242a5715c56e1ca",
        },
        {
          url: "/icons/android-96x96.png",
          revision: "4eaf65886f753051b2e860c4f54cb760",
        },
        {
          url: "/icons/android-chrome-192x192.png",
          revision: "2907be3d278305b44e81f66b43be641c",
        },
        {
          url: "/icons/android-chrome-512x512.png",
          revision: "68fd4e2ed655126d1fbfb7f8c682f7aa",
        },
        {
          url: "/icons/android-chrome-maskable-192x192.png",
          revision: "2907be3d278305b44e81f66b43be641c",
        },
        {
          url: "/icons/android-chrome-maskable-512x512.png",
          revision: "68fd4e2ed655126d1fbfb7f8c682f7aa",
        },
        {
          url: "/images/001-01.svg",
          revision: "2d5d5a701e3a4df20388c3c40d90faa5",
        },
        {
          url: "/images/002-01.svg",
          revision: "5d898e17f1789d55edfed4cf83d03c57",
        },
        {
          url: "/images/anchor.svg",
          revision: "1bf69d8ea820bf8c9fde612fa31e0ec1",
        },
        {
          url: "/images/boat.svg",
          revision: "119fb5f8f6a780bbf6c073bdc973ef1a",
        },
        {
          url: "/images/coin_11280638.svg",
          revision: "3379a4af7979ac09ffb3380b84a029f6",
        },
        {
          url: "/images/crown_6941697.svg",
          revision: "1deb749e622028e6d3252daa863c252f",
        },
        {
          url: "/images/rocket.svg",
          revision: "6cd8a488aac90c6936db4c35811cfd6d",
        },
        {
          url: "/images/star-badge_11173836.svg",
          revision: "a17c9ef8dcc2846214e3018226bf4ee8",
        },
        {
          url: "/images/up-arrow_11019649.svg",
          revision: "484af52b60dcf3568e907987b3f260a0",
        },
        { url: "/ios/100.png", revision: "5618702ea61653cb14f17e1d7e3ee41a" },
        { url: "/ios/1024.png", revision: "3fbf321375defff7366f0f14452edb0f" },
        { url: "/ios/114.png", revision: "9b8b5a88be89179047aabae39809b0e9" },
        { url: "/ios/120.png", revision: "df1345f0d5f43b3b11b501d1b7cbdcac" },
        { url: "/ios/128.png", revision: "d46551e05e377c3c51de1e24064f2317" },
        { url: "/ios/144.png", revision: "b75a9cc1f28e0f29199e60b78094122d" },
        { url: "/ios/152.png", revision: "d7d8798228d063ccf19033e94a24dfce" },
        { url: "/ios/16.png", revision: "690ecc15947b3894e22b464a74714fbf" },
        { url: "/ios/167.png", revision: "33536184a71e3e0f35f6539d158c78f0" },
        { url: "/ios/180.png", revision: "76739bdf6b390f276263780ff9d3c8a6" },
        { url: "/ios/192.png", revision: "1ba77501e69e836ba4ce10c06fd685ba" },
        { url: "/ios/20.png", revision: "d6f5382a647c5f3633325b31e21658e7" },
        { url: "/ios/256.png", revision: "7da58c3021de6e41e12522999095ab16" },
        { url: "/ios/29.png", revision: "b55ea0cfa3eec59e5c7e5b75746cac3e" },
        { url: "/ios/32.png", revision: "fef1a06e941495531ebe1b704da26c37" },
        { url: "/ios/40.png", revision: "1477a3d03a1994a46cd490483bf58723" },
        { url: "/ios/50.png", revision: "c21fee5d958e63b3a0c27b8b1bb68719" },
        { url: "/ios/512.png", revision: "9d3d0856c628267611d33e4a3b5f8791" },
        { url: "/ios/57.png", revision: "ef7e0a5f29fe0e632e7e3f463090a444" },
        { url: "/ios/58.png", revision: "234248ff9eb96c50e864cc2d175ec5cd" },
        { url: "/ios/60.png", revision: "16aace743287de45697a56b3db9c789a" },
        { url: "/ios/64.png", revision: "8c84688c924ee9689b5e47750a1a9f51" },
        { url: "/ios/72.png", revision: "4f6376d57f51366251173c89af28cd81" },
        { url: "/ios/76.png", revision: "07c7463e6f3b238cc112afbd7ced7c66" },
        { url: "/ios/80.png", revision: "cbeb3fd3c4b603e027f09a9932a175b8" },
        { url: "/ios/87.png", revision: "2385db990a314b106dc6e64988f83974" },
        { url: "/manifest.json", revision: "f7d5d29ab0c3b1da00715bd031928f43" },
        {
          url: "/videos/earthmoving.webm",
          revision: "a96c03877a0aa88de175df21aaa4a15c",
        },
        { url: "/window.svg", revision: "a2760511c65806022ad20adf74370ff3" },
        {
          url: "/windows11/LargeTile.scale-100.png",
          revision: "435e0af40f0189c747077533ead5d94d",
        },
        {
          url: "/windows11/LargeTile.scale-125.png",
          revision: "3b0b282dc5110990a9e0893c33cc5c56",
        },
        {
          url: "/windows11/LargeTile.scale-150.png",
          revision: "a5ecb94d5d7fcc2de055cdabe68e1212",
        },
        {
          url: "/windows11/LargeTile.scale-200.png",
          revision: "f37132d787400d67980b4895912bdeb0",
        },
        {
          url: "/windows11/LargeTile.scale-400.png",
          revision: "44f3120f5096c10278e998320f9d1111",
        },
        {
          url: "/windows11/SmallTile.scale-100.png",
          revision: "0c4f9534defc085c7852b9c66f260083",
        },
        {
          url: "/windows11/SmallTile.scale-125.png",
          revision: "7c7e592f19826e4267ed6609d1ee0fa5",
        },
        {
          url: "/windows11/SmallTile.scale-150.png",
          revision: "22a0e697cc42c7722af25c586075f0af",
        },
        {
          url: "/windows11/SmallTile.scale-200.png",
          revision: "545a694090994d3f6ed71621d3604755",
        },
        {
          url: "/windows11/SmallTile.scale-400.png",
          revision: "c6384ec0b1977f47debd8fe6cc2c5ad7",
        },
        {
          url: "/windows11/SplashScreen.scale-100.png",
          revision: "cb78c8569a3294d94c3fdac6e1fcde3e",
        },
        {
          url: "/windows11/SplashScreen.scale-125.png",
          revision: "541c7be07c2a360cd9fed964e61903ba",
        },
        {
          url: "/windows11/SplashScreen.scale-150.png",
          revision: "fa8e35ca204b3dbc190f34469d5a9fd7",
        },
        {
          url: "/windows11/SplashScreen.scale-200.png",
          revision: "6e34a0239b19c49b03cd2afb1f377aa8",
        },
        {
          url: "/windows11/SplashScreen.scale-400.png",
          revision: "0cfdb6164849413b22bad1b28d797a02",
        },
        {
          url: "/windows11/Square150x150Logo.scale-100.png",
          revision: "0313b284f222a84b5147dd7f913e1524",
        },
        {
          url: "/windows11/Square150x150Logo.scale-125.png",
          revision: "8a6246860b8c2762cd079eaa78d80c7c",
        },
        {
          url: "/windows11/Square150x150Logo.scale-150.png",
          revision: "8bdb573e04d0bcb0eb6f650dcb8979aa",
        },
        {
          url: "/windows11/Square150x150Logo.scale-200.png",
          revision: "0bb47d724e191539a30e153eb90c70ff",
        },
        {
          url: "/windows11/Square150x150Logo.scale-400.png",
          revision: "65967bac2c59d5abc2df3599445fe705",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
          revision: "71da9c8cdee593da228713a58dc29630",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
          revision: "d44c475658922635db49a29b5a32495d",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
          revision: "27f026c049d53d9be21e71f660f699b0",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
          revision: "13ca33b343163b93b034289cfd652034",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
          revision: "867a626786c0e7c610d325bef6fa4dc1",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
          revision: "33fff0370ed8f91092c01e1e96fd7f56",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
          revision: "32480c35c3ba9b98d8acec6d098c9b38",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
          revision: "f6cf9802f7362d5654616e2efbeca7a1",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
          revision: "cb890e6751c63cde15148a4225d8a292",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
          revision: "2b90b4ebd54edffd77f06c82f96ea191",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
          revision: "a4fb7c00099bf169ff2d7e5e02d02904",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
          revision: "76b01ba4605261afec7a4bed06c08bf0",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
          revision: "a4c3820333071e088f1fde865892ee60",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
          revision: "29337031b67460335073322cbd9f3a1a",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
          revision: "6e3bebbae85c851be033835eb993dd78",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
          revision: "71da9c8cdee593da228713a58dc29630",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
          revision: "d44c475658922635db49a29b5a32495d",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
          revision: "27f026c049d53d9be21e71f660f699b0",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
          revision: "13ca33b343163b93b034289cfd652034",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
          revision: "867a626786c0e7c610d325bef6fa4dc1",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
          revision: "33fff0370ed8f91092c01e1e96fd7f56",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
          revision: "32480c35c3ba9b98d8acec6d098c9b38",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
          revision: "f6cf9802f7362d5654616e2efbeca7a1",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
          revision: "cb890e6751c63cde15148a4225d8a292",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
          revision: "2b90b4ebd54edffd77f06c82f96ea191",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
          revision: "a4fb7c00099bf169ff2d7e5e02d02904",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
          revision: "76b01ba4605261afec7a4bed06c08bf0",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
          revision: "a4c3820333071e088f1fde865892ee60",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
          revision: "29337031b67460335073322cbd9f3a1a",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
          revision: "6e3bebbae85c851be033835eb993dd78",
        },
        {
          url: "/windows11/Square44x44Logo.scale-100.png",
          revision: "cb890e6751c63cde15148a4225d8a292",
        },
        {
          url: "/windows11/Square44x44Logo.scale-125.png",
          revision: "c3adccbefdc28f0361f2a48f5021c59f",
        },
        {
          url: "/windows11/Square44x44Logo.scale-150.png",
          revision: "43d52147aec0d02cd872d7d5d68ece64",
        },
        {
          url: "/windows11/Square44x44Logo.scale-200.png",
          revision: "d1081bcb46c01580d7382d3165ee1ccb",
        },
        {
          url: "/windows11/Square44x44Logo.scale-400.png",
          revision: "501fa09bd85fbad75f0408aaeebde615",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-16.png",
          revision: "71da9c8cdee593da228713a58dc29630",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-20.png",
          revision: "d44c475658922635db49a29b5a32495d",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-24.png",
          revision: "27f026c049d53d9be21e71f660f699b0",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-256.png",
          revision: "13ca33b343163b93b034289cfd652034",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-30.png",
          revision: "867a626786c0e7c610d325bef6fa4dc1",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-32.png",
          revision: "33fff0370ed8f91092c01e1e96fd7f56",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-36.png",
          revision: "32480c35c3ba9b98d8acec6d098c9b38",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-40.png",
          revision: "f6cf9802f7362d5654616e2efbeca7a1",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-44.png",
          revision: "cb890e6751c63cde15148a4225d8a292",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-48.png",
          revision: "2b90b4ebd54edffd77f06c82f96ea191",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-60.png",
          revision: "a4fb7c00099bf169ff2d7e5e02d02904",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-64.png",
          revision: "76b01ba4605261afec7a4bed06c08bf0",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-72.png",
          revision: "a4c3820333071e088f1fde865892ee60",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-80.png",
          revision: "29337031b67460335073322cbd9f3a1a",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-96.png",
          revision: "6e3bebbae85c851be033835eb993dd78",
        },
        {
          url: "/windows11/StoreLogo.scale-100.png",
          revision: "c21fee5d958e63b3a0c27b8b1bb68719",
        },
        {
          url: "/windows11/StoreLogo.scale-125.png",
          revision: "f55f49f5551dfedfdf2cd39ff6fd848e",
        },
        {
          url: "/windows11/StoreLogo.scale-150.png",
          revision: "c947f5cdea244a3ccc8fc5128e7e3888",
        },
        {
          url: "/windows11/StoreLogo.scale-200.png",
          revision: "5618702ea61653cb14f17e1d7e3ee41a",
        },
        {
          url: "/windows11/StoreLogo.scale-400.png",
          revision: "60265b51c401fac77f9e96e5e9d002ee",
        },
        {
          url: "/windows11/Wide310x150Logo.scale-100.png",
          revision: "b8033186ef2c99276393fad049b1525e",
        },
        {
          url: "/windows11/Wide310x150Logo.scale-125.png",
          revision: "9eb816dfbb6b59d777515bd38fab01c6",
        },
        {
          url: "/windows11/Wide310x150Logo.scale-150.png",
          revision: "5653689fc21a2c4a89adcf5cb3fc0c7e",
        },
        {
          url: "/windows11/Wide310x150Logo.scale-200.png",
          revision: "cb78c8569a3294d94c3fdac6e1fcde3e",
        },
        {
          url: "/windows11/Wide310x150Logo.scale-400.png",
          revision: "6e34a0239b19c49b03cd2afb1f377aa8",
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: i,
              event: a,
              state: s,
            }) =>
              i && "opaqueredirect" === i.type
                ? new Response(i.body, {
                    status: 200,
                    statusText: "OK",
                    headers: i.headers,
                  })
                : i,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/.*$/i,
      new e.StaleWhileRevalidate({
        cacheName: "others",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "others",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    );
});
