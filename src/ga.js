window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID', {
  linker: {
    domains: ['nicewebapp.com'],
  },
});

gtag('config', 'UA-161926743-1', {
  page_title: 'upload.nicewebapp.com',
  page_location: 'https://upload.nicewebapp.com',
  page_path: '/',
});
