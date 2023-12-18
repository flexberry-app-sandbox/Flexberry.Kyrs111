import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      билетнаяКасса: { serialize: 'odata-id', deserialize: 'records' },
      перевозчик1: { serialize: 'odata-id', deserialize: 'records' },
      покупкаБилета: { serialize: false, deserialize: 'records' },
      возвратБилета: { serialize: false, deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
