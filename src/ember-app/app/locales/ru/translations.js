import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKyrs11БилетнаяКассаLForm from './forms/i-i-s-kyrs11-билетная-касса-l';
import IISKyrs11ОбслуживаниеLForm from './forms/i-i-s-kyrs11-обслуживание-l';
import IISKyrs11ОператорLForm from './forms/i-i-s-kyrs11-оператор-l';
import IISKyrs11Перевозчик1LForm from './forms/i-i-s-kyrs11-перевозчик1-l';
import IISKyrs11ПокупИлиВозвБLForm from './forms/i-i-s-kyrs11-покуп-или-возв-б-l';
import IISKyrs11ПокупательLForm from './forms/i-i-s-kyrs11-покупатель-l';
import IISKyrs11БилетнаяКассаEForm from './forms/i-i-s-kyrs11-билетная-касса-e';
import IISKyrs11ОбслуживаниеEForm from './forms/i-i-s-kyrs11-обслуживание-e';
import IISKyrs11ОператорEForm from './forms/i-i-s-kyrs11-оператор-e';
import IISKyrs11Перевозчик1EForm from './forms/i-i-s-kyrs11-перевозчик1-e';
import IISKyrs11ПокупИлиВозвБEForm from './forms/i-i-s-kyrs11-покуп-или-возв-б-e';
import IISKyrs11ПокупательEForm from './forms/i-i-s-kyrs11-покупатель-e';
import IISKyrs11БилетнаяКассаModel from './models/i-i-s-kyrs11-билетная-касса';
import IISKyrs11ВозвратБилетаModel from './models/i-i-s-kyrs11-возврат-билета';
import IISKyrs11ОбслуживаниеModel from './models/i-i-s-kyrs11-обслуживание';
import IISKyrs11ОператорModel from './models/i-i-s-kyrs11-оператор';
import IISKyrs11Перевозчик1Model from './models/i-i-s-kyrs11-перевозчик1';
import IISKyrs11ПокупИлиВозвБModel from './models/i-i-s-kyrs11-покуп-или-возв-б';
import IISKyrs11ПокупательModel from './models/i-i-s-kyrs11-покупатель';
import IISKyrs11ПокупкаБилетаModel from './models/i-i-s-kyrs11-покупка-билета';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kyrs11-билетная-касса': IISKyrs11БилетнаяКассаModel,
    'i-i-s-kyrs11-возврат-билета': IISKyrs11ВозвратБилетаModel,
    'i-i-s-kyrs11-обслуживание': IISKyrs11ОбслуживаниеModel,
    'i-i-s-kyrs11-оператор': IISKyrs11ОператорModel,
    'i-i-s-kyrs11-перевозчик1': IISKyrs11Перевозчик1Model,
    'i-i-s-kyrs11-покуп-или-возв-б': IISKyrs11ПокупИлиВозвБModel,
    'i-i-s-kyrs11-покупатель': IISKyrs11ПокупательModel,
    'i-i-s-kyrs11-покупка-билета': IISKyrs11ПокупкаБилетаModel
  },

  'application-name': 'Kyrs11',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kyrs11',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kyrs11',
          title: 'Kyrs11'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        билеты: {
          caption: 'Билеты',
          title: 'Билеты',
          'i-i-s-kyrs11-перевозчик1-l': {
            caption: 'Перевозчик',
            title: ''
          },
          'i-i-s-kyrs11-покупатель-l': {
            caption: 'Покупатель',
            title: ''
          },
          'i-i-s-kyrs11-билетная-касса-l': {
            caption: 'Билетная касса',
            title: 'Билетная касса'
          },
          'i-i-s-kyrs11-покуп-или-возв-б-l': {
            caption: 'Покупка или возврат билета',
            title: ''
          }
        },
        обслуживание: {
          caption: 'Обслуживание',
          title: 'Обслуживание',
          'i-i-s-kyrs11-билетная-касса-l': {
            caption: 'Билетная касса',
            title: 'Билетная касса'
          },
          'i-i-s-kyrs11-обслуживание-l': {
            caption: 'Обслуживание',
            title: 'Обслуживание'
          },
          'i-i-s-kyrs11-оператор-l': {
            caption: 'Оператор',
            title: 'Оператор'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kyrs11-билетная-касса-l': IISKyrs11БилетнаяКассаLForm,
    'i-i-s-kyrs11-обслуживание-l': IISKyrs11ОбслуживаниеLForm,
    'i-i-s-kyrs11-оператор-l': IISKyrs11ОператорLForm,
    'i-i-s-kyrs11-перевозчик1-l': IISKyrs11Перевозчик1LForm,
    'i-i-s-kyrs11-покуп-или-возв-б-l': IISKyrs11ПокупИлиВозвБLForm,
    'i-i-s-kyrs11-покупатель-l': IISKyrs11ПокупательLForm,
    'i-i-s-kyrs11-билетная-касса-e': IISKyrs11БилетнаяКассаEForm,
    'i-i-s-kyrs11-обслуживание-e': IISKyrs11ОбслуживаниеEForm,
    'i-i-s-kyrs11-оператор-e': IISKyrs11ОператорEForm,
    'i-i-s-kyrs11-перевозчик1-e': IISKyrs11Перевозчик1EForm,
    'i-i-s-kyrs11-покуп-или-возв-б-e': IISKyrs11ПокупИлиВозвБEForm,
    'i-i-s-kyrs11-покупатель-e': IISKyrs11ПокупательEForm
  },

});

export default translations;
