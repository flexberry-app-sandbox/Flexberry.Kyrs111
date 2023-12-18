import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПокупки: DS.attr('date'),
  причинаВозв: DS.attr('string'),
  покупатель: DS.belongsTo('i-i-s-kyrs11-покупатель', { inverse: null, async: false }),
  покупИлиВозвБ: DS.belongsTo('i-i-s-kyrs11-покуп-или-возв-б', { inverse: 'возвратБилета', async: false })
});

export let ValidationRules = {
  датаПокупки: {
    descriptionKey: 'models.i-i-s-kyrs11-возврат-билета.validations.датаПокупки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  причинаВозв: {
    descriptionKey: 'models.i-i-s-kyrs11-возврат-билета.validations.причинаВозв.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  покупатель: {
    descriptionKey: 'models.i-i-s-kyrs11-возврат-билета.validations.покупатель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  покупИлиВозвБ: {
    descriptionKey: 'models.i-i-s-kyrs11-возврат-билета.validations.покупИлиВозвБ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВозвратБилетаE', 'i-i-s-kyrs11-возврат-билета', {
    покупатель: belongsTo('i-i-s-kyrs11-покупатель', 'Покупатель', {
      банковскийСчет: attr('Банковский счет', { index: 1 })
    }, { index: 0, displayMemberPath: 'фИО' }),
    датаПокупки: attr('Дата покупки', { index: 2 }),
    причинаВозв: attr('Причина Возврата', { index: 3 })
  });
};
