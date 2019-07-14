export default (context, object) => {
  if (!context || !object) {
    return;
  }
  // TODO: LERP.
  object.render(context);
};
