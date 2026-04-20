// General JS
// ----------
// Shared JS across the site

module.exports = {
  typeLine: (el, text, speed = 20) => {
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
  },

  getCanvasFingerprint: () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    ctx.textBaseline = "top";
    ctx.font = "14px Arial";
    ctx.fillText("modernity", 2, 2);

    return canvas.toDataURL();
  },

  getWebGLFingerprint: () => {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl");

    if (!gl) return "unsupported";

    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");

    return debugInfo
      ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
      : "unknown";
  }
}
