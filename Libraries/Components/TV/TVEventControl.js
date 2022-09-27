/**
 * Methods to enable and disable listening for Apple TV remote events (menu key, pan gesture)
 *
 * @format
 * @flow
 */

'use strict';

const TVMenuBridge = require('../../BatchedBridge/NativeModules').TVMenuBridge;
const Platform = require('../../Utilities/Platform');

module.exports = {
  enableTVMenuKey: () => {
    TVMenuBridge && TVMenuBridge.enableTVMenuKey();
  },
  disableTVMenuKey: () => {
    TVMenuBridge && TVMenuBridge.disableTVMenuKey();
  },
  enableTVPanGesture: () => {
    TVMenuBridge && TVMenuBridge.enableTVPanGesture();
  },
  disableTVPanGesture: () => {
    TVMenuBridge && TVMenuBridge.disableTVPanGesture();
  },
  /**
   * *(AppleTV only)* When set to true, TV remote events won't be propagated to any
   * `UIGestureRecognizer` attached to the root view hierarchy. Defaults to `true`.
   *
   * @platform ios
   */
  set cancelsTouchesInView(cancelsTouchesInView: boolean) {
    if (Platform.OS === 'ios') {
      TVMenuBridge && TVMenuBridge.cancelsTouchesInView(cancelsTouchesInView);
    }
  },
};
