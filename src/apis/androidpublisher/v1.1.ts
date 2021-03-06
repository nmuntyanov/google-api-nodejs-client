/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {AxiosPromise} from 'axios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';
import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace androidpublisher_v1_1 {
  export interface Options extends GlobalOptions {
    version: 'v1_1';
  }

  interface StandardParameters {
    /**
     * Data format for the response.
     */
    alt?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API
     * access, quota, and reports. Required unless you provide an OAuth 2.0
     * token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * An opaque string that represents a user for quota purposes. Must not
     * exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * Google Play Developer API
   *
   * Accesses Android application developers&#39; Google Play accounts.
   *
   * @example
   * const {google} = require('googleapis');
   * const androidpublisher = google.androidpublisher('v1.1');
   *
   * @namespace androidpublisher
   * @type {Function}
   * @version v1.1
   * @variation v1.1
   * @param {object=} options Options for Androidpublisher
   */
  export class Androidpublisher {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    inapppurchases: Resource$Inapppurchases;
    purchases: Resource$Purchases;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.inapppurchases = new Resource$Inapppurchases(this);
      this.purchases = new Resource$Purchases(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * An InappPurchase resource indicates the status of a user&#39;s inapp
   * product purchase.
   */
  export interface Schema$InappPurchase {
    /**
     * The consumption state of the inapp product. Possible values are:   - Yet
     * to be consumed  - Consumed
     */
    consumptionState?: number;
    /**
     * A developer-specified string that contains supplemental information about
     * an order.
     */
    developerPayload?: string;
    /**
     * This kind represents an inappPurchase object in the androidpublisher
     * service.
     */
    kind?: string;
    /**
     * The order id associated with the purchase of the inapp product.
     */
    orderId?: string;
    /**
     * The purchase state of the order. Possible values are:   - Purchased  -
     * Canceled
     */
    purchaseState?: number;
    /**
     * The time the product was purchased, in milliseconds since the epoch (Jan
     * 1, 1970).
     */
    purchaseTime?: string;
    /**
     * The type of purchase of the inapp product. This field is only set if this
     * purchase was not made using the standard in-app billing flow. Possible
     * values are:   - Test (i.e. purchased from a license testing account)  -
     * Promo (i.e. purchased using a promo code)
     */
    purchaseType?: number;
  }
  /**
   * A SubscriptionPurchase resource indicates the status of a user&#39;s
   * subscription purchase.
   */
  export interface Schema$SubscriptionPurchase {
    /**
     * Whether the subscription will automatically be renewed when it reaches
     * its current expiry time.
     */
    autoRenewing?: boolean;
    /**
     * Time at which the subscription was granted, in milliseconds since the
     * Epoch.
     */
    initiationTimestampMsec?: string;
    /**
     * This kind represents a subscriptionPurchase object in the
     * androidpublisher service.
     */
    kind?: string;
    /**
     * Time at which the subscription will expire, in milliseconds since the
     * Epoch.
     */
    validUntilTimestampMsec?: string;
  }


  export class Resource$Inapppurchases {
    root: Androidpublisher;
    constructor(root: Androidpublisher) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * androidpublisher.inapppurchases.get
     * @desc Checks the purchase and consumption status of an inapp item.
     * @alias androidpublisher.inapppurchases.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.packageName The package name of the application the inapp product was sold in (for example, 'com.some.thing').
     * @param {string} params.productId The inapp product SKU (for example, 'com.some.thing.inapp1').
     * @param {string} params.token The token provided to the user's device when the inapp product was purchased.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Inapppurchases$Get,
        options?: MethodOptions): AxiosPromise<Schema$InappPurchase>;
    get(params: Params$Resource$Inapppurchases$Get,
        options: MethodOptions|BodyResponseCallback<Schema$InappPurchase>,
        callback: BodyResponseCallback<Schema$InappPurchase>): void;
    get(params: Params$Resource$Inapppurchases$Get,
        callback: BodyResponseCallback<Schema$InappPurchase>): void;
    get(callback: BodyResponseCallback<Schema$InappPurchase>): void;
    get(paramsOrCallback?: Params$Resource$Inapppurchases$Get|
        BodyResponseCallback<Schema$InappPurchase>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$InappPurchase>,
        callback?: BodyResponseCallback<Schema$InappPurchase>):
        void|AxiosPromise<Schema$InappPurchase> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Inapppurchases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Inapppurchases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/androidpublisher/v1.1/applications/{packageName}/inapp/{productId}/purchases/{token}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['packageName', 'productId', 'token'],
        pathParams: ['packageName', 'productId', 'token'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$InappPurchase>(parameters, callback);
      } else {
        return createAPIRequest<Schema$InappPurchase>(parameters);
      }
    }
  }

  export interface Params$Resource$Inapppurchases$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The package name of the application the inapp product was sold in (for
     * example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * The inapp product SKU (for example, 'com.some.thing.inapp1').
     */
    productId?: string;
    /**
     * The token provided to the user's device when the inapp product was
     * purchased.
     */
    token?: string;
  }


  export class Resource$Purchases {
    root: Androidpublisher;
    constructor(root: Androidpublisher) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * androidpublisher.purchases.cancel
     * @desc Cancels a user's subscription purchase. The subscription remains
     * valid until its expiration time.
     * @alias androidpublisher.purchases.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} params.subscriptionId The purchased subscription ID (for example, 'monthly001').
     * @param {string} params.token The token provided to the user's device when the subscription was purchased.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(params?: Params$Resource$Purchases$Cancel, options?: MethodOptions):
        AxiosPromise<void>;
    cancel(
        params: Params$Resource$Purchases$Cancel,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    cancel(
        params: Params$Resource$Purchases$Cancel,
        callback: BodyResponseCallback<void>): void;
    cancel(callback: BodyResponseCallback<void>): void;
    cancel(
        paramsOrCallback?: Params$Resource$Purchases$Cancel|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Purchases$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Purchases$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/androidpublisher/v1.1/applications/{packageName}/subscriptions/{subscriptionId}/purchases/{token}/cancel')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['packageName', 'subscriptionId', 'token'],
        pathParams: ['packageName', 'subscriptionId', 'token'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * androidpublisher.purchases.get
     * @desc Checks whether a user's subscription purchase is valid and returns
     * its expiry time.
     * @alias androidpublisher.purchases.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} params.subscriptionId The purchased subscription ID (for example, 'monthly001').
     * @param {string} params.token The token provided to the user's device when the subscription was purchased.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Purchases$Get,
        options?: MethodOptions): AxiosPromise<Schema$SubscriptionPurchase>;
    get(params: Params$Resource$Purchases$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$SubscriptionPurchase>,
        callback: BodyResponseCallback<Schema$SubscriptionPurchase>): void;
    get(params: Params$Resource$Purchases$Get,
        callback: BodyResponseCallback<Schema$SubscriptionPurchase>): void;
    get(callback: BodyResponseCallback<Schema$SubscriptionPurchase>): void;
    get(paramsOrCallback?: Params$Resource$Purchases$Get|
        BodyResponseCallback<Schema$SubscriptionPurchase>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SubscriptionPurchase>,
        callback?: BodyResponseCallback<Schema$SubscriptionPurchase>):
        void|AxiosPromise<Schema$SubscriptionPurchase> {
      let params = (paramsOrCallback || {}) as Params$Resource$Purchases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Purchases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/androidpublisher/v1.1/applications/{packageName}/subscriptions/{subscriptionId}/purchases/{token}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['packageName', 'subscriptionId', 'token'],
        pathParams: ['packageName', 'subscriptionId', 'token'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SubscriptionPurchase>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SubscriptionPurchase>(parameters);
      }
    }
  }

  export interface Params$Resource$Purchases$Cancel extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The package name of the application for which this subscription was
     * purchased (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * The purchased subscription ID (for example, 'monthly001').
     */
    subscriptionId?: string;
    /**
     * The token provided to the user's device when the subscription was
     * purchased.
     */
    token?: string;
  }
  export interface Params$Resource$Purchases$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The package name of the application for which this subscription was
     * purchased (for example, 'com.some.thing').
     */
    packageName?: string;
    /**
     * The purchased subscription ID (for example, 'monthly001').
     */
    subscriptionId?: string;
    /**
     * The token provided to the user's device when the subscription was
     * purchased.
     */
    token?: string;
  }
}
