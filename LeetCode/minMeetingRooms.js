const minMeetingRooms = (intervals) => {
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  const rooms = [0];
  let curRoom = 0;
  for (let i = 1; i < intervals.length; i++) {
    const startCur = sortedIntervals[i][0];
    if (startCur < sortedIntervals[i - 1][1]) {
      const roomsCt = rooms.length;
      let newRoom = true;
      for (let j = 0; j < roomsCt; j++) {
        if (startCur >= sortedIntervals[rooms[j]][1]) {
          rooms[j] = i;
          newRoom = false;
          curRoom = j;
          break;
        }
      }
      if (newRoom) {
        rooms.push(i);
        curRoom = roomsCt;
      }
    } else {
      rooms[curRoom] = i;
    }
  }
  return rooms.length;
};
console.log(
  minMeetingRooms([
    [1, 5],
    [8, 9],
    [8, 9],
  ])
);
