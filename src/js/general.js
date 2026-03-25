// General JS
// ----------
// Shared JS across the site

module.exports = {
  typeLine: function(el, text, speed = 20) {
    el.textContent = "";
    let i = 0;

    function type() {
      if (i < text.length) {
        el.textContent += text[i];
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  }
}
