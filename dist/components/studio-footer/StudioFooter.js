import React, { useContext } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
import { Container, Hyperlink, Image, MailtoLink } from '@openedx/paragon';
import './StudioFooter.css';
import messages from './messages';
ensureConfig(['LMS_BASE_URL', 'MARKETING_SITE_BASE_URL', 'TERMS_OF_SERVICE_URL', 'PRIVACY_POLICY_URL', 'SUPPORT_EMAIL', 'SITE_NAME', 'STUDIO_BASE_URL', 'LOGO_URL', 'ENABLE_RELEASE_NOTES'], 'Studio Footer component');
var StudioFooter = function StudioFooter() {
  var intl = useIntl();
  var _useContext = useContext(AppContext),
    config = _useContext.config;
  return /*#__PURE__*/React.createElement("footer", {
    role: "contentinfo",
    "aria-label": intl.formatMessage(messages.footerLabel),
    className: "studio-footer"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '1px',
      flexShrink: 0,
      alignSelf: 'stretch',
      background: 'var(--Light-500, #E1DDD2)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Container, {
    size: "xl",
    className: "p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-links-row text-muted"
  }, /*#__PURE__*/React.createElement(Hyperlink, {
    className: "footer-link footer-link-color",
    destination: "".concat(config.BASE_URL, "/home")
  }, intl.formatMessage(messages.studioLinkLabel)), /*#__PURE__*/React.createElement(Hyperlink, {
    "data-testid": "LMS",
    className: "footer-link footer-link-color",
    destination: config.LMS_BASE_URL
  }, intl.formatMessage(messages.lmsLinkLabel)), config.ENABLE_RELEASE_NOTES === 'true' && /*#__PURE__*/React.createElement(Hyperlink, {
    className: "footer-link footer-link-color",
    destination: "".concat(config.BASE_URL, "/release-notes")
  }, intl.formatMessage(messages.releaseNotesLinkLabel)), /*#__PURE__*/React.createElement(Hyperlink, {
    className: "footer-link footer-link-color",
    destination: "https://wealthpro.africa"
  }, intl.formatMessage(messages.edxDocumentationLinkLabel)), /*#__PURE__*/React.createElement(MailtoLink, {
    className: "footer-link footer-link-color",
    to: config.SUPPORT_EMAIL
  }, intl.formatMessage(messages.contactUsLinkLabel)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '1px',
      flexShrink: 0,
      alignSelf: 'stretch',
      background: 'var(--Light-300, #EDEBE4)'
    }
  }), /*#__PURE__*/React.createElement(Container, {
    size: "xl",
    className: "p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom-columns"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom-col text-muted"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-links-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "footer-link footer-muted-text-color"
  }, "\xC2\xA9 ", new Date().getFullYear(), " ", /*#__PURE__*/React.createElement(Hyperlink, {
    className: "footer-link footer-link-color",
    destination: config.MARKETING_SITE_BASE_URL
  }, config.SITE_NAME), "."), /*#__PURE__*/React.createElement(Hyperlink, {
    "data-testid": "termsOfService",
    className: "footer-link footer-link-color",
    destination: config.TERMS_OF_SERVICE_URL
  }, intl.formatMessage(messages.termsOfServiceLinkLabel)), /*#__PURE__*/React.createElement(Hyperlink, {
    className: "footer-link footer-link-color",
    destination: config.PRIVACY_POLICY_URL
  }, intl.formatMessage(messages.privacyPolicyLinkLabel)), /*#__PURE__*/React.createElement(Hyperlink, {
    className: "footer-link footer-link-color",
    destination: "".concat(config.STUDIO_BASE_URL, "/accessibility")
  }, intl.formatMessage(messages.accessibilityRequestLinkLabel))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "footer-link footer-muted-text-color"
  }, intl.formatMessage(messages.trademarkMessage), /*#__PURE__*/React.createElement(Hyperlink, {
    className: "footer-link footer-link-color",
    destination: "https://wealthpro.africa"
  }, "WealthPro Africa"), ".")))), /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement(Hyperlink, {
    destination: config.MARKETING_SITE_BASE_URL
  }, /*#__PURE__*/React.createElement(Image, {
    src: "https://lms.wealthpro.africa/theming/asset/images/logo.png",
    alt: "WealthPro Africa",
    height: 32,
    className: "footer-logo"
  })))))));
};
export default StudioFooter;
//# sourceMappingURL=StudioFooter.js.map