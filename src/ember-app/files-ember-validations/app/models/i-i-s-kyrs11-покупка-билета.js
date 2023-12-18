import {
  defineNamespace,
  defineProjections,
  Model as ПокупкаБилетаMixin
} from '../mixins/regenerated/models/i-i-s-kyrs11-покупка-билета';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПокупкаБилетаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
