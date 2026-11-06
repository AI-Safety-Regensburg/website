// Assembles the contact address in the browser, so it never appears as plain
// text in the HTML that address-harvesting bots scrape.
(function () {
  var parts = ["contact", "aisafetyregensburg", "org"];
  var address = parts[0] + "@" + parts[1] + "." + parts[2];
  document.querySelectorAll("[data-email]").forEach(function (el) {
    var link = el.tagName === "A" ? el : document.createElement("a");
    link.href = "mailto:" + address;
    if (el.getAttribute("data-email") === "show") link.textContent = address;
    if (link !== el) { link.className = el.className; el.replaceWith(link); }
  });
})();
