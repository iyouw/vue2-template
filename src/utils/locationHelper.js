const REG_LAST_SEGMENT = /\/[^/]+$/;

export function getLocationPath() {
  const origin = window.location.origin;
  const pathname = window.location.pathname.replace(REG_LAST_SEGMENT, "");
  return origin + pathname;
}
