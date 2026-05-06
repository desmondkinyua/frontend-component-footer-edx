var _excluded = ["intl"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import messages from './Footer.messages';
var GooglePlayStoreButton = function GooglePlayStoreButton(_ref) {
  var intl = _ref.intl,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: "https://play.google.com/store/apps/details?id=org.edx.mobile",
    rel: "noopener noreferrer",
    target: "_blank"
  }, props), /*#__PURE__*/React.createElement("img", {
    className: "max-height-39",
    alt: intl.formatMessage(messages['footer.mobileApp.google']),
    src: "https://prod-edxapp.edx-cdn.org/static/images/app/google_play_badge_45.6ea466e328da.png"
  }));
};
GooglePlayStoreButton.propTypes = {
  intl: intlShape.isRequired
};
export default injectIntl(GooglePlayStoreButton);
//# sourceMappingURL=GooglePlayStoreButton.js.map