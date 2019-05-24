
export const detectCollision = (player, pipes, floor) => {
  if (player.distanceTo(floor).dy + player.height > 0) {
    return true;
  }
  if (pipes.distanceTo(player).length) {
    if (pipes.distanceTo(player)[0].dx - player.width < 0 
      && pipes.distanceTo(player)[0].dx + pipes.width > 0
      && pipes.distanceTo(player)[0].dy - player.height < 0 
      || pipes.distanceTo(player)[0].dx - player.width < 0
      && pipes.distanceTo(player)[0].dx + pipes.width > 0
      && pipes.distanceTo(player)[0].dy - pipes.gap > 0) {
        return true;
    }
  }
}
