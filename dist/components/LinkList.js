var _excluded = ["title", "links"],
  _excluded2 = ["title", "href", "hidden"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@openedx/paragon';
var LinkList = function LinkList(_ref) {
  var listTitle = _ref.title,
    _ref$links = _ref.links,
    links = _ref$links === void 0 ? [] : _ref$links,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("div", props, /*#__PURE__*/React.createElement("h2", null, listTitle), /*#__PURE__*/React.createElement("ul", {
    className: "list-unstyled p-0 m-0"
  }, links.map(function (_ref2) {
    var title = _ref2.title,
      href = _ref2.href,
      hidden = _ref2.hidden,
      linkProps = _objectWithoutProperties(_ref2, _excluded2);
    if (hidden) {
      return null;
    }
    if (!href) {
      return /*#__PURE__*/React.createElement("li", {
        key: "".concat(title)
      }, /*#__PURE__*/React.createElement(Button, linkProps, title));
    }
    return /*#__PURE__*/React.createElement("li", _extends({
      key: "".concat(href).concat(title)
    }, linkProps), /*#__PURE__*/React.createElement("a", {
      href: href
    }, title));
  })));
};
LinkList.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    hidden: PropTypes.bool
  }))
};
LinkList.defaultProps = {
  links: []
};
export default LinkList;
//# sourceMappingURL=LinkList.js.map