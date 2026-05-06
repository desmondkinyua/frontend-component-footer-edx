function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import PropTypes from 'prop-types';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { APP_CONFIG_INITIALIZED, mergeConfig, subscribe } from '@edx/frontend-platform';
import { FormattedMessage, injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { ensureConfig } from '@edx/frontend-platform/config';
import { AppContext } from '@edx/frontend-platform/react';
import Cookies from 'js-cookie';
import LinkList from './LinkList';
import AppleAppStoreButton from './AppleAppStoreButton';
import GooglePlayStoreButton from './GooglePlayStoreButton';
import SocialIconLinks from './SocialIconLinks';
import messages from './Footer.messages';
import LanguageSelector from './LanguageSelector';
ensureConfig(['LOGO_TRADEMARK_URL'], 'Footer component');
var EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link'
};
var MARKETING_BASE_URL = 'https://edx.org';
var CCPA_COOKIE_NAME = 'edx_do_not_sell';

// Some MFEs (such as frontend-app-payment) don't want a footer to be shown.
// This lets them hide it.
subscribe(APP_CONFIG_INITIALIZED, function () {
  mergeConfig({
    HIDE_FOOTER: !!process.env.HIDE_FOOTER
  }, 'Footer additional config');
});
var Footer = /*#__PURE__*/function (_React$Component) {
  function Footer(props) {
    var _this;
    _classCallCheck(this, Footer);
    _this = _callSuper(this, Footer, [props]);
    // Added specific check for edX mobile app
    _defineProperty(_this, "isMobile", function () {
      return navigator.userAgent.match('org.edx.mobile');
    });
    _this.externalLinkClickHandler = _this.externalLinkClickHandler.bind(_this);
    _this.state = {
      // Used for constructing the enterprise market link.
      utmSource: 'edx.org'
    };
    return _this;
  }
  _inherits(Footer, _React$Component);
  return _createClass(Footer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        // Wait until component mount to get the hostname to preserve
        // gatsby compatibility.
        utmSource: global.location.hostname
      });
    }
  }, {
    key: "getLocalePrefix",
    value: function getLocalePrefix(locale) {
      var twoLetterPrefix = locale.substring(0, 2).toLowerCase();
      if (twoLetterPrefix === 'en') {
        return '';
      }
      return "/".concat(twoLetterPrefix);
    }
  }, {
    key: "externalLinkClickHandler",
    value: function externalLinkClickHandler(event) {
      var label = event.currentTarget.getAttribute('href');
      var eventName = EVENT_NAMES.FOOTER_LINK;
      var properties = {
        category: 'outbound_link',
        label: label
      };
      sendTrackEvent(eventName, properties);
    }
  }, {
    key: "toggleConsentModal",
    value: function toggleConsentModal() {
      var _window$OneTrust;
      (_window$OneTrust = window.OneTrust) === null || _window$OneTrust === void 0 || _window$OneTrust.ToggleInfoDisplay();
      var _URL = new URL("".concat(MARKETING_BASE_URL)),
        host = _URL.host;
      // Use global domain (`.edx.org`) without the subdomain
      var cookieOptions = {
        host: host,
        expires: 365
      };
      Cookies.set(CCPA_COOKIE_NAME, true, cookieOptions);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        supportedLanguages = _this$props.supportedLanguages,
        onLanguageSelected = _this$props.onLanguageSelected,
        logo = _this$props.logo,
        intl = _this$props.intl;
      var showLanguageSelector = supportedLanguages.length > 0 && onLanguageSelected;
      var localePrefix = this.getLocalePrefix(intl.locale);
      var config = this.context.config;
      if (config.HIDE_FOOTER) {
        return null;
      }
      return /*#__PURE__*/React.createElement("footer", {
        role: "contentinfo",
        "aria-label": intl.formatMessage(messages['footer.logo.ariaLabel']),
        className: "footer d-flex justify-content-center border-top py-3 px-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "container-fluid d-grid"
      }, /*#__PURE__*/React.createElement("div", {
        className: "area-1"
      }, /*#__PURE__*/React.createElement("a", {
        href: "https://edx.org",
        "aria-label": intl.formatMessage(messages['footer.logo.ariaLabel'])
      }, /*#__PURE__*/React.createElement("img", {
        src: logo || config.LOGO_TRADEMARK_URL,
        alt: intl.formatMessage(messages['footer.logo.altText']),
        style: {
          maxHeight: 45
        }
      })), showLanguageSelector && /*#__PURE__*/React.createElement("div", {
        className: "i18n d-flex mt-4"
      }, /*#__PURE__*/React.createElement(LanguageSelector, {
        options: supportedLanguages,
        onSubmit: onLanguageSelected
      }))), /*#__PURE__*/React.createElement(LinkList, {
        className: "area-2",
        title: "edX",
        links: [{
          href: "".concat(MARKETING_BASE_URL).concat(localePrefix, "/about-us"),
          title: intl.formatMessage(messages['footer.edxLinks.about'])
        }, {
          href: "".concat(MARKETING_BASE_URL).concat(localePrefix, "/affiliate-program"),
          title: intl.formatMessage(messages['footer.edxLinks.affiliates']),
          hidden: intl.locale === 'es'
        }, {
          href: "https://business.edx.org/?utm_campaign=edX.org+Referral&utm_medium=Footer&utm_source=".concat(this.state.utmSource),
          title: intl.formatMessage(messages['footer.edxLinks.business'])
        }, {
          href: 'http://open.edx.org',
          title: intl.formatMessage(messages['footer.edxLinks.openEdx']),
          hidden: intl.locale === 'es'
        }, {
          href: "".concat(MARKETING_BASE_URL).concat(localePrefix, "/careers"),
          title: intl.formatMessage(messages['footer.edxLinks.careers']),
          hidden: intl.locale === 'es'
        }, {
          href: "".concat(MARKETING_BASE_URL).concat(localePrefix, "/news-announcements"),
          title: intl.formatMessage(messages['footer.edxLinks.news'])
        }]
      }), /*#__PURE__*/React.createElement(LinkList, {
        className: "area-3",
        title: intl.formatMessage(messages['footer.legalLinks.heading']),
        links: [{
          href: "".concat(MARKETING_BASE_URL).concat(localePrefix, "/edx-terms-service"),
          title: intl.formatMessage(messages['footer.legalLinks.termsOfService'])
        }, {
          href: "".concat(MARKETING_BASE_URL).concat(localePrefix, "/edx-privacy-policy"),
          title: intl.formatMessage(messages['footer.legalLinks.privacyPolicy'])
        }, {
          href: "".concat(MARKETING_BASE_URL).concat(localePrefix, "/accessibility"),
          title: intl.formatMessage(messages['footer.legalLinks.a11yPolicy'])
        }, {
          href: "".concat(MARKETING_BASE_URL).concat(localePrefix, "/trademarks"),
          title: intl.formatMessage(messages['footer.legalLinks.trademarkPolicy']),
          hidden: intl.locale === 'es'
        }, {
          href: "".concat(MARKETING_BASE_URL).concat(localePrefix, "/sitemap"),
          title: intl.formatMessage(messages['footer.legalLinks.sitemap']),
          hidden: intl.locale === 'es'
        }, {
          href: "".concat(MARKETING_BASE_URL).concat(localePrefix, "/edx-privacy-policy/cookies"),
          title: intl.formatMessage(messages['footer.legalLinks.cookiePolicy'])
        }, {
          title: intl.formatMessage(messages['footer.legalLinks.doNotSellData']),
          className: 'px-0 text-left text-decoration-none',
          onClick: this.toggleConsentModal,
          variant: 'link',
          size: 'inline',
          id: 'footer-dns-link'
        }]
      }), /*#__PURE__*/React.createElement(LinkList, {
        className: "area-4",
        title: intl.formatMessage(messages['footer.connectLinks.heading']),
        links: [{
          href: 'https://www.edx.org/resources',
          title: intl.formatMessage(messages['footer.connectLinks.blog'])
        }, {
          href: 'https://courses.edx.org/support/contact_us',
          title: intl.formatMessage(messages['footer.connectLinks.contact'])
        }, {
          href: 'https://support.edx.org',
          title: intl.formatMessage(messages['footer.connectLinks.help'])
        }, {
          href: "".concat(MARKETING_BASE_URL).concat(localePrefix, "/policy/security"),
          title: intl.formatMessage(messages['footer.connectLinks.security'])
        }, {
          href: "".concat(MARKETING_BASE_URL).concat(localePrefix, "/media-kit"),
          title: intl.formatMessage(messages['footer.connectLinks.mediaKit']),
          hidden: intl.locale === 'es'
        }]
      }), /*#__PURE__*/React.createElement("div", {
        className: "area-5"
      }, /*#__PURE__*/React.createElement("ul", {
        className: "d-flex flex-row justify-content-between list-unstyled max-width-222 p-0 mb-4"
      }, /*#__PURE__*/React.createElement(SocialIconLinks, {
        onClick: this.externalLinkClickHandler
      })), !this.isMobile() && /*#__PURE__*/React.createElement("ul", {
        className: "d-flex flex-row justify-content-between list-unstyled max-width-264 p-0 mb-5"
      }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(GooglePlayStoreButton, {
        onClick: this.externalLinkClickHandler
      })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(AppleAppStoreButton, {
        onClick: this.externalLinkClickHandler
      }))), /*#__PURE__*/React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " edX LLC. All rights reserved.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "footer.trademarks",
        defaultMessage: "{icpMessage}",
        description: "A description of the trademarks that belong to edX.",
        values: {
          icpMessage: /*#__PURE__*/React.createElement(React.Fragment, null, "\u6DF1\u5733\u5E02\u6052\u5B87\u535A\u79D1\u6280\u6709\u9650\u516C\u53F8 ", /*#__PURE__*/React.createElement("a", {
            style: {
              textDecoration: 'underline'
            },
            href: "https://beian.miit.gov.cn"
          }, "\u7CA4ICP\u590717044299\u53F7-2"))
        }
      })))));
    }
  }]);
}(React.Component);
Footer.contextType = AppContext;
Footer.propTypes = {
  intl: intlShape.isRequired,
  logo: PropTypes.string,
  onLanguageSelected: PropTypes.func,
  supportedLanguages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }))
};
Footer.defaultProps = {
  logo: undefined,
  onLanguageSelected: undefined,
  supportedLanguages: []
};
export default injectIntl(Footer);
export { EVENT_NAMES };
//# sourceMappingURL=Footer.js.map