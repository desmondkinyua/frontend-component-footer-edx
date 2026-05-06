var _excluded = ["intl"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { faFacebookSquare, faSquareXTwitter, faLinkedin, faRedditSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import messages from './Footer.messages';
var SocialIconLinks = function SocialIconLinks(_ref) {
  var intl = _ref.intl,
    props = _objectWithoutProperties(_ref, _excluded);
  var iconLinks = [{
    title: 'Facebook',
    url: 'http://www.facebook.com/EdxOnline',
    icon: /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: faFacebookSquare,
      className: "social-icon",
      size: "2x"
    }),
    screenReaderText: intl.formatMessage(messages['footer.socialLinks.srText.facebook'])
  }, {
    title: 'X (formerly Twitter)',
    url: 'https://twitter.com/edXOnline',
    icon: /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: faSquareXTwitter,
      className: "social-icon",
      size: "2x"
    }),
    screenReaderText: intl.formatMessage(messages['footer.socialLinks.srText.twitter'])
  }, {
    title: 'LinkedIn',
    url: 'http://www.linkedin.com/company/edx',
    icon: /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: faLinkedin,
      className: "social-icon",
      size: "2x"
    }),
    screenReaderText: intl.formatMessage(messages['footer.socialLinks.srText.linkedin'])
  }, {
    title: 'Instagram',
    url: 'https://www.instagram.com/edxonline/',
    icon: /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: faInstagram,
      className: "social-icon",
      size: "2x"
    }),
    screenReaderText: intl.formatMessage(messages['footer.socialLinks.srText.instagram'])
  }, {
    title: 'Reddit',
    url: 'http://www.reddit.com/r/edx',
    icon: /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: faRedditSquare,
      className: "social-icon",
      size: "2x"
    }),
    screenReaderText: intl.formatMessage(messages['footer.socialLinks.srText.reddit'])
  }].map(function (link) {
    return /*#__PURE__*/React.createElement("li", {
      key: link.url
    }, /*#__PURE__*/React.createElement("a", _extends({
      href: link.url,
      title: link.title,
      rel: "noopener noreferrer",
      target: "_blank"
    }, props), link.icon, /*#__PURE__*/React.createElement("span", {
      className: "sr-only"
    }, link.screenReaderText)));
  });
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return /*#__PURE__*/React.createElement(React.Fragment, null, iconLinks);
};
SocialIconLinks.propTypes = {
  intl: intlShape.isRequired
};
export default injectIntl(SocialIconLinks);
//# sourceMappingURL=SocialIconLinks.js.map