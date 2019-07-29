import Storage from './Storage';

export default class Layer extends Storage {
  render(context) {
    this.getValues().forEach(object => object.render(context));
  }
}
