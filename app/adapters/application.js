import ActiveModelAdapter from 'active-model-adapter';
/* eslint-disable ember/no-mixins */
import FastbootAdapter from 'ember-data-storefront/mixins/fastboot-adapter';
import ENV from "datafruits13/config/environment";

export default class Application extends ActiveModelAdapter.extend(FastbootAdapter) {
  host = ENV.API_HOST;

  buildURL() {
    var base;
    base = super.buildURL.apply(this, arguments); //eslint-disable-line ember/no-ember-super-in-es-classes
    return "" + base + ".json";
  }
}
