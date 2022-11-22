import { defineConfig } from 'astro/config';
import webmanifest from 'astro-webmanifest';
import prefetch from "@astrojs/prefetch";
// https://astro.build/config

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [webmanifest({
    name: '4th NCAFA Trilogi',
    short_name: '4th NCAFA',
    description: 'National Conference on Accounting & Fraud Auditing (NCAFA) merupakan sebuah  konferensi tingkat   nasional di bidang akuntansi dan audit yang memiliki rangkaian kegiatan Call for Paper dan Seminar.',
    theme_color: "#47A2C6",
    background_color: '#ffffff',
    start_url: '/',
    display: 'standalone',
    icons: [{
      "src": "../icon/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }, {
      "src": "../icon/icon-256x256.png",
      "sizes": "256x256",
      "type": "image/png"
    }, {
      "src": "../icon/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    }, {
      "src": "../icon/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
    // add any other icons
    ]
  }), prefetch({
    selector: "a[href^='/index']",
    selector: "a[href^='/committee']",
    selector: "a[href^='/contact']",
    selector: "a[href^='/mitrajurnal']",
    selector: "a[href^='/paper']",
    selector: "a[href^='/partner']",
    selector: "a[href^='/seminar']"
  }), react()]
});