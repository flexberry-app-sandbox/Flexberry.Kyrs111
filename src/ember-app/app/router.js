import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kyrs11-билетная-касса-l');
  this.route('i-i-s-kyrs11-билетная-касса-e',
  { path: 'i-i-s-kyrs11-билетная-касса-e/:id' });
  this.route('i-i-s-kyrs11-билетная-касса-e.new',
  { path: 'i-i-s-kyrs11-билетная-касса-e/new' });
  this.route('i-i-s-kyrs11-обслуживание-l');
  this.route('i-i-s-kyrs11-обслуживание-e',
  { path: 'i-i-s-kyrs11-обслуживание-e/:id' });
  this.route('i-i-s-kyrs11-обслуживание-e.new',
  { path: 'i-i-s-kyrs11-обслуживание-e/new' });
  this.route('i-i-s-kyrs11-оператор-l');
  this.route('i-i-s-kyrs11-оператор-e',
  { path: 'i-i-s-kyrs11-оператор-e/:id' });
  this.route('i-i-s-kyrs11-оператор-e.new',
  { path: 'i-i-s-kyrs11-оператор-e/new' });
  this.route('i-i-s-kyrs11-перевозчик1-l');
  this.route('i-i-s-kyrs11-перевозчик1-e',
  { path: 'i-i-s-kyrs11-перевозчик1-e/:id' });
  this.route('i-i-s-kyrs11-перевозчик1-e.new',
  { path: 'i-i-s-kyrs11-перевозчик1-e/new' });
  this.route('i-i-s-kyrs11-покуп-или-возв-б-l');
  this.route('i-i-s-kyrs11-покуп-или-возв-б-e',
  { path: 'i-i-s-kyrs11-покуп-или-возв-б-e/:id' });
  this.route('i-i-s-kyrs11-покуп-или-возв-б-e.new',
  { path: 'i-i-s-kyrs11-покуп-или-возв-б-e/new' });
  this.route('i-i-s-kyrs11-покупатель-l');
  this.route('i-i-s-kyrs11-покупатель-e',
  { path: 'i-i-s-kyrs11-покупатель-e/:id' });
  this.route('i-i-s-kyrs11-покупатель-e.new',
  { path: 'i-i-s-kyrs11-покупатель-e/new' });
});

export default Router;
