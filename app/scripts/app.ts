/// <reference path="../../reference.ts" />
'use strict';

//add services, directives, controllers, filters, etc. in this module
//avoid adding module dependencies for this module
angular
  .module('ngMaterialStyleAppInternal', []);

//add module dependencies & config and run blocks in this module
//load only the internal module in tests and mock any module dependency
//the only exception to load this module in tests in to test the config & run blocks
angular
  .module('ngMaterialStyleApp', ['ngMaterialStyleAppInternal', 'ngMaterialStyleTranslations', 'ngMaterialStylePreload', 'wixAngular', 'wix.common.bi', 'ngMaterial'])
  .config(($mdThemingProvider) => {
    $mdThemingProvider.extendPalette('blue', {
      // '50': 'ffebee',
      // '100': 'ffcdd2',
      // '200': 'ef9a9a',
      '300': '2b81cb',
      '400': '3a95d1',
      '500': '3899ec',
      '600': '4eb7f5',
      '700': 'c1e4fe',
      '800': 'daeffe',
      '900': 'eaf7ff',
      // 'A100': 'ff8a80',
      // 'A200': 'ff5252',
      // 'A400': 'ff1744',
      // 'A700': 'd50000',
    });
    $mdThemingProvider.extendPalette('purple', {
      // '50': 'ffebee',
      // '100': 'ffcdd2',
      // '200': 'ef9a9a',
      '300': 'cd68ed',
      '400': 'aa4dc8',
      '500': '8e21b1',
      // '600': '4eb7f5',
      // '700': 'c1e4fe',
      // '800': 'daeffe',
      // '900': 'eaf7ff',
      // 'A100': 'ff8a80',
      // 'A200': 'ff5252',
      // 'A400': 'ff1744',
      // 'A700': 'd50000',
    });
    $mdThemingProvider.extendPalette('red', {
      // '50': 'ffebee',
      // '100': 'ffcdd2',
      // '200': 'ef9a9a',
      '300': 'cd68ed',
      '400': 'd8504c',
      '500': 'ee5951',
      '600': 'ff6666',
      // '700': 'c1e4fe',
      // '800': 'daeffe',
      // '900': 'eaf7ff',
      // 'A100': 'ff8a80',
      // 'A200': 'ff5252',
      // 'A400': 'ff1744',
      // 'A700': 'd50000',
    });
    $mdThemingProvider.theme('default')
      .primaryPalette('blue', {
        'default': '400',
        'hue-1': '300',
        'hue-2': '600',
        'hue-3': '900'
      })
      .accentPalette('purple', {
        'default': '400',
        'hue-1': '300',
        'hue-2': '500',
        'hue-3': '500'
      })
      .warnPalette('red', {
        'default': '400',
        'hue-1': '300',
        'hue-2': '500',
        'hue-3': '500'
      });

    return;
  });