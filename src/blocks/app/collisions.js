
export const detectCollision = (player, pipes, floor) => {
  if (player.distanceTo(floor).dy + player.height > 0) {
    return true;
  }
  if (pipes.distanceTo(player).length) {
    for (let i = 0; i < pipes.distanceTo(player).length; i++) {
      if (pipes.distanceTo(player)[i].dx == 0) player.addScore();
      if (pipes.distanceTo(player)[i].dx - player.width < 0 
        && pipes.distanceTo(player)[i].dx + pipes.width > 0
        && pipes.distanceTo(player)[i].dy - player.height < 0 
        || pipes.distanceTo(player)[i].dx - player.width < 0
        && pipes.distanceTo(player)[i].dx + pipes.width > 0
        && pipes.distanceTo(player)[i].dy - pipes.gap > 0) {
          return true;
      }
    }
  }
}
