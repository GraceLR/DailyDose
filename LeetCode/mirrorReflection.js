const mirrorReflection = (p, q) => {
  const posFunc = (pos, border, direction, lORm, tanTop, newTanTop) => {
    // modify this function
    if (lORm === "more") {
      if (border === "r") {
        if (direction === "u") {
          return [0, pos[1] + q];
        } else {
          return [[0, pos[1] - q]];
        }
      } else if (border === "l") {
        if (direction === "u") {
          return [q, pos[1] + q];
        } else {
          return [[q, pos[1] - q]];
        }
      }
    } else {
      if (border === "r") {
        if (direction === "u") {
          return [p - ((p - pos[1]) * tanTop) / newTanTop, p];
        } else {
          return [p - (pos[1] * tanTop) / newTanTop, 0];
        }
      } else if (border === "l") {
        if (direction === "u") {
          return [((p - pos[1]) * tanTop) / newTanTop, p];
        } else {
          return [(pos[1] * tanTop) / newTanTop, 0];
        }
      } else if (border === "t") {
        if (direction === "l") {
          return [0, p - (pos[0] * tanTop) / newTanTop];
        } else {
          return [p, p - ((p - pos[0]) * tanTop) / newTanTop];
        }
      } else {
        if (direction === "l") {
          return [0, (pos[0] * tanTop) / newTanTop];
        } else {
          return [p, ((p - pos[0]) * tanTop) / newTanTop];
        }
      }
    }
  };
  const ref = {
    r: {
      u: {
        less: { direction: "l", border: "t" },
        more: { direction: "u", border: "l" },
      },
      d: {
        less: { direction: "l", border: "b" },
        more: { direction: "d", border: "l" },
      },
    },
    t: {
      l: {
        less: { direction: "d", border: "l" },
        // more: { direction: "l", border: "b"},
      },
      r: {
        less: { direction: "d", border: "r" },
        // more: { direction: "r", border: "b"},
      },
    },
    l: {
      u: {
        less: { direction: "r", border: "t" },
        more: { direction: "u", border: "r" },
      },
      d: {
        less: { direction: "r", border: "b" },
        more: { direction: "d", border: "r" },
      },
    },
    b: {
      l: {
        less: { direction: "u", border: "l" },
        // more: { direction: "l", border: "t" },
      },
      r: {
        less: { direction: "u", border: "r" },
        // more: { direction: "r", border: "t" },
      },
    },
  };
  const rec = (bor, dir, pos, tanTop) => {
    let newTanTop = tanTop === p ? q : p;
    let newLen;
    if (bor === "r" || bor === "l") {
      newLen = (len * tanTop) / newTanTop;
    } else {
      newLen = (len * tanTop) / newTanTop;
    }
    if (newLen === p) {
      if (bor === "r" && dir === "u") {
        return 2;
      }
      if ((bor === "l" && dir === "u") || (bor === "b" && dir === "r")) {
        return 1;
      }
      if ((bor === "l" && dir === "d") || (bor === "t" && dir === "r")) {
        return 0;
      }
    }
    let newBor;
    let newDir;
    let newPos;
    if (newLen < p) {
      newLen = p - newLen;
      newBor = ref[bor][dir][less]["border"];
      newDir = ref[bor][dir][less]["direction"];
      newPos = posFunc(pos, bor, dir, "less", tanTop, newTanTop);
    } else {
      newTanTop = tanTop;
      newLen = newBor = ref[bor][dir][more]["border"];
      newDir = ref[bor][dir][more]["direction"];
      newPos = posFunc(pos, bor, dir, "more", tanTop, newTanTop);
    }
    return rec(newBor, newDir, newPos, newTanTop);
  };
  return rec("r", "u", [p, q], p);
};
