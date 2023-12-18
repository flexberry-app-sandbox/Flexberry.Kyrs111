import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяПроверки: DS.attr('string'),
  готовКРаботе: DS.attr('boolean'),
  датаПроверки: DS.attr('date'),
  чековаяЛента: DS.attr('boolean'),
  билетнаяКасса: DS.belongsTo('i-i-s-kyrs11-билетная-касса', { inverse: null, async: false }),
  оператор: DS.belongsTo('i-i-s-kyrs11-оператор', { inverse: null, async: false })
});

export let ValidationRules = {
  времяПроверки: {
    descriptionKey: 'models.i-i-s-kyrs11-обслуживание.validations.времяПроверки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  готовКРаботе: {
    descriptionKey: 'models.i-i-s-kyrs11-обслуживание.validations.готовКРаботе.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаПроверки: {
    descriptionKey: 'models.i-i-s-kyrs11-обслуживание.validations.датаПроверки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  чековаяЛента: {
    descriptionKey: 'models.i-i-s-kyrs11-обслуживание.validations.чековаяЛента.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  билетнаяКасса: {
    descriptionKey: 'models.i-i-s-kyrs11-обслуживание.validations.билетнаяКасса.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оператор: {
    descriptionKey: 'models.i-i-s-kyrs11-обслуживание.validations.оператор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОбслуживаниеE', 'i-i-s-kyrs11-обслуживание', {
    оператор: belongsTo('i-i-s-kyrs11-оператор', 'Оператор', {
      фИО: attr('ФИО', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' }),
    билетнаяКасса: belongsTo('i-i-s-kyrs11-билетная-касса', 'Билетная касса', {
      наименование: attr('Наименование', { index: 3, hidden: true }),
      адрес: attr('Адрес', { index: 4 })
    }, { index: 2, displayMemberPath: 'наименование' }),
    датаПроверки: attr('Дата проверки', { index: 5 }),
    времяПроверки: attr('Время проверки', { index: 6 }),
    чековаяЛента: attr('Чековая лента', { index: 7 }),
    готовКРаботе: attr('Готов к работе', { index: 8 })
  });

  modelClass.defineProjection('ОбслуживаниеL', 'i-i-s-kyrs11-обслуживание', {
    чековаяЛента: attr('Чековая лента', { index: 0 }),
    датаПроверки: attr('Дата проверки', { index: 1 }),
    времяПроверки: attr('Время проверки', { index: 2 }),
    готовКРаботе: attr('Готов к работе', { index: 3 }),
    билетнаяКасса: belongsTo('i-i-s-kyrs11-билетная-касса', 'Наименование', {
      наименование: attr('Наименование', { index: 4 }),
      адрес: attr('Адрес', { index: 6 })
    }, { index: -1, hidden: true }),
    оператор: belongsTo('i-i-s-kyrs11-оператор', 'ФИО', {
      фИО: attr('ФИО', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
