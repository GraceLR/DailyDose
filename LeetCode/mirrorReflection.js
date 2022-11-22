const mirrorReflection = (p, q) => {
  const posFunc = (position, border, direction, tanTop) => {
    const newTanTop = tanTop === p ? q : p;
    if (border === "r") {
      if (direction === "u") {
        const len = ((p - position[1]) * tanTop) / newTanTop;
        if (len <= p) {
          return { pos: [p - len, p], bor: "t", dir: "l", tanTop: newTanTop };
        } else {
          return { pos: [0, position[1] + q], bor: "l", dir: "u", tanTop };
        }
      } else {
        const len = (position[1] * tanTop) / newTanTop;
        if (len <= p) {
          return { pos: [p - len, 0], bor: "b", dir: "l", tanTop: newTanTop };
        } else {
          return { pos: [0, position[1] - q], bor: "l", dir: "d", tanTop };
        }
      }
    } else if (border === "l") {
      if (direction === "u") {
        const len = ((p - position[1]) * tanTop) / newTanTop;
        if (len <= p) {
          return { pos: [len, p], bor: "t", dir: "r", tanTop: newTanTop };
        } else {
          return { pos: [p, position[1] + q], bor: "r", dir: "u", tanTop };
        }
      } else {
        const len = (position[1] * tanTop) / newTanTop;
        if (len <= p) {
          return { pos: [len, 0], bor: "b", dir: "r", tanTop: newTanTop };
        } else {
          return { pos: [p, position[1] - q], bor: "r", dir: "d", tanTop };
        }
      }
    } else if (border === "t") {
      if (direction === "l") {
        return {
          pos: [0, p - (position[0] * tanTop) / newTanTop],
          bor: "l",
          dir: "d",
          tanTop: newTanTop,
        };
      } else {
        return {
          pos: [p, p - ((p - position[0]) * tanTop) / newTanTop],
          bor: "r",
          dir: "d",
          tanTop: newTanTop,
        };
      }
    } else {
      if (direction === "l") {
        return {
          pos: [0, (position[0] * tanTop) / newTanTop],
          bor: "l",
          dir: "u",
          tanTop: newTanTop,
        };
      } else {
        return {
          pos: [p, ((p - position[0]) * tanTop) / newTanTop],
          bor: "r",
          dir: "u",
          tanTop: newTanTop,
        };
      }
    }
  };
  const rec = (bor, dir, pos, tanTop) => {
    const res = posFunc(pos, bor, dir, tanTop);
    if (res.pos[0] === 0 && res.pos[1] === p) {
      return 2;
    }
    if (res.pos[0] === p && res.pos[1] === p) {
      return 1;
    }
    if (res.pos[0] === p && res.pos[1] === 0) {
      return 0;
    }
    return rec(res.bor, res.dir, res.pos, res.tanTop);
  };
  return rec("r", "u", [p, q], p);
};
