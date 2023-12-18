import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  банковскийСчет: DS.attr('string'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-kyrs11-покупатель.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  банковскийСчет: {
    descriptionKey: 'models.i-i-s-kyrs11-покупатель.validations.банковскийСчет.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-kyrs11-покупатель.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПокупательE', 'i-i-s-kyrs11-покупатель', {
    iD: attr('ID', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    банковскийСчет: attr('Банковский счет', { index: 2 })
  });

  modelClass.defineProjection('ПокупательL', 'i-i-s-kyrs11-покупатель', {
    iD: attr('ID', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    банковскийСчет: attr('Банковский счет', { index: 2 })
  });
};
