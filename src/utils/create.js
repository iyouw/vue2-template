function genBem(name, mods) {
  if (!mods) {
    return "";
  }

  if (typeof mods === "string") {
    return ` ${name}--${mods}`;
  }

  if (Array.isArray(mods)) {
    return mods.reduce((ret, item) => ret + genBem(name, item), "");
  }

  return Object.keys(mods).reduce(
    (ret, key) => ret + (mods[key] ? genBem(name, key) : ""),
    ""
  );
}

function createBEM(name) {
  return (el, mods) => {
    if (el && typeof el !== "string") {
      mods = el;
      el = "";
    }

    el = el ? `${name}__${el}` : name;

    return `${el}${genBem(el, mods)}`;
  };
}

export function createNamespace(name, prefix = "h") {
  const prefixName = `${prefix}-${name}`;
  return [createBEM(prefixName), prefixName];
}
