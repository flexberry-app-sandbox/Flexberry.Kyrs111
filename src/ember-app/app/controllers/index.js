import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.билеты.caption'),
          title: i18n.t('forms.application.sitemap.билеты.title'),
          children: [{
            link: 'i-i-s-kyrs11-перевозчик1-l',
            caption: i18n.t('forms.application.sitemap.билеты.i-i-s-kyrs11-перевозчик1-l.caption'),
            title: i18n.t('forms.application.sitemap.билеты.i-i-s-kyrs11-перевозчик1-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-kyrs11-покупатель-l',
            caption: i18n.t('forms.application.sitemap.билеты.i-i-s-kyrs11-покупатель-l.caption'),
            title: i18n.t('forms.application.sitemap.билеты.i-i-s-kyrs11-покупатель-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-kyrs11-билетная-касса-l',
            caption: i18n.t('forms.application.sitemap.билеты.i-i-s-kyrs11-билетная-касса-l.caption'),
            title: i18n.t('forms.application.sitemap.билеты.i-i-s-kyrs11-билетная-касса-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-kyrs11-покуп-или-возв-б-l',
            caption: i18n.t('forms.application.sitemap.билеты.i-i-s-kyrs11-покуп-или-возв-б-l.caption'),
            title: i18n.t('forms.application.sitemap.билеты.i-i-s-kyrs11-покуп-или-возв-б-l.title'),
            icon: 'building',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.обслуживание.caption'),
          title: i18n.t('forms.application.sitemap.обслуживание.title'),
          children: [{
            link: 'i-i-s-kyrs11-билетная-касса-l',
            caption: i18n.t('forms.application.sitemap.обслуживание.i-i-s-kyrs11-билетная-касса-l.caption'),
            title: i18n.t('forms.application.sitemap.обслуживание.i-i-s-kyrs11-билетная-касса-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-kyrs11-обслуживание-l',
            caption: i18n.t('forms.application.sitemap.обслуживание.i-i-s-kyrs11-обслуживание-l.caption'),
            title: i18n.t('forms.application.sitemap.обслуживание.i-i-s-kyrs11-обслуживание-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-kyrs11-оператор-l',
            caption: i18n.t('forms.application.sitemap.обслуживание.i-i-s-kyrs11-оператор-l.caption'),
            title: i18n.t('forms.application.sitemap.обслуживание.i-i-s-kyrs11-оператор-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})