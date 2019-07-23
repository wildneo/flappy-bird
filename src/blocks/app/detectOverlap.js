export default (collider, collidee) => {
  const {
    left: l1, top: t1, right: r1, bottom: b1,
  } = collider;
  const {
    left: l2, top: t2, right: r2, bottom: b2,
  } = collidee;

  return !(b1 < t2 || t1 > b2 || r1 < l2 || l1 > r2);
}
