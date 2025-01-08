'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var reactRouterDom = require('react-router-dom');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var react = require('swiper/react');
require('swiper/css');
require('swiper/css/navigation');
require('swiper/css/pagination');
require('swiper/css/autoplay');
var modules = require('swiper/modules');
var liamc9npm = require('liamc9npm');
var reactTransitionGroup = require('react-transition-group');
var ReactPlayer = require('react-player');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var ReactPlayer__default = /*#__PURE__*/_interopDefaultLegacy(ReactPlayer);

const HomeIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M21.71,11.29l-9-9a1,1,0,0,0-1.42,0l-9,9a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,13H4v7.3A1.77,1.77,0,0,0,5.83,22H8.5a1,1,0,0,0,1-1V16.1a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1V21a1,1,0,0,0,1,1h2.67A1.77,1.77,0,0,0,20,20.3V13h1a1,1,0,0,0,.92-.62A1,1,0,0,0,21.71,11.29Z"
}));
const BookOpenIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: "1.5",
  stroke: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M12 6.75v10.5M21 5.25v13.5c0 1.5-3 1.5-3 1.5H6c0 0-3 0-3-1.5V5.25c0-1.5 3-1.5 3-1.5h12c0 0 3 0 3 1.5z"
}));
const UsersIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  stroke: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("circle", {
  cx: "12",
  cy: "6",
  r: "4",
  fill: "currentColor"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z",
  fill: "currentColor"
}));
const CogIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  stroke: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  strokeWidth: "0.00024",
  className: className
}, /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 8.25C9.92894 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92894 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M11.9747 1.25C11.5303 1.24999 11.1592 1.24999 10.8546 1.27077C10.5375 1.29241 10.238 1.33905 9.94761 1.45933C9.27379 1.73844 8.73843 2.27379 8.45932 2.94762C8.31402 3.29842 8.27467 3.66812 8.25964 4.06996C8.24756 4.39299 8.08454 4.66251 7.84395 4.80141C7.60337 4.94031 7.28845 4.94673 7.00266 4.79568C6.64714 4.60777 6.30729 4.45699 5.93083 4.40743C5.20773 4.31223 4.47642 4.50819 3.89779 4.95219C3.64843 5.14353 3.45827 5.3796 3.28099 5.6434C3.11068 5.89681 2.92517 6.21815 2.70294 6.60307L2.67769 6.64681C2.45545 7.03172 2.26993 7.35304 2.13562 7.62723C1.99581 7.91267 1.88644 8.19539 1.84541 8.50701C1.75021 9.23012 1.94617 9.96142 2.39016 10.5401C2.62128 10.8412 2.92173 11.0602 3.26217 11.2741C3.53595 11.4461 3.68788 11.7221 3.68786 12C3.68785 12.2778 3.53592 12.5538 3.26217 12.7258C2.92169 12.9397 2.62121 13.1587 2.39007 13.4599C1.94607 14.0385 1.75012 14.7698 1.84531 15.4929C1.88634 15.8045 1.99571 16.0873 2.13552 16.3727C2.26983 16.6469 2.45535 16.9682 2.67758 17.3531L2.70284 17.3969C2.92507 17.7818 3.11058 18.1031 3.28089 18.3565C3.45817 18.6203 3.64833 18.8564 3.89769 19.0477C4.47632 19.4917 5.20763 19.6877 5.93073 19.5925C6.30717 19.5429 6.647 19.3922 7.0025 19.2043C7.28833 19.0532 7.60329 19.0596 7.8439 19.1986C8.08452 19.3375 8.24756 19.607 8.25964 19.9301C8.27467 20.3319 8.31403 20.7016 8.45932 21.0524C8.73843 21.7262 9.27379 22.2616 9.94761 22.5407C10.238 22.661 10.5375 22.7076 10.8546 22.7292C11.1592 22.75 11.5303 22.75 11.9747 22.75H12.0252C12.4697 22.75 12.8407 22.75 13.1454 22.7292C13.4625 22.7076 13.762 22.661 14.0524 22.5407C14.7262 22.2616 15.2616 21.7262 15.5407 21.0524C15.686 20.7016 15.7253 20.3319 15.7403 19.93C15.7524 19.607 15.9154 19.3375 16.156 19.1985C16.3966 19.0596 16.7116 19.0532 16.9974 19.2042C17.3529 19.3921 17.6927 19.5429 18.0692 19.5924C18.7923 19.6876 19.5236 19.4917 20.1022 19.0477C20.3516 18.8563 20.5417 18.6203 20.719 18.3565C20.8893 18.1031 21.0748 17.7818 21.297 17.3969L21.3223 17.3531C21.5445 16.9682 21.7301 16.6468 21.8644 16.3726C22.0042 16.0872 22.1135 15.8045 22.1546 15.4929C22.2498 14.7697 22.0538 14.0384 21.6098 13.4598C21.3787 13.1586 21.0782 12.9397 20.7378 12.7258C20.464 12.5538 20.3121 12.2778 20.3121 11.9999C20.3121 11.7221 20.464 11.4462 20.7377 11.2742C21.0783 11.0603 21.3788 10.8414 21.6099 10.5401C22.0539 9.96149 22.2499 9.23019 22.1547 8.50708C22.1136 8.19546 22.0043 7.91274 21.8645 7.6273C21.7302 7.35313 21.5447 7.03183 21.3224 6.64695L21.2972 6.60318C21.0749 6.21825 20.8894 5.89688 20.7191 5.64347C20.5418 5.37967 20.3517 5.1436 20.1023 4.95225C19.5237 4.50826 18.7924 4.3123 18.0692 4.4075C17.6928 4.45706 17.353 4.60782 16.9975 4.79572C16.7117 4.94679 16.3967 4.94036 16.1561 4.80144C15.9155 4.66253 15.7524 4.39297 15.7403 4.06991C15.7253 3.66808 15.686 3.2984 15.5407 2.94762C15.2616 2.27379 14.7262 1.73844 14.0524 1.45933C13.762 1.33905 13.4625 1.29241 13.1454 1.27077C12.8407 1.24999 12.4697 1.24999 12.0252 1.25H11.9747ZM10.5216 2.84515C10.5988 2.81319 10.716 2.78372 10.9567 2.76729C11.2042 2.75041 11.5238 2.75 12 2.75C12.4762 2.75 12.7958 2.75041 13.0432 2.76729C13.284 2.78372 13.4012 2.81319 13.4783 2.84515C13.7846 2.97202 14.028 3.21536 14.1548 3.52165C14.1949 3.61826 14.228 3.76887 14.2414 4.12597C14.271 4.91835 14.68 5.68129 15.4061 6.10048C16.1321 6.51968 16.9974 6.4924 17.6984 6.12188C18.0143 5.9549 18.1614 5.90832 18.265 5.89467C18.5937 5.8514 18.9261 5.94047 19.1891 6.14228C19.2554 6.19312 19.3395 6.27989 19.4741 6.48016C19.6125 6.68603 19.7726 6.9626 20.0107 7.375C20.2488 7.78741 20.4083 8.06438 20.5174 8.28713C20.6235 8.50382 20.6566 8.62007 20.6675 8.70287C20.7108 9.03155 20.6217 9.36397 20.4199 9.62698C20.3562 9.70995 20.2424 9.81399 19.9397 10.0041C19.2684 10.426 18.8122 11.1616 18.8121 11.9999C18.8121 12.8383 19.2683 13.574 19.9397 13.9959C20.2423 14.186 20.3561 14.29 20.4198 14.373C20.6216 14.636 20.7107 14.9684 20.6674 15.2971C20.6565 15.3799 20.6234 15.4961 20.5173 15.7128C20.4082 15.9355 20.2487 16.2125 20.0106 16.6249C19.7725 17.0373 19.6124 17.3139 19.474 17.5198C19.3394 17.72 19.2553 17.8068 19.189 17.8576C18.926 18.0595 18.5936 18.1485 18.2649 18.1053C18.1613 18.0916 18.0142 18.045 17.6983 17.8781C16.9973 17.5075 16.132 17.4803 15.4059 17.8995C14.68 18.3187 14.271 19.0816 14.2414 19.874C14.228 20.2311 14.1949 20.3817 14.1548 20.4784C14.028 20.7846 13.7846 21.028 13.4783 21.1549C13.4012 21.1868 13.284 21.2163 13.0432 21.2327C12.7958 21.2496 12.4762 21.25 12 21.25C11.5238 21.25 11.2042 21.2496 10.9567 21.2327C10.716 21.2163 10.5988 21.1868 10.5216 21.1549C10.2154 21.028 9.97201 20.7846 9.84514 20.4784C9.80512 20.3817 9.77195 20.2311 9.75859 19.874C9.72896 19.0817 9.31997 18.3187 8.5939 17.8995C7.86784 17.4803 7.00262 17.5076 6.30158 17.8781C5.98565 18.0451 5.83863 18.0917 5.73495 18.1053C5.40626 18.1486 5.07385 18.0595 4.81084 17.8577C4.74458 17.8069 4.66045 17.7201 4.52586 17.5198C4.38751 17.314 4.22736 17.0374 3.98926 16.625C3.75115 16.2126 3.59171 15.9356 3.4826 15.7129C3.37646 15.4962 3.34338 15.3799 3.33248 15.2971C3.28921 14.9684 3.37828 14.636 3.5801 14.373C3.64376 14.2901 3.75761 14.186 4.0602 13.9959C4.73158 13.5741 5.18782 12.8384 5.18786 12.0001C5.18791 11.1616 4.73165 10.4259 4.06021 10.004C3.75769 9.81389 3.64385 9.70987 3.58019 9.62691C3.37838 9.3639 3.28931 9.03149 3.33258 8.7028C3.34348 8.62001 3.37656 8.50375 3.4827 8.28707C3.59181 8.06431 3.75125 7.78734 3.98935 7.37493C4.22746 6.96253 4.3876 6.68596 4.52596 6.48009C4.66055 6.27983 4.74468 6.19305 4.81093 6.14222C5.07395 5.9404 5.40636 5.85133 5.73504 5.8946C5.83873 5.90825 5.98576 5.95483 6.30173 6.12184C7.00273 6.49235 7.86791 6.51962 8.59394 6.10045C9.31998 5.68128 9.72896 4.91837 9.75859 4.12602C9.77195 3.76889 9.80512 3.61827 9.84514 3.52165C9.97201 3.21536 10.2154 2.97202 10.5216 2.84515Z"
}));
const MenuIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: "1.5",
  stroke: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M4.5 6h15M4.5 12h15M4.5 18h15"
}));
const XIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: "1.5",
  stroke: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M6 18L18 6M6 6l12 12"
}));
const LoginIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: "1.5",
  stroke: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M15.75 9V5.25a.75.75 0 00-.75-.75H5.25a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h9.75a.75.75 0 00.75-.75V15m3.75-6l3 3m0 0l-3 3m3-3H9"
}));
const MoneyIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("rect", {
  x: "2",
  y: "6",
  width: "20",
  height: "12",
  stroke: "currentColor",
  strokeWidth: "0.84",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M22 10C21.4747 10 20.9546 9.89654 20.4693 9.69552C19.984 9.4945 19.543 9.19986 19.1716 8.82843C18.8001 8.45699 18.5055 8.01604 18.3045 7.53073C18.1035 7.04543 18 6.52529 18 6L22 6L22 10Z",
  stroke: "currentColor",
  strokeWidth: "0.84",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M18 18C18 16.9391 18.4214 15.9217 19.1716 15.1716C19.9217 14.4214 20.9391 14 22 14L22 18L18 18Z",
  stroke: "currentColor",
  strokeWidth: "0.84",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M2 14C3.06087 14 4.07828 14.4214 4.82843 15.1716C5.57857 15.9217 6 16.9391 6 18L2 18L2 14Z",
  stroke: "currentColor",
  strokeWidth: "0.84",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M6 6C6 7.06087 5.57857 8.07828 4.82843 8.82843C4.07828 9.57857 3.06087 10 2 10L2 6H6Z",
  stroke: "currentColor",
  strokeWidth: "0.84",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M14.0741 9.5H11.3333C10.597 9.5 10 10.0596 10 10.75C10 11.4404 10.597 12 11.3333 12H13.1111C13.8475 12 14.4444 12.5596 14.4444 13.25C14.4444 13.9404 13.8475 14.5 13.1111 14.5H10",
  stroke: "currentColor",
  strokeWidth: "0.84",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M12 9.51733V8.5",
  stroke: "currentColor",
  strokeWidth: "0.84",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M12 15.5173V14.5",
  stroke: "currentColor",
  strokeWidth: "0.84",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const MoneyIcon2 = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React__default["default"].createElement("g", {
  clipPath: "url(#clip0_443_3628)"
}, /*#__PURE__*/React__default["default"].createElement("rect", {
  x: "2",
  y: "6",
  width: "20",
  height: "12",
  stroke: "currentColor",
  strokeWidth: "1.416",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M22 10C21.4747 10 20.9546 9.89654 20.4693 9.69552C19.984 9.4945 19.543 9.19986 19.1716 8.82843C18.8001 8.45699 18.5055 8.01604 18.3045 7.53073C18.1035 7.04543 18 6.52529 18 6L22 6L22 10Z",
  stroke: "currentColor",
  strokeWidth: "1.416",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M18 18C18 16.9391 18.4214 15.9217 19.1716 15.1716C19.9217 14.4214 20.9391 14 22 14L22 18L18 18Z",
  stroke: "currentColor",
  strokeWidth: "1.416",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M2 14C3.06087 14 4.07828 14.4214 4.82843 15.1716C5.57857 15.9217 6 16.9391 6 18L2 18L2 14Z",
  stroke: "currentColor",
  strokeWidth: "1.416",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M6 6C6 7.06087 5.57857 8.07828 4.82843 8.82843C4.07828 9.57857 3.06087 10 2 10L2 6H6Z",
  stroke: "currentColor",
  strokeWidth: "1.416",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M14.0741 9.5H11.3333C10.597 9.5 10 10.0596 10 10.75C10 11.4404 10.597 12 11.3333 12H13.1111C13.8475 12 14.4444 12.5596 14.4444 13.25C14.4444 13.9404 13.8475 14.5 13.1111 14.5H10",
  stroke: "currentColor",
  strokeWidth: "1.416",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M12 9.51733V8.5",
  stroke: "currentColor",
  strokeWidth: "1.416",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M12 15.5173V14.5",
  stroke: "currentColor",
  strokeWidth: "1.416",
  strokeLinecap: "round",
  strokeLinejoin: "round"
})), /*#__PURE__*/React__default["default"].createElement("defs", null, /*#__PURE__*/React__default["default"].createElement("clipPath", {
  id: "clip0_443_3628"
}, /*#__PURE__*/React__default["default"].createElement("rect", {
  width: "24",
  height: "24",
  fill: "white"
}))));
const MarketingIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 16 16",
  stroke: "currentColor",
  strokeWidth: "0.00016"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M14.25 2.1a1.25 1.25 0 0 0-1.17-.1L6.91 4.43a1.22 1.22 0 0 1-.46.09H2.5a1.25 1.25 0 0 0-1.25 1.25v.1H0v3h1.25V9a1.25 1.25 0 0 0 1.25 1.22L4 13.4a1.26 1.26 0 0 0 1.13.72h.63A1.25 1.25 0 0 0 7 12.87v-2.53l6.08 2.43a1.27 1.27 0 0 0 .47.09 1.29 1.29 0 0 0 .7-.22 1.25 1.25 0 0 0 .55-1V3.13a1.25 1.25 0 0 0-.55-1.03zm-8.5 3.67V9H2.5V5.77zm0 7.1h-.63l-1.23-2.65h1.86zm1.62-3.72A2.29 2.29 0 0 0 7 9V5.7a2.26 2.26 0 0 0 .37-.11l6.18-2.46v8.48zm7.46-3.03v2.5a1.25 1.25 0 0 0 0-2.5z"
}));
const TargetIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 470 470",
  fill: "currentColor",
  stroke: "currentColor",
  strokeWidth: "1.88"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "m469.19,46.536c-1.467-2.894-4.636-4.521-7.832-4.021l-40.045,6.173 6.173-40.045c0.494-3.205-1.128-6.365-4.021-7.832-2.894-1.467-6.402-0.908-8.695,1.386l-46.484,46.484c-1.127,1.128-1.866,2.585-2.108,4.161l-7.358,47.733-26.609,26.609c-36.654-34.03-84.102-52.694-134.454-52.694-52.864,0-102.536,20.559-139.866,57.889-37.332,37.331-57.891,87.003-57.891,139.867s20.559,102.535 57.889,139.866c37.331,37.33 87.003,57.888 139.866,57.888s102.536-20.559 139.866-57.889c37.33-37.331 57.889-87.003 57.889-139.866 0-42.051-12.996-82.189-37.583-116.076-2.433-3.354-7.125-4.1-10.475-1.666-3.353,2.433-4.099,7.122-1.666,10.475 22.717,31.31 34.724,68.402 34.724,107.268 0,100.771-81.984,182.754-182.755,182.754-100.771,0-182.755-81.983-182.755-182.754s81.984-182.755 182.755-182.755c46.345,1.42109e-14 90.026,17.105 123.84,48.308l-34.284,34.284c-24.653-22.076-56.23-34.173-89.557-34.173-74.074,0-134.337,60.264-134.337,134.337s60.263,134.337 134.337,134.337 134.336-60.264 134.336-134.337c0-24.723-6.76-48.882-19.548-69.866-2.156-3.537-6.771-4.658-10.308-2.501-3.537,2.155-4.656,6.771-2.501,10.308 11.354,18.632 17.356,40.092 17.356,62.06 0,65.803-53.534,119.337-119.336,119.337-65.803,0-119.337-53.534-119.337-119.337s53.534-119.337 119.337-119.337c29.327,0 57.131,10.538 78.937,29.793l-34.365,34.365c-12.575-10.193-28.141-15.74-44.572-15.74-39.104,0-70.918,31.814-70.918,70.919s31.814,70.918 70.918,70.918c39.105,0 70.918-31.813 70.918-70.918 0-6.967-1.008-13.853-2.995-20.468-1.192-3.967-5.374-6.219-9.341-5.024-3.967,1.191-6.217,5.373-5.024,9.341 1.566,5.214 2.36,10.647 2.36,16.151 0,30.833-25.085,55.918-55.918,55.918s-55.918-25.085-55.918-55.918c0-30.834 25.085-55.919 55.918-55.919 12.416,0 24.2,4.021 33.886,11.426l-39.19,39.19c-2.929,2.93-2.929,7.678 0,10.607 1.464,1.464 3.384,2.196 5.303,2.196 1.919,0 3.839-0.732 5.303-2.196l134.539-134.539c0.046-0.046 31.828-31.828 31.828-31.828l47.733-7.359c1.576-0.242 3.033-0.981 4.161-2.108l46.484-46.484c2.297-2.297 2.856-5.805 1.39-8.698zm-88.563,11.017l28.542-28.541-3.866,25.079-28.542,28.542 3.866-25.08zm31.82,31.821l-25.078,3.866 28.542-28.542 25.077-3.866-28.541,28.542z"
}));
const DataIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  fill: "currentColor",
  stroke: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M702.537143 218.477714c31.085714-10.825143 55.003429-23.113143 69.924571-35.328 10.24-8.338286 13.458286-13.824 13.458286-16.018285s-3.218286-7.68-13.458286-16.091429c-14.921143-12.141714-38.765714-24.429714-69.924571-35.254857C634.368 92.16 540.013714 78.336 438.857143 78.336s-195.510857 13.897143-263.68 37.449143c-31.085714 10.825143-55.003429 23.113143-69.924572 35.328-10.24 8.338286-13.458286 13.750857-13.458285 16.018286 0 2.194286 3.218286 7.68 13.458285 16.091428 14.921143 12.141714 38.765714 24.429714 69.924572 35.254857 68.169143 23.625143 162.523429 37.449143 263.68 37.449143s195.510857-13.897143 263.68-37.449143zM69.485714 464.749714v128.804572c37.961143 40.009143 140.068571 88.722286 264.777143 103.277714 182.857143 21.284571 355.986286-18.651429 473.526857-98.304l0.438857-131.657143C683.008 540.525714 506.733714 571.465143 328.484571 550.619429c-110.372571-12.8-204.361143-46.08-259.072-85.869715z m0-80.457143c38.034286 39.936 140.068571 88.649143 264.777143 103.131429 183.222857 21.357714 356.717714-18.724571 474.258286-98.742857l0.512-145.993143C734.208 286.573714 596.48 315.977143 438.857143 315.977143c-156.964571 0-294.253714-29.257143-369.152-72.777143A132116.333714 132116.333714 0 0 0 69.485714 384.219429z m0.146286 289.865143l0.292571 108.105143-1.097142-7.460571c22.381714 74.020571 165.302857 133.485714 378.148571 133.485714 115.931429 0 206.774857-17.554286 276.626286-52.077714 19.602286-9.728 34.523429-17.92 49.152-28.598857 9.728-7.094857 16.091429-11.410286 26.550857-20.626286 10.825143-9.581714 27.501714-7.241143 37.156571 3.657143 9.581714 10.752 10.825143 28.306286 0 37.961143-11.702857 10.24-17.188571 14.848-28.598857 23.186285-17.042286 12.434286-36.425143 25.380571-58.806857 36.498286-77.092571 38.107429-155.648 60.854857-302.08 60.854857-243.931429 0-405.211429-77.165714-436.077714-179.2l-1.097143-3.657143v-3.803428L9.362286 628.077714a116682.532571 116682.532571 0 0 1 0.365714-455.68 52.662857 52.662857 0 0 1-0.292571-5.266285C9.508571 84.918857 201.728 18.285714 438.857143 18.285714c237.129143 0 429.348571 66.633143 429.348571 148.845715a53.028571 53.028571 0 0 1-0.804571 9.581714 23.405714 23.405714 0 0 1 1.024 7.094857l-1.682286 520.411429c-0.073143 14.482286-13.385143 26.185143-29.769143 26.112-16.384 0-29.622857-11.776-29.549714-26.331429v-27.355429c-125.074286 73.216-301.056 104.082286-478.939429 83.382858-110.226286-12.873143-204.214857-46.08-258.925714-85.869715z m668.525714-290.962285a25.746286 25.746286 0 0 1-25.965714-25.453715c0-14.043429 11.702857-25.380571 26.038857-25.380571 14.336 0 26.038857 11.337143 26.038857 25.380571 0 14.116571-11.702857 25.453714-26.038857 25.453715z m0 209.408a25.746286 25.746286 0 0 1-25.965714-25.453715c0-14.043429 11.702857-25.453714 26.038857-25.453714 14.336 0 26.038857 11.410286 26.038857 25.453714 0 14.043429-11.702857 25.453714-26.038857 25.453715z m0 212.114285a25.746286 25.746286 0 0 1-25.965714-25.526857c0-14.043429 11.702857-25.453714 26.038857-25.453714 14.336 0 26.038857 11.410286 26.038857 25.453714 0 14.043429-11.702857 25.453714-26.038857 25.453714z"
}));
const ScriptIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  stroke: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M18,18 L18,4.5 C18,3.67157288 17.3284271,3 16.5,3 L5.73243561,3 C5.90260571,3.29417337 6,3.63571286 6,4 L6,20 C6,20.5522847 6.44771525,21 7,21 C7.55228475,21 8,20.5522847 8,20 L8,18.5 C8,18.2238576 8.22385763,18 8.5,18 L18,18 Z M19,18 L21.5,18 C21.7761424,18 22,18.2238576 22,18.5 L22,19.5 C22,20.8807119 20.8807119,22 19.5,22 L7,22 C5.8954305,22 5,21.1045695 5,20 L5,6 L4,6 C2.8954305,6 2,5.1045695 2,4 C2,2.8954305 2.8954305,2 4,2 L16.5,2 C17.8807119,2 19,3.11928813 19,4.5 L19,18 Z M9,19 L9,20 C9,20.3642871 8.90260571,20.7058266 8.73243561,21 L19.5,21 C20.3284271,21 21,20.3284271 21,19.5 L21,19 L9,19 Z M5,5 L5,4 C5,3.44771525 4.55228475,3 4,3 C3.44771525,3 3,3.44771525 3,4 C3,4.55228475 3.44771525,5 4,5 L5,5 Z M8.5,7 C8.22385763,7 8,6.77614237 8,6.5 C8,6.22385763 8.22385763,6 8.5,6 L15.5,6 C15.7761424,6 16,6.22385763 16,6.5 C16,6.77614237 15.7761424,7 15.5,7 L8.5,7 Z M8.5,10 C8.22385763,10 8,9.77614237 8,9.5 C8,9.22385763 8.22385763,9 8.5,9 L15.5,9 C15.7761424,9 16,9.22385763 16,9.5 C16,9.77614237 15.7761424,10 15.5,10 L8.5,10 Z M8.5,13 C8.22385763,13 8,12.7761424 8,12.5 C8,12.2238576 8.22385763,12 8.5,12 L15.5,12 C15.7761424,12 16,12.2238576 16,12.5 C16,12.7761424 15.7761424,13 15.5,13 L8.5,13 Z M8.5,16 C8.22385763,16 8,15.7761424 8,15.5 C8,15.2238576 8.22385763,15 8.5,15 L13.5,15 C13.7761424,15 14,15.2238576 14,15.5 C14,15.7761424 13.7761424,16 13.5,16 L8.5,16 Z"
}));
const CodeIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("polyline", {
  className: "st0",
  points: "27,19 27,6 5,6 5,19"
}), /*#__PURE__*/React__default["default"].createElement("polygon", {
  className: "st0",
  points: "30,26 2,26 4,22 28,22"
}), /*#__PURE__*/React__default["default"].createElement("polyline", {
  className: "st0",
  points: "11,11 8,14 11,17"
}), /*#__PURE__*/React__default["default"].createElement("polyline", {
  className: "st0",
  points: "21,11 24,14 21,17"
}), /*#__PURE__*/React__default["default"].createElement("line", {
  className: "st0",
  x1: "18",
  y1: "10",
  x2: "14",
  y2: "18"
}));
const SortIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M22 7L2 7",
  stroke: "#1C274C",
  strokeWidth: "1.5",
  strokeLinecap: "round"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M19 12L5 12",
  stroke: "#1C274C",
  strokeWidth: "1.5",
  strokeLinecap: "round"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M16 17H8",
  stroke: "#1C274C",
  strokeWidth: "1.5",
  strokeLinecap: "round"
}));
const FilterIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("g", {
  id: "Layer_2",
  "data-name": "Layer 2"
}, /*#__PURE__*/React__default["default"].createElement("g", {
  id: "invisible_box",
  "data-name": "invisible box"
}, /*#__PURE__*/React__default["default"].createElement("rect", {
  width: "48",
  height: "48",
  fill: "none"
})), /*#__PURE__*/React__default["default"].createElement("g", {
  id: "icons_Q2",
  "data-name": "icons Q2"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M41.8,8H21.7A6.2,6.2,0,0,0,16,4a6,6,0,0,0-5.6,4H6.2A2.1,2.1,0,0,0,4,10a2.1,2.1,0,0,0,2.2,2h4.2A6,6,0,0,0,16,16a6.2,6.2,0,0,0,5.7-4H41.8A2.1,2.1,0,0,0,44,10,2.1,2.1,0,0,0,41.8,8ZM16,12a2,2,0,1,1,2-2A2,2,0,0,1,16,12Z",
  fill: "#000000"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M41.8,22H37.7A6.2,6.2,0,0,0,32,18a6,6,0,0,0-5.6,4H6.2a2,2,0,1,0,0,4H26.4A6,6,0,0,0,32,30a6.2,6.2,0,0,0,5.7-4h4.1a2,2,0,1,0,0-4ZM32,26a2,2,0,1,1,2-2A2,2,0,0,1,32,26Z",
  fill: "#000000"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M41.8,36H24.7A6.2,6.2,0,0,0,19,32a6,6,0,0,0-5.6,4H6.2a2,2,0,1,0,0,4h7.2A6,6,0,0,0,19,44a6.2,6.2,0,0,0,5.7-4H41.8a2,2,0,1,0,0-4ZM19,40a2,2,0,1,1,2-2A2,2,0,0,1,19,40Z",
  fill: "#000000"
}))));
const PasswordIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("g", {
  id: "SVGRepo_bgCarrier",
  strokeWidth: "0"
}), /*#__PURE__*/React__default["default"].createElement("g", {
  id: "SVGRepo_tracerCarrier",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("g", {
  id: "SVGRepo_iconCarrier"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M21 8.5V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V11C3 12.1046 3.89543 13 5 13H10.875M19 14V12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12V14M14 20H20C20.5523 20 21 19.5523 21 19V15C21 14.4477 20.5523 14 20 14H14C13.4477 14 13 14.4477 13 15V19C13 19.5523 13.4477 20 14 20Z",
  stroke: "#000000",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("circle", {
  cx: "7.5",
  cy: "8.5",
  r: "1.5",
  fill: "#000000"
}), /*#__PURE__*/React__default["default"].createElement("circle", {
  cx: "12",
  cy: "8.5",
  r: "1.5",
  fill: "#000000"
})));
const GithubIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  viewBox: "0 0 20 20",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  fill: "#000000"
}, /*#__PURE__*/React__default["default"].createElement("g", {
  id: "SVGRepo_bgCarrier",
  strokeWidth: "0"
}), /*#__PURE__*/React__default["default"].createElement("g", {
  id: "SVGRepo_tracerCarrier",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("g", {
  id: "SVGRepo_iconCarrier"
}, /*#__PURE__*/React__default["default"].createElement("title", null, "github [#142]"), /*#__PURE__*/React__default["default"].createElement("desc", null, "Created with Sketch."), /*#__PURE__*/React__default["default"].createElement("defs", null), /*#__PURE__*/React__default["default"].createElement("g", {
  id: "Page-1",
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default["default"].createElement("g", {
  id: "Dribbble-Light-Preview",
  transform: "translate(-140.000000, -7559.000000)",
  fill: "#000000"
}, /*#__PURE__*/React__default["default"].createElement("g", {
  id: "icons",
  transform: "translate(56.000000, 160.000000)"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399",
  id: "github-[#142]"
}))))));
const SearchIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 20 20",
  strokeWidth: "1.5",
  stroke: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"
}));
const WebsiteIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  fill: "#000000",
  viewBox: "0 0 512 512",
  version: "1.1",
  xmlSpace: "preserve",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  stroke: "#000000",
  strokeWidth: "0.00512"
}, /*#__PURE__*/React__default["default"].createElement("g", {
  id: "SVGRepo_bgCarrier",
  strokeWidth: "0"
}), /*#__PURE__*/React__default["default"].createElement("g", {
  id: "SVGRepo_tracerCarrier",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("g", {
  id: "SVGRepo_iconCarrier"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M418.275,146h-46.667 c-5.365-22.513-12.324-43.213-20.587-61.514c15.786,8.776,30.449,19.797,43.572,32.921C403.463,126.277,411.367,135.854,418.275,146 z M452,256c0,17.108-2.191,33.877-6.414,50h-64.034c1.601-16.172,2.448-32.887,2.448-50s-0.847-33.828-2.448-50h64.034 C449.809,222.123,452,238.892,452,256z M256,452c-5.2,0-21.048-10.221-36.844-41.813c-6.543-13.087-12.158-27.994-16.752-44.187 h107.191c-4.594,16.192-10.208,31.1-16.752,44.187C277.048,441.779,261.2,452,256,452z M190.813,306 c-1.847-16.247-2.813-33.029-2.813-50s0.966-33.753,2.813-50h130.374c1.847,16.247,2.813,33.029,2.813,50s-0.966,33.753-2.813,50 H190.813z M60,256c0-17.108,2.191-33.877,6.414-50h64.034c-1.601,16.172-2.448,32.887-2.448,50s0.847,33.828,2.448,50H66.414 C62.191,289.877,60,273.108,60,256z M256,60c5.2,0,21.048,10.221,36.844,41.813c6.543,13.087,12.158,27.994,16.752,44.187H202.404 c4.594-16.192,10.208-31.1,16.752-44.187C234.952,70.221,250.8,60,256,60z M160.979,84.486c-8.264,18.301-15.222,39-20.587,61.514 H93.725c6.909-10.146,14.812-19.723,23.682-28.593C130.531,104.283,145.193,93.262,160.979,84.486z M93.725,366h46.667 c5.365,22.513,12.324,43.213,20.587,61.514c-15.786-8.776-30.449-19.797-43.572-32.921C108.537,385.723,100.633,376.146,93.725,366z M351.021,427.514c8.264-18.301,15.222-39,20.587-61.514h46.667c-6.909,10.146-14.812,19.723-23.682,28.593 C381.469,407.717,366.807,418.738,351.021,427.514z"
})));
const IdeaIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  fill: "#ffffff",
  viewBox: "0 0 915 915",
  version: "1.1",
  xmlSpace: "preserve",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  stroke: "#000000",
  strokeWidth: "0.00512"
}, /*#__PURE__*/React__default["default"].createElement("g", {
  id: "SVGRepo_bgCarrier",
  strokeWidth: "0"
}), /*#__PURE__*/React__default["default"].createElement("g", {
  id: "SVGRepo_tracerCarrier",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("g", {
  id: "SVGRepo_iconCarrier"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M457.45,0c-154.7,0-280.1,125.4-280.1,280.1c0,176.4,167.6,378.4,167.6,378.4h234.9c0,0,157.801-202,157.801-378.4 C737.549,125.4,612.15,0,457.45,0z M540.15,472.399c-14.102,14.801-33.102,25-54.9,29.7v7.5c0,13-10.6,23.601-23.6,23.601H451.45 c-13,0-23.6-10.601-23.6-23.601v-8c-11.5-2.5-22.301-6.3-32.301-11.5c-13.3-6.8-24.8-17.899-34.3-32.899 c-6.3-9.9-10.899-21.5-13.7-34.4c-1.399-6.3-0.1-12.6,3.5-18c3.601-5.3,9.301-9,15.601-10.1l10.2-1.801 c1.3-0.199,2.699-0.399,4.1-0.399c10.8,0,20.2,7.3,22.8,17.8c2.7,10.6,6.3,18.8,10.7,24.5c9.9,12.7,26.4,20.3,44,20.3 c3,0,6-0.2,8.9-0.7c12.6-1.899,23.699-7.8,31.5-16.6c8.199-9.3,12.4-21.2,12.4-35.2c0-11.7-2.801-21.1-8.301-27.899 c-10.6-13-29.299-18.601-46.2-22.5c-22.3-5.101-42.5-10.2-62.899-21.601c-13.601-7.6-24.101-18.2-31.5-31.6 c-7.301-13.3-10.9-28.4-10.9-45.1c0-29.6,10.7-54,31.8-72.5c11.601-10.1,27-17.4,44.7-21.2v-11.5c0-13,10.6-23.6,23.6-23.6h10.201 c13,0,23.6,10.6,23.6,23.6v11.8c16.4,3.7,30.699,10.4,41.699,19.5c12.602,10.5,21.9,23.9,27.602,39.8 c2.398,6.6,1.699,13.8-1.9,19.9s-9.801,10.2-16.801,11.3l-9.9,1.5c-1.199,0.2-2.299,0.3-3.5,0.3c-10.1,0-19.1-6.4-22.299-16 c-2.201-6.4-5.1-11.7-8.6-15.6c-8.102-9.1-21-14.3-35.3-14.3c-15.4,0-29.801,5.9-38.601,15.8c-7.1,8-10.6,17.3-10.6,28.3 c0,10.9,3,20,8.899,27.1c12.801,15.4,34.7,19.8,55.9,24.1c13.1,2.6,26.6,5.4,38.6,10.6c12.801,5.6,23.5,12.7,31.701,20.9 c8.299,8.3,14.799,18.3,19.199,29.7c4.4,11.301,6.6,23.601,6.6,36.7C567.85,428.8,558.549,453.1,540.15,472.399z"
}), /*#__PURE__*/React__default["default"].createElement("rect", {
  x: "339.45",
  y: "691.6",
  width: "235.9",
  height: "60.9"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M339.45,798.1L339.45,798.1c0.6,64.7,53.1,116.9,117.9,116.9c64.8,0,117.4-52.2,117.9-116.9l0,0v-13.7h-235.8V798.1z"
})));
const HomeIcon2 = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: `${className} icon`,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 179.1 145"
}, /*#__PURE__*/React__default["default"].createElement("g", {
  id: "home-anm"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  strokeLinejoin: "round",
  strokeLinecap: "round",
  d: "M70.5,80.1h40.7"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M35,64v80"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M145.1,143V63"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M24.9,70l65.7-50.7L156.3,70"
})), /*#__PURE__*/React__default["default"].createElement("path", {
  strokeLinejoin: "round",
  d: "M145.1,117.6v33.1c0,1.5-1.2,2.8-2.8,2.8h-28.4c-1.5,0-2.8-1.2-2.8-2.8V126\r c0-11.3-9.2-20.5-20.5-20.5c-11.3,0-20.5,9.2-20.5,20.5v27.5h16h-50.5c-1.5,0-2.8-1.2-2.8-2.8v-34.2"
}));
const StrategyIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: `${className} icon`,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 179.1 145"
}, /*#__PURE__*/React__default["default"].createElement("g", {
  id: "strategy-anm"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M84.1,50.4L72,64.7c-2,2.4-5.2,3.5-8.3,3l-40.1-6.8c-3.2-0.6-5.8,2.4-4.8,5.5L42,\r 127.9c1.2,3.6,4.6,6.1,8.4,6.1h81.6c3.9,0,7.3-2.6,8.5-6.3l21.5-61.4c0.9-3-1.7-6-4.9-5.4\r l-38.3,6.7c-3,0.6-6.2-0.5-8.2-2.8L97.4,50.2C93.8,46.3,87.6,46.3,84.1,50.4z"
})), /*#__PURE__*/React__default["default"].createElement("path", {
  strokeLinecap: "round",
  d: "M38.8,153.5h105.5"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  strokeLinecap: "round",
  d: "M66.8,112.5h49.5"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  id: "strategy-cir1",
  strokeWidth: "0",
  fill: "currentColor",
  d: "M32.4,37.5c0,5.8-4.7,10.5-10.5,10.5S11.4,43.3,11.4,37.5S16.1,27,\r 21.9,27S32.4,31.7,32.4,37.5z"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  id: "strategy-cir2",
  strokeWidth: "0",
  fill: "currentColor",
  d: "M102.3,23.5c0,5.8-4.7,10.5-10.5,10.5S81.4,29.3,81.4,23.5S86,13,\r 91.8,13S102.3,17.7,102.3,23.5z"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  id: "strategy-cir3",
  strokeWidth: "0",
  fill: "currentColor",
  d: "M169.6,37.5c0,5.8-4.7,10.5-10.5,10.5s-10.5-4.7-10.5-10.5S153.3,\r 27,159.1,27S169.6,31.7,169.6,37.5z"
}));
const PeriodIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: `${className} icon`,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 179.1 145"
}, /*#__PURE__*/React__default["default"].createElement("g", {
  id: "period-cir"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  fill: "currentColor",
  strokeWidth: "0",
  d: "M96.5,141.7c0,3.9-3.1,7-7,7s-7-3.1-7-7s3.1-7,7-7S96.5,137.8,96.5,141.7z"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  fill: "currentColor",
  strokeWidth: "0",
  d: "M78.2,126.7c0,3.9-3.1,7-7,7s-7-3.1-7-7c0-3.9,3.1-7,7-7S78.2,122.8,78.2,126.7z"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  fill: "currentColor",
  strokeWidth: "0",
  d: "M110.6,120.5c0,3.9-3.1,7-7,7s-7-3.1-7-7s3.1-7,7-7S110.6,116.6,110.6,120.5z"
})), /*#__PURE__*/React__default["default"].createElement("g", {
  id: "period-anm"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  strokeLinecap: "round",
  d: "M30.8,24.7h118.3 M117.3,71.2l9.7-6.7c0.7-0.4,1.1-1.1,1.1-1.9V24.7H50v37.8"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  strokeLinecap: "round",
  d: "M149.4,153.3H30.6 M75.5,90.7l-23.1,21.2c-1.6,1.4-2.4,3.4-2.4,\r 5.6v35.9h78.1V113"
}), /*#__PURE__*/React__default["default"].createElement("g", {
  id: "period-line"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  strokeLinecap: "round",
  d: "M50,62.5l40,44.2"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  strokeLinecap: "round",
  d: "M128.1,111.7L95.2,73.4"
}))));
const SecurityIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: `${className} icon`,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 179.1 145"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  strokeLinecap: "round",
  d: "M94,139c-4.8,1.3-8.8,1.7-11.4,1.8c0,0-18.3,1.1-36.9-11.6c-1.9-1.3-4.7-3.2-7.8-6.2\r c-1.7-1.6-2.9-2.9-3.4-3.6c0,0-3.6-4.2-6.1-8.6c-4.6-8.4-5.4-18.9-5.5-21l0,0V75.5v-39c0-0.7,0.5-1.3,\r 1.2-1.5l58-14.2c0.2-0.1,0.5-0.1,0.7,0l57.9,14.7c0.7,0.2,1.1,0.8,1.1,1.5v29.7"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  id: "security-cir",
  strokeLinecap: "round",
  d: "M158.3,120.7c0,18.3-14.8,33.1-33.1,33.1s-33.1-14.8-33.1-33.1s14.8-33.1,\r 33.1-33.1S158.3,102.4,158.3,120.7z"
}), /*#__PURE__*/React__default["default"].createElement("g", {
  id: "security-strok"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  strokeLinecap: "round",
  d: "M151.1,104.5l-25,25c-1.3,1.3-3.5,1.3-4.9,0l-9.1-9.1"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  strokeLinecap: "round",
  d: "M82.6,43L23.1,62.3"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  strokeLinecap: "round",
  d: "M82.6,68.4L23.1,87.6"
})));
const SettingsIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: `${className} icon`,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 179.1 145"
}, /*#__PURE__*/React__default["default"].createElement("circle", {
  cx: "90.5",
  cy: "90.2",
  r: "19.7"
}), /*#__PURE__*/React__default["default"].createElement("g", {
  id: "settings-anm"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  strokeLinejoin: "round",
  d: "M144.7,73.8l-6.2-1c-0.6-1.5-1.2-3-1.9-4.5l3.6-5.1c3.2-4.4,2.7-10.5-1.2-14.3\r l-7.4-7.4c-2.1-2.1-4.9-3.3-7.8-3.3c-2.3,0-4.5,0.7-6.4,2.1l-5.1,3.6c-1.6-0.7-3.2-1.4-4.8-2l-1-6.1\r c-0.9-5.4-5.5-9.3-10.9-9.3H85.1c-5.4,0-10,3.9-10.9,9.2L73.1,42c-1.5,0.6-3,1.2-4.5,1.9l-5-3.6\r c-1.9-1.4-4.1-2.1-6.5-2.1c-3,0-5.8,1.2-7.8,3.3l-7.4,7.4c-3.8,3.8-4.3,9.8-1.2,14.3l3.7,5.2c-0.7,\r 1.5-1.3,3-1.8,4.5l-6.1,1c-5.4,0.9-9.3,5.5-9.3,10.9v10.5c0,5.4,3.9,10,9.2,10.9l6.3,\r 1.1c0.6,1.5,1.2,3,1.9,4.5l-3.6,5c-3.2,4.4-2.7,10.5,1.2,14.3l7.4,7.4c2.1,2.1,4.9,3.3,7.8,\r 3.3c2.3,0,4.5-0.7,6.4-2.1L69,136c1.4,0.6,2.8,1.2,4.2,1.7l1,6.2c0.9,5.4,5.5,9.3,10.9,\r 9.3h10.5c5.4,0,10-3.9,10.9-9.2l1-6.2c1.5-0.6,3-1.2,4.5-1.9l5.1,3.6c1.9,1.4,4.1,2.1,6.5,\r 2.1c3,0,5.7-1.2,7.8-3.3l7.4-7.4c3.8-3.8,4.3-9.8,1.2-14.3l-3.6-5.1c0.7-1.5,1.3-3,1.9-4.5\r l6.2-1c5.4-0.9,9.3-5.5,9.3-10.9V84.8C153.9,79.3,150.1,74.7,144.7,73.8z"
})));
const MenuIcon3 = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "2",
  d: "M4 6h16M4 12h8m-8 6h16"
}));
const SearchIcon2 = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "2",
  d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
}));
const UserIcon2 = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  fill: "currentColor",
  stroke: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M437.02 330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521 243.251 404 198.548 404 148 404 66.393 337.607 0 256 0S108 66.393 108 148c0 50.548 25.479 95.251 64.262 121.962-36.21 12.495-69.398 33.136-97.281 61.018C26.629 379.333 0 443.62 0 512h40c0-119.103 96.897-216 216-216s216 96.897 216 216h40c0-68.38-26.629-132.667-74.98-181.02zM256 256c-59.551 0-108-48.448-108-108S196.449 40 256 40s108 48.448 108 108-48.449 108-108 108z"
}));
const CartIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 208.955 208.955"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M190.85 200.227L178.135 58.626a7.5 7.5 0 00-7.47-6.829h-26.221V39.971c0-22.04-17.93-39.971-39.969-39.971-22.038 0-39.966 17.931-39.966 39.971v11.826H38.27a7.5 7.5 0 00-7.47 6.829L18.035 200.784a7.5 7.5 0 007.47 8.17h157.946a7.5 7.5 0 007.399-8.727zM79.509 39.971c0-13.769 11.2-24.971 24.967-24.971 13.768 0 24.969 11.202 24.969 24.971v11.826H79.509V39.971zm-45.8 153.984L45.127 66.797h19.382v13.412a7.5 7.5 0 007.5 7.5 7.5 7.5 0 007.5-7.5V66.797h49.936v13.412a7.5 7.5 0 007.5 7.5 7.5 7.5 0 007.5-7.5V66.797h19.364l11.418 127.158H33.709z"
}));
const ArrowRightIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  strokeWidth: "1.7",
  stroke: "currentColor",
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  stroke: "none",
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React__default["default"].createElement("line", {
  x1: "-5",
  y1: "12",
  x2: "19",
  y2: "12"
}), /*#__PURE__*/React__default["default"].createElement("line", {
  x1: "15",
  y1: "16",
  x2: "19",
  y2: "12"
}), /*#__PURE__*/React__default["default"].createElement("line", {
  x1: "15",
  y1: "8",
  x2: "19",
  y2: "12"
}));
const ButtonArrowIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "1.2",
  d: "M17 8l4 4m0 0l-4 4m4-4H3"
}));
const CollegeIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-1 0 19 19",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M16.141 7.905c.24.102.24.269 0 .37l-7.204 3.058a1.288 1.288 0 0 1-.874 0L.859 8.276c-.24-.102-.24-.27 0-.371l7.204-3.058a1.287 1.287 0 0 1 .874 0zm-6.833 4.303 3.983-1.69v2.081c0 1.394-2.145 2.524-4.791 2.524s-4.79-1.13-4.79-2.524v-2.082l3.982 1.69a2.226 2.226 0 0 0 1.616 0zm4.94 1.677h1.642v-1.091a.822.822 0 1 0-1.643 0zm.82-3.603a.554.554 0 1 0-.553-.554.554.554 0 0 0 .554.554zm0 1.415a.554.554 0 1 0-.553-.555.554.554 0 0 0 .554.555z"
}));
const BookIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M22 16.7399V4.66994C22 3.46994 21.02 2.57994 19.83 2.67994H19.77C17.67 2.85994 14.48 3.92994 12.7 5.04994L12.53 5.15994C12.24 5.33994 11.76 5.33994 11.47 5.15994L11.22 5.00994C9.44 3.89994 6.26 2.83994 4.16 2.66994C2.97 2.56994 2 3.46994 2 4.65994V16.7399C2 17.6999 2.78 18.5999 3.74 18.7199L4.03 18.7599C6.2 19.0499 9.55 20.1499 11.47 21.1999L11.51 21.2199C11.78 21.3699 12.21 21.3699 12.47 21.2199C14.39 20.1599 17.75 19.0499 19.93 18.7599L20.26 18.7199C21.22 18.5999 22 17.6999 22 16.7399Z",
  stroke: "#292D32",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M12 5.48999V20.49",
  stroke: "#292D32",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M7.75 8.48999H5.5",
  stroke: "#292D32",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M8.5 11.49H5.5",
  stroke: "#292D32",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const ChevronDownIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512.011 512.011",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0\r s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667\r C514.096,145.416,514.096,131.933,505.755,123.592z"
}));
const ChevronUpIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M505.752,358.248L271.085,123.582c-8.331-8.331-21.839-8.331-30.17,0L6.248,358.248c-8.331,8.331-8.331,21.839,0,30.17\r s21.839,8.331,30.17,0L256,168.837l219.582,219.582c8.331,8.331,21.839,8.331,30.17,0S514.083,366.58,505.752,358.248z"
}));
const InstagramIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: `w-4.5 ${className}`,
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",
  fill: "currentColor"
}));
const TwitterIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: `w-4.5 ${className}`,
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z",
  fill: "currentColor"
}));
const LinkedInIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: `w-4.5 ${className}`,
  viewBox: "0 0 448 512",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
  fill: "currentColor"
}));
const WhatsAppIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: `w-4.5 ${className}`,
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z",
  fill: "currentColor"
}));
const HeartIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z",
  stroke: "#000000",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const ForkAndKnifeIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M207.103,23.875v109.219c0,7-5.656,12.641-12.625,12.641h-3.375c-6.969,0-12.641-5.641-12.641-12.641V23.375\r c0-18-12.109-23.375-23.719-23.375s-23.719,5.375-23.719,23.375v109.719c0,7-5.672,12.641-12.641,12.641h-3.375\r c-6.969,0-12.625-5.641-12.625-12.641V23.875c0-32.219-45.938-31.125-45.938,0.359c0,37.703,0,104.297,0,104.297\r c-0.219,57.906,13.625,72.953,36.469,91c18.422,14.531,34.156,22.859,34.156,58.953v232.188h55.344V278.484\r c0-36.094,15.734-44.422,34.156-58.953c22.859-18.047,36.688-33.094,36.469-91c0,0,0-66.594,0-104.297\r C253.04-7.25,207.103-8.344,207.103,23.875z"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M385.228,34.75c-11.75,32.953-45.578,110.156-47.719,178.344c-3.313,105.844,61.547,90.188,62.703,159.531\r v138.688h55.078l0.266,0.688c0,0,0-0.281,0-0.688c0-9.266,0-119.625,0-232.203c0-111.359,0-224.797,0-244.359\r C455.556-5.438,403.524-16.531,385.228,34.75z"
}));
const ClockIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z"
}));
const AppleIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  viewBox: "-1.5 0 20 20",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  fill: "#000000"
}, /*#__PURE__*/React__default["default"].createElement("g", {
  id: "SVGRepo_bgCarrier",
  strokeWidth: "0"
}), /*#__PURE__*/React__default["default"].createElement("g", {
  id: "SVGRepo_tracerCarrier",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("g", {
  id: "SVGRepo_iconCarrier"
}, /*#__PURE__*/React__default["default"].createElement("title", null, "apple [#173]"), /*#__PURE__*/React__default["default"].createElement("desc", null, "Created with Sketch."), /*#__PURE__*/React__default["default"].createElement("g", {
  id: "Page-1",
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default["default"].createElement("g", {
  id: "Dribbble-Light-Preview",
  transform: "translate(-102.000000, -7439.000000)",
  fill: "#ffffff"
}, /*#__PURE__*/React__default["default"].createElement("g", {
  id: "icons",
  transform: "translate(56.000000, 160.000000)"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485",
  id: "apple-[#173]"
}))))));
const GoogleIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-0.5 0 48 48",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24",
  fill: "#FBBC05"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333",
  fill: "#EB4335"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667",
  fill: "#34A853"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24",
  fill: "#4285F4"
}));
const VolumeIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "1.008"
}, /*#__PURE__*/React__default["default"].createElement("polygon", {
  points: "1.75 5.75 1.75 10.25 4.25 10.25 8.25 13.25 8.25 2.75 4.25 5.75"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "m10.75 6.25s1 .5 1 1.75-1 1.75-1 1.75"
}));
const MuteIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "1.008"
}, /*#__PURE__*/React__default["default"].createElement("polygon", {
  points: "1.75 5.75 1.75 10.25 4.25 10.25 8.25 13.25 8.25 2.75 4.25 5.75"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "m14.25 5.75-3.5 4.5m0-4.5 3.5 4.5"
}));
const ChevronLeftIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M15 19L8 12L15 5",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
const BookmarkIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinejoin: "round"
}));
const ChevronRightIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("polyline", {
  fill: "none",
  points: "8.5 5 15.5 12 8.5 19",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2"
}));
const NotificationsIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M11.7258 7.34056C12.1397 7.32632 12.4638 6.97919 12.4495 6.56522C12.4353 6.15125 12.0882 5.8272 11.6742 5.84144L11.7258 7.34056ZM7.15843 11.562L6.40879 11.585C6.40906 11.5938 6.40948 11.6026 6.41006 11.6114L7.15843 11.562ZM5.87826 14.979L6.36787 15.5471C6.38128 15.5356 6.39428 15.5236 6.40684 15.5111L5.87826 14.979ZM5.43951 15.342L5.88007 15.949C5.89245 15.94 5.90455 15.9306 5.91636 15.9209L5.43951 15.342ZM9.74998 17.75C10.1642 17.75 10.5 17.4142 10.5 17C10.5 16.5858 10.1642 16.25 9.74998 16.25V17.75ZM11.7258 5.84144C11.3118 5.8272 10.9647 6.15125 10.9504 6.56522C10.9362 6.97919 11.2602 7.32632 11.6742 7.34056L11.7258 5.84144ZM16.2415 11.562L16.9899 11.6113C16.9905 11.6025 16.9909 11.5938 16.9912 11.585L16.2415 11.562ZM17.5217 14.978L16.9931 15.5101C17.0057 15.5225 17.0187 15.5346 17.0321 15.5461L17.5217 14.978ZM17.9605 15.341L17.4836 15.9199C17.4952 15.9294 17.507 15.9386 17.5191 15.9474L17.9605 15.341ZM13.65 16.25C13.2358 16.25 12.9 16.5858 12.9 17C12.9 17.4142 13.2358 17.75 13.65 17.75V16.25ZM10.95 6.591C10.95 7.00521 11.2858 7.341 11.7 7.341C12.1142 7.341 12.45 7.00521 12.45 6.591H10.95ZM12.45 5C12.45 4.58579 12.1142 4.25 11.7 4.25C11.2858 4.25 10.95 4.58579 10.95 5H12.45ZM9.74998 16.25C9.33577 16.25 8.99998 16.5858 8.99998 17C8.99998 17.4142 9.33577 17.75 9.74998 17.75V16.25ZM13.65 17.75C14.0642 17.75 14.4 17.4142 14.4 17C14.4 16.5858 14.0642 16.25 13.65 16.25V17.75ZM10.5 17C10.5 16.5858 10.1642 16.25 9.74998 16.25C9.33577 16.25 8.99998 16.5858 8.99998 17H10.5ZM14.4 17C14.4 16.5858 14.0642 16.25 13.65 16.25C13.2358 16.25 12.9 16.5858 12.9 17H14.4ZM11.6742 5.84144C8.65236 5.94538 6.31509 8.53201 6.40879 11.585L7.90808 11.539C7.83863 9.27613 9.56498 7.41488 11.7258 7.34056L11.6742 5.84144ZM6.41006 11.6114C6.48029 12.6748 6.08967 13.7118 5.34968 14.4469L6.40684 15.5111C7.45921 14.4656 8.00521 13.0026 7.9068 11.5126L6.41006 11.6114ZM5.38865 14.4109C5.23196 14.5459 5.10026 14.6498 4.96265 14.7631L5.91636 15.9209C6.0264 15.8302 6.195 15.6961 6.36787 15.5471L5.38865 14.4109ZM4.99895 14.735C4.77969 14.8942 4.58045 15.1216 4.43193 15.3617C4.28525 15.5987 4.14491 15.9178 4.12693 16.2708C4.10726 16.6569 4.24026 17.0863 4.63537 17.3884C4.98885 17.6588 5.45464 17.75 5.94748 17.75V16.25C5.78415 16.25 5.67611 16.234 5.60983 16.2171C5.54411 16.2004 5.53242 16.1861 5.54658 16.1969C5.56492 16.211 5.59211 16.2408 5.61004 16.2837C5.62632 16.3228 5.62492 16.3484 5.62499 16.3472C5.62513 16.3443 5.62712 16.3233 5.6414 16.2839C5.65535 16.2454 5.67733 16.1997 5.70749 16.151C5.73748 16.1025 5.77159 16.0574 5.80538 16.0198C5.84013 15.981 5.86714 15.9583 5.88007 15.949L4.99895 14.735ZM5.94748 17.75H9.74998V16.25H5.94748V17.75ZM11.6742 7.34056C13.835 7.41488 15.5613 9.27613 15.4919 11.539L16.9912 11.585C17.0849 8.53201 14.7476 5.94538 11.7258 5.84144L11.6742 7.34056ZM15.4932 11.5127C15.3951 13.0024 15.9411 14.4649 16.9931 15.5101L18.0503 14.4459C17.3105 13.711 16.9199 12.6744 16.9899 11.6113L15.4932 11.5127ZM17.0321 15.5461C17.205 15.6951 17.3736 15.8292 17.4836 15.9199L18.4373 14.7621C18.2997 14.6488 18.168 14.5449 18.0113 14.4099L17.0321 15.5461ZM17.5191 15.9474C17.5325 15.9571 17.5599 15.9802 17.5949 16.0193C17.629 16.0573 17.6634 16.1026 17.6937 16.1514C17.7241 16.2004 17.7463 16.2463 17.7604 16.285C17.7748 16.3246 17.7769 16.3457 17.777 16.3485C17.7771 16.3497 17.7756 16.3238 17.792 16.2844C17.81 16.241 17.8375 16.211 17.856 16.1968C17.8702 16.1859 17.8585 16.2002 17.7925 16.217C17.7259 16.234 17.6174 16.25 17.4535 16.25V17.75C17.9468 17.75 18.4132 17.6589 18.7669 17.3885C19.1628 17.0859 19.2954 16.6557 19.2749 16.2693C19.2562 15.9161 19.1151 15.5972 18.9682 15.3604C18.8194 15.1206 18.6202 14.8936 18.4018 14.7346L17.5191 15.9474ZM17.4535 16.25H13.65V17.75H17.4535V16.25ZM12.45 6.591V5H10.95V6.591H12.45ZM9.74998 17.75H13.65V16.25H9.74998V17.75ZM8.99998 17C8.99998 18.5008 10.191 19.75 11.7 19.75V18.25C11.055 18.25 10.5 17.7084 10.5 17H8.99998ZM11.7 19.75C13.2089 19.75 14.4 18.5008 14.4 17H12.9C12.9 17.7084 12.3449 18.25 11.7 18.25V19.75Z"
}));
const ChevronUpDownIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
}));
const PlusIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M4 12H20M12 4V20",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const TrashIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const CalendarIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React__default["default"].createElement("rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "17",
  rx: "2",
  ry: "2",
  stroke: "currentColor",
  strokeWidth: "2"
}), /*#__PURE__*/React__default["default"].createElement("line", {
  x1: "3",
  y1: "9",
  x2: "21",
  y2: "9",
  stroke: "currentColor",
  strokeWidth: "2"
}), /*#__PURE__*/React__default["default"].createElement("line", {
  x1: "8",
  y1: "4",
  x2: "8",
  y2: "2",
  stroke: "currentColor",
  strokeWidth: "2"
}), /*#__PURE__*/React__default["default"].createElement("line", {
  x1: "16",
  y1: "4",
  x2: "16",
  y2: "2",
  stroke: "currentColor",
  strokeWidth: "2"
}));
const LettzIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "42.135 129.213 281.601 273.175",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("g", null, /*#__PURE__*/React__default["default"].createElement("rect", {
  x: "57.584",
  y: "141.502",
  width: "53.371",
  height: "243.68",
  rx: "3.511",
  ry: "3.511",
  fill: "currentColor"
})), /*#__PURE__*/React__default["default"].createElement("g", null, /*#__PURE__*/React__default["default"].createElement("g", null, /*#__PURE__*/React__default["default"].createElement("rect", {
  x: "58.288",
  y: "331.812",
  width: "251.404",
  height: "54.775",
  rx: "2.809",
  ry: "2.809",
  fill: "currentColor"
}))), /*#__PURE__*/React__default["default"].createElement("rect", {
  x: "124.298",
  y: "143.61",
  width: "182.584",
  height: "54.073",
  rx: "2.809",
  ry: "2.809",
  fill: "currentColor"
}), /*#__PURE__*/React__default["default"].createElement("rect", {
  x: "126.404",
  y: "267.205",
  width: "182.584",
  height: "49.86",
  rx: "3.511",
  ry: "3.511",
  fill: "currentColor"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M306.18 143.609L304.775 198.385C304.775 202.986 125 315.66 125 315.66L125.702 265.098L306.18 143.609Z",
  fill: "currentColor",
  fillRule: "nonzero"
}));
const EditIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2"
}), /*#__PURE__*/React__default["default"].createElement("polygon", {
  fill: "none",
  points: "12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2"
}));
const LocationIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const HomeIcon3 = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React__default["default"].createElement("polyline", {
  points: "21 12 12 3 3 12",
  style: {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M19,10V20.3a.77.77,0,0,1-.83.7H14.3V14.1H9.7V21H5.83A.77.77,0,0,1,5,20.3V10",
  style: {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }
}));
const UserIcon3 = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z",
  stroke: "currentColor",
  strokeWidth: "2"
}), /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round"
}));
const ChatIcon = ({
  className
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: "M7 9H17M7 13H17M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z",
  stroke: "currentColor",
  strokeWidth: "1.464",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

// Styled components
const AccordionWrapper = styled__default["default"].div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
`;
const AccordionHeader = styled__default["default"].div`
  display: flex;
  align-items: center;
  border-left: 8px solid green;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;
const IconContainer$1 = styled__default["default"].div`
  width: 112px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContentContainer$1 = styled__default["default"].div`
  flex-grow: 1;
  padding: 16px;
  
`;
const Title$6 = styled__default["default"].p`
  font-size: 24px;
  font-weight: bold;
  color: #1a202c;
`;
const Subtitle = styled__default["default"].p`
  font-size: 18px;
  font-weight: medium;
  color: #4a5568;
`;
const Institution = styled__default["default"].p`
  font-size: 16px;
  font-weight: medium;
  color: #2d3748;
`;
const GradeContainer = styled__default["default"].div`
  width: 25%;
  text-align: center;
  padding-right: 16px;
`;
const AccordionContent = styled__default["default"].div`
  max-height: ${props => props.isOpen ? '240px' : '0'};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;
const Description$1 = styled__default["default"].p`
  padding: 24px;
  background-color: #f7fafc;
  border-top: 1px solid #e2e8f0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  color: #4a5568;
`;
function AccordionCard({
  Icon = CollegeIcon,
  title = 'ME',
  subtitle = 'Mechanical Engineering With Business',
  institution = 'University College Dublin',
  grade = '1:1',
  gpa = '3.72',
  description = 'This program combines advanced mechanical engineering concepts with business strategies, providing a comprehensive understanding that bridges technical and commercial domains. Key modules included Thermodynamics, Fluid Mechanics, Project Management, and Business Analytics. Achievements include leading a team project on sustainable energy solutions that received commendation from faculty.'
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return /*#__PURE__*/React__default["default"].createElement(AccordionWrapper, null, /*#__PURE__*/React__default["default"].createElement(AccordionHeader, {
    onClick: toggleAccordion
  }, /*#__PURE__*/React__default["default"].createElement(IconContainer$1, null, /*#__PURE__*/React__default["default"].createElement(Icon, {
    size: 80,
    color: "#38a169"
  })), /*#__PURE__*/React__default["default"].createElement(ContentContainer$1, null, /*#__PURE__*/React__default["default"].createElement(Title$6, null, title), /*#__PURE__*/React__default["default"].createElement(Subtitle, null, subtitle), /*#__PURE__*/React__default["default"].createElement(Institution, null, institution)), /*#__PURE__*/React__default["default"].createElement(GradeContainer, null, /*#__PURE__*/React__default["default"].createElement("p", null, "Grade: ", grade), /*#__PURE__*/React__default["default"].createElement("p", null, "GPA: ", gpa), isOpen ? /*#__PURE__*/React__default["default"].createElement(ChevronUpIcon, {
    size: 24,
    color: "#718096"
  }) : /*#__PURE__*/React__default["default"].createElement(ChevronDownIcon, {
    size: 24,
    color: "#718096"
  }))), /*#__PURE__*/React__default["default"].createElement(AccordionContent, {
    isOpen: isOpen
  }, /*#__PURE__*/React__default["default"].createElement(Description$1, null, description)));
}

function AppCard({
  image,
  name,
  id,
  githubUrl,
  url
}) {
  const [hovered, setHovered] = React.useState(false);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: `w-full aspect-square transition-all duration-300 rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden transform bg-white ${hovered ? "scale-105 shadow-xl" : "scale-100"}`,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "h-[75%] relative"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: `absolute inset-0 transition-opacity duration-300 ${hovered ? "opacity-0" : "opacity-100"} flex justify-center items-center`
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: image,
    alt: "profile",
    className: "w-full h-full object-cover rounded-t-xl"
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: `absolute inset-0 transition-all duration-300 transform ${hovered ? "opacity-100 scale-100" : "opacity-0 scale-95"} flex flex-col justify-center items-center bg-white bg-opacity-90 p-4 rounded-t-xl`
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "grid w-full gap-2 grid-cols-2"
  }, /*#__PURE__*/React__default["default"].createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "flex flex-col items-center p-2 border rounded-lg hover:bg-blue-100 transition-colors"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: "https://firebasestorage.googleapis.com/v0/b/stackgallery-fa1bb.appspot.com/o/svg%2Finternet-svgrepo-com.svg?alt=media&token=e42ec486-bc63-422e-a172-5e505156fe93",
    className: "w-6 h-6 mb-1"
  }), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "text-sm"
  }, "App")), /*#__PURE__*/React__default["default"].createElement("a", {
    href: githubUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "flex flex-col items-center p-2 border rounded-lg hover:bg-blue-100 transition-colors"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: "https://firebasestorage.googleapis.com/v0/b/stackgallery-fa1bb.appspot.com/o/svg%2Fgithub-142-svgrepo-com.svg?alt=media&token=e2051d67-b0a4-440a-877e-c153fa692f07",
    className: "w-6 h-6 mb-1"
  }), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "text-sm"
  }, "Code")), /*#__PURE__*/React__default["default"].createElement(reactRouterDom.Link, {
    to: `/stacklist/${id}`,
    className: "flex flex-col items-center p-2 border rounded-lg hover:bg-blue-100 transition-colors"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: "https://firebasestorage.googleapis.com/v0/b/stackgallery-fa1bb.appspot.com/o/svg%2Fstack2-svgrepo-com.svg?alt=media&token=c4331c1b-d147-4435-bbfe-4e75ed418b3c",
    className: "w-6 h-6 mb-1"
  }), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "text-sm"
  }, "Stack")), /*#__PURE__*/React__default["default"].createElement(reactRouterDom.Link, {
    to: `/notes/${id}`,
    className: "flex flex-col items-center p-2 border rounded-lg hover:bg-blue-100 transition-colors"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: "https://firebasestorage.googleapis.com/v0/b/stackgallery-fa1bb.appspot.com/o/svg%2Fms-onenote-svgrepo-com.svg?alt=media&token=eecb9f71-21a6-43b5-b798-7446f7bee4f7",
    className: "w-6 h-6 mb-1"
  }), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "text-sm"
  }, "Notes"))))), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "text-center text-lg font-bold text-gray-800 mt-2"
  }, name));
}

// src/components/Drawers/BottomDrawer.jsx
const DrawerContainer$1 = styled__default["default"].div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: opacity ${({
  transitionDuration
}) => transitionDuration}ms ease-in-out;
  opacity: ${({
  isOpen
}) => isOpen ? "1" : "0"};
  pointer-events: ${({
  isOpen
}) => isOpen ? "auto" : "none"};
`;
const BackgroundOverlay = styled__default["default"].div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity ${({
  transitionDuration
}) => transitionDuration}ms ease-in-out;
  opacity: ${({
  isOpen
}) => isOpen ? "1" : "0"};
`;
const Drawer$1 = styled__default["default"].div`
  width: 100%;
  max-width: ${({
  maxWidth
}) => maxWidth};
  height: ${({
  autoHeight,
  height
}) => autoHeight ? "auto" : height};
  background-color: white;
  ${({
  noRoundedCorners
}) => noRoundedCorners ? styled.css`
          border-radius: 0;
        ` : styled.css`
          border-radius: 16px 16px 0 0;
        `}
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transform: ${({
  isOpen
}) => isOpen ? "translateY(0)" : "translateY(100%)"};
  transition: transform ${({
  transitionDuration
}) => transitionDuration}ms ease-in-out,
    opacity ${({
  transitionDuration
}) => transitionDuration}ms ease-in-out;
  opacity: ${({
  isOpen
}) => isOpen ? "1" : "0"};
  display: flex;
  flex-direction: column;
`;
const Handle = styled__default["default"].div`
  width: 48px;
  height: 4px;
  background-color: #d1d5db;
  border-radius: 9999px;
  margin: 8px auto;
  display: ${({
  hideHandle
}) => hideHandle ? "none" : "block"};
`;
const DrawerContent$1 = styled__default["default"].div`
  flex: 1;
  overflow-y: ${({
  autoHeight
}) => autoHeight ? "visible" : "auto"};
`;
function BottomDrawer({
  isOpen,
  onClose,
  children,
  transitionDuration = 300,
  height = "80vh",
  autoHeight = false,
  maxWidth = "600px",
  hideHandle = false,
  // New prop to hide handle
  noRoundedCorners = false // New prop to remove rounded corners
}) {
  const drawerRef = React.useRef();

  // Close the drawer when clicking outside of it
  React.useEffect(() => {
    const handleClickOutside = event => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);
  return /*#__PURE__*/ReactDOM.createPortal(/*#__PURE__*/React__default["default"].createElement(DrawerContainer$1, {
    isOpen: isOpen,
    transitionDuration: transitionDuration
  }, /*#__PURE__*/React__default["default"].createElement(BackgroundOverlay, {
    isOpen: isOpen,
    onClick: onClose,
    transitionDuration: transitionDuration
  }), /*#__PURE__*/React__default["default"].createElement(Drawer$1, {
    ref: drawerRef,
    isOpen: isOpen,
    transitionDuration: transitionDuration,
    height: height,
    autoHeight: autoHeight,
    maxWidth: maxWidth,
    noRoundedCorners: noRoundedCorners // Pass the new prop
  }, /*#__PURE__*/React__default["default"].createElement(Handle, {
    hideHandle: hideHandle
  }), " ", /*#__PURE__*/React__default["default"].createElement(DrawerContent$1, {
    autoHeight: autoHeight
  }, children))), document.body);
}

// Styled Components
const BottomNavContainer = styled__default["default"].nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  z-index: 40;
`;
const NavItem = styled__default["default"](reactRouterDom.NavLink)`
  position: relative;
  color: #6b7280;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;

  &.active {
    color: #a855f7;
  }


  svg {
    width: 24px;
    height: 24px;
    margin-bottom: 0.25rem;
  }
`;
const NotificationDot = styled__default["default"].span`
  position: absolute;
  top: 4px;
  right: 0;
  width: 8px;
  height: 8px;
  background-color: red;
  border-radius: 50%;
`;

// Component
const BottomNav = ({
  items
}) => {
  return /*#__PURE__*/React__default["default"].createElement(BottomNavContainer, null, items.map(({
    text,
    icon: Icon,
    path,
    hasNotification
  }, index) => /*#__PURE__*/React__default["default"].createElement(NavItem, {
    key: index,
    to: path
  }, /*#__PURE__*/React__default["default"].createElement(Icon, null), hasNotification && /*#__PURE__*/React__default["default"].createElement(NotificationDot, null), text)));
};

// IMPORTS

// CREATE FUNCTION
function CV() {
  // STATE VARIABLES

  // HTML
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("head", null), /*#__PURE__*/React__default["default"].createElement("body", null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React__default["default"].createElement(AccordionCard, {
    description: "This program combines advanced mechanical engineering concepts with business strategies, providing a comprehensive understanding that bridges technical and commercial domains.",
    gpa: "3.68",
    grade: "1:1",
    institution: "University College Dublin",
    subtitle: "Mechanical Engineering With Business",
    title: "ME"
  }), /*#__PURE__*/React__default["default"].createElement(AccordionCard, {
    description: "This program combines advanced mechanical engineering concepts with business strategies, providing a comprehensive understanding that bridges technical and commercial domains.",
    gpa: "3.72",
    grade: "1:1",
    institution: "University College Dublin",
    subtitle: "Mechanical Engineering With Business",
    title: "BSc"
  }), /*#__PURE__*/React__default["default"].createElement(AccordionCard, {
    description: "Focused on AI development, covering machine learning, neural networks, and advanced algorithms. Completed a capstone project on reinforcement learning applied to robotics.",
    gpa: "4.0",
    grade: "Summa Cum Laude",
    icon: () => {},
    institution: "Massachusetts Institute of Technology",
    subtitle: "Leaving Certificate",
    title: ""
  })), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(AccordionCard, {
    description: "A two-year program focused on leadership, strategy, and innovation in the business world.",
    gpa: "3.9",
    grade: "Distinction",
    institution: "Harvard Business School",
    subtitle: "MBA",
    title: "Business Administration"
  })))));
}

function Card2() {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "relative w-80 h-48 p-6 rounded-lg shadow-lg bg-gradient-to-tr from-blue-500 to-blue-300 hover:scale-105 cursor-pointer duration-300 hover:-translate-y-2 hover:translate-x-2 group"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute top-3 right-3 w-24 text-white"
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    className: "w-24 h-24",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M21.71,11.29l-9-9a1,1,0,0,0-1.42,0l-9,9a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,13H4v7.3A1.77,1.77,0,0,0,5.83,22H8.5a1,1,0,0,0,1-1V16.1a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1V21a1,1,0,0,0,1,1h2.67A1.77,1.77,0,0,0,20,20.3V13h1a1,1,0,0,0,.92-.62A1,1,0,0,0,21.71,11.29Z"
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute bottom-3 left-3"
  }, /*#__PURE__*/React__default["default"].createElement("h2", {
    className: "text-white text-4xl font-bold"
  }, "Chatgpt")), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute bottom-3 right-3 text-white"
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "w-10 h-10 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:animate-bounce"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M13 5l7 7-7 7M5 5h14M5 5v14"
  }))));
}

const Card3 = ({
  description,
  linkText
}) => {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "absolute top-0 left-0 z-0 h-32 w-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 transition-all duration-500 transform group-hover:scale-[20]"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "relative z-10 mx-auto max-w-md"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "grid h-24 w-24 place-items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 transform group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500"
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    className: "h-12 w-12 text-white transition-all",
    stroke: "currentColor",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "font-medium"
  }, description)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pt-6 text-lg font-semibold leading-7"
  }, /*#__PURE__*/React__default["default"].createElement("p", null, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "text-purple-500 transition-all duration-500 group-hover:text-white"
  }, linkText, " \u2192")))));
};
Card3.propTypes = {
  description: PropTypes__default["default"].string,
  linkText: PropTypes__default["default"].string
};
Card3.defaultProps = {
  description: "Elevate your experience with smoother transitions and vibrant design. Perfect for prototyping and sharing ideas in style.",
  linkText: "Explore Documentation"
};

// Card.jsx
const CardProduct = ({
  image,
  title,
  id,
  price,
  onButtonClick
}) => {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "w-60 h-80 bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "h-48 bg-gray-700 rounded-xl"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: image,
    alt: title,
    className: "w-full h-full object-cover rounded-xl"
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex flex-col gap-4"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex flex-row justify-between"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "text-xl font-bold"
  }, title), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "text-xs text-gray-700"
  }, "ID: ", id)), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "font-bold text-red-600"
  }, "$", price)), /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: onButtonClick,
    className: "hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md"
  }, "Add To Cart")));
};

// Card.jsx
const CardSocial = ({
  id,
  coverPhoto,
  profilePic,
  username,
  categories,
  link,
  status
}) => {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "w-full aspect-[10/3]"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    key: id,
    className: "w-full h-full"
  }, /*#__PURE__*/React__default["default"].createElement(reactRouterDom.Link, {
    to: link,
    className: "relative flex w-full h-full overflow-hidden rounded-xl"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: coverPhoto,
    className: "absolute h-full w-full object-cover",
    alt: "Cover"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex w-[30%] z-10 items-center justify-center"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: profilePic,
    className: "aspect-[1/1] w-[80%] rounded-full border-2 border-white",
    alt: "Profile"
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex w-[60%] flex-col"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex h-[50%]"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex flex-col md:text-xl text-sm font-semibold text-white z-20"
  }, /*#__PURE__*/React__default["default"].createElement("p", null, username), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "font-normal text-xs md:text-lg"
  }, categories))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute bottom-0 h-[50%] w-full bg-gray-500 opacity-50"
  }), status && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute right-2 top-2 bg-white rounded p-1 text-blue-500 text-xs"
  }, status)))));
};

// Styled Components

const Container$4 = styled__default["default"].div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 91.666667%; /* Equivalent to w-11/12 */
  margin: 0 auto;
  user-select: none;
  gap: 1rem;
  max-width: 500px;
`;
const Label$1 = styled__default["default"].label`
  color: #94a3b8; /* Equivalent to text-slate-400 */
  position: relative;
  cursor: pointer;
`;
const HiddenCheckbox = styled__default["default"].input.attrs({
  type: "checkbox"
})`
  height: 1px;
  width: 1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
`;
const StyledSpan = styled__default["default"].span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 3px solid #cbd5e1; /* Equivalent to border-slate-300 */
  background-color: #ffffff; /* bg-white */
  border-radius: 0.5rem; /* rounded-lg */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-lg */
  transition: all 0.2s ease-in-out;
  width: ${({
  width
}) => width};
  height: ${({
  height
}) => height};

  /* Checked State */
  ${HiddenCheckbox}:checked + & {
    border-color: ${({
  color
}) => color || "#3b82f6"}; /* Default to blue-500 */
    box-shadow: 0 4px 6px ${({
  color
}) => color}33; /* 10% opacity */
    color: ${({
  color
}) => color || "#3b82f6"};

    &::before {
      content: '✓';
      position: absolute;
      top: 0.25rem;
      left: 0.25rem;
      width: 1.25rem;
      height: 1.25rem;
      border: 3px solid ${({
  color
}) => color || "#3b82f6"};
      border-radius: 50%;
      background-color: ${({
  color
}) => color || "#3b82f6"};
      opacity: 1;
      transform: scale(1);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-size: 0.75rem;
      transition: all 0.2s ease-in-out;
    }
  }

  /* Hover State */
  &:hover {
    border-color: ${({
  color
}) => color || "#3b82f6"};

    &::before {
      transform: scale(1);
      opacity: 1;
    }
  }

  /* Pseudo-element before */
  &::before {
    content: '';
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    width: 1.25rem;
    height: 1.25rem;
    border: 3px solid ${({
  color
}) => color || "#3b82f6"};
    border-radius: 50%;
    background-color: ${({
  color
}) => color || "#3b82f6"};
    opacity: 0;
    transform: scale(0);
    transition: all 0.2s ease-in-out;
  }

  /* SVG and Label Text */
  > span {
    transition: all 0.2s ease-in-out;
    text-align: center;
    font-size: 0.875rem; /* Equivalent to text-sm */
  }
`;

// Component

const CheckedItem = ({
  label,
  svg,
  onChange,
  checked,
  height = "7rem",
  width = "7rem",
  color = "#3b82f6" // Default to blue-500
}) => {
  return /*#__PURE__*/React__default["default"].createElement(Container$4, null, /*#__PURE__*/React__default["default"].createElement(Label$1, null, /*#__PURE__*/React__default["default"].createElement(HiddenCheckbox, {
    onChange: onChange,
    checked: checked
  }), /*#__PURE__*/React__default["default"].createElement(StyledSpan, {
    height: height,
    width: width,
    color: color
  }, /*#__PURE__*/React__default["default"].createElement("span", null, svg), /*#__PURE__*/React__default["default"].createElement("span", null, label))));
};

// src/components/ConversationItem.jsx

// Styled Components
const ItemWrapper = styled__default["default"](reactRouterDom.Link)`
  display: flex;
  align-items: center;
  height: 100px; /* Equivalent to h-20 */
  padding: 1rem;
  text-decoration: none;
  color: inherit;
  position: relative; /* To position the timestamp */
  &:hover {
    background-color: #f9fafb;
  }
`;
const Avatar = styled__default["default"].img`
  width: 50px;
  height: 50px;
  border-radius: 9999px; /* Equivalent to rounded-full */
  margin-right: 1rem;
`;
const Details = styled__default["default"].div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative; /* To position the timestamp */
`;
const Header$5 = styled__default["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Name = styled__default["default"].span`
  font-size: 1.3rem; /* Equivalent to text-base */
  font-weight: 600; /* Equivalent to font-semibold */
`;
const Timestamp = styled__default["default"].span`
  font-size: 0.75rem; /* Smaller font size */
  color: #9ca3af; /* Equivalent to text-gray-400 */
`;
const LastMessage = styled__default["default"].span`
  font-size: 0.875rem; /* Equivalent to text-sm */
  color: #6b7280; /* Equivalent to text-gray-500 */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
`;

// Helper Function to Format Timestamp
const formatTimestamp = timestamp => {
  if (!timestamp) return '';

  // Convert Firestore Timestamp to Date
  const messageDate = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  const now = new Date();

  // Calculate difference in days
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfMessageDay = new Date(messageDate.getFullYear(), messageDate.getMonth(), messageDate.getDate());
  const diffTime = startOfToday - startOfMessageDay;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays === 0) {
    return 'Today';
  } else if (diffDays === 1) {
    return 'Yesterday';
  } else {
    return `${diffDays} days ago`;
  }
};

// Component
const ConversationItem = ({
  conversation,
  currentUser
}) => {
  // Find the other participant
  const otherParticipant = conversation.participants.find(p => p.uid !== currentUser.uid);
  if (!otherParticipant) {
    return null;
  }

  // Format the timestamp
  const formattedTimestamp = conversation.lastMessage?.timestamp ? formatTimestamp(conversation.lastMessage.timestamp) : '';
  return /*#__PURE__*/React__default["default"].createElement(ItemWrapper, {
    to: `/conversation/${conversation.id}`
  }, /*#__PURE__*/React__default["default"].createElement(Avatar, {
    src: otherParticipant.avatarUrl,
    alt: `${otherParticipant.name}'s avatar`
  }), /*#__PURE__*/React__default["default"].createElement(Details, null, /*#__PURE__*/React__default["default"].createElement(Header$5, null, /*#__PURE__*/React__default["default"].createElement(Name, null, otherParticipant.name), /*#__PURE__*/React__default["default"].createElement(Timestamp, null, formattedTimestamp)), /*#__PURE__*/React__default["default"].createElement(LastMessage, null, conversation.lastMessage.text)));
};

// src/components/ConversationList.js

// Styled Components
const ListWrapper = styled__default["default"].div`
`;
const ConversationList = ({
  conversations,
  currentUser
}) => {
  return /*#__PURE__*/React__default["default"].createElement(ListWrapper, null, conversations.map(conversation => /*#__PURE__*/React__default["default"].createElement(ConversationItem, {
    key: conversation.id,
    conversation: conversation,
    currentUser: currentUser
  })));
};

// CookbookCard.jsx

// Styled Components

const CardContainer$2 = styled__default["default"].div`
  display: flex;
  flex-direction: row;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  background-color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 800px;
  align-items: stretch;
  aspect-ratio: 3 / 1;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);

    img {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const ImageContainer$3 = styled__default["default"].div`
  flex: 0 0 40%;
  height: auto;
  overflow: hidden;
  position: relative;
  aspect-ratio: 4 / 3;

  &::before {
    content: "";
    display: block;
    padding-top: 75%; /* Maintain 4:3 aspect ratio */
    background-color: #e2e8f0; /* Placeholder background color */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
const RecipeImage$1 = styled__default["default"].img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;
`;
const CardContent$2 = styled__default["default"].div`
  flex: 1;
  padding: 1rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CardTitle$1 = styled__default["default"].h3`
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  color: #2d3748;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
const CardSubtitle = styled__default["default"].p`
  font-weight: 500;
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 0.75rem;
`;
const CardDetails = styled__default["default"].div`
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: #718096;
  flex-wrap: wrap;
`;
const CardDetail = styled__default["default"].span`
  background-color: #edf2f7;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`;

// React Component

const CookbookCard = ({
  cookbook,
  onCardClick
}) => {
  const {
    chef,
    cuisine,
    title,
    imageUrl,
    numberOfRecipes
  } = cookbook;
  return /*#__PURE__*/React__default["default"].createElement(CardContainer$2, {
    onClick: onCardClick
  }, /*#__PURE__*/React__default["default"].createElement(ImageContainer$3, null, /*#__PURE__*/React__default["default"].createElement(RecipeImage$1, {
    src: imageUrl,
    alt: title
  })), /*#__PURE__*/React__default["default"].createElement(CardContent$2, null, /*#__PURE__*/React__default["default"].createElement(CardTitle$1, null, title), /*#__PURE__*/React__default["default"].createElement(CardSubtitle, null, "By ", chef), /*#__PURE__*/React__default["default"].createElement(CardDetails, null, /*#__PURE__*/React__default["default"].createElement(CardDetail, null, "Cuisine: ", cuisine), /*#__PURE__*/React__default["default"].createElement(CardDetail, null, "Recipes: ", numberOfRecipes))));
};

const CookbookProfile = ({
  isProfileOwner,
  userData,
  setIsSubscriptionModalOpen,
  openDrawer
}) => {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "relative mt-12 mb-20 flex min-h-screen w-full flex-col items-center"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "aspect-[10/4] w-full relative"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: userData.coverPhoto,
    className: "absolute h-full w-full object-cover",
    alt: "Cover"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "relative flex h-full w-full"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "z-10 flex w-[30%] items-center justify-center"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: userData.profilePic,
    className: "aspect-[1/1] w-[80%] rounded-full border-2 border-white",
    alt: "Profile"
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex w-[40%] flex-col"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex h-[50%]"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "z-20 flex flex-col text-lg font-semibold text-white md:text-xl"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute bottom-2 right-2 flex flex-row gap-2"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "px-1 bg-blue-500 rounded"
  }, "x"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "px-1 bg-blue-300 rounded"
  }, "x"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "px-1 bg-red-500 rounded"
  }, "x"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "px-1 bg-black rounded"
  }, "x")))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "z-20 flex flex-col text-lg font-semibold text-white md:text-xl"
  }, /*#__PURE__*/React__default["default"].createElement("p", null, userData.firstName, " ", userData.lastName), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "text-sm font-normal md:text-lg mb-2"
  }, userData.categories)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute right-0 h-[100%] w-[30%] bg-gray-500 opacity-50"
  })), !isProfileOwner && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: () => setIsSubscriptionModalOpen(true),
    className: "absolute top-2 right-2 flex items-center justify-center rounded bg-white p-1 text-custom-brown shadow-md font-semibold"
  }, "+ Subscribe"), /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: openDrawer,
    className: "absolute top-20 right-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
  }, "Open Drawer"))));
};

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

const CustomButton = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  // Base styles for all buttons
  const baseStyles = 'font-semibold rounded focus:outline-none focus:ring';

  // Styles based on the 'variant' prop
  const variantStyles = {
    primary: 'text-white bg-blue-500 hover:bg-blue-600 focus:ring-blue-300',
    secondary: 'text-gray-800 bg-gray-200 hover:bg-gray-300 focus:ring-gray-300',
    success: 'text-white bg-green-500 hover:bg-green-600 focus:ring-green-300',
    danger: 'text-white bg-red-500 hover:bg-red-600 focus:ring-red-300'
  };

  // Styles based on the 'size' prop
  const sizeStyles = {
    sm: 'text-sm px-2 py-1',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };

  // Combine all class names
  const combinedClassName = classNames__default["default"](baseStyles, variantStyles[variant], sizeStyles[size], className // User-provided class names
  );
  return /*#__PURE__*/React__default["default"].createElement("button", _extends({
    className: combinedClassName
  }, props), children);
};
CustomButton.propTypes = {
  /** The content of the button */
  children: PropTypes__default["default"].node.isRequired,
  /** The variant changes the visual style of the button */
  variant: PropTypes__default["default"].oneOf(['primary', 'secondary', 'success', 'danger']),
  /** The size adjusts the padding and font size */
  size: PropTypes__default["default"].oneOf(['sm', 'md', 'lg']),
  /** Additional class names to customize styling */
  className: PropTypes__default["default"].string
};

// CustomFileUpload.js
const CustomFileUpload = ({
  label,
  onUpload
}) => {
  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      onUpload(fileUrl);
    }
  };
  return /*#__PURE__*/React__default["default"].createElement(FileUploadContainer, null, /*#__PURE__*/React__default["default"].createElement("label", null, label), /*#__PURE__*/React__default["default"].createElement("input", {
    type: "file",
    onChange: handleFileChange
  }));
};
const FileUploadContainer = styled__default["default"].div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

// DeleteModal.js

// Fade-in animation for the modal
const fadeIn$1 = styled.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Slide-down animation for the modal content
const slideDown = styled.keyframes`
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
`;

// Styled Components
const Overlay$3 = styled__default["default"].div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn$1} 0.3s ease-out forwards;
  z-index: 1000; /* Ensure it sits above other elements */
`;
const ModalContainer$1 = styled__default["default"].div`
  background-color: white;
  border-radius: 1.5rem;
  padding: 1.5rem;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  animation: ${slideDown} 0.3s ease-out forwards;
`;
const ModalContent$1 = styled__default["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Icon = styled__default["default"].svg`
  height: 3rem;
  width: 3rem;
  fill: #ef4444; /* Red color for the icon */
  margin-bottom: 1rem;
`;
const Title$5 = styled__default["default"].h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;
const Message$1 = styled__default["default"].p`
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 1.5rem;
`;
const ButtonContainer = styled__default["default"].div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;
const Button$7 = styled__default["default"].button`
  border-radius: 9999px;
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: medium;
  transition: all 0.3s ease-in;
  border: 2px solid;
  cursor: pointer;

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;
const CancelButton$1 = styled__default["default"](Button$7)`
  border-color: #d1d5db;
  background-color: #e5e7eb;
  color: #4b5563;

  &:hover {
    border-color: #9ca3af;
    background-color: #d1d5db;
  }
`;
const ConfirmButton = styled__default["default"](Button$7)`
  border-color: #ef4444;
  background-color: #ef4444;
  color: white;

  &:hover {
    background-color: transparent;
    color: #ef4444;
  }
`;

// DeleteModal Component
const DeleteModal = ({
  onCancel,
  onConfirm,
  title,
  message
}) => {
  // Prevent scrolling when the modal is open
  React__default["default"].useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Render the modal using React Portal
  return /*#__PURE__*/ReactDOM__default["default"].createPortal(/*#__PURE__*/React__default["default"].createElement(Overlay$3, null, /*#__PURE__*/React__default["default"].createElement(ModalContainer$1, null, /*#__PURE__*/React__default["default"].createElement(ModalContent$1, null, /*#__PURE__*/React__default["default"].createElement(Icon, {
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    clipRule: "evenodd",
    d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
    fillRule: "evenodd"
  })), /*#__PURE__*/React__default["default"].createElement(Title$5, null, title || "Are you sure?"), /*#__PURE__*/React__default["default"].createElement(Message$1, null, message || "Do you really want to continue? This process cannot be undone.")), /*#__PURE__*/React__default["default"].createElement(ButtonContainer, null, /*#__PURE__*/React__default["default"].createElement(CancelButton$1, {
    onClick: onCancel
  }, "Cancel"), /*#__PURE__*/React__default["default"].createElement(ConfirmButton, {
    onClick: onConfirm
  }, "Confirm")))), document.getElementById("modal-root"));
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var atoa = function atoa(a, n) {
  return Array.prototype.slice.call(a, n);
};

var si = typeof setImmediate === 'function',
  tick;
if (si) {
  tick = function (fn) {
    setImmediate(fn);
  };
} else if (typeof process !== 'undefined' && process.nextTick) {
  tick = process.nextTick;
} else {
  tick = function (fn) {
    setTimeout(fn, 0);
  };
}
var ticky = tick;

var debounce = function debounce(fn, args, ctx) {
  if (!fn) {
    return;
  }
  ticky(function run() {
    fn.apply(ctx || null, args || []);
  });
};

var emitter = function emitter(thing, options) {
  var opts = options || {};
  var evt = {};
  if (thing === undefined) {
    thing = {};
  }
  thing.on = function (type, fn) {
    if (!evt[type]) {
      evt[type] = [fn];
    } else {
      evt[type].push(fn);
    }
    return thing;
  };
  thing.once = function (type, fn) {
    fn._once = true; // thing.off(fn) still works!
    thing.on(type, fn);
    return thing;
  };
  thing.off = function (type, fn) {
    var c = arguments.length;
    if (c === 1) {
      delete evt[type];
    } else if (c === 0) {
      evt = {};
    } else {
      var et = evt[type];
      if (!et) {
        return thing;
      }
      et.splice(et.indexOf(fn), 1);
    }
    return thing;
  };
  thing.emit = function () {
    var args = atoa(arguments);
    return thing.emitterSnapshot(args.shift()).apply(this, args);
  };
  thing.emitterSnapshot = function (type) {
    var et = (evt[type] || []).slice(0);
    return function () {
      var args = atoa(arguments);
      var ctx = this || thing;
      if (type === 'error' && opts.throws !== false && !et.length) {
        throw args.length === 1 ? args[0] : args;
      }
      et.forEach(function emitter(listen) {
        if (opts.async) {
          debounce(listen, args, ctx);
        } else {
          listen.apply(ctx, args);
        }
        if (listen._once) {
          thing.off(type, listen);
        }
      });
      return thing;
    };
  };
  return thing;
};

var NativeCustomEvent = commonjsGlobal.CustomEvent;
function useNative() {
  try {
    var p = new NativeCustomEvent('cat', {
      detail: {
        foo: 'bar'
      }
    });
    return 'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {}
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

var customEvent = useNative() ? NativeCustomEvent :
// IE >= 9
'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent(type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :
// IE <= 8
function CustomEvent(type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
};

var eventmap = [];
var eventname = '';
var ron = /^on/;
for (eventname in commonjsGlobal) {
  if (ron.test(eventname)) {
    eventmap.push(eventname.slice(2));
  }
}
var eventmap_1 = eventmap;

var doc$1 = commonjsGlobal.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];
if (!commonjsGlobal.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}
var crossvent = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};
function addEventEasy(el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}
function addEventHard(el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}
function removeEventEasy(el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}
function removeEventHard(el, type, fn) {
  var listener = unwrap(el, type, fn);
  if (listener) {
    return el.detachEvent('on' + type, listener);
  }
}
function fabricateEvent(el, type, model) {
  var e = eventmap_1.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }
  function makeClassicEvent() {
    var e;
    if (doc$1.createEvent) {
      e = doc$1.createEvent('Event');
      e.initEvent(type, true, true);
    } else if (doc$1.createEventObject) {
      e = doc$1.createEventObject();
    }
    return e;
  }
  function makeCustomEvent() {
    return new customEvent(type, {
      detail: model
    });
  }
}
function wrapperFactory(el, type, fn) {
  return function wrapper(originalEvent) {
    var e = originalEvent || commonjsGlobal.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault() {
      e.returnValue = false;
    };
    e.stopPropagation = e.stopPropagation || function stopPropagation() {
      e.cancelBubble = true;
    };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}
function wrap(el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}
function unwrap(el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory
    return wrapper;
  }
}
function find(el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}
crossvent.add;
crossvent.remove;
crossvent.fabricate;

var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';
function lookupClass(className) {
  var cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }
  return cached;
}
function addClass(el, className) {
  var current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
  }
}
function rmClass(el, className) {
  el.className = el.className.replace(lookupClass(className), ' ').trim();
}
var classes = {
  add: addClass,
  rm: rmClass
};

var doc = document;
var documentElement = doc.documentElement;
function dragula(initialContainers, options) {
  var len = arguments.length;
  if (len === 1 && Array.isArray(initialContainers) === false) {
    options = initialContainers;
    initialContainers = [];
  }
  var _mirror; // mirror image
  var _source; // source container
  var _item; // item being dragged
  var _offsetX; // reference x
  var _offsetY; // reference y
  var _moveX; // reference move x
  var _moveY; // reference move y
  var _initialSibling; // reference sibling when grabbed
  var _currentSibling; // reference sibling now
  var _copy; // item used for copying
  var _renderTimer; // timer for setTimeout renderMirrorImage
  var _lastDropTarget = null; // last container item was over
  var _grabbed; // holds mousedown context until first mousemove

  var o = options || {};
  if (o.moves === void 0) {
    o.moves = always;
  }
  if (o.accepts === void 0) {
    o.accepts = always;
  }
  if (o.invalid === void 0) {
    o.invalid = invalidTarget;
  }
  if (o.containers === void 0) {
    o.containers = initialContainers || [];
  }
  if (o.isContainer === void 0) {
    o.isContainer = never;
  }
  if (o.copy === void 0) {
    o.copy = false;
  }
  if (o.copySortSource === void 0) {
    o.copySortSource = false;
  }
  if (o.revertOnSpill === void 0) {
    o.revertOnSpill = false;
  }
  if (o.removeOnSpill === void 0) {
    o.removeOnSpill = false;
  }
  if (o.direction === void 0) {
    o.direction = 'vertical';
  }
  if (o.ignoreInputTextSelection === void 0) {
    o.ignoreInputTextSelection = true;
  }
  if (o.mirrorContainer === void 0) {
    o.mirrorContainer = doc.body;
  }
  var drake = emitter({
    containers: o.containers,
    start: manualStart,
    end: end,
    cancel: cancel,
    remove: remove,
    destroy: destroy,
    canMove: canMove,
    dragging: false
  });
  if (o.removeOnSpill === true) {
    drake.on('over', spillOver).on('out', spillOut);
  }
  events();
  return drake;
  function isContainer(el) {
    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
  }
  function events(remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousedown', grab);
    touchy(documentElement, op, 'mouseup', release);
  }
  function eventualMovements(remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
  }
  function movements(remove) {
    var op = remove ? 'remove' : 'add';
    crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
    crossvent[op](documentElement, 'click', preventGrabbed);
  }
  function destroy() {
    events(true);
    release({});
  }
  function preventGrabbed(e) {
    if (_grabbed) {
      e.preventDefault();
    }
  }
  function grab(e) {
    _moveX = e.clientX;
    _moveY = e.clientY;
    var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
    if (ignore) {
      return; // we only care about honest-to-god left clicks and touch events
    }
    var item = e.target;
    var context = canStart(item);
    if (!context) {
      return;
    }
    _grabbed = context;
    eventualMovements();
    if (e.type === 'mousedown') {
      if (isInput(item)) {
        // see also: https://github.com/bevacqua/dragula/issues/208
        item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
      } else {
        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
      }
    }
  }
  function startBecauseMouseMoved(e) {
    if (!_grabbed) {
      return;
    }
    if (whichMouseButton(e) === 0) {
      release({});
      return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
    }

    // truthy check fixes #239, equality fixes #207, fixes #501
    if (e.clientX !== void 0 && Math.abs(e.clientX - _moveX) <= (o.slideFactorX || 0) && e.clientY !== void 0 && Math.abs(e.clientY - _moveY) <= (o.slideFactorY || 0)) {
      return;
    }
    if (o.ignoreInputTextSelection) {
      var clientX = getCoord('clientX', e) || 0;
      var clientY = getCoord('clientY', e) || 0;
      var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
      if (isInput(elementBehindCursor)) {
        return;
      }
    }
    var grabbed = _grabbed; // call to end() unsets _grabbed
    eventualMovements(true);
    movements();
    end();
    start(grabbed);
    var offset = getOffset(_item);
    _offsetX = getCoord('pageX', e) - offset.left;
    _offsetY = getCoord('pageY', e) - offset.top;
    classes.add(_copy || _item, 'gu-transit');
    renderMirrorImage();
    drag(e);
  }
  function canStart(item) {
    if (drake.dragging && _mirror) {
      return;
    }
    if (isContainer(item)) {
      return; // don't drag container itself
    }
    var handle = item;
    while (getParent(item) && isContainer(getParent(item)) === false) {
      if (o.invalid(item, handle)) {
        return;
      }
      item = getParent(item); // drag target should be a top element
      if (!item) {
        return;
      }
    }
    var source = getParent(item);
    if (!source) {
      return;
    }
    if (o.invalid(item, handle)) {
      return;
    }
    var movable = o.moves(item, source, handle, nextEl(item));
    if (!movable) {
      return;
    }
    return {
      item: item,
      source: source
    };
  }
  function canMove(item) {
    return !!canStart(item);
  }
  function manualStart(item) {
    var context = canStart(item);
    if (context) {
      start(context);
    }
  }
  function start(context) {
    if (isCopy(context.item, context.source)) {
      _copy = context.item.cloneNode(true);
      drake.emit('cloned', _copy, context.item, 'copy');
    }
    _source = context.source;
    _item = context.item;
    _initialSibling = _currentSibling = nextEl(context.item);
    drake.dragging = true;
    drake.emit('drag', _item, _source);
  }
  function invalidTarget() {
    return false;
  }
  function end() {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    drop(item, getParent(item));
  }
  function ungrab() {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }
  function release(e) {
    ungrab();
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var clientX = getCoord('clientX', e) || 0;
    var clientY = getCoord('clientY', e) || 0;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && (_copy && o.copySortSource || !_copy || dropTarget !== _source)) {
      drop(item, dropTarget);
    } else if (o.removeOnSpill) {
      remove();
    } else {
      cancel();
    }
  }
  function drop(item, target) {
    var parent = getParent(item);
    if (_copy && o.copySortSource && target === _source) {
      parent.removeChild(_item);
    }
    if (isInitialPlacement(target)) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, target, _source, _currentSibling);
    }
    cleanup();
  }
  function remove() {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var parent = getParent(item);
    if (parent) {
      parent.removeChild(item);
    }
    drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
    cleanup();
  }
  function cancel(revert) {
    if (!drake.dragging) {
      return;
    }
    var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
    var item = _copy || _item;
    var parent = getParent(item);
    var initial = isInitialPlacement(parent);
    if (initial === false && reverts) {
      if (_copy) {
        if (parent) {
          parent.removeChild(_copy);
        }
      } else {
        _source.insertBefore(item, _initialSibling);
      }
    }
    if (initial || reverts) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, parent, _source, _currentSibling);
    }
    cleanup();
  }
  function cleanup() {
    var item = _copy || _item;
    ungrab();
    removeMirrorImage();
    if (item) {
      classes.rm(item, 'gu-transit');
    }
    if (_renderTimer) {
      clearTimeout(_renderTimer);
    }
    drake.dragging = false;
    if (_lastDropTarget) {
      drake.emit('out', item, _lastDropTarget, _source);
    }
    drake.emit('dragend', item);
    _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
  }
  function isInitialPlacement(target, s) {
    var sibling;
    if (s !== void 0) {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = nextEl(_copy || _item);
    }
    return target === _source && sibling === _initialSibling;
  }
  function findDropTarget(elementBehindCursor, clientX, clientY) {
    var target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;
    function accepted() {
      var droppable = isContainer(target);
      if (droppable === false) {
        return false;
      }
      var immediate = getImmediateChild(target, elementBehindCursor);
      var reference = getReference(target, immediate, clientX, clientY);
      var initial = isInitialPlacement(target, reference);
      if (initial) {
        return true; // should always be able to drop it right back where it was
      }
      return o.accepts(_item, target, _source, reference);
    }
  }
  function drag(e) {
    if (!_mirror) {
      return;
    }
    e.preventDefault();
    var clientX = getCoord('clientX', e) || 0;
    var clientY = getCoord('clientY', e) || 0;
    var x = clientX - _offsetX;
    var y = clientY - _offsetY;
    _mirror.style.left = x + 'px';
    _mirror.style.top = y + 'px';
    var item = _copy || _item;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
    if (changed || dropTarget === null) {
      out();
      _lastDropTarget = dropTarget;
      over();
    }
    var parent = getParent(item);
    if (dropTarget === _source && _copy && !o.copySortSource) {
      if (parent) {
        parent.removeChild(item);
      }
      return;
    }
    var reference;
    var immediate = getImmediateChild(dropTarget, elementBehindCursor);
    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else if (o.revertOnSpill === true && !_copy) {
      reference = _initialSibling;
      dropTarget = _source;
    } else {
      if (_copy && parent) {
        parent.removeChild(item);
      }
      return;
    }
    if (reference === null && changed || reference !== item && reference !== nextEl(item)) {
      _currentSibling = reference;
      dropTarget.insertBefore(item, reference);
      drake.emit('shadow', item, dropTarget, _source);
    }
    function moved(type) {
      drake.emit(type, item, _lastDropTarget, _source);
    }
    function over() {
      if (changed) {
        moved('over');
      }
    }
    function out() {
      if (_lastDropTarget) {
        moved('out');
      }
    }
  }
  function spillOver(el) {
    classes.rm(el, 'gu-hide');
  }
  function spillOut(el) {
    if (drake.dragging) {
      classes.add(el, 'gu-hide');
    }
  }
  function renderMirrorImage() {
    if (_mirror) {
      return;
    }
    var rect = _item.getBoundingClientRect();
    _mirror = _item.cloneNode(true);
    _mirror.style.width = getRectWidth(rect) + 'px';
    _mirror.style.height = getRectHeight(rect) + 'px';
    classes.rm(_mirror, 'gu-transit');
    classes.add(_mirror, 'gu-mirror');
    o.mirrorContainer.appendChild(_mirror);
    touchy(documentElement, 'add', 'mousemove', drag);
    classes.add(o.mirrorContainer, 'gu-unselectable');
    drake.emit('cloned', _mirror, _item, 'mirror');
  }
  function removeMirrorImage() {
    if (_mirror) {
      classes.rm(o.mirrorContainer, 'gu-unselectable');
      touchy(documentElement, 'remove', 'mousemove', drag);
      getParent(_mirror).removeChild(_mirror);
      _mirror = null;
    }
  }
  function getImmediateChild(dropTarget, target) {
    var immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === documentElement) {
      return null;
    }
    return immediate;
  }
  function getReference(dropTarget, target, x, y) {
    var horizontal = o.direction === 'horizontal';
    var reference = target !== dropTarget ? inside() : outside();
    return reference;
    function outside() {
      // slower, but able to figure out any position
      var len = dropTarget.children.length;
      var i;
      var el;
      var rect;
      for (i = 0; i < len; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();
        if (horizontal && rect.left + rect.width / 2 > x) {
          return el;
        }
        if (!horizontal && rect.top + rect.height / 2 > y) {
          return el;
        }
      }
      return null;
    }
    function inside() {
      // faster, but only available if dropped inside a child element
      var rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }
      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }
    function resolve(after) {
      return after ? nextEl(target) : target;
    }
  }
  function isCopy(item, container) {
    return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
  }
}
function touchy(el, op, type, fn) {
  var touch = {
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove'
  };
  var pointers = {
    mouseup: 'pointerup',
    mousedown: 'pointerdown',
    mousemove: 'pointermove'
  };
  var microsoft = {
    mouseup: 'MSPointerUp',
    mousedown: 'MSPointerDown',
    mousemove: 'MSPointerMove'
  };
  if (commonjsGlobal.navigator.pointerEnabled) {
    crossvent[op](el, pointers[type], fn);
  } else if (commonjsGlobal.navigator.msPointerEnabled) {
    crossvent[op](el, microsoft[type], fn);
  } else {
    crossvent[op](el, touch[type], fn);
    crossvent[op](el, type, fn);
  }
}
function whichMouseButton(e) {
  if (e.touches !== void 0) {
    return e.touches.length;
  }
  if (e.which !== void 0 && e.which !== 0) {
    return e.which;
  } // see https://github.com/bevacqua/dragula/issues/261
  if (e.buttons !== void 0) {
    return e.buttons;
  }
  var button = e.button;
  if (button !== void 0) {
    // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
    return button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
  }
}
function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset')
  };
}
function getScroll(scrollProp, offsetProp) {
  if (typeof commonjsGlobal[offsetProp] !== 'undefined') {
    return commonjsGlobal[offsetProp];
  }
  if (documentElement.clientHeight) {
    return documentElement[scrollProp];
  }
  return doc.body[scrollProp];
}
function getElementBehindPoint(point, x, y) {
  point = point || {};
  var state = point.className || '';
  var el;
  point.className += ' gu-hide';
  el = doc.elementFromPoint(x, y);
  point.className = state;
  return el;
}
function never() {
  return false;
}
function always() {
  return true;
}
function getRectWidth(rect) {
  return rect.width || rect.right - rect.left;
}
function getRectHeight(rect) {
  return rect.height || rect.bottom - rect.top;
}
function getParent(el) {
  return el.parentNode === doc ? null : el.parentNode;
}
function isInput(el) {
  return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el);
}
function isEditable(el) {
  if (!el) {
    return false;
  } // no parents were editable
  if (el.contentEditable === 'false') {
    return false;
  } // stop the lookup
  if (el.contentEditable === 'true') {
    return true;
  } // found a contentEditable element in the chain
  return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}
function nextEl(el) {
  return el.nextElementSibling || manually();
  function manually() {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}
function getEventHost(e) {
  // on touchend event, we have to use `e.changedTouches`
  // see http://stackoverflow.com/questions/7192563/touchend-event-properties
  // see https://github.com/bevacqua/dragula/issues/34
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}
function getCoord(coord, e) {
  var host = getEventHost(e);
  var missMap = {
    pageX: 'clientX',
    // IE8
    pageY: 'clientY' // IE8
  };
  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }
  return host[coord];
}
var dragula_1 = dragula;

// IMPORTS

// CREATE FUNCTION COMPONENT
function DragAndDrop() {
  // State for tasks in each column
  const [tasks, setTasks] = React.useState({
    toDo: ['Analysis', 'Coding', 'Card Sorting', 'Measure'],
    doing: ['Hypothesis', 'User Testing', 'Prototype'],
    done: ['Ideation', 'Sketches'],
    trash: ['Interviews', 'Research']
  });

  // Refs for each column to initialize Dragula
  const toDoRef = React.useRef(null);
  const doingRef = React.useRef(null);
  const doneRef = React.useRef(null);
  const trashRef = React.useRef(null);

  // useEffect to initialize Dragula after component mounts
  React.useEffect(() => {
    const drake = dragula_1([toDoRef.current, doingRef.current, doneRef.current, trashRef.current], {
      removeOnSpill: false
    }).on('drag', el => {
      el.classList.remove('ex-moved');
    }).on('drop', el => {
      el.classList.add('ex-moved');
    }).on('over', (el, container) => {
      container.classList.add('ex-over');
    }).on('out', (el, container) => {
      container.classList.remove('ex-over');
    });

    // Cleanup on unmount
    return () => {
      drake.destroy();
    };
  }, []);

  // Function to add a new task
  const addTask = () => {
    const inputTask = document.getElementById('taskText').value.trim();
    if (inputTask === '') return;
    setTasks(prevTasks => ({
      ...prevTasks,
      toDo: [...prevTasks.toDo, inputTask]
    }));
    document.getElementById('taskText').value = '';
  };

  // Function to handle Enter key press in input
  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  // Function to delete all tasks in Trash
  const emptyTrash = () => {
    setTasks(prevTasks => ({
      ...prevTasks,
      trash: []
    }));
  };
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("style", null, `
                @import url("https://fonts.googleapis.com/css?family=Arimo:400,700|Roboto+Slab:400,700");

:root {
  font-size: calc(0.5vw + 1vh);
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  min-width: 420px;
}

h1,
h4 {
  font-family: "Arimo", sans-serif;
  line-height: 1.3;
}

header h1 {
  font-size: 2.4rem;
  margin: 4rem auto;
}

span {
  font-size: 3rem;
}

p {
  font-family: "Roboto Slab", serif;
}

a,
a:link,
a:active,
a:visited {
  color: #0066aa;
  text-decoration: none;
  border-bottom: #000013 0.16rem solid;
}

a:hover {
  color: #000013;
  border-bottom: #0066aa 0.16rem solid;
}

header,
footer {
  width: 40rem;
  margin: 2rem auto;
  text-align: center;
}

.add-task-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 20rem;
  height: 5.3rem;
  margin: auto;
  background: #a8a8a8;
  border: #000013 0.2rem solid;
  border-radius: 0.2rem;
  padding: 0.4rem;
}

.main-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.columns {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  margin: 1.6rem auto;
}

.column {
  width: 8.4rem;
  margin: 0 0.6rem;
  background: #a8a8a8;
  border: #000013 0.2rem solid;
  border-radius: 0.2rem;
}

.column-header {
  padding: 0.1rem;
  border-bottom: #000013 0.2rem solid;
}

.column-header h4 {
  text-align: center;
}

.to-do-column .column-header {
  background: #ff872f;
}

.doing-column .column-header {
  background: #13a4d9;
}

.done-column .column-header {
  background: #15d072;
}

.trash-column .column-header {
  background: #ff4444;
}

.task-list {
  min-height: 3rem;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}

.column-button {
  text-align: center;
  padding: 0.1rem;
}

.button {
  font-family: "Arimo", sans-serif;
  font-weight: 700;
  border: #000013 0.14rem solid;
  border-radius: 0.2rem;
  color: #000013;
  padding: 0.6rem 1rem;
  margin-bottom: 0.3rem;
  cursor: pointer;
}

.delete-button {
  background-color: #ff4444;
  margin: 0.1rem auto 0.6rem auto;
}

.delete-button:hover {
  background-color: #fa7070;
}

.add-button {
  background-color: #ffcb1e;
  padding: 0 1rem;
  height: 2.8rem;
  width: 10rem;
  margin-top: 0.6rem;
}

.add-button:hover {
  background-color: #ffdd6e;
}

.task {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  vertical-align: middle;
  list-style-type: none;
  background: #fff;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  margin: 0.4rem;
  height: 4rem;
  border: #000013 0.15rem solid;
  border-radius: 0.2rem;
  cursor: move;
  text-align: center;
  vertical-align: middle;
}

#taskText {
  background: #fff;
  border: #000013 0.15rem solid;
  border-radius: 0.2rem;
  text-align: center;
  font-family: "Roboto Slab", serif;
  height: 4rem;
  width: 7rem;
  margin: auto 0.8rem auto 0.1rem;
}

.task p {
  margin: auto;
}

/* Dragula CSS Release 3.2.0 from: https://github.com/bevacqua/dragula */

.gu-mirror {
  position: fixed !important;
  margin: 0 !important;
  z-index: 9999 !important;
  opacity: 0.8;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
  filter: alpha(opacity=80);
}

.gu-hide {
  display: none !important;
}

.gu-unselectable {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}

.gu-transit {
  opacity: 0.2;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)";
  filter: alpha(opacity=20);
}

                `), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "add-task-container"
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    type: "text",
    maxLength: "12",
    id: "taskText",
    placeholder: "New Task...",
    onKeyDown: handleKeyDown
  }), /*#__PURE__*/React__default["default"].createElement("button", {
    id: "add",
    className: "button add-button",
    onClick: addTask
  }, "Add New Task")), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "main-container"
  }, /*#__PURE__*/React__default["default"].createElement("ul", {
    className: "columns"
  }, /*#__PURE__*/React__default["default"].createElement("li", {
    className: "column to-do-column"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "column-header"
  }, /*#__PURE__*/React__default["default"].createElement("h4", null, "To Do")), /*#__PURE__*/React__default["default"].createElement("ul", {
    className: "task-list",
    id: "to-do",
    ref: toDoRef
  }, tasks.toDo.map((task, index) => /*#__PURE__*/React__default["default"].createElement("li", {
    key: index,
    className: "task"
  }, /*#__PURE__*/React__default["default"].createElement("p", null, task))))), /*#__PURE__*/React__default["default"].createElement("li", {
    className: "column doing-column"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "column-header"
  }, /*#__PURE__*/React__default["default"].createElement("h4", null, "Doing")), /*#__PURE__*/React__default["default"].createElement("ul", {
    className: "task-list",
    id: "doing",
    ref: doingRef
  }, tasks.doing.map((task, index) => /*#__PURE__*/React__default["default"].createElement("li", {
    key: index,
    className: "task"
  }, /*#__PURE__*/React__default["default"].createElement("p", null, task))))), /*#__PURE__*/React__default["default"].createElement("li", {
    className: "column done-column"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "column-header"
  }, /*#__PURE__*/React__default["default"].createElement("h4", null, "Done")), /*#__PURE__*/React__default["default"].createElement("ul", {
    className: "task-list",
    id: "done",
    ref: doneRef
  }, tasks.done.map((task, index) => /*#__PURE__*/React__default["default"].createElement("li", {
    key: index,
    className: "task"
  }, /*#__PURE__*/React__default["default"].createElement("p", null, task))))), /*#__PURE__*/React__default["default"].createElement("li", {
    className: "column trash-column"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "column-header"
  }, /*#__PURE__*/React__default["default"].createElement("h4", null, "Trash")), /*#__PURE__*/React__default["default"].createElement("ul", {
    className: "task-list",
    id: "trash",
    ref: trashRef
  }, tasks.trash.map((task, index) => /*#__PURE__*/React__default["default"].createElement("li", {
    key: index,
    className: "task"
  }, /*#__PURE__*/React__default["default"].createElement("p", null, task)))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "column-button"
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "button delete-button",
    onClick: emptyTrash
  }, "Delete"))))));
}

const FieldContainer$3 = styled__default["default"].div`
  display: flex;
  flex-direction: column;
`;
const FieldName$3 = styled__default["default"].div`
  font-size: 14px; /* Slightly larger for better readability */
  font-weight: 600; /* Makes it bold for emphasis */
  color: #6b7280; /* Tailwind's gray-500 equivalent */
`;
const EditableInput = styled__default["default"].input`
  font-size: 16px;
  font-weight: 500;
  color: #111827; /* Tailwind's gray-900 equivalent */
  background-color: transparent; /* Removes background */
  padding: 4px 0 2px; /* Adds vertical padding, no horizontal padding */
  border: none; /* Removes all borders */
  border-bottom: 2px solid #d1d5db; /* Bottom border only */
  transition: border-color 0.3s ease; /* Smooth transition for focus effect */
  outline: none; /* Removes default focus outline */

  &:focus {
    border-bottom: 2px solid #3b82f6; /* Blue bottom border on focus */
  }

  &:hover {
    border-bottom: 2px solid #6b7280; /* Slightly darker border on hover */
  }
`;
const EditableTextField = ({
  name,
  value,
  onChange
}) => {
  const [currentValue, setCurrentValue] = React.useState(value);
  const handleInputChange = e => {
    const newValue = e.target.value;
    setCurrentValue(newValue);
  };
  const handleBlur = () => {
    onChange(currentValue); // Trigger the updateState function from EditStackedList
  };
  return /*#__PURE__*/React__default["default"].createElement(FieldContainer$3, null, /*#__PURE__*/React__default["default"].createElement(FieldName$3, null, name), /*#__PURE__*/React__default["default"].createElement(EditableInput, {
    value: currentValue,
    onChange: handleInputChange,
    onBlur: handleBlur
  }));
};

const FieldContainer$2 = styled__default["default"].div`
  display: flex;
  align-items: center;
  position: relative;
`;
const FieldName$2 = styled__default["default"].div`
  font-size: 16px;
  font-weight: bold;
  color: #111827;
  margin-right: auto;
`;
const FieldValue$1 = styled__default["default"].div`
  font-size: 16px;
  font-weight: 500;
  color: #6b7280;
  cursor: pointer;
  margin-right: 12px;
`;
const Dropdown = styled__default["default"].select`
  font-size: 16px;
  font-weight: 500;
  color: #111827;
  border: 1px solid #d1d5db; /* Equivalent to border-gray-300 */
  border-radius: 4px;
  padding: 4px 8px;
  width: auto;
  background: white;
  cursor: pointer;
`;
const ChevronWrapper = styled__default["default"].div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #6b7280;
  transition: color 0.3s;

  &:hover {
    color: #4b5563;
  }
`;
const SelectField = ({
  name,
  value,
  options,
  onChange,
  placeholder = 'Select value...'
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);
  const toggleDropdown = () => {
    setIsDropdownOpen(true);
  };
  const handleSelectChange = e => {
    const newValue = e.target.value;
    setIsDropdownOpen(false);
    onChange(newValue);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Find the label for the current value
  const getLabelForValue = val => {
    const option = options.find(opt => typeof opt === 'object' ? opt.value === val : opt === val);
    return typeof option === 'object' ? option.label : option;
  };
  return /*#__PURE__*/React__default["default"].createElement(FieldContainer$2, {
    ref: dropdownRef
  }, /*#__PURE__*/React__default["default"].createElement(FieldName$2, null, name), isDropdownOpen ? /*#__PURE__*/React__default["default"].createElement(Dropdown, {
    value: value,
    onChange: handleSelectChange,
    autoFocus: true,
    onBlur: () => setIsDropdownOpen(false)
  }, /*#__PURE__*/React__default["default"].createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(option => typeof option === 'object' ? /*#__PURE__*/React__default["default"].createElement("option", {
    key: option.value,
    value: option.value
  }, option.label) : /*#__PURE__*/React__default["default"].createElement("option", {
    key: option,
    value: option
  }, option))) : /*#__PURE__*/React__default["default"].createElement(FieldValue$1, {
    onClick: toggleDropdown
  }, value ? getLabelForValue(value) : placeholder), /*#__PURE__*/React__default["default"].createElement(ChevronWrapper, {
    onClick: toggleDropdown
  }, /*#__PURE__*/React__default["default"].createElement(ChevronUpDownIcon, {
    className: "w-6 h-6"
  })));
};

const FieldContainer$1 = styled__default["default"].div`
  display: flex;
  align-items: center;

`;
const FieldName$1 = styled__default["default"].div`
  font-size: 16px;
  font-weight: bold;
  color: #111827;
  margin-right: auto;
`;
const ToggleWrapper = styled__default["default"].div`
  display: flex;
  align-items: center;
`;
const ToggleButton = styled__default["default"].div`
  width: 40px;
  height: 20px;
  border-radius: 12px;
  background-color: ${props => props.checked ? "#3b82f6" : "#d1d5db"};
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;

  &:before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50%;
    top: 2px;
    left: ${props => props.checked ? "20px" : "2px"};
    transition: left 0.3s;
  }
`;
const ToggleField = ({
  name,
  value,
  onChange
}) => {
  const handleToggleChange = () => {
    onChange(!value);
  };
  return /*#__PURE__*/React__default["default"].createElement(FieldContainer$1, null, /*#__PURE__*/React__default["default"].createElement(FieldName$1, null, name), /*#__PURE__*/React__default["default"].createElement(ToggleWrapper, null, /*#__PURE__*/React__default["default"].createElement(ToggleButton, {
    checked: value,
    onClick: handleToggleChange
  })));
};

const CategoryWrapper$1 = styled__default["default"].div`
  margin-bottom: 1.5rem; /* Equivalent to mb-6 */
`;
const CategoryTitle$1 = styled__default["default"].h3`
  font-size: 1.25rem; /* Equivalent to text-xl */
  font-weight: 600; /* Equivalent to font-semibold */
  margin-bottom: 0.5rem; /* Equivalent to mb-2 */
`;
const ItemsContainer$1 = styled__default["default"].div`
  border: 1px solid #e5e7eb; /* Equivalent to border */
  border-radius: 0.375rem; /* Equivalent to rounded-md */
  overflow: hidden;
  & > *:not(:last-child) {
    border-bottom: 1px solid #e5e7eb; /* Equivalent to divide-y */
  }
`;
const ListItem$1 = styled__default["default"].div`
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }
`;
const EditStackedList = ({
  title,
  items,
  updateState
}) => {
  const renderComponent = (item, index) => {
    const {
      type,
      props
    } = item;
    const childProps = {
      ...props,
      onChange: newValue => updateState(props.fieldName, newValue)
    };
    switch (type) {
      case "EditableTextField":
        return /*#__PURE__*/React__default["default"].createElement(EditableTextField, _extends({
          key: index
        }, childProps));
      case "SelectField":
        return /*#__PURE__*/React__default["default"].createElement(SelectField, _extends({
          key: index
        }, childProps));
      case "ToggleField":
        return /*#__PURE__*/React__default["default"].createElement(ToggleField, _extends({
          key: index
        }, childProps));
      default:
        return null;
    }
  };
  return /*#__PURE__*/React__default["default"].createElement(CategoryWrapper$1, null, /*#__PURE__*/React__default["default"].createElement(CategoryTitle$1, null, title), /*#__PURE__*/React__default["default"].createElement(ItemsContainer$1, null, items.map((item, index) => /*#__PURE__*/React__default["default"].createElement(ListItem$1, {
    key: index
  }, renderComponent(item, index)))));
};

/**
 * FileUpload allows users to upload files.
 *
 * @component
 * @param {Object} props
 * @param {function} props.onFileUpload - Callback function when a file is selected.
 * @returns {JSX.Element}
 */
const FileUpload = ({
  onFileUpload
}) => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      if (onFileUpload) {
        onFileUpload(file);
      }
    }
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex flex-col items-center justify-center"
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: "file",
    className: "cursor-pointer bg-gray-100 p-8 rounded-2xl border-2 border-dashed border-gray-600 shadow-xl hover:bg-gray-200 transition-all duration-300"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex flex-col items-center justify-center gap-2"
  }, selectedFile ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("img", {
    src: URL.createObjectURL(selectedFile),
    alt: "Selected",
    className: "h-24 w-24 object-cover mb-4 rounded-lg"
  }), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "text-gray-600"
  }, "File Selected: ", selectedFile.name)) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 640 512",
    className: "h-12 w-12 text-gray-700 mb-5 fill-current"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
  })), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "text-gray-600"
  }, "Drag and Drop"), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "text-gray-600"
  }, "or"), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "bg-gray-700 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-900"
  }, "Browse file"))), /*#__PURE__*/React__default["default"].createElement("input", {
    id: "file",
    type: "file",
    onChange: handleFileChange,
    className: "hidden"
  })));
};

const Button$6 = styled__default["default"].button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 12px;
  padding: 0 12px;

  &:hover {
    background-color: #f5f5f5;
    border-color: #dcdcdc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    border-color: #007bff; /* Highlight color */
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25); /* Accessibility focus ring */
  }
`;
const IconWrapper$6 = styled__default["default"].div`
  color: #333;

  svg {
    width: 20px;
    height: 20px;
  }
`;
const FilterButton = ({
  onClick
}) => {
  return /*#__PURE__*/React__default["default"].createElement(Button$6, {
    onClick: onClick,
    "aria-label": "Open filter drawer"
  }, /*#__PURE__*/React__default["default"].createElement(IconWrapper$6, null, /*#__PURE__*/React__default["default"].createElement(FilterIcon, null), " "));
};
FilterButton.propTypes = {
  onClick: PropTypes__default["default"].func.isRequired
};

// Styled components
const Wrapper$2 = styled__default["default"].div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 100%; /* Full height for proper scrolling */
`;
const FiltersContainer = styled__default["default"].div`
  flex: 1; /* Allow this to take up the remaining space */
  overflow-y: auto; /* Enable scrolling if the content overflows */
  padding-bottom: 80px; /* Space to avoid overlapping with the floating button */
`;
const FloatingButtonContainer = styled__default["default"].div`
  position: sticky; /* Stick to the bottom of the drawer */
  bottom: 0;
  background-color: white; /* Ensure it stands out over content */
  padding: 16px 0 0;
  border-top: 1px solid #e0e0e0; /* Add a separator line */
  z-index: 10; /* Ensure it stays above scrolling content */
`;
const ApplyButton = styled__default["default"].button`
  width: 100%; /* Full width for better visibility */
  padding: 12px 16px;
  background-color: #000000; /* Bootstrap primary color */
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

`;
const FilterDrawer = ({
  filters,
  selectedFilters,
  onFilterChange,
  closeDrawer,
  sortOptions,
  selectedSortOption,
  onSortChange
}) => {
  const [localSelectedFilters, setLocalSelectedFilters] = React.useState(selectedFilters);
  const [localSelectedSortOption, setLocalSelectedSortOption] = React.useState(selectedSortOption);

  // Update local state when selectedFilters prop changes
  React.useEffect(() => {
    setLocalSelectedFilters(selectedFilters);
  }, [selectedFilters]);

  // Update local state when selectedSortOption prop changes
  React.useEffect(() => {
    setLocalSelectedSortOption(selectedSortOption);
  }, [selectedSortOption]);
  const handleFilterChange = (key, value) => {
    setLocalSelectedFilters(prevFilters => ({
      ...prevFilters,
      [key]: value
    }));
  };
  const handleSortOptionChange = value => {
    setLocalSelectedSortOption(value);
  };
  const handleApplyFilters = () => {
    onFilterChange(localSelectedFilters);
    onSortChange(localSelectedSortOption);
    closeDrawer();
  };
  return /*#__PURE__*/React__default["default"].createElement(Wrapper$2, null, /*#__PURE__*/React__default["default"].createElement(FiltersContainer, null, sortOptions && sortOptions.length > 0 && /*#__PURE__*/React__default["default"].createElement(SelectField, {
    name: "Sort By",
    value: localSelectedSortOption,
    options: sortOptions,
    onChange: handleSortOptionChange,
    placeholder: "Select sort order"
  }), filters.map(filter => {
    switch (filter.type) {
      case "select":
        return /*#__PURE__*/React__default["default"].createElement(SelectField, {
          key: filter.key,
          name: filter.name,
          value: localSelectedFilters[filter.key] || "",
          options: filter.options,
          onChange: value => handleFilterChange(filter.key, value),
          placeholder: `Select ${filter.name}`
        });
      case "toggle":
        return /*#__PURE__*/React__default["default"].createElement(ToggleField, {
          key: filter.key,
          name: filter.name,
          value: localSelectedFilters[filter.key] || false,
          onChange: value => handleFilterChange(filter.key, value)
        });
      // Add cases for other filter types if needed
      default:
        return null;
    }
  })), /*#__PURE__*/React__default["default"].createElement(FloatingButtonContainer, null, /*#__PURE__*/React__default["default"].createElement(ApplyButton, {
    onClick: handleApplyFilters
  }, "Apply Filters")));
};
FilterDrawer.propTypes = {
  filters: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    key: PropTypes__default["default"].string.isRequired,
    name: PropTypes__default["default"].string.isRequired,
    type: PropTypes__default["default"].string.isRequired,
    options: PropTypes__default["default"].arrayOf(PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].object]))
  })).isRequired,
  selectedFilters: PropTypes__default["default"].object.isRequired,
  onFilterChange: PropTypes__default["default"].func.isRequired,
  closeDrawer: PropTypes__default["default"].func.isRequired,
  sortOptions: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    value: PropTypes__default["default"].string.isRequired,
    label: PropTypes__default["default"].string.isRequired
  })),
  selectedSortOption: PropTypes__default["default"].string,
  onSortChange: PropTypes__default["default"].func.isRequired
};
FilterDrawer.defaultProps = {
  sortOptions: [],
  selectedSortOption: ""
};

// The Footer component definition
const Footer$1 = ({
  email,
  phone,
  address,
  copyright,
  socialLinks
}) => {
  return /*#__PURE__*/React__default["default"].createElement("footer", {
    className: "w-full bg-gray-900 py-10 text-gray-300"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "container mx-auto px-4"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "text-center md:text-left"
  }, /*#__PURE__*/React__default["default"].createElement("h2", {
    className: "text-lg font-semibold text-white"
  }, "Contact Information"), /*#__PURE__*/React__default["default"].createElement("p", null, "Email: ", /*#__PURE__*/React__default["default"].createElement("a", {
    href: `mailto:${email}`,
    className: "text-blue-400 hover:underline"
  }, email)), /*#__PURE__*/React__default["default"].createElement("p", null, "Phone: ", /*#__PURE__*/React__default["default"].createElement("a", {
    href: `tel:${phone}`,
    className: "text-blue-400 hover:underline"
  }, phone)), /*#__PURE__*/React__default["default"].createElement("p", null, "Address: ", address)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex space-x-4"
  }, socialLinks.map(({
    href,
    label,
    icon
  }) => /*#__PURE__*/React__default["default"].createElement("a", {
    href: href,
    key: label,
    className: "text-gray-400 hover:text-white"
  }, /*#__PURE__*/React__default["default"].createElement("i", {
    className: icon
  }, label))))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex justify-between mt-8 border-t border-gray-700 pt-6"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "text-center md:text-left"
  }, /*#__PURE__*/React__default["default"].createElement("p", null, "\xA9 ", copyright, ". All rights reserved.")), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("p", null, /*#__PURE__*/React__default["default"].createElement("a", {
    href: "/privacy-policy",
    className: "hover:underline"
  }, "Privacy Policy"), " |", /*#__PURE__*/React__default["default"].createElement("a", {
    href: "/terms",
    className: "hover:underline"
  }, "Terms of Service"))))));
};

// GhostLoader Component
const GhostLoader = () => {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "relative flex w-64 animate-pulse gap-2 p-4"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "h-12 w-12 rounded-full bg-slate-400"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "h-5 w-[90%] rounded-lg bg-slate-400 text-sm"
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"
  }));
};

// The Hero component definition
const Hero = ({
  title,
  subtitle,
  backgroundImage
}) => {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "relative w-full shadow-lg"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute inset-0 bg-cover bg-center",
    style: {
      backgroundImage: `url(${backgroundImage})`
    }
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "relative z-10 flex flex-col items-center justify-center py-10 text-center"
  }, /*#__PURE__*/React__default["default"].createElement("h1", {
    className: "text-5xl font-extrabold text-gray-200 drop-shadow-md"
  }, title), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "mt-4 text-xl text-gray-800 drop-shadow-md"
  }, subtitle)));
};

const HeroContent = ({
  header,
  title,
  subtitle,
  contentTitle,
  contentSubtitle,
  shopNowLink,
  bottleBgImage,
  bottleImage
}) => {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex md:flex-row flex-col md:space-x-20 items-center py-12 px-4 transition-all duration-500 ease-in-out"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex flex-col justify-between max-w-[320px] md:text-left text-center space-y-6 md:space-y-8"
  }, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("h3", {
    className: "uppercase text-sm tracking-widest font-semibold"
  }, header), /*#__PURE__*/React__default["default"].createElement("h1", {
    className: "font-garamond text-7xl font-light mt-2"
  }, title), /*#__PURE__*/React__default["default"].createElement("h2", {
    className: "font-garamond text-3xl font-light mt-4 mb-10"
  }, subtitle)), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "font-garamond text-xl italic mb-4"
  }, contentTitle), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "text-base leading-relaxed mb-6 tracking-tight"
  }, contentSubtitle), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex items-center space-x-3 font-medium text-sm hover:text-blue-500 cursor-pointer"
  }, /*#__PURE__*/React__default["default"].createElement("a", {
    href: shopNowLink,
    className: "hover:underline"
  }, "Shop Now"), /*#__PURE__*/React__default["default"].createElement(ButtonArrowIcon, {
    className: "w-5 h-5"
  })))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex justify-center items-center relative md:mt-0 mt-10"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    className: "rounded-full object-cover transition-transform duration-500 ease-in-out",
    src: bottleBgImage,
    alt: `${title} background`,
    style: {
      width: "320px",
      height: "450px"
    }
  }), /*#__PURE__*/React__default["default"].createElement("img", {
    className: "absolute top-[25%] left-0 transform scale-150 transition-transform duration-500 ease-in-out",
    src: bottleImage,
    alt: `${title} bottle`
  }))));
};
HeroContent.propTypes = {
  header: PropTypes__default["default"].string.isRequired,
  title: PropTypes__default["default"].string.isRequired,
  subtitle: PropTypes__default["default"].string.isRequired,
  contentTitle: PropTypes__default["default"].string.isRequired,
  contentSubtitle: PropTypes__default["default"].string.isRequired,
  shopNowLink: PropTypes__default["default"].string.isRequired,
  bottleBgImage: PropTypes__default["default"].string.isRequired,
  bottleImage: PropTypes__default["default"].string.isRequired
};

// Carousel Component
const ImageCarousel = ({
  images
}) => {
  const defaultImage = 'https://via.placeholder.com/800x400?text=No+Image+Available';
  const imageList = images && images.length > 0 ? images : [defaultImage];
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "relative w-full max-w-lg mx-auto"
  }, /*#__PURE__*/React__default["default"].createElement(react.Swiper, {
    navigation: true,
    pagination: {
      clickable: true
    },
    autoplay: {
      delay: 3000
    },
    loop: true,
    modules: [modules.Navigation, modules.Pagination, modules.Autoplay],
    className: "mySwiper"
  }, imageList.map((image, index) => /*#__PURE__*/React__default["default"].createElement(react.SwiperSlide, {
    key: index
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: image,
    alt: `Slide ${index}`,
    className: "w-full"
  })))));
};

// src/components/cards/ImageCarousel2.jsx
const ImageContainer$2 = styled__default["default"].div`
  width: 100%;
  height: 100%; /* Ensure the container takes full height of its parent */
  position: relative;
  overflow: hidden;
  margin: 0;

  /* Swiper Pagination customization */
  .swiper-pagination {
    bottom: 10px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    /* Remove transform since flex handles centering */
  }

  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.5);
    width: 10px;
    height: 10px;
    opacity: 1;
    margin: 0 5px;
    border-radius: 50%;
    transition: background 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background: #ffffff;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;
const SwiperWrapper = styled__default["default"](react.Swiper)`
  width: 100%;
  height: 100%; /* Ensure Swiper takes full height */
`;
const ImageCarousel2 = ({
  images
}) => {
  return /*#__PURE__*/React__default["default"].createElement(ImageContainer$2, null, /*#__PURE__*/React__default["default"].createElement(SwiperWrapper, {
    modules: [modules.Pagination, modules.A11y],
    spaceBetween: 0,
    slidesPerView: 1,
    pagination: {
      clickable: true
    },
    loop: images.length > 1
  }, images.map((imgUrl, index) => /*#__PURE__*/React__default["default"].createElement(react.SwiperSlide, {
    key: index
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: imgUrl,
    alt: `Image ${index + 1}`
  })))));
};
ImageCarousel2.propTypes = {
  images: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired
};

const InputContainer$1 = styled__default["default"].div`
  position: relative;
  font-family: sans-serif;
`;
const sharedInputStyles = styled.css`
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
  border: 2px solid;
  background: transparent;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease-in-out;
`;
const StyledInput$1 = styled__default["default"].input`
  ${sharedInputStyles}
  border-color: ${({
  isFocused,
  color
}) => isFocused ? color : '#D1D5DB'};
`;
const StyledTextarea = styled__default["default"].textarea`
  ${sharedInputStyles}
  border-color: ${({
  isFocused,
  color
}) => isFocused ? color : '#D1D5DB'};
`;
const StyledLabel$1 = styled__default["default"].label`
  position: absolute;
  left: 0;
  margin: 0.25rem;
  padding: 0.25rem;
  background: white;
  color: ${({
  isFocused,
  color
}) => isFocused ? color : '#6B7280'};
  font-size: 1rem;
  pointer-events: none;
  transform: ${({
  hasValue,
  isFocused
}) => hasValue || isFocused ? 'translate(1.25rem, -70%) scale(0.9)' : 'translate(0.625rem, 0)'};
  transform-origin: left top;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
`;
const Input = ({
  name,
  type,
  value,
  onChange,
  color = '#000',
  label
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const inputElement = type === 'textarea' ? /*#__PURE__*/React__default["default"].createElement(StyledTextarea, {
    name: name,
    id: name,
    required: true,
    value: value,
    onChange: onChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    isFocused: isFocused,
    color: color
  }) : /*#__PURE__*/React__default["default"].createElement(StyledInput$1, {
    name: name,
    id: name,
    type: type,
    required: true,
    value: value,
    onChange: onChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    isFocused: isFocused,
    color: color
  });
  return /*#__PURE__*/React__default["default"].createElement(InputContainer$1, null, inputElement, /*#__PURE__*/React__default["default"].createElement(StyledLabel$1, {
    htmlFor: name,
    isFocused: isFocused,
    color: color,
    hasValue: Boolean(value)
  }, label));
};

const SelectContainer = styled__default["default"].div`
  position: relative;
  font-family: sans-serif;
`;
const sharedSelectStyles = styled.css`
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
  border: 2px solid;
  background: transparent;
  font-size: 1rem;
  outline: none;
  appearance: none;
  transition: border-color 0.3s ease-in-out;
`;
const StyledSelect = styled__default["default"].select`
  ${sharedSelectStyles}
  border-color: ${({
  isFocused,
  color
}) => isFocused ? color : '#D1D5DB'};
  color: ${({
  value
}) => value ? '#000' : '#6B7280'}; /* Default placeholder style */
`;
const StyledLabel = styled__default["default"].label`
  position: absolute;
  left: 0;
  margin: 0.25rem;
  padding: 0.25rem;
  background: white;
  color: ${({
  isFocused,
  color
}) => isFocused ? color : '#6B7280'};
  font-size: 1rem;
  pointer-events: none;
  transform: ${({
  hasValue,
  isFocused
}) => hasValue || isFocused ? 'translate(1.25rem, -70%) scale(0.9)' : 'translate(0.625rem, 0)'};
  transform-origin: left top;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
`;
const StyledArrow = styled__default["default"].div`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 1rem;
  color: ${({
  isFocused,
  color
}) => isFocused ? color : '#6B7280'};
`;
const SelectInput = ({
  name,
  value,
  onChange,
  color = '#000',
  label,
  options = []
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  return /*#__PURE__*/React__default["default"].createElement(SelectContainer, null, /*#__PURE__*/React__default["default"].createElement(StyledSelect, {
    name: name,
    id: name,
    value: value,
    onChange: onChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    isFocused: isFocused,
    color: color
  }, /*#__PURE__*/React__default["default"].createElement("option", {
    value: "",
    disabled: true
  }), options.map(option => /*#__PURE__*/React__default["default"].createElement("option", {
    key: option.value,
    value: option.value
  }, option.label))), /*#__PURE__*/React__default["default"].createElement(StyledLabel, {
    htmlFor: name,
    isFocused: isFocused,
    color: color,
    hasValue: Boolean(value)
  }, label), /*#__PURE__*/React__default["default"].createElement(StyledArrow, {
    isFocused: isFocused,
    color: color
  }, /*#__PURE__*/React__default["default"].createElement(ChevronDownIcon, {
    className: "w-4 h-4"
  })));
};

const SliderContainer = styled__default["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
const Label = styled__default["default"].label`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
const RangeInputContainer = styled__default["default"].div`
  position: relative;
  width: 100%;
  height: 50px;
`;
const Track = styled__default["default"].div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 8px;
  background: #e0e0e0;
  border-radius: 5px;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    left: ${props => props.left}%;
    right: ${props => 100 - props.right}%;
    height: 100%;
    background: #A855F7;
    border-radius: 5px;
    z-index: 1;
  }
`;
const ThumbValue = styled__default["default"].div`
  position: absolute;
  top: -10px;
  font-size: 16px;
  font-weight: bold;
  color: #A855F7;
  white-space: nowrap;
`;
const Slider = styled__default["default"].input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 8px;
  background: transparent;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  pointer-events: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background: #A855F7;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
  }

  &::-moz-range-thumb {
    width: 14px;
    height: 14px;
    background: #007bff;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
  }
`;
const RangeSlider = ({
  min = 0,
  max = 100,
  step = 1,
  minimumGap = 10,
  label = "Range",
  valuePrefix = "",
  valueSuffix = "",
  onChange
}) => {
  const [range, setRange] = React.useState([min, max]);
  const handleMinChange = e => {
    const newMin = Math.min(Number(e.target.value), range[1] - minimumGap);
    const newRange = [newMin, range[1]];
    setRange(newRange);
    if (onChange) onChange(newRange);
  };
  const handleMaxChange = e => {
    const newMax = Math.max(Number(e.target.value), range[0] + minimumGap);
    const newRange = [range[0], newMax];
    setRange(newRange);
    if (onChange) onChange(newRange);
  };
  const calculatePercentage = value => (value - min) / (max - min) * 100;
  return /*#__PURE__*/React__default["default"].createElement(SliderContainer, null, /*#__PURE__*/React__default["default"].createElement(Label, null, label), /*#__PURE__*/React__default["default"].createElement(RangeInputContainer, null, /*#__PURE__*/React__default["default"].createElement(ThumbValue, {
    style: {
      left: `calc(${calculatePercentage(range[0])}% - 14px)`
    }
  }, valuePrefix, range[0], valueSuffix), /*#__PURE__*/React__default["default"].createElement(ThumbValue, {
    style: {
      left: `calc(${calculatePercentage(range[1])}% - 14px)`
    }
  }, valuePrefix, range[1], valueSuffix), /*#__PURE__*/React__default["default"].createElement(Track, {
    left: calculatePercentage(range[0]),
    right: calculatePercentage(range[1])
  }), /*#__PURE__*/React__default["default"].createElement(Slider, {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: range[0],
    onChange: handleMinChange
  }), /*#__PURE__*/React__default["default"].createElement(Slider, {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: range[1],
    onChange: handleMaxChange
  })));
};

// LettzFilterDrawer.js

// Styled Components
const DrawerContainer = styled__default["default"].div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-bottom: 64px; /* To ensure content doesn't overlap with the button bar */
`;
const InputContainer = styled__default["default"].div`
  display: flex;
  flex-direction: column;
  gap: 28px; /* Add consistent spacing between inputs */
  margin-bottom: 64px; /* To ensure content doesn't overlap with the button bar */
`;
const CheckboxGroup = styled__default["default"].div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
const FixedButtonBar = styled__default["default"].div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;
const Button$5 = styled__default["default"].button`
  padding: 8px 16px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.primary ? "#A855F7" : "#e0e0e0"};
  color: ${props => props.primary ? "#fff" : "#333"};
`;

// Constants for Months and Counties
const MONTHS = [{
  value: "jan",
  label: "Jan"
}, {
  value: "feb",
  label: "Feb"
}, {
  value: "mar",
  label: "Mar"
}, {
  value: "apr",
  label: "Apr"
}, {
  value: "may",
  label: "May"
}, {
  value: "jun",
  label: "Jun"
}, {
  value: "jul",
  label: "Jul"
}, {
  value: "aug",
  label: "Aug"
}, {
  value: "sep",
  label: "Sep"
}, {
  value: "oct",
  label: "Oct"
}, {
  value: "nov",
  label: "Nov"
}, {
  value: "dec",
  label: "Dec"
}];
const COUNTIES = ["Carlow", "Cavan", "Clare", "Cork", "Derry", "Donegal", "Down", "Dublin", "Fermanagh", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Tyrone", "Waterford", "Westmeath", "Wexford", "Wicklow"
// Add more counties if necessary
];
const TYPE_OPTIONS = [{
  value: "house",
  label: "House"
}, {
  value: "apartment",
  label: "Apartment"
}, {
  value: "room",
  label: "Room"
}
// Add more types if necessary
];
const LettzFilterDrawer = ({
  selectedFilters,
  onFilterChange,
  closeDrawer,
  sortOptions = [],
  // Default to an empty array
  selectedSortOption,
  onSortChange
}) => {
  const [localFilters, setLocalFilters] = React.useState(selectedFilters || {});
  const [localSortOption, setLocalSortOption] = React.useState(selectedSortOption || "");

  // Update local state when selectedFilters prop changes
  React.useEffect(() => {
    setLocalFilters(selectedFilters || {});
  }, [selectedFilters]);

  // Update local sort option when selectedSortOption prop changes
  React.useEffect(() => {
    setLocalSortOption(selectedSortOption || "");
  }, [selectedSortOption]);
  const handleFilterChange = (key, value) => {
    setLocalFilters(prevFilters => ({
      ...prevFilters,
      [key]: value
    }));
  };
  const handleTypeChange = (type, isChecked) => {
    setLocalFilters(prevFilters => {
      const currentTypes = prevFilters.type || [];
      if (isChecked) {
        // Add the type if it's not already in the array
        if (!currentTypes.includes(type)) {
          return {
            ...prevFilters,
            type: [...currentTypes, type]
          };
        }
      } else {
        // Remove the type from the array
        return {
          ...prevFilters,
          type: currentTypes.filter(t => t !== type)
        };
      }
      return prevFilters;
    });
  };
  const handleSortChangeLocal = event => {
    setLocalSortOption(event.target.value);
  };
  const handleApply = () => {
    onFilterChange(localFilters);
    onSortChange(localSortOption);
    closeDrawer();
  };
  const handleClear = () => {
    setLocalFilters({});
    setLocalSortOption("");
    onFilterChange({});
    onSortChange("");
    closeDrawer();
  };
  return /*#__PURE__*/React__default["default"].createElement(DrawerContainer, null, /*#__PURE__*/React__default["default"].createElement(InputContainer, null, /*#__PURE__*/React__default["default"].createElement(SelectInput, {
    name: "county",
    label: "County",
    color: "#A855F7",
    value: localFilters.county || "",
    onChange: e => handleFilterChange("county", e.target.value),
    options: [{
      value: "",
      label: "Any County"
    }, ...COUNTIES.map(county => ({
      value: county,
      label: county
    }))]
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, /*#__PURE__*/React__default["default"].createElement(SelectInput, {
    name: "startMonth",
    label: "From",
    color: "#A855F7",
    value: localFilters.startMonth || "",
    onChange: e => handleFilterChange("startMonth", e.target.value),
    options: [{
      value: "",
      label: "Any"
    }, ...MONTHS.map(month => ({
      value: month.value,
      label: month.label
    }))]
  }), /*#__PURE__*/React__default["default"].createElement(SelectInput, {
    name: "endMonth",
    label: "To",
    color: "#A855F7",
    value: localFilters.endMonth || "",
    onChange: e => handleFilterChange("endMonth", e.target.value),
    options: [{
      value: "",
      label: "Any"
    }, ...MONTHS.map(month => ({
      value: month.value,
      label: month.label
    }))]
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "mx-8"
  }, /*#__PURE__*/React__default["default"].createElement(RangeSlider, {
    min: 0,
    max: 5000,
    step: 50,
    minimumGap: 100,
    label: "Rent",
    valuePrefix: "\u20AC",
    value: localFilters.rentRange || [0, 5000],
    onChange: range => handleFilterChange("rentRange", range)
  })), /*#__PURE__*/React__default["default"].createElement(CheckboxGroup, null, TYPE_OPTIONS.map(typeOption => /*#__PURE__*/React__default["default"].createElement(CheckedItem, {
    height: "5rem",
    width: "5rem",
    color: "#A855F7",
    key: typeOption.value,
    label: typeOption.label,
    onChange: e => handleTypeChange(typeOption.value, e.target.checked),
    checked: localFilters.type && localFilters.type.includes(typeOption.value),
    svg: /*#__PURE__*/React__default["default"].createElement(HomeIcon, {
      className: "w-6 h-6"
    })
  }))), /*#__PURE__*/React__default["default"].createElement(SelectInput, {
    name: "sort",
    label: "Sort By",
    color: "#A855F7",
    value: localSortOption,
    onChange: handleSortChangeLocal,
    options: sortOptions
  })), /*#__PURE__*/React__default["default"].createElement(FixedButtonBar, null, /*#__PURE__*/React__default["default"].createElement(Button$5, {
    onClick: handleClear
  }, "Clear"), /*#__PURE__*/React__default["default"].createElement(Button$5, {
    primary: true,
    onClick: handleApply
  }, "Apply")));
};

// Styled container for the search button
const StyledButton$1 = styled__default["default"].button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 50px; /* Ensure sufficient height */
  background-color: #ffffff; /* White background */
  border: 1px solid #dcdcdc;
  border-radius: 10px; /* Reduced border radius */
  font-size: 16px;
  color: #333;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle outer shadow */

  &:hover {
    background-color: #f9f9f9;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); /* Slightly deeper shadow on hover */
  }

  &:focus {
    outline: none;
  }
`;

// Container for the left and right content
const ContentContainer = styled__default["default"].div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

// Styled for individual sections
const SectionLeft = styled__default["default"].div`
  flex: 1;
  text-align: left; /* Left-aligned text */
  color: #000;
  font-weight: 600;
  font-size: 1.3rem;
  padding: 0 16px; /* Increased padding for spacing */
`;
const SectionRight = styled__default["default"].div`
  flex: 1;
  text-align: left; /* Left-aligned text */
  color: #666;
  font-weight: 500;
    font-size: 1.3rem;
  padding: 0 16px; /* Increased padding for spacing */
`;

// Styled vertical divider
const Divider$1 = styled__default["default"].div`
  width: 2px; /* Thin vertical divider */
  height: 30px; /* Height relative to the button */
  background-color: #888; /* Visible color */
  display: block; /* Ensures it is rendered as a visible block */
`;
const LettzSearchButton = ({
  onClick,
  place = "Anywhere",
  startDate = "Anytime",
  endDate = ""
}) => /*#__PURE__*/React__default["default"].createElement(StyledButton$1, {
  onClick: onClick
}, /*#__PURE__*/React__default["default"].createElement(ContentContainer, null, /*#__PURE__*/React__default["default"].createElement(SectionLeft, null, place), /*#__PURE__*/React__default["default"].createElement(Divider$1, null, " "), " ", /*#__PURE__*/React__default["default"].createElement(SectionRight, null, startDate, endDate && ` - ${endDate}`)));
LettzSearchButton.propTypes = {
  onClick: PropTypes__default["default"].func.isRequired,
  place: PropTypes__default["default"].string,
  startDate: PropTypes__default["default"].string,
  endDate: PropTypes__default["default"].string
};

// src/components/ListYourPlace.js

// Styled Components

// Enhanced Card styling
const Card$1 = styled__default["default"].div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center content vertically within the card */
  width: 100%;
  max-width: 500px; /* Increased max-width for better layout */
  min-height: 400px; /* Set a minimum height to make the card taller */
  padding: 40px 30px; /* Increased padding for more spacious content */
  border: 1px solid #ddd;
  border-radius: 12px; /* Slightly larger border radius for a smoother look */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Enhanced shadow for depth */
  background-color: #fff;
  box-sizing: border-box;
  margin-top: 10vh; /* Adjusted margin for better centering */

  /* Responsive adjustments */
  @media (max-width: 600px) {
    min-height: 350px;
    padding: 30px 20px;
  }
`;

// Header for LettzIcon and "Lettz" text
const Header$4 = styled__default["default"].div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
`;

// Styled component for the Lettz text
const LogoText$1 = styled__default["default"].span`
  font-size: 30px;
  font-weight: bold;
  margin-left: 8px;
`;

// Styled component for LettzIcon
const StyledLettzIcon$1 = styled__default["default"](LettzIcon)`
  width: 32px;
  height: 32px;
color: #A855F7;
`;

// Enhanced IconWrapper
const IconWrapper$5 = styled__default["default"].div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at top left, #6a11cb, #A855F7);
  border-radius: 50%;
  margin: 24px 0;

  span {
    font-size: 40px;
    color: #fff;
  }
`;

// Enhanced Text
const Text$2 = styled__default["default"].p`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  text-align: center;
  flex-grow: 1; /* Allow text to take up available space */
`;

// Enhanced Button
const Button$4 = styled__default["default"].button`
  width: 100%;
  padding: 14px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  background-color: #A855F7;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #9333EA;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #7E22CE;
    transform: translateY(0);
  }
`;
const ListYourPlaceCard = ({
  onButtonClick,
  currentUser
}) => {
  const navigate = reactRouterDom.useNavigate(); // Initialize navigation

  const handleClick = () => {
    if (!currentUser) {
      // Redirect to login if not authenticated
      navigate('/login', {
        state: {
          from: '/listing'
        }
      });
    } else {
      // Trigger the passed callback if authenticated
      onButtonClick();
    }
  };
  return /*#__PURE__*/React__default["default"].createElement(Card$1, null, /*#__PURE__*/React__default["default"].createElement(Header$4, null, /*#__PURE__*/React__default["default"].createElement(StyledLettzIcon$1, null), " ", /*#__PURE__*/React__default["default"].createElement(LogoText$1, null, "Lettz")), /*#__PURE__*/React__default["default"].createElement(IconWrapper$5, null, /*#__PURE__*/React__default["default"].createElement("span", {
    role: "img",
    "aria-label": "icon"
  }, "\uD83C\uDFE1")), /*#__PURE__*/React__default["default"].createElement(Text$2, null, "Get started by listing your place today!"), /*#__PURE__*/React__default["default"].createElement(Button$4, {
    onClick: handleClick
  }, "List Your Place"));
};

// Styled Components

const CardContainer$1 = styled__default["default"].div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  background-color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 600px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 1rem;
  }
`;
const StyledLink$3 = styled__default["default"](reactRouterDom.Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
`;
const CardContent$1 = styled__default["default"].div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

// New Styled Component for Image Wrapper
const ImageWrapper = styled__default["default"].div`
  position: relative;
  width: 100%;
  aspect-ratio: 5 / 4; /* Set desired aspect ratio here */
  overflow: hidden;

  /* Ensure that ImageCarousel2 fills the wrapper */
  .swiper-wrapper {
    height: 100%;
  }
`;
const RentBadge = styled__default["default"].div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ffffff;
  color: #333;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.9rem;
  z-index: 10;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;
const DateRangeBadge = styled__default["default"].div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ffffff;
  color: #333;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.9rem;
  z-index: 10;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;
const TextContainer$1 = styled__default["default"].div`
  display: flex;
  padding: 0.75rem;
  background-color: #ffffff;
  align-items: center;
  flex-grow: 1;
`;
const ProfilePicture = styled__default["default"].div`
  flex: 0 0 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  transition: transform 0.3s ease;

`;
const ProfileImage$1 = styled__default["default"].img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
`;
const InfoContainer$1 = styled__default["default"].div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TitleText = styled__default["default"].div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #333;
  margin-bottom: 0.2rem;
`;
const LocationText = styled__default["default"].div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #666;
  gap: 0.1rem; /* Space between icon and text */
`;
const LocationIconStyled = styled__default["default"](LocationIcon)`
  width: 25px;
  height: 25px;
`;

// Overlay Styles

const ManagingOverlay = styled__default["default"].div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Dark overlay */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  z-index: 20;
  padding: 1rem;
`;
const OverlayButtonsContainer = styled__default["default"].div`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Space between buttons */
  width: 100%;
  max-width: 90%;
`;
const UpdateButton = styled__default["default"].button.attrs({
  "aria-label": "Update Listing"
})`
  display: flex;
  align-items: center;
  background-color: #ffffff; /* White background */
  color: #3b82f6; /* Blue text */
  padding: 0.75rem 1rem;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
  border: 2px solid #3b82f6;

  &:hover {
    background-color: #3b82f6; /* Blue background on hover */
    color: #ffffff; /* White text on hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5); /* Blue focus ring */
  }
`;
const RemoveButton = styled__default["default"].button.attrs({
  "aria-label": "Remove Listing"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff; /* White background */
  color: #ef4444; /* Red text */
  padding: 0.75rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
  border: 2px solid #ef4444;

  &:hover {
    background-color: #ef4444; /* Red background on hover */
    color: #ffffff; /* White text on hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.5); /* Red focus ring */
  }
`;

// Main Component

const ListingCard = ({
  data,
  isManaging,
  onUpdate,
  onRemove
}) => {
  const {
    id,
    images,
    city,
    county,
    title,
    // Updated to use 'title'
    rent,
    startDate,
    endDate,
    photoURL
  } = data;
  const dateRange = startDate && endDate ? `${startDate} - ${endDate}` : "Available Anytime";
  const defaultImage = "https://via.placeholder.com/600x600?text=No+Image+Available";
  const imageList = images && images.length > 0 ? images : [defaultImage];
  const profileImage = photoURL || "https://via.placeholder.com/150?text=Profile";

  // Card Content
  const content = /*#__PURE__*/React__default["default"].createElement(CardContent$1, null, /*#__PURE__*/React__default["default"].createElement(ImageWrapper, null, /*#__PURE__*/React__default["default"].createElement(ImageCarousel2, {
    images: imageList
  }), rent !== undefined && /*#__PURE__*/React__default["default"].createElement(RentBadge, null, /*#__PURE__*/React__default["default"].createElement(MoneyIcon2, {
    className: "w-6 h-6 mr-2"
  }), "\u20AC", rent), (startDate || endDate) && /*#__PURE__*/React__default["default"].createElement(DateRangeBadge, null, /*#__PURE__*/React__default["default"].createElement(CalendarIcon, {
    className: "w-6 h-6 mr-2"
  }), dateRange)), /*#__PURE__*/React__default["default"].createElement(TextContainer$1, null, /*#__PURE__*/React__default["default"].createElement(ProfilePicture, null, /*#__PURE__*/React__default["default"].createElement(ProfileImage$1, {
    src: profileImage,
    alt: "Profile"
  })), /*#__PURE__*/React__default["default"].createElement(InfoContainer$1, null, /*#__PURE__*/React__default["default"].createElement(TitleText, null, title ? title : "Title Unavailable"), /*#__PURE__*/React__default["default"].createElement(LocationText, null, /*#__PURE__*/React__default["default"].createElement(LocationIconStyled, {
    className: "w-5 h-5"
  }), city, ", ", county))), isManaging && /*#__PURE__*/React__default["default"].createElement(ManagingOverlay, null, /*#__PURE__*/React__default["default"].createElement(OverlayButtonsContainer, null, /*#__PURE__*/React__default["default"].createElement(UpdateButton, {
    onClick: () => onUpdate(data)
  }, /*#__PURE__*/React__default["default"].createElement(EditIcon, {
    className: "w-5 h-5 mr-2"
  }), "Update"), /*#__PURE__*/React__default["default"].createElement(RemoveButton, {
    onClick: () => onRemove(id)
  }, /*#__PURE__*/React__default["default"].createElement(TrashIcon, {
    className: "w-5 h-5 mr-2"
  }), "Remove"))));
  return /*#__PURE__*/React__default["default"].createElement(CardContainer$1, null, !isManaging ? /*#__PURE__*/React__default["default"].createElement(StyledLink$3, {
    to: `/rooms/${id}`
  }, content) : content);
};
ListingCard.defaultProps = {
  isManaging: false,
  onUpdate: () => {},
  onRemove: () => {}
};

// Loader.js

// Define the keyframes for the bounce animation
const bounce = styled.keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

// Styled component for the loader wrapper to center it in the viewport
const LoaderWrapper = styled__default["default"].div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8); /* Optional: semi-transparent background */
  z-index: 9999; /* Ensure it stays on top of other elements */
`;

// Styled component for each bouncing dot
const Dot = styled__default["default"].div`
  width: 16px; /* Equivalent to Tailwind's w-4 */
  height: 16px; /* Equivalent to Tailwind's h-4 */
  margin: 0 4px; /* Equivalent to Tailwind's gap-2 */
  background-color: #1d4ed8; /* Equivalent to Tailwind's bg-blue-700 */
  border-radius: 50%;
  display: inline-block;
  animation: ${bounce} 1.4s infinite ease-in-out both;
  animation-delay: ${props => props.delay};
`;

// Loader Component
const Loader = () => {
  return /*#__PURE__*/React__default["default"].createElement(LoaderWrapper, null, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    }
  }, /*#__PURE__*/React__default["default"].createElement(Dot, {
    delay: "0s"
  }), /*#__PURE__*/React__default["default"].createElement(Dot, {
    delay: "0.2s"
  }), /*#__PURE__*/React__default["default"].createElement(Dot, {
    delay: "0.4s"
  })));
};

const LoginPage = ({
  email,
  setEmail,
  password,
  setPassword,
  reenterPassword,
  setReenterPassword,
  error,
  isSignupComplete,
  setIsSignupComplete,
  // Add this prop to toggle the signup state
  isLoading,
  termsAccepted,
  setTermsAccepted,
  handleSignup,
  handleLogin,
  setShowSignUp,
  isSignUp,
  onForgotPassword,
  resetEmailSent,
  onGoogleSignIn,
  themeColor = "#A855F7"
}) => {
  if (isSignupComplete) {
    return /*#__PURE__*/React__default["default"].createElement(Container$3, null, /*#__PURE__*/React__default["default"].createElement(Title$4, null, "Signup Successful!"), /*#__PURE__*/React__default["default"].createElement("p", null, "Please check your email ", /*#__PURE__*/React__default["default"].createElement("strong", null, email), " for a verification link to activate your account."), /*#__PURE__*/React__default["default"].createElement(ButtonWrapper, null, /*#__PURE__*/React__default["default"].createElement(Button$3, {
      themeColor: themeColor,
      onClick: () => {
        setIsSignupComplete(false); // Reset the signup complete state
        setShowSignUp(false); // Switch to login view
      }
    }, "Return to Login")));
  }
  return /*#__PURE__*/React__default["default"].createElement(Container$3, null, /*#__PURE__*/React__default["default"].createElement(IconWrapper1, null, /*#__PURE__*/React__default["default"].createElement(LettzIconStyled, {
    themeColor: themeColor
  })), /*#__PURE__*/React__default["default"].createElement(Title$4, null, isSignUp ? "Sign up to Lettz to get started!" : "Sign in to Lettz"), resetEmailSent && /*#__PURE__*/React__default["default"].createElement(Message, null, "A password reset email has been sent to ", email, "."), error && /*#__PURE__*/React__default["default"].createElement(Message, {
    error: true
  }, error), /*#__PURE__*/React__default["default"].createElement(Form, {
    onSubmit: isSignUp ? handleSignup : handleLogin
  }, /*#__PURE__*/React__default["default"].createElement(liamc9npm.Input, {
    name: "email",
    id: "email",
    type: "email",
    label: "Email",
    color: themeColor,
    required: true,
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React__default["default"].createElement(liamc9npm.Input, {
    name: "password",
    id: "password",
    type: "password",
    label: "Password",
    color: themeColor,
    required: true,
    value: password,
    onChange: e => setPassword(e.target.value)
  }), isSignUp && /*#__PURE__*/React__default["default"].createElement(liamc9npm.Input, {
    name: "reenterpassword",
    id: "reenterpassword",
    type: "password",
    label: "Re-enter Password",
    color: themeColor,
    required: true,
    value: reenterPassword,
    onChange: e => setReenterPassword(e.target.value)
  }), isSignUp && /*#__PURE__*/React__default["default"].createElement(CheckboxWrapper, null, /*#__PURE__*/React__default["default"].createElement(Checkbox, {
    type: "checkbox",
    checked: termsAccepted,
    onChange: e => setTermsAccepted(e.target.checked),
    required: true
  }), /*#__PURE__*/React__default["default"].createElement("span", null, "I accept the ", /*#__PURE__*/React__default["default"].createElement(Link, {
    themeColor: themeColor,
    href: "/terms"
  }, "Terms and Conditions"), " and ", /*#__PURE__*/React__default["default"].createElement(Link, {
    themeColor: themeColor,
    href: "/privacy"
  }, "Privacy Policy"), ".")), !isSignUp && /*#__PURE__*/React__default["default"].createElement(RememberMeContainer, null, /*#__PURE__*/React__default["default"].createElement(ForgotPasswordButton, {
    themeColor: themeColor,
    type: "button",
    onClick: onForgotPassword
  }, "Forgot your password?")), /*#__PURE__*/React__default["default"].createElement(ButtonWrapper, null, /*#__PURE__*/React__default["default"].createElement(Button$3, {
    themeColor: themeColor,
    type: "submit",
    disabled: isLoading
  }, isLoading ? isSignUp ? "Signing up..." : "Signing in..." : isSignUp ? "Sign Up" : "Sign In"))), /*#__PURE__*/React__default["default"].createElement(Divider, null, /*#__PURE__*/React__default["default"].createElement(HorizontalLine, null), /*#__PURE__*/React__default["default"].createElement("p", null, "or"), /*#__PURE__*/React__default["default"].createElement(HorizontalLine, null)), /*#__PURE__*/React__default["default"].createElement(OAuthButton, {
    onClick: onGoogleSignIn
  }, /*#__PURE__*/React__default["default"].createElement(IconWrapper$4, null, /*#__PURE__*/React__default["default"].createElement(GoogleIcon, null)), "Sign in with Google"), /*#__PURE__*/React__default["default"].createElement(LoginWrapper, null, /*#__PURE__*/React__default["default"].createElement("p", null, isSignUp ? "Already have an account?" : "Don't have an account?", " ", " ", /*#__PURE__*/React__default["default"].createElement(LoginLink, {
    themeColor: themeColor,
    onClick: () => setShowSignUp(!isSignUp)
  }, isSignUp ? "Login" : "Sign up"))));
};
const Container$3 = styled__default["default"].div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  @media (max-width: 600px) {
    max-width: 100%;
    padding: 20px 10px;
  }
`;
const IconWrapper1 = styled__default["default"].div`
  display: flex;
  justify-content: center;
`;
const LettzIconStyled = styled__default["default"](LettzIcon)`
  width: 50px;
  height: 50px;
  color: ${props => props.themeColor}; /* Apply themeColor to currentColor */
`;
const Title$4 = styled__default["default"].h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
  margin-bottom: 20px;
`;
const Message = styled__default["default"].p`
  margin: 10px 0;
  font-size: 0.875rem;
  color: ${props => props.error ? "#e74c3c" : "#2ecc71"};
  text-align: center;
`;
const Form = styled__default["default"].form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;
const CheckboxWrapper = styled__default["default"].label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`;
const Checkbox = styled__default["default"].input`
  cursor: pointer;
`;
const Link = styled__default["default"].a`
  color: ${props => props.themeColor};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const ButtonWrapper = styled__default["default"].div`
  margin-top: 24px;
`;
const Button$3 = styled__default["default"].button`
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  background-color: ${props => props.themeColor};
  color: white;
  padding: 12px;
  font-weight: 500;
  cursor: pointer;

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
`;
const RememberMeContainer = styled__default["default"].div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: 10px;
`;
const ForgotPasswordButton = styled__default["default"].button`
  background: none;
  border: none;
  color: ${props => props.themeColor};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const Divider = styled__default["default"].div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  gap: 16px;
  p {
    margin: 0;
    font-size: 1rem;
    color: #6b7280;
  }
`;
const HorizontalLine = styled__default["default"].hr`
  flex: 1;
  border: none;
  border-top: 1px solid #d1d5db;
`;
const LoginWrapper = styled__default["default"].div`
  margin-top: 16px;
  text-align: center;
`;
const LoginLink = styled__default["default"].button`
  background: none;
  border: none;
  color: ${props => props.themeColor};
  font-weight: 500;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const OAuthButton = styled__default["default"].button`
  padding: 12px;
  border: none;
  width: 100%;
  border-radius: 30px;
  border:  2px solid #ccc;
  background-color:  #fff;
  color:  #000;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ccc;
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
const IconWrapper$4 = styled__default["default"].span`
  display: inline-flex;
  align-items: center;
  margin-right: 10px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

// Styled Components
const Container$2 = styled__default["default"].div`
  max-width: 28rem; /* Equivalent to max-w-md */
  padding: 1rem;
`;
const Header$3 = styled__default["default"].div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;
const BackButton$3 = styled__default["default"].button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  margin-right: 0.5rem;

  &:hover {
    opacity: 0.8;
  }
`;
const Title$3 = styled__default["default"].h1`
  font-size: 1.25rem; /* Equivalent to text-xl */
  font-weight: 600; /* Equivalent to font-semibold */
  color: #333; /* Equivalent to text-gray-800 */
  margin: 0;
`;
const DeleteButton = styled__default["default"].button`
  width: 100%;
  background-color: #ef4444; /* Equivalent to bg-red-500 */
  color: white;
  padding: 0.75rem; /* Equivalent to py-3 */
  border-radius: 0.375rem; /* Equivalent to rounded-md */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Equivalent to shadow-md */
  border: none;
  cursor: not-allowed;
  margin-top: 1.5rem; /* Equivalent to mt-6 */

  &:hover {
    background-color: #dc2626; /* Equivalent to hover:bg-red-600 */
  }
`;
const ManageAccount = () => {
  const [email, setEmail] = React.useState('user@example.com');
  const [language, setLanguage] = React.useState('English');
  const [notifications, setNotifications] = React.useState(true);
  const accountItems = [{
    type: 'EditableTextField',
    props: {
      icon: UserIcon2,
      name: 'Email Address',
      value: email,
      onUpdate: setEmail
    }
  }, {
    type: 'SelectField',
    props: {
      icon: UserIcon2,
      name: 'Language',
      value: language,
      options: ['English', 'Spanish', 'French'],
      onChange: setLanguage
    }
  }, {
    type: 'ToggleField',
    props: {
      icon: UserIcon2,
      name: 'Enable Notifications',
      value: notifications,
      onChange: setNotifications
    }
  }];
  const handleDeleteAccount = () => {
    console.log('Delete account clicked');
  };
  const handleBack = () => {
    console.log('Back button clicked');
    // Add navigation logic here (e.g., React Router's useNavigate or history.goBack())
  };
  return /*#__PURE__*/React__default["default"].createElement(Container$2, null, /*#__PURE__*/React__default["default"].createElement(Header$3, null, /*#__PURE__*/React__default["default"].createElement(BackButton$3, {
    onClick: handleBack
  }, /*#__PURE__*/React__default["default"].createElement(ChevronLeftIcon, {
    className: "w-6 h-6"
  })), /*#__PURE__*/React__default["default"].createElement(Title$3, null, "Manage Account")), /*#__PURE__*/React__default["default"].createElement(EditStackedList, {
    items: accountItems
  }), /*#__PURE__*/React__default["default"].createElement(DeleteButton, {
    onClick: handleDeleteAccount,
    disabled: true
  }, "Delete Account"));
};

const ManageNotifications = () => {
  const [field1, setField1] = React.useState("Initial Value 1");
  const [field2, setField2] = React.useState("Initial Value 2");
  const [name, setName] = React.useState("John Doe");
  const [gender, setGender] = React.useState("male");
  const [notifications, setNotifications] = React.useState(true);
  const [toggleField, setToggleField] = React.useState(false);
  console.log(field1, field2, name, gender, toggleField);
  const updateState = (fieldName, value) => {
    if (fieldName === "field1") setField1(value);
    if (fieldName === "field2") setField2(value);
    if (fieldName === "name") setName(value);
    if (fieldName === "gender") setGender(value);
    if (fieldName === "notifications") setNotifications(value);
    if (fieldName === "toggleField") setToggleField(value);
  };
  const saveChanges = async () => {
    // Replace this with actual Firestore logic in your application
    // Uncomment the following code for Firebase functionality:
    /*
    try {
      const docRef = doc(db, "collectionName", "docId");
      await updateDoc(docRef, {
        field1,
        field2,
        toggleField,
      });
      alert("Changes saved successfully!");
    } catch (error) {
      console.error("Error saving changes: ", error);
      alert("Failed to save changes.");
    }
    */

    // For Storybook, we log to the console instead
    console.log("Saving changes:", {
      field1,
      field2,
      toggleField
    });
    alert("Changes saved! (Simulated for Storybook)");
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      padding: "20px"
    }
  }, /*#__PURE__*/React__default["default"].createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(ChevronLeftIcon, {
    className: "w-6 h-6"
  })), /*#__PURE__*/React__default["default"].createElement("h1", {
    className: "ml-10 text-2xl"
  }, "Manage Notifications")), /*#__PURE__*/React__default["default"].createElement("main", null, /*#__PURE__*/React__default["default"].createElement(EditStackedList, {
    updateState: updateState,
    items: [{
      type: "EditableTextField",
      props: {
        name: "Name",
        fieldName: "field1",
        currentState: field1
      }
    }, {
      type: "SelectField",
      props: {
        name: "Category",
        fieldName: "field2",
        currentState: field2,
        options: ["Option 1", "Option 2", "Option 3"]
      }
    }, {
      type: "ToggleField",
      props: {
        name: "Enable Feature",
        fieldName: "toggleField",
        value: toggleField
      }
    }]
  }), /*#__PURE__*/React__default["default"].createElement(EditStackedList, {
    title: "Settings",
    items: [{
      type: "EditableTextField",
      props: {
        fieldName: "name",
        value: "John Doe"
      }
    }, {
      type: "SelectField",
      props: {
        fieldName: "gender",
        options: ["Male", "Female"],
        value: "Male"
      }
    }, {
      type: "ToggleField",
      props: {
        name: "Notifications",
        fieldName: "notifications",
        value: notifications
      }
    }],
    updateState: updateState
  })), /*#__PURE__*/React__default["default"].createElement("footer", {
    style: {
      marginTop: "20px"
    }
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: saveChanges,
    style: {
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "blue",
      color: "white"
    }
  }, "Save Changes")));
};

// Atoms
const Button$2 = styled__default["default"].button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;
const ListItem = styled__default["default"].div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

// Molecules
const PaymentMethodsList = styled__default["default"].div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ListHeader = styled__default["default"].h2`
  font-size: 20px;
  margin-bottom: 16px;
`;

// Organisms
const PaymentMethodsWrapper = styled__default["default"].div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

// Main Component
const ManagePaymentMethods = ({
  paymentMethods,
  onAddPaymentMethod
}) => {
  return /*#__PURE__*/React__default["default"].createElement(PaymentMethodsWrapper, null, /*#__PURE__*/React__default["default"].createElement(ListHeader, null, "Manage Payment Methods"), /*#__PURE__*/React__default["default"].createElement(PaymentMethodsList, null, paymentMethods.map((method, index) => /*#__PURE__*/React__default["default"].createElement(ListItem, {
    key: index
  }, /*#__PURE__*/React__default["default"].createElement("span", null, method.name), /*#__PURE__*/React__default["default"].createElement(ChevronRightIcon, {
    className: "w-6 h-6"
  })))), /*#__PURE__*/React__default["default"].createElement(Button$2, {
    onClick: onAddPaymentMethod
  }, "Add Payment Method"));
};

const StyledLink$2 = styled__default["default"](reactRouterDom.Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f3f3f3; /* Equivalent to hover:bg-gray-100 */
  }
`;
const IconWrapper$3 = styled__default["default"].div`
  margin-right: 12px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
`;
const TextWrapper$1 = styled__default["default"].div`
  display: flex;
  align-items: center;
`;
const IconContainer = styled__default["default"].div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: #9ca3af; /* Equivalent to text-gray-400 */
`;
const MenuItem = ({
  icon: IconComponent,
  text,
  link
}) => {
  return /*#__PURE__*/React__default["default"].createElement(StyledLink$2, {
    to: link
  }, /*#__PURE__*/React__default["default"].createElement(TextWrapper$1, null, IconComponent && /*#__PURE__*/React__default["default"].createElement(IconWrapper$3, null, /*#__PURE__*/React__default["default"].createElement(IconComponent, null)), /*#__PURE__*/React__default["default"].createElement("div", null, text)), /*#__PURE__*/React__default["default"].createElement(IconContainer, null, /*#__PURE__*/React__default["default"].createElement(ChevronRightIcon, null)));
};

function r(e) {
  var t,
    f,
    n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

function Mt(t) {
  if (!t || typeof document == "undefined") return;
  let o = document.head || document.getElementsByTagName("head")[0],
    e = document.createElement("style");
  e.type = "text/css", o.firstChild ? o.insertBefore(e, o.firstChild) : o.appendChild(e), e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
Mt(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var L = t => typeof t == "number" && !isNaN(t),
  N = t => typeof t == "string",
  P = t => typeof t == "function",
  mt = t => N(t) || L(t),
  B = t => N(t) || P(t) ? t : null,
  pt = (t, o) => t === !1 || L(t) && t > 0 ? t : o,
  z = t => /*#__PURE__*/React.isValidElement(t) || N(t) || P(t) || L(t);
function Z(t, o, e = 300) {
  let {
    scrollHeight: r,
    style: s
  } = t;
  requestAnimationFrame(() => {
    s.minHeight = "initial", s.height = r + "px", s.transition = `all ${e}ms`, requestAnimationFrame(() => {
      s.height = "0", s.padding = "0", s.margin = "0", setTimeout(o, e);
    });
  });
}
function $({
  enter: t,
  exit: o,
  appendPosition: e = !1,
  collapse: r = !0,
  collapseDuration: s = 300
}) {
  return function ({
    children: a,
    position: d,
    preventExitTransition: c,
    done: T,
    nodeRef: g,
    isIn: v,
    playToast: x
  }) {
    let C = e ? `${t}--${d}` : t,
      S = e ? `${o}--${d}` : o,
      E = React.useRef(0);
    return React.useLayoutEffect(() => {
      let f = g.current,
        p = C.split(" "),
        b = n => {
          n.target === g.current && (x(), f.removeEventListener("animationend", b), f.removeEventListener("animationcancel", b), E.current === 0 && n.type !== "animationcancel" && f.classList.remove(...p));
        };
      (() => {
        f.classList.add(...p), f.addEventListener("animationend", b), f.addEventListener("animationcancel", b);
      })();
    }, []), React.useEffect(() => {
      let f = g.current,
        p = () => {
          f.removeEventListener("animationend", p), r ? Z(f, T, s) : T();
        };
      v || (c ? p() : (() => {
        E.current = 1, f.className += ` ${S}`, f.addEventListener("animationend", p);
      })());
    }, [v]), /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, a);
  };
}
function J(t, o) {
  return {
    content: tt(t.content, t.props),
    containerId: t.props.containerId,
    id: t.props.toastId,
    theme: t.props.theme,
    type: t.props.type,
    data: t.props.data || {},
    isLoading: t.props.isLoading,
    icon: t.props.icon,
    reason: t.removalReason,
    status: o
  };
}
function tt(t, o, e = !1) {
  return /*#__PURE__*/React.isValidElement(t) && !N(t.type) ? /*#__PURE__*/React.cloneElement(t, {
    closeToast: o.closeToast,
    toastProps: o,
    data: o.data,
    isPaused: e
  }) : P(t) ? t({
    closeToast: o.closeToast,
    toastProps: o,
    data: o.data,
    isPaused: e
  }) : t;
}
function yt({
  closeToast: t,
  theme: o,
  ariaLabel: e = "close"
}) {
  return /*#__PURE__*/React__default["default"].createElement("button", {
    className: `Toastify__close-button Toastify__close-button--${o}`,
    type: "button",
    onClick: r => {
      r.stopPropagation(), t(!0);
    },
    "aria-label": e
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 14 16"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
  })));
}
function gt({
  delay: t,
  isRunning: o,
  closeToast: e,
  type: r = "default",
  hide: s,
  className: l,
  controlledProgress: a,
  progress: d,
  rtl: c,
  isIn: T,
  theme: g
}) {
  let v = s || a && d === 0,
    x = {
      animationDuration: `${t}ms`,
      animationPlayState: o ? "running" : "paused"
    };
  a && (x.transform = `scaleX(${d})`);
  let C = clsx("Toastify__progress-bar", a ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${g}`, `Toastify__progress-bar--${r}`, {
      ["Toastify__progress-bar--rtl"]: c
    }),
    S = P(l) ? l({
      rtl: c,
      type: r,
      defaultClassName: C
    }) : clsx(C, l),
    E = {
      [a && d >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: a && d < 1 ? null : () => {
        T && e();
      }
    };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "Toastify__progress-bar--wrp",
    "data-hidden": v
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${r}`
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    role: "progressbar",
    "aria-hidden": v ? "true" : "false",
    "aria-label": "notification timer",
    className: S,
    style: x,
    ...E
  }));
}
var Xt = 1,
  at = () => `${Xt++}`;
function _t(t, o, e) {
  let r = 1,
    s = 0,
    l = [],
    a = [],
    d = o,
    c = new Map(),
    T = new Set(),
    g = i => (T.add(i), () => T.delete(i)),
    v = () => {
      a = Array.from(c.values()), T.forEach(i => i());
    },
    x = ({
      containerId: i,
      toastId: n,
      updateId: u
    }) => {
      let h = i ? i !== t : t !== 1,
        m = c.has(n) && u == null;
      return h || m;
    },
    C = (i, n) => {
      c.forEach(u => {
        var h;
        (n == null || n === u.props.toastId) && ((h = u.toggle) == null || h.call(u, i));
      });
    },
    S = i => {
      var n, u;
      (u = (n = i.props) == null ? void 0 : n.onClose) == null || u.call(n, i.removalReason), i.isActive = !1;
    },
    E = i => {
      if (i == null) c.forEach(S);else {
        let n = c.get(i);
        n && S(n);
      }
      v();
    },
    f = () => {
      s -= l.length, l = [];
    },
    p = i => {
      var m, _;
      let {
          toastId: n,
          updateId: u
        } = i.props,
        h = u == null;
      i.staleId && c.delete(i.staleId), i.isActive = !0, c.set(n, i), v(), e(J(i, h ? "added" : "updated")), h && ((_ = (m = i.props).onOpen) == null || _.call(m));
    };
  return {
    id: t,
    props: d,
    observe: g,
    toggle: C,
    removeToast: E,
    toasts: c,
    clearQueue: f,
    buildToast: (i, n) => {
      if (x(n)) return;
      let {
          toastId: u,
          updateId: h,
          data: m,
          staleId: _,
          delay: k
        } = n,
        M = h == null;
      M && s++;
      let A = {
        ...d,
        style: d.toastStyle,
        key: r++,
        ...Object.fromEntries(Object.entries(n).filter(([D, Y]) => Y != null)),
        toastId: u,
        updateId: h,
        data: m,
        isIn: !1,
        className: B(n.className || d.toastClassName),
        progressClassName: B(n.progressClassName || d.progressClassName),
        autoClose: n.isLoading ? !1 : pt(n.autoClose, d.autoClose),
        closeToast(D) {
          c.get(u).removalReason = D, E(u);
        },
        deleteToast() {
          let D = c.get(u);
          if (D != null) {
            if (e(J(D, "removed")), c.delete(u), s--, s < 0 && (s = 0), l.length > 0) {
              p(l.shift());
              return;
            }
            v();
          }
        }
      };
      A.closeButton = d.closeButton, n.closeButton === !1 || z(n.closeButton) ? A.closeButton = n.closeButton : n.closeButton === !0 && (A.closeButton = z(d.closeButton) ? d.closeButton : !0);
      let R = {
        content: i,
        props: A,
        staleId: _
      };
      d.limit && d.limit > 0 && s > d.limit && M ? l.push(R) : L(k) ? setTimeout(() => {
        p(R);
      }, k) : p(R);
    },
    setProps(i) {
      d = i;
    },
    setToggle: (i, n) => {
      let u = c.get(i);
      u && (u.toggle = n);
    },
    isToastActive: i => {
      var n;
      return (n = c.get(i)) == null ? void 0 : n.isActive;
    },
    getSnapshot: () => a
  };
}
var I = new Map(),
  F = [],
  st = new Set(),
  Vt = t => st.forEach(o => o(t)),
  bt = () => I.size > 0;
function Qt() {
  F.forEach(t => nt(t.content, t.options)), F = [];
}
var vt = (t, {
  containerId: o
}) => {
  var e;
  return (e = I.get(o || 1)) == null ? void 0 : e.toasts.get(t);
};
function X(t, o) {
  var r;
  if (o) return !!((r = I.get(o)) != null && r.isToastActive(t));
  let e = !1;
  return I.forEach(s => {
    s.isToastActive(t) && (e = !0);
  }), e;
}
function ht(t) {
  if (!bt()) {
    F = F.filter(o => t != null && o.options.toastId !== t);
    return;
  }
  if (t == null || mt(t)) I.forEach(o => {
    o.removeToast(t);
  });else if (t && ("containerId" in t || "id" in t)) {
    let o = I.get(t.containerId);
    o ? o.removeToast(t.id) : I.forEach(e => {
      e.removeToast(t.id);
    });
  }
}
var Ct = (t = {}) => {
  I.forEach(o => {
    o.props.limit && (!t.containerId || o.id === t.containerId) && o.clearQueue();
  });
};
function nt(t, o) {
  z(t) && (bt() || F.push({
    content: t,
    options: o
  }), I.forEach(e => {
    e.buildToast(t, o);
  }));
}
function xt(t) {
  var o;
  (o = I.get(t.containerId || 1)) == null || o.setToggle(t.id, t.fn);
}
function rt(t, o) {
  I.forEach(e => {
    (o == null || !(o != null && o.containerId) || (o == null ? void 0 : o.containerId) === e.id) && e.toggle(t, o == null ? void 0 : o.id);
  });
}
function Et(t) {
  let o = t.containerId || 1;
  return {
    subscribe(e) {
      let r = _t(o, t, Vt);
      I.set(o, r);
      let s = r.observe(e);
      return Qt(), () => {
        s(), I.delete(o);
      };
    },
    setProps(e) {
      var r;
      (r = I.get(o)) == null || r.setProps(e);
    },
    getSnapshot() {
      var e;
      return (e = I.get(o)) == null ? void 0 : e.getSnapshot();
    }
  };
}
function Pt(t) {
  return st.add(t), () => {
    st.delete(t);
  };
}
function Wt(t) {
  return t && (N(t.toastId) || L(t.toastId)) ? t.toastId : at();
}
function U(t, o) {
  return nt(t, o), o.toastId;
}
function V(t, o) {
  return {
    ...o,
    type: o && o.type || t,
    toastId: Wt(o)
  };
}
function Q(t) {
  return (o, e) => U(o, V(t, e));
}
function y(t, o) {
  return U(t, V("default", o));
}
y.loading = (t, o) => U(t, V("default", {
  isLoading: !0,
  autoClose: !1,
  closeOnClick: !1,
  closeButton: !1,
  draggable: !1,
  ...o
}));
function Gt(t, {
  pending: o,
  error: e,
  success: r
}, s) {
  let l;
  o && (l = N(o) ? y.loading(o, s) : y.loading(o.render, {
    ...s,
    ...o
  }));
  let a = {
      isLoading: null,
      autoClose: null,
      closeOnClick: null,
      closeButton: null,
      draggable: null
    },
    d = (T, g, v) => {
      if (g == null) {
        y.dismiss(l);
        return;
      }
      let x = {
          type: T,
          ...a,
          ...s,
          data: v
        },
        C = N(g) ? {
          render: g
        } : g;
      return l ? y.update(l, {
        ...x,
        ...C
      }) : y(C.render, {
        ...x,
        ...C
      }), v;
    },
    c = P(t) ? t() : t;
  return c.then(T => d("success", r, T)).catch(T => d("error", e, T)), c;
}
y.promise = Gt;
y.success = Q("success");
y.info = Q("info");
y.error = Q("error");
y.warning = Q("warning");
y.warn = y.warning;
y.dark = (t, o) => U(t, V("default", {
  theme: "dark",
  ...o
}));
function qt(t) {
  ht(t);
}
y.dismiss = qt;
y.clearWaitingQueue = Ct;
y.isActive = X;
y.update = (t, o = {}) => {
  let e = vt(t, o);
  if (e) {
    let {
        props: r,
        content: s
      } = e,
      l = {
        delay: 100,
        ...r,
        ...o,
        toastId: o.toastId || t,
        updateId: at()
      };
    l.toastId !== t && (l.staleId = t);
    let a = l.render || s;
    delete l.render, U(a, l);
  }
};
y.done = t => {
  y.update(t, {
    progress: 1
  });
};
y.onChange = Pt;
y.play = t => rt(!0, t);
y.pause = t => rt(!1, t);
function It(t) {
  var a;
  let {
    subscribe: o,
    getSnapshot: e,
    setProps: r
  } = React.useRef(Et(t)).current;
  r(t);
  let s = (a = React.useSyncExternalStore(o, e, e)) == null ? void 0 : a.slice();
  function l(d) {
    if (!s) return [];
    let c = new Map();
    return t.newestOnTop && s.reverse(), s.forEach(T => {
      let {
        position: g
      } = T.props;
      c.has(g) || c.set(g, []), c.get(g).push(T);
    }), Array.from(c, T => d(T[0], T[1]));
  }
  return {
    getToastToRender: l,
    isToastActive: X,
    count: s == null ? void 0 : s.length
  };
}
function At(t) {
  let [o, e] = React.useState(!1),
    [r, s] = React.useState(!1),
    l = React.useRef(null),
    a = React.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1
    }).current,
    {
      autoClose: d,
      pauseOnHover: c,
      closeToast: T,
      onClick: g,
      closeOnClick: v
    } = t;
  xt({
    id: t.toastId,
    containerId: t.containerId,
    fn: e
  }), React.useEffect(() => {
    if (t.pauseOnFocusLoss) return x(), () => {
      C();
    };
  }, [t.pauseOnFocusLoss]);
  function x() {
    document.hasFocus() || p(), window.addEventListener("focus", f), window.addEventListener("blur", p);
  }
  function C() {
    window.removeEventListener("focus", f), window.removeEventListener("blur", p);
  }
  function S(m) {
    if (t.draggable === !0 || t.draggable === m.pointerType) {
      b();
      let _ = l.current;
      a.canCloseOnClick = !0, a.canDrag = !0, _.style.transition = "none", t.draggableDirection === "x" ? (a.start = m.clientX, a.removalDistance = _.offsetWidth * (t.draggablePercent / 100)) : (a.start = m.clientY, a.removalDistance = _.offsetHeight * (t.draggablePercent === 80 ? t.draggablePercent * 1.5 : t.draggablePercent) / 100);
    }
  }
  function E(m) {
    let {
      top: _,
      bottom: k,
      left: M,
      right: A
    } = l.current.getBoundingClientRect();
    m.nativeEvent.type !== "touchend" && t.pauseOnHover && m.clientX >= M && m.clientX <= A && m.clientY >= _ && m.clientY <= k ? p() : f();
  }
  function f() {
    e(!0);
  }
  function p() {
    e(!1);
  }
  function b() {
    a.didMove = !1, document.addEventListener("pointermove", n), document.addEventListener("pointerup", u);
  }
  function i() {
    document.removeEventListener("pointermove", n), document.removeEventListener("pointerup", u);
  }
  function n(m) {
    let _ = l.current;
    if (a.canDrag && _) {
      a.didMove = !0, o && p(), t.draggableDirection === "x" ? a.delta = m.clientX - a.start : a.delta = m.clientY - a.start, a.start !== m.clientX && (a.canCloseOnClick = !1);
      let k = t.draggableDirection === "x" ? `${a.delta}px, var(--y)` : `0, calc(${a.delta}px + var(--y))`;
      _.style.transform = `translate3d(${k},0)`, _.style.opacity = `${1 - Math.abs(a.delta / a.removalDistance)}`;
    }
  }
  function u() {
    i();
    let m = l.current;
    if (a.canDrag && a.didMove && m) {
      if (a.canDrag = !1, Math.abs(a.delta) > a.removalDistance) {
        s(!0), t.closeToast(!0), t.collapseAll();
        return;
      }
      m.style.transition = "transform 0.2s, opacity 0.2s", m.style.removeProperty("transform"), m.style.removeProperty("opacity");
    }
  }
  let h = {
    onPointerDown: S,
    onPointerUp: E
  };
  return d && c && (h.onMouseEnter = p, t.stacked || (h.onMouseLeave = f)), v && (h.onClick = m => {
    g && g(m), a.canCloseOnClick && T(!0);
  }), {
    playToast: f,
    pauseToast: p,
    isRunning: o,
    preventExitTransition: r,
    toastRef: l,
    eventHandlers: h
  };
}
var Ot = typeof window != "undefined" ? React.useLayoutEffect : React.useEffect;
var G = ({
  theme: t,
  type: o,
  isLoading: e,
  ...r
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${o})`,
  ...r
});
function ao(t) {
  return /*#__PURE__*/React__default["default"].createElement(G, {
    ...t
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
  }));
}
function so(t) {
  return /*#__PURE__*/React__default["default"].createElement(G, {
    ...t
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
  }));
}
function no(t) {
  return /*#__PURE__*/React__default["default"].createElement(G, {
    ...t
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
  }));
}
function ro(t) {
  return /*#__PURE__*/React__default["default"].createElement(G, {
    ...t
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
  }));
}
function io() {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "Toastify__spinner"
  });
}
var W = {
    info: so,
    warning: ao,
    success: no,
    error: ro,
    spinner: io
  },
  lo = t => t in W;
function Nt({
  theme: t,
  type: o,
  isLoading: e,
  icon: r
}) {
  let s = null,
    l = {
      theme: t,
      type: o
    };
  return r === !1 || (P(r) ? s = r({
    ...l,
    isLoading: e
  }) : /*#__PURE__*/React.isValidElement(r) ? s = /*#__PURE__*/React.cloneElement(r, l) : e ? s = W.spinner() : lo(o) && (s = W[o](l))), s;
}
var wt = t => {
  let {
      isRunning: o,
      preventExitTransition: e,
      toastRef: r,
      eventHandlers: s,
      playToast: l
    } = At(t),
    {
      closeButton: a,
      children: d,
      autoClose: c,
      onClick: T,
      type: g,
      hideProgressBar: v,
      closeToast: x,
      transition: C,
      position: S,
      className: E,
      style: f,
      progressClassName: p,
      updateId: b,
      role: i,
      progress: n,
      rtl: u,
      toastId: h,
      deleteToast: m,
      isIn: _,
      isLoading: k,
      closeOnClick: M,
      theme: A,
      ariaLabel: R
    } = t,
    D = clsx("Toastify__toast", `Toastify__toast-theme--${A}`, `Toastify__toast--${g}`, {
      ["Toastify__toast--rtl"]: u
    }, {
      ["Toastify__toast--close-on-click"]: M
    }),
    Y = P(E) ? E({
      rtl: u,
      position: S,
      type: g,
      defaultClassName: D
    }) : clsx(D, E),
    ft = Nt(t),
    dt = !!n || !c,
    j = {
      closeToast: x,
      type: g,
      theme: A
    },
    H = null;
  return a === !1 || (P(a) ? H = a(j) : /*#__PURE__*/React.isValidElement(a) ? H = /*#__PURE__*/React.cloneElement(a, j) : H = yt(j)), /*#__PURE__*/React__default["default"].createElement(C, {
    isIn: _,
    done: m,
    position: S,
    preventExitTransition: e,
    nodeRef: r,
    playToast: l
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    id: h,
    tabIndex: 0,
    onClick: T,
    "data-in": _,
    className: Y,
    ...s,
    style: f,
    ref: r,
    ...(_ && {
      role: i,
      "aria-label": R
    })
  }, ft != null && /*#__PURE__*/React__default["default"].createElement("div", {
    className: clsx("Toastify__toast-icon", {
      ["Toastify--animate-icon Toastify__zoom-enter"]: !k
    })
  }, ft), tt(d, t, !o), H, !t.customProgressBar && /*#__PURE__*/React__default["default"].createElement(gt, {
    ...(b && !dt ? {
      key: `p-${b}`
    } : {}),
    rtl: u,
    theme: A,
    delay: c,
    isRunning: o,
    isIn: _,
    closeToast: x,
    hide: v,
    type: g,
    className: p,
    controlledProgress: dt,
    progress: n || 0
  })));
};
var K = (t, o = !1) => ({
    enter: `Toastify--animate Toastify__${t}-enter`,
    exit: `Toastify--animate Toastify__${t}-exit`,
    appendPosition: o
  }),
  lt = $(K("bounce", !0));
var _o = {
  position: "top-right",
  transition: lt,
  autoClose: 5e3,
  closeButton: !0,
  pauseOnHover: !0,
  pauseOnFocusLoss: !0,
  draggable: "touch",
  draggablePercent: 80,
  draggableDirection: "x",
  role: "alert",
  theme: "light",
  "aria-label": "Notifications Alt+T",
  hotKeys: t => t.altKey && t.code === "KeyT"
};
function Lt(t) {
  let o = {
      ..._o,
      ...t
    },
    e = t.stacked,
    [r, s] = React.useState(!0),
    l = React.useRef(null),
    {
      getToastToRender: a,
      isToastActive: d,
      count: c
    } = It(o),
    {
      className: T,
      style: g,
      rtl: v,
      containerId: x,
      hotKeys: C
    } = o;
  function S(f) {
    let p = clsx("Toastify__toast-container", `Toastify__toast-container--${f}`, {
      ["Toastify__toast-container--rtl"]: v
    });
    return P(T) ? T({
      position: f,
      rtl: v,
      defaultClassName: p
    }) : clsx(p, B(T));
  }
  function E() {
    e && (s(!0), y.play());
  }
  return Ot(() => {
    var f;
    if (e) {
      let p = l.current.querySelectorAll('[data-in="true"]'),
        b = 12,
        i = (f = o.position) == null ? void 0 : f.includes("top"),
        n = 0,
        u = 0;
      Array.from(p).reverse().forEach((h, m) => {
        let _ = h;
        _.classList.add("Toastify__toast--stacked"), m > 0 && (_.dataset.collapsed = `${r}`), _.dataset.pos || (_.dataset.pos = i ? "top" : "bot");
        let k = n * (r ? .2 : 1) + (r ? 0 : b * m);
        _.style.setProperty("--y", `${i ? k : k * -1}px`), _.style.setProperty("--g", `${b}`), _.style.setProperty("--s", `${1 - (r ? u : 0)}`), n += _.offsetHeight, u += .025;
      });
    }
  }, [r, c, e]), React.useEffect(() => {
    function f(p) {
      var i;
      let b = l.current;
      C(p) && ((i = b.querySelector('[tabIndex="0"]')) == null || i.focus(), s(!1), y.pause()), p.key === "Escape" && (document.activeElement === b || b != null && b.contains(document.activeElement)) && (s(!0), y.play());
    }
    return document.addEventListener("keydown", f), () => {
      document.removeEventListener("keydown", f);
    };
  }, [C]), /*#__PURE__*/React__default["default"].createElement("section", {
    ref: l,
    className: "Toastify",
    id: x,
    onMouseEnter: () => {
      e && (s(!1), y.pause());
    },
    onMouseLeave: E,
    "aria-live": "polite",
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    "aria-label": o["aria-label"]
  }, a((f, p) => {
    let b = p.length ? {
      ...g
    } : {
      ...g,
      pointerEvents: "none"
    };
    return /*#__PURE__*/React__default["default"].createElement("div", {
      tabIndex: -1,
      className: S(f),
      "data-stacked": e,
      style: b,
      key: `c-${f}`
    }, p.map(({
      content: i,
      props: n
    }) => /*#__PURE__*/React__default["default"].createElement(wt, {
      ...n,
      stacked: e,
      collapseAll: E,
      isIn: d(n.toastId, n.containerId),
      key: `t-${n.key}`
    }, i)));
  }));
}

// src/components/MessageForm.jsx

const FormContainer = styled__default["default"].div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const TextArea = styled__default["default"].textarea`
  flex: 1;
  resize: none;
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;
const SendButton = styled__default["default"].button`
  background-color: #28a745;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background-color: #218838;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;
const MessageForm = ({
  onSend,
  onClose
}) => {
  const [message, setMessage] = React.useState("");
  const [sending, setSending] = React.useState(false);
  const handleSubmit = async e => {
    e.preventDefault();
    if (!message.trim()) {
      y.error("Please enter a message.");
      return;
    }
    setSending(true);
    try {
      // Call the onSend function passed from the parent
      await onSend(message);

      // Optionally, close the drawer after sending the message
      onClose();

      // Reset the form
      setMessage("");

      // Show success toast
      y.success("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      y.error("Failed to send the message. Please try again.");
    } finally {
      setSending(false);
    }
  };
  return /*#__PURE__*/React__default["default"].createElement(FormContainer, null, /*#__PURE__*/React__default["default"].createElement("form", {
    onSubmit: handleSubmit,
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React__default["default"].createElement(TextArea, {
    placeholder: "Type your message here...",
    value: message,
    onChange: e => setMessage(e.target.value),
    rows: 5
  }), /*#__PURE__*/React__default["default"].createElement(SendButton, {
    type: "submit",
    disabled: sending
  }, sending ? "Sending..." : "Send Message")));
};

// src/components/MessagesPrompt.js

// Styled Components

// Enhanced Card styling
const Card = styled__default["default"].div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center content vertically within the card */
  width: 100%;
  max-width: 500px; /* Increased max-width for better layout */
  min-height: 400px; /* Set a minimum height to make the card taller */
  padding: 40px 30px; /* Increased padding for more spacious content */
  border: 1px solid #ddd;
  border-radius: 12px; /* Slightly larger border radius for a smoother look */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Enhanced shadow for depth */
  background-color: #fff;
  box-sizing: border-box;
  margin-top: 10vh; /* Adjusted margin for better centering */

  /* Responsive adjustments */
  @media (max-width: 600px) {
    min-height: 350px;
    padding: 30px 20px;
  }
`;

// Header for LettzIcon and "Lettz" text
const Header$2 = styled__default["default"].div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
`;

// Styled component for the Lettz text
const LogoText = styled__default["default"].span`
  font-size: 30px;
  font-weight: bold;
  margin-left: 8px;
`;

// Styled component for LettzIcon
const StyledLettzIcon = styled__default["default"](LettzIcon)`
  width: 32px;
  height: 32px;
color: #A855F7;
  `;

// Enhanced IconWrapper
const IconWrapper$2 = styled__default["default"].div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at top left, #6a11cb, #A855F7);
  border-radius: 50%;
  margin: 24px 0;

  span {
    font-size: 40px;
    color: #fff;
  }
`;

// Enhanced Text
const Text$1 = styled__default["default"].p`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  text-align: center;
  flex-grow: 1; /* Allow text to take up available space */
`;

// Enhanced Button
const Button$1 = styled__default["default"].button`
  width: 100%;
  padding: 14px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  background-color: #A855F7;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #9333EA;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #7E22CE;
    transform: translateY(0);
  }
`;
const MessagesPrompt = currentUser => {
  const navigate = reactRouterDom.useNavigate(); // Initialize navigation

  const handleLoginClick = () => {
    if (!currentUser) {
      // Redirect to login if not authenticated
      navigate('/login', {
        state: {
          from: '/messages'
        }
      });
    }
  };
  return /*#__PURE__*/React__default["default"].createElement(Card, null, /*#__PURE__*/React__default["default"].createElement(Header$2, null, /*#__PURE__*/React__default["default"].createElement(StyledLettzIcon, null), " ", /*#__PURE__*/React__default["default"].createElement(LogoText, null, "Lettz")), /*#__PURE__*/React__default["default"].createElement(IconWrapper$2, null, /*#__PURE__*/React__default["default"].createElement("span", {
    role: "img",
    "aria-label": "messages"
  }, "\uD83D\uDCAC")), /*#__PURE__*/React__default["default"].createElement(Text$1, null, "Please log in to see your messages."), /*#__PURE__*/React__default["default"].createElement(Button$1, {
    onClick: handleLoginClick
  }, "Login"));
};

// src/pages/MessagesView.js
function MessagesView({
  currentUser,
  conversations,
  loading,
  error
}) {
  return /*#__PURE__*/React__default["default"].createElement("div", null, !currentUser ? /*#__PURE__*/React__default["default"].createElement(MessagesPrompt, {
    currentUser: true
  }) : /*#__PURE__*/React__default["default"].createElement("div", null, loading ? /*#__PURE__*/React__default["default"].createElement("p", null, "Loading conversations...") : error ? /*#__PURE__*/React__default["default"].createElement("p", null, error) : conversations.length === 0 ? /*#__PURE__*/React__default["default"].createElement("p", null, "No conversations found.") : /*#__PURE__*/React__default["default"].createElement(ConversationList, {
    conversations: conversations,
    currentUser: currentUser
  })));
}

// Animations
const fadeIn = styled.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const slideIn = styled.keyframes`
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
`;

// Styled Components
const Overlay$2 = styled__default["default"].div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  ${props => props.animate && styled.css`
      animation: ${fadeIn} 0.3s ease-out forwards;
    `}
`;
const ModalContainer = styled__default["default"].div`
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  position: relative;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  ${props => props.animate && styled.css`
      animation: ${slideIn} 0.3s ease-out forwards;
    `}
`;
const CloseButton = styled__default["default"].button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  color: #333;

  &:hover {
    color: #555;
  }
`;
const ModalContent = styled__default["default"].div`
  padding: 16px;
`;
const ModalTitle = styled__default["default"].h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: #333;
`;
const ModalBody = styled__default["default"].div`
  font-size: 1rem;
  color: #555;
`;

// Modal Component
const Modal = ({
  isModalOpen,
  closeModal,
  title,
  children,
  animate = true
}) => {
  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);
  React.useEffect(() => {
    const handleEsc = event => {
      if (event.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isModalOpen, closeModal]);
  if (!isModalOpen) return null;
  return /*#__PURE__*/ReactDOM__default["default"].createPortal(/*#__PURE__*/React__default["default"].createElement(Overlay$2, {
    animate: animate,
    onClick: closeModal
  }, /*#__PURE__*/React__default["default"].createElement(ModalContainer, {
    animate: animate,
    onClick: e => e.stopPropagation(),
    "aria-modal": "true",
    role: "dialog",
    "aria-labelledby": "modal-title"
  }, /*#__PURE__*/React__default["default"].createElement(CloseButton, {
    onClick: closeModal,
    "aria-label": "Close Modal"
  }, /*#__PURE__*/React__default["default"].createElement(XIcon, null)), /*#__PURE__*/React__default["default"].createElement(ModalContent, null, title && /*#__PURE__*/React__default["default"].createElement(ModalTitle, {
    id: "modal-title"
  }, title), /*#__PURE__*/React__default["default"].createElement(ModalBody, null, children)))), document.getElementById("modal-root"));
};
Modal.propTypes = {
  isModalOpen: PropTypes__default["default"].bool.isRequired,
  closeModal: PropTypes__default["default"].func.isRequired,
  title: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node.isRequired,
  animate: PropTypes__default["default"].bool // Enable or disable animations
};

// src/components/PollItem.jsx

// Container for the entire component
const Container$1 = styled__default["default"].div`
position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  margin: 20px auto;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
`;

// Header containing the question and category badge
const Header$1 = styled__default["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: 500;
`;

// Category badge styling
const Badge = styled__default["default"].span`
position: absolute;
    top: 4px;
    right: 4px;
  background-color: #fff;
  border: 1px solid #007bff;
  color: #007bff;
  border-radius: 12px;
  padding: 5px 10px;
  font-size: 12px;
`;

// Container for the option buttons
const ButtonsContainer$1 = styled__default["default"].div`
  display: flex;
  justify-content: space-between;
`;

// Option button styling
const OptionButton = styled__default["default"].button`
  width: 48%;
  padding: 20px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

// Percentage bar container
const BarContainer = styled__default["default"].div`
  position: relative;
  display: flex;
  width: 100%;
  height: 60px; /* Increased height to accommodate percentage labels */
  border-radius: 5px;
  overflow: hidden;
  background-color: #f0f0f0;
`;

// Individual bar segment styling
const BarSegment = styled__default["default"].div`
  position: relative;
  width: ${props => props.percentage}%;
  background-color: ${props => props.color};
  transition: width 2s ease, background-color 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
`;

// Percentage label styling
const PercentageLabel = styled__default["default"].span`
  position: absolute;
  top: 5px;
  ${props => props.align === 'left' ? 'left: 10px;' : 'right: 10px;'}
  font-size: 0.8rem;
  color: #fff;
  border-radius: 4px;
  font-weight: 600;
`;

// Option name styling within the bar
const OptionName = styled__default["default"].span`
  font-size: 1rem;
  font-weight: 600;
  color: white;
  white-space: nowrap;
  overflow: visible; /* Allow overflow */
  text-overflow: unset;
  z-index: 1;
`;
const PollItem = ({
  question,
  category,
  opt1,
  opt2,
  percOpt1,
  percOpt2,
  chosenOpt: initialChosenOpt = null
}) => {
  const [chosenOpt, setChosenOpt] = React.useState(initialChosenOpt);
  const [showBar, setShowBar] = React.useState(!!initialChosenOpt);
  const [displayedPercOpt1, setDisplayedPercOpt1] = React.useState(50);
  const [displayedPercOpt2, setDisplayedPercOpt2] = React.useState(50);
  React.useEffect(() => {
    if (showBar) {
      // Initialize to 50-50 split
      setDisplayedPercOpt1(50);
      setDisplayedPercOpt2(50);

      // Trigger transition to actual percentages after a short delay
      const timer = setTimeout(() => {
        setDisplayedPercOpt1(percOpt1);
        setDisplayedPercOpt2(percOpt2);
      }, 100); // 100ms delay for smoother transition

      return () => clearTimeout(timer);
    }
  }, [showBar, percOpt1, percOpt2]);
  const handleOptionClick = option => {
    setChosenOpt(option);
    setShowBar(true);
  };
  return /*#__PURE__*/React__default["default"].createElement(Container$1, null, /*#__PURE__*/React__default["default"].createElement(Header$1, null, /*#__PURE__*/React__default["default"].createElement("h2", {
    style: {
      margin: 0
    }
  }, question), /*#__PURE__*/React__default["default"].createElement(Badge, null, category)), !showBar ? /*#__PURE__*/React__default["default"].createElement(ButtonsContainer$1, null, /*#__PURE__*/React__default["default"].createElement(OptionButton, {
    "aria-label": `Select ${opt1}`,
    onClick: () => handleOptionClick(opt1)
  }, opt1), /*#__PURE__*/React__default["default"].createElement(OptionButton, {
    "aria-label": `Select ${opt2}`,
    onClick: () => handleOptionClick(opt2)
  }, opt2)) : /*#__PURE__*/React__default["default"].createElement(BarContainer, null, /*#__PURE__*/React__default["default"].createElement(BarSegment, {
    percentage: displayedPercOpt1,
    color: chosenOpt === opt1 ? '#007bff' : '#000'
  }, /*#__PURE__*/React__default["default"].createElement(PercentageLabel, {
    align: "left"
  }, `${displayedPercOpt1}%`), /*#__PURE__*/React__default["default"].createElement(OptionName, {
    title: opt1
  }, opt1)), /*#__PURE__*/React__default["default"].createElement(BarSegment, {
    percentage: displayedPercOpt2,
    color: chosenOpt === opt2 ? '#007bff' : '#000'
  }, /*#__PURE__*/React__default["default"].createElement(PercentageLabel, {
    align: "right"
  }, `${displayedPercOpt2}%`), /*#__PURE__*/React__default["default"].createElement(OptionName, {
    title: opt2
  }, opt2))));
};
PollItem.propTypes = {
  question: PropTypes__default["default"].string.isRequired,
  category: PropTypes__default["default"].string.isRequired,
  opt1: PropTypes__default["default"].string.isRequired,
  opt2: PropTypes__default["default"].string.isRequired,
  percOpt1: PropTypes__default["default"].number.isRequired,
  percOpt2: PropTypes__default["default"].number.isRequired,
  chosenOpt: PropTypes__default["default"].string
};

// Popover Component
const Popover = ({
  trigger,
  children
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const popoverRef = React.useRef();
  const triggerRef = React.useRef();
  const handleTogglePopover = () => {
    setIsOpen(!isOpen);
  };
  React.useEffect(() => {
    const handleClickOutside = event => {
      if (popoverRef.current && !popoverRef.current.contains(event.target) && triggerRef.current && !triggerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "relative inline-block"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    ref: triggerRef,
    onClick: handleTogglePopover,
    className: "cursor-pointer inline-flex items-center"
  }, trigger), isOpen && /*#__PURE__*/React__default["default"].createElement("div", {
    ref: popoverRef,
    className: "absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
  }, children));
};

function SideBar({
  navLinks = [],
  username,
  profilePic,
  onLogout,
  isSideNavOpen,
  closeSideNav,
  hideProfile = false
}) {
  // Separate main and footer links based on a property (e.g., isFooter)
  const mainLinks = navLinks.filter(link => !link.isFooter);
  const footerLinks = navLinks.filter(link => link.isFooter);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, isSideNavOpen && /*#__PURE__*/React__default["default"].createElement(Overlay$1, {
    onClick: closeSideNav
  }), /*#__PURE__*/React__default["default"].createElement(SideNavContainer$1, {
    isOpen: isSideNavOpen,
    onClick: e => e.stopPropagation()
  }, !hideProfile && username && profilePic && /*#__PURE__*/React__default["default"].createElement(SideNavHeader$1, {
    to: "/profile",
    onClick: closeSideNav
  }, /*#__PURE__*/React__default["default"].createElement(ProfileImage, {
    src: profilePic,
    alt: "Profile"
  }), /*#__PURE__*/React__default["default"].createElement(ProfileInfo, null, /*#__PURE__*/React__default["default"].createElement(Username, null, username), /*#__PURE__*/React__default["default"].createElement(ViewProfile, null, "View Profile"))), /*#__PURE__*/React__default["default"].createElement(NavLinks$1, null, mainLinks.map(({
    name,
    path,
    Icon
  }, index) => /*#__PURE__*/React__default["default"].createElement(StyledLink$1, {
    to: path,
    key: index,
    onClick: closeSideNav
  }, Icon && /*#__PURE__*/React__default["default"].createElement(IconWrapper$1, null, /*#__PURE__*/React__default["default"].createElement(Icon, {
    className: "icon"
  })), /*#__PURE__*/React__default["default"].createElement("span", null, name)))), /*#__PURE__*/React__default["default"].createElement(FooterLinks$2, null, footerLinks.map(({
    name,
    path,
    Icon
  }, index) => /*#__PURE__*/React__default["default"].createElement(StyledLink$1, {
    to: path,
    key: index,
    onClick: closeSideNav
  }, Icon && /*#__PURE__*/React__default["default"].createElement(IconWrapper$1, null, /*#__PURE__*/React__default["default"].createElement(Icon, {
    className: "icon"
  })), /*#__PURE__*/React__default["default"].createElement("span", null, name))), onLogout && /*#__PURE__*/React__default["default"].createElement(LogoutButton$1, {
    onClick: () => {
      onLogout();
      closeSideNav();
    }
  }, /*#__PURE__*/React__default["default"].createElement("span", null, "Log out")))));
}

// Styled Components remain the same
styled__default["default"].nav`
  position: relative;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
`;
styled__default["default"].div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`;
styled__default["default"].button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1rem;

  .icon {
    width: 2rem;
    height: 2rem;
  }
`;
styled__default["default"](reactRouterDom.Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  text-decoration: none;
  flex-grow: 1;
`;
styled__default["default"](reactRouterDom.Link)`
  border-radius: 0.375rem;
  background-color: ${props => props.signInColor};
  padding: 0.5rem 1rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.5);
  }
`;
const Overlay$1 = styled__default["default"].div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 49;
  transition: opacity 0.3s ease-in-out;
  pointer-events: auto;
`;
const SideNavContainer$1 = styled__default["default"].div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 16rem;
  background: #ffffff;
  color: #1a202c;
  transform: ${({
  isOpen
}) => isOpen ? "translateX(0)" : "translateX(-100%)"};
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  box-shadow: ${({
  isOpen
}) => isOpen ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none"};
  z-index: 50;
`;
const SideNavHeader$1 = styled__default["default"](reactRouterDom.Link)`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #f7fafc;
  }
`;
const ProfileImage = styled__default["default"].img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
`;
const ProfileInfo = styled__default["default"].div`
  display: flex;
  flex-direction: column;
`;
const Username = styled__default["default"].div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
`;
const ViewProfile = styled__default["default"].div`
  font-size: 0.875rem;
  color: #718096;
`;
const NavLinks$1 = styled__default["default"].nav`
  flex-grow: 1;
  overflow-y: auto;
`;
const StyledLink$1 = styled__default["default"](reactRouterDom.Link)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: #2d3748;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  width: 100%;
  border-radius: 4px;

  &:hover {
    background: #f7fafc;
    color: #1a202c;
  }
`;
const FooterLinks$2 = styled__default["default"].div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid #e2e8f0;
`;
const IconWrapper$1 = styled__default["default"].div`
  display: flex;
  align-items: center;
  margin-right: 0.75rem;

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
const LogoutButton$1 = styled__default["default"].button`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  color: #2d3748;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
  text-align: left;

  &:hover {
    background: #f7fafc;
    color: #1a202c;
  }
`;

const NavBarContainer = styled__default["default"].div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  display: flex;
  align-items: center;
  height: 62px;
  white-space: nowrap;
  font-weight: 600;
  font-size: 15px;
  border-bottom: 1px solid rgba(44, 45, 42, 0.25);
  background-color: var(--beach-bg);
  padding: 0 16px;
`;
const DrawerButton$1 = styled__default["default"].button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1rem;

  .icon {
    width: 2rem;
    height: 2rem;
  }

`;
const Logo = styled__default["default"].img`
  width: 116px;
  margin-right: 16px;
`;
const MenuContainer = styled__default["default"].div`
  display: none;
  @media (min-width: 640px) {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: 32px;
  }
`;
const MenuButton = styled__default["default"].button`
  color: ${props => props.active ? 'blue' : 'black'};
  border-bottom: ${props => props.active ? '2px solid blue' : 'none'};
  transition: all 0.3s;

  &:hover {
    color: blue;
  }
`;
const HeaderIcons = styled__default["default"].div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 16px;
`;
const SignInButton = styled__default["default"].button`
  border-radius: 9999px;
  background-color: black;
  color: white;
  padding: 8px 24px;
  transition: all 0.3s;

  &:hover {
    background-color: #333;
    transform: scale(1.05);
  }

  &:focus {
    transform: translateY(2px);
  }
`;
const TopNavBar2 = ({
  menuItems,
  activeTab: propActiveTab,
  onTabClick
}) => {
  const [activeTab, setActiveTab] = React.useState(propActiveTab);
  const navigate = reactRouterDom.useNavigate();
  const [isSideNavOpen, setIsSideNavOpen] = React.useState(false);
  const toggleSideNav = () => setIsSideNavOpen(prev => !prev);
  const closeSideNav = () => setIsSideNavOpen(false);
  React.useEffect(() => {
    setActiveTab(propActiveTab);
  }, [propActiveTab]);
  const handleTabClick = item => {
    setActiveTab(item);
    if (onTabClick) {
      onTabClick(item);
    }
  };
  const handleSignInClick = () => {
    navigate('/login');
  };
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(NavBarContainer, null, /*#__PURE__*/React__default["default"].createElement(DrawerButton$1, {
    onClick: toggleSideNav
  }, /*#__PURE__*/React__default["default"].createElement(MenuIcon, {
    className: "icon"
  })), /*#__PURE__*/React__default["default"].createElement(Logo, {
    src: "https://cdn.shopify.com/s/files/1/0689/1443/files/CLOSCA-LOGO-WEB-BLACK_130x@2x.png?v=1559116993",
    alt: "Closca Logo"
  }), /*#__PURE__*/React__default["default"].createElement(MenuContainer, null, menuItems.map(item => /*#__PURE__*/React__default["default"].createElement(MenuButton, {
    key: item,
    onClick: () => handleTabClick(item),
    active: item === activeTab
  }, item))), /*#__PURE__*/React__default["default"].createElement(HeaderIcons, null, /*#__PURE__*/React__default["default"].createElement(SignInButton, {
    onClick: handleSignInClick
  }, "Sign In"))), /*#__PURE__*/React__default["default"].createElement(SideBar, {
    navLinks: [{
      Icon: () => {},
      isFooter: false,
      name: 'Home',
      path: '/home'
    }, {
      Icon: () => {},
      isFooter: false,
      name: 'About',
      path: '/about'
    }, {
      Icon: () => {},
      isFooter: true,
      name: 'Settings',
      path: '/settings'
    }, {
      Icon: () => {},
      isFooter: true,
      name: 'Contact',
      path: '/contact'
    }],
    isSideNavOpen: isSideNavOpen,
    toggleSideNav: toggleSideNav,
    closeSideNav: closeSideNav,
    hideProfile: false,
    onLogout: () => {},
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",
    signInColor: "#ff4500",
    username: "Jane Doe"
  }));
};
TopNavBar2.propTypes = {
  menuItems: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  activeTab: PropTypes__default["default"].string,
  onTabClick: PropTypes__default["default"].func
};
TopNavBar2.defaultProps = {
  activeTab: '',
  onTabClick: null
};

// Dummy components for additional content
const AdditionalContent1 = () => /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("h2", null, "Additional Content for Slide 1"), /*#__PURE__*/React__default["default"].createElement(Card3, null));
const AdditionalContent2 = () => /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("h2", null, "Additional Content for Slide 2"), /*#__PURE__*/React__default["default"].createElement(Card3, null));

// Sample slides data
const slidesData = [{
  id: "beach",
  header: "Closca Bottle",
  title: "Beach",
  subtitle: "€39.90",
  contentTitle: "In 20 years, there could be more plastic in our oceans than fish.",
  contentSubtitle: "Plastic pollution injures more than 100,000 marine animals every year. It takes around 450 years for one plastic bottle to decompose.",
  shopNowLink: "#",
  bottleBgImage: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2902&auto=format&fit=crop",
  bottleImage: "https://www.designforfinland.com/product-images/Closca_Bottle_Wave_Antarctica_450ml_Close.png",
  backgroundColor: "#e7dfcf",
  additionalContentComponent: AdditionalContent1
}, {
  id: "savanna",
  header: "Closca Bottle",
  title: "Savanna",
  subtitle: "€39.90",
  contentTitle: "The Earth's area affected by desertification is approximately 11 times India's size.",
  contentSubtitle: "The Savannas act as a carbon sink, absorbing CO₂ from the atmosphere and helping to maintain the balance of global temperatures.",
  shopNowLink: "#",
  bottleBgImage: "https://images.unsplash.com/photo-1613109526778-27605f1f27d2?ixlib=rb-1.2.1&auto=format&fit=crop",
  bottleImage: "https://fnac.sa/cdn/shop/files/Closca_Bottle_Wave_Sahara_600ml_Close.png",
  backgroundColor: "#e9bf8b",
  additionalContentComponent: AdditionalContent2
}
// More slides...
];
const PortfolioMainSlider = ({
  slides = slidesData
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const [shadowOpacity, setShadowOpacity] = React.useState(0.7); // Initial shadow opacity
  const totalSlides = slides.length;
  const slideDuration = 5000; // 5 seconds
  const sliderRef = React.useRef(null);
  const progressBarRef = React.useRef(null);
  const additionalContentRef = React.useRef(null);
  const isPlayingRef = React.useRef(isPlaying);

  // Keep isPlayingRef updated with the latest isPlaying state
  React.useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);
  React.useEffect(() => {
    let autoSlideInterval;
    let progressInterval;
    if (isPlaying) {
      // Start the progress bar animation
      setProgress(0);
      progressInterval = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress >= 100) {
            handleNextSlide();
            return 0;
          }
          return prevProgress + 100 / (slideDuration / 100);
        });
      }, 100);

      // Automatically change slides after duration
      autoSlideInterval = setInterval(() => {
        handleNextSlide();
      }, slideDuration);
    }
    return () => {
      if (autoSlideInterval) clearInterval(autoSlideInterval);
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [isPlaying, currentSlideIndex]);

  // Scroll event handler
  React.useEffect(() => {
    const handleScroll = () => {
      if (additionalContentRef.current) {
        const contentTop = additionalContentRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        let opacity = 1 - contentTop / (windowHeight / 2);
        if (opacity < 0) opacity = 0;
        if (opacity > 0.7) opacity = 0.7;
        setShadowOpacity(0.7 - opacity);
      }

      // Start playing slides when scrolled to top
      if (window.scrollY === 0 && !isPlayingRef.current) {
        setIsPlaying(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to ensure this runs once

  const handleNextSlide = () => {
    setCurrentSlideIndex(prevIndex => prevIndex === totalSlides - 1 ? 0 : prevIndex + 1);
  };
  const handlePrevSlide = () => {
    setCurrentSlideIndex(prevIndex => prevIndex === 0 ? totalSlides - 1 : prevIndex - 1);
  };
  const handleTabClick = tabTitle => {
    const tabIndex = slides.findIndex(slide => slide.title === tabTitle);
    if (tabIndex !== -1) {
      setCurrentSlideIndex(tabIndex);
      setProgress(0); // Reset progress on manual navigation
    }
  };
  const handleViewClick = () => {
    // Pause the slider and scroll down to the content below the slider
    setIsPlaying(false);
    additionalContentRef.current.scrollIntoView({
      behavior: "smooth"
    });
  };
  const currentSlide = slides[currentSlideIndex];
  const AdditionalContentComponent = currentSlide.additionalContentComponent || Card3;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("style", null, `
        .fade-enter {
          opacity: 0;
          transform: translateX(100%);
        }
        .fade-enter-active {
          opacity: 1;
          transform: translateX(0%);
          transition: opacity 700ms ease-in-out, transform 500ms ease-in-out;
        }
        .fade-exit {
          opacity: 1;
          transform: translateX(0%);
        }
        .fade-exit-active {
          opacity: 0;
          transform: translateX(-100%);
          transition: opacity 700ms ease-in-out, transform 500ms ease-in-out;
        }
        .progress-bar {
          height: 4px;
          background-color: black;
          transition: width 100ms linear;
        }
      `), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "h-screen"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    ref: sliderRef,
    className: "container overflow-hidden relative h-[650px] w-full flex flex-col p-8",
    style: {
      backgroundColor: currentSlide.backgroundColor
    }
  }, /*#__PURE__*/React__default["default"].createElement(TopNavBar2, {
    menuItems: slides.map(slide => slide.title),
    activeTab: currentSlide.title,
    onTabClick: handleTabClick
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "relative flex-grow mt-16"
  }, /*#__PURE__*/React__default["default"].createElement(reactTransitionGroup.TransitionGroup, {
    className: "h-full"
  }, /*#__PURE__*/React__default["default"].createElement(reactTransitionGroup.CSSTransition, {
    key: currentSlide.id,
    timeout: 500,
    classNames: "fade"
  }, /*#__PURE__*/React__default["default"].createElement(HeroContent, {
    header: currentSlide.header,
    title: currentSlide.title,
    subtitle: currentSlide.subtitle,
    contentTitle: currentSlide.contentTitle,
    contentSubtitle: currentSlide.contentSubtitle,
    shopNowLink: currentSlide.shopNowLink,
    bottleBgImage: currentSlide.bottleBgImage,
    bottleImage: currentSlide.bottleImage
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute bottom-5 right-5 z-10 flex space-x-4"
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: handlePrevSlide,
    className: "flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 bg-white shadow-md hover:bg-gray-100"
  }, /*#__PURE__*/React__default["default"].createElement(ButtonArrowIcon, {
    className: "transform rotate-180"
  })), /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: handleNextSlide,
    className: "flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 bg-white shadow-md hover:bg-gray-100"
  }, /*#__PURE__*/React__default["default"].createElement(ButtonArrowIcon, null))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute right-5 top-10 text-base font-medium"
  }, currentSlideIndex + 1, " / ", totalSlides), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute bottom-0 left-0 w-full"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    ref: progressBarRef,
    className: "progress-bar",
    style: {
      width: `${progress}%`
    }
  })))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute inset-x-0 top-0 h-40 z-10 pointer-events-none",
    style: {
      background: `linear-gradient(to bottom, rgba(0, 0, 0, ${shadowOpacity}), transparent)`
    }
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute text-white inset-x-0 top-0 flex justify-center py-5 z-20"
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: handleViewClick,
    className: "flex flex-col items-center cursor-pointer"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "animate-bounce"
  }, /*#__PURE__*/React__default["default"].createElement(ButtonArrowIcon, {
    className: "h-6 w-6 transform rotate-90",
    "aria-hidden": "true"
  })), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "mt-2 text-lg font-medium"
  }, "View ", currentSlide.title))), /*#__PURE__*/React__default["default"].createElement("div", {
    ref: additionalContentRef,
    className: "w-full bg-gray-100 p-8",
    style: {
      minHeight: "400px"
    }
  }, /*#__PURE__*/React__default["default"].createElement(AdditionalContentComponent, null)))));
};

// ProgressBar.js
const ProgressBar = ({
  currentPage,
  totalPages
}) => {
  const progress = currentPage / totalPages * 100;
  return /*#__PURE__*/React__default["default"].createElement(ProgressBarContainer, null, /*#__PURE__*/React__default["default"].createElement(ProgressIndicator, {
    style: {
      width: `${progress}%`
    }
  }));
};
const ProgressBarContainer = styled__default["default"].div`
  width: 100%;
  background-color: #e0e0e0;
  height: 8px;
  border-radius: 5px;
  margin-bottom: 20px;
`;
const ProgressIndicator = styled__default["default"].div`
  height: 100%;
  background-color: #b08b5b;
  border-radius: 5px;
  transition: width 0.3s;
`;

function ProjectCard({
  image,
  name,
  description,
  tier,
  category
}) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex w-full aspect-[3/1] transition-all duration-300 rounded-xl shadow-lg border-1 border-gray-200  border-l-8 border-l-green-500 overflow-hidden transform bg-white hover:shadow-xl hover:scale-101"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "w-1/3 h-full"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: image,
    alt: name,
    className: "w-full h-full object-cover "
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "relative w-2/3 p-4 flex flex-col justify-center"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute top-2 right-2"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex flex-row gap-1"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "bg-green-500 px-1 text-white rounded"
  }, category), " ", /*#__PURE__*/React__default["default"].createElement("div", {
    className: "bg-yellow-500 text-white px-1 rounded"
  }, tier), " ")), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "text-sm md:text-lg font-bold text-gray-800"
  }, name), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "text-xs md:text-sm text-gray-600 md:mt-2"
  }, description)));
}

function RecipeCard$1({
  recipe,
  onCardClick,
  chefLink
}) {
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const {
    title,
    imageUrl,
    videoUrl,
    chef,
    time,
    cuisine,
    profilePic
  } = recipe;
  const handleImageClick = e => {
    e.stopPropagation(); // Prevent propagation to parent onClick
    setIsVideoPlaying(true);
    const videoElement = document.querySelector('.video-player video');
    if (videoElement) {
      videoElement.play();
    }
  };
  const handleVideoClick = e => {
    e.stopPropagation(); // Prevent propagation to parent onClick
    setIsVideoPlaying(false);
  };
  return /*#__PURE__*/React__default["default"].createElement(CardContainer, {
    onClick: onCardClick
  }, /*#__PURE__*/React__default["default"].createElement(ImageContainer$1, {
    onClick: isVideoPlaying ? handleVideoClick : handleImageClick
  }, /*#__PURE__*/React__default["default"].createElement(MediaWrapper, {
    isVideoPlaying: isVideoPlaying
  }, isVideoPlaying ? /*#__PURE__*/React__default["default"].createElement(ReactPlayer__default["default"], {
    url: videoUrl,
    playing: isVideoPlaying,
    muted: true,
    width: "100%",
    height: "100%",
    className: "video-player",
    config: {
      file: {
        attributes: {
          playsInline: true
        }
      }
    }
  }) : /*#__PURE__*/React__default["default"].createElement(RecipeImage, {
    src: imageUrl,
    alt: title
  })), /*#__PURE__*/React__default["default"].createElement(ChefInfo, null, /*#__PURE__*/React__default["default"].createElement(ProfilePic, {
    src: profilePic,
    alt: chef
  }), /*#__PURE__*/React__default["default"].createElement(ChefNameLink, {
    href: chefLink
  }, chef)), /*#__PURE__*/React__default["default"].createElement(Likes, null, /*#__PURE__*/React__default["default"].createElement(BookmarkIcon, {
    className: "icon-large"
  })), /*#__PURE__*/React__default["default"].createElement(BottomDetails, null, /*#__PURE__*/React__default["default"].createElement(CardContent, null, /*#__PURE__*/React__default["default"].createElement(CardTitle, null, title), /*#__PURE__*/React__default["default"].createElement(InfoContainer, null, /*#__PURE__*/React__default["default"].createElement(LeftInfo, null, /*#__PURE__*/React__default["default"].createElement(CardInfo, null, /*#__PURE__*/React__default["default"].createElement(ClockIcon, {
    className: "icon-large"
  }), /*#__PURE__*/React__default["default"].createElement(Text, null, time)), /*#__PURE__*/React__default["default"].createElement(CardInfo, null, /*#__PURE__*/React__default["default"].createElement(ForkAndKnifeIcon, {
    className: "icon-large"
  }), /*#__PURE__*/React__default["default"].createElement(Text, null, cuisine))), /*#__PURE__*/React__default["default"].createElement(ViewRecipeContainer, {
    onClick: onCardClick
  }, "View Recipe", /*#__PURE__*/React__default["default"].createElement(ArrowRightIcon1, {
    className: "icon-arrow"
  })))))));
}

// Styled Components
const CardContainer = styled__default["default"].div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  background-color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 600px;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;
const ImageContainer$1 = styled__default["default"].div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  aspect-ratio: 1 / 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;
const MediaWrapper = styled__default["default"].div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({
  isVideoPlaying
}) => isVideoPlaying ? 'black' : 'transparent'};
`;
const RecipeImage = styled__default["default"].img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ChefInfo = styled__default["default"].div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
`;
const ProfilePic = styled__default["default"].img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 0.5rem;
  border: 2px solid #ffffff;
`;
const ChefNameLink = styled__default["default"].a`
  font-weight: 600;
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
`;
const Likes = styled__default["default"].div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.3rem;
  border-radius: 0.7rem;

  .icon-large {
    width: 30px;
    height: 30px;
    fill: #ffffff;
    margin-right: 0.25rem;
  }
`;
const BottomDetails = styled__default["default"].div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.3rem 1rem 1rem 1rem;
`;
const CardContent = styled__default["default"].div`
  text-align: left;
  width: 100%;
`;
const CardTitle = styled__default["default"].p`
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;
const InfoContainer = styled__default["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const LeftInfo = styled__default["default"].div`
  display: flex;
  flex-direction: column;
`;
const CardInfo = styled__default["default"].div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 2px 5px;
  .icon-large {
    width: 20px;
    height: 20px;
    fill: #ffffff;
    margin-right: 0.25rem;
  }
`;
const Text = styled__default["default"].p`
  font-size: 1rem;
  color: #ffffff;
  font-weight: 500;
`;
const ViewRecipeContainer = styled__default["default"].button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  margin: auto 0;
  background-color: #B08B5B;
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-size: 1.1rem;
  font-weight: 600;

  &:hover {
    background-color: #9a7748;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;
const ArrowRightIcon1 = styled__default["default"](ArrowRightIcon)`
  width: 35px;
  height: 35px;
  color: #ffffff;
`;

// RecipeSwipeComponent.jsx

// If you intend to use VolumeIcon and MuteIcon, ensure they're correctly imported
// import { VolumeIcon, MuteIcon } from 'liamc9npm';

// Styled Components

const RecipeSwipeContainer = styled__default["default"].div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  height: 100svh;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
`;
const DrawerOverlay = styled__default["default"].div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;
const SlideContainer = styled__default["default"].div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Video = styled__default["default"].video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Title$2 = styled__default["default"].div`
  font-size: 20px;
  font-weight: bold;
  margin: 5px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 5;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
`;
const RecipeInfoCards = styled__default["default"].div`
  width: 100%;
  height: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const RecipeCard = styled__default["default"].div`
  margin: 5px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;
const RecipeCardHeader = styled__default["default"].div`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 5px;
`;
const RecipeCardContent = styled__default["default"].div`
  font-size: 1em;
  color: #555;
`;
const Drawer = styled__default["default"].div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50%;
  background-color: #fff;
  transition: transform 0.3s ease;
  z-index: 10;
  overflow-y: auto;

  transform: translateY(80%);

  ${props => props.open && styled.css`
      transform: translateY(0);
    `}
`;
const DrawerHandle = styled__default["default"].div`
  text-align: center;
  color: #000000;
  padding: 10px;
  cursor: pointer;
  background-color: #f0f0f0;
`;
const DrawerContent = styled__default["default"].div`
  padding: 20px;
`;
const BackButton$2 = styled__default["default"].button`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  z-index: 15;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
const StepIndicator = styled__default["default"].div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 1em;
  z-index: 15;
`;
const MuteButton = styled__default["default"].button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  z-index: 15;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

// React Component

const RecipeSwipeComponent = ({
  recipe
}) => {
  const {
    name,
    cuisine,
    time,
    servings,
    calories,
    steps,
    overviewVideoUrl,
    overviewDescription
  } = recipe;
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [currentStepDescription, setCurrentStepDescription] = React.useState(overviewDescription);
  const [isMuted, setIsMuted] = React.useState(false);
  const toggleDrawer = description => {
    setCurrentStepDescription(description);
    setIsDrawerOpen(prev => !prev);
  };
  const closeDrawer = e => {
    // Since DrawerOverlay is a separate styled component, we don't need to check class
    setIsDrawerOpen(false);
  };
  const goToOverview = () => {
    const swiperInstance = document.querySelector('.swiper').swiper;
    if (swiperInstance) {
      swiperInstance.slideTo(0);
    }
    setCurrentStepDescription(overviewDescription);
  };
  const handleSlideChange = swiper => {
    document.querySelectorAll('video').forEach(video => video.pause());
    const activeSlide = swiper.slides[swiper.activeIndex];
    const video = activeSlide.querySelector('video');
    if (video) {
      video.play();
    }
    setCurrentStepDescription(swiper.activeIndex === 0 ? overviewDescription : steps[swiper.activeIndex - 1].description);
  };
  const toggleMute = () => {
    setIsMuted(prev => !prev);
    document.querySelectorAll('video').forEach(video => video.muted = !isMuted);
  };
  return /*#__PURE__*/React__default["default"].createElement(RecipeSwipeContainer, null, isDrawerOpen && /*#__PURE__*/React__default["default"].createElement(DrawerOverlay, {
    onClick: closeDrawer
  }), /*#__PURE__*/React__default["default"].createElement(react.Swiper, {
    spaceBetween: 0,
    slidesPerView: 1,
    allowTouchMove: !isDrawerOpen,
    onSlideChange: handleSlideChange
  }, /*#__PURE__*/React__default["default"].createElement(react.SwiperSlide, null, /*#__PURE__*/React__default["default"].createElement(SlideContainer, {
    className: "recipe-overview"
  }, /*#__PURE__*/React__default["default"].createElement(Video, {
    src: overviewVideoUrl,
    className: "overview-video",
    playsInline: true,
    muted: isMuted,
    onClick: e => e.target.paused ? e.target.play() : e.target.pause()
  }), /*#__PURE__*/React__default["default"].createElement(Title$2, null, name), /*#__PURE__*/React__default["default"].createElement(RecipeInfoCards, null, /*#__PURE__*/React__default["default"].createElement(RecipeCard, null, /*#__PURE__*/React__default["default"].createElement(RecipeCardHeader, null, "Cuisine"), /*#__PURE__*/React__default["default"].createElement(RecipeCardContent, null, cuisine)), /*#__PURE__*/React__default["default"].createElement(RecipeCard, null, /*#__PURE__*/React__default["default"].createElement(RecipeCardHeader, null, "Time"), /*#__PURE__*/React__default["default"].createElement(RecipeCardContent, null, time)), /*#__PURE__*/React__default["default"].createElement(RecipeCard, null, /*#__PURE__*/React__default["default"].createElement(RecipeCardHeader, null, "Servings"), /*#__PURE__*/React__default["default"].createElement(RecipeCardContent, null, servings)), /*#__PURE__*/React__default["default"].createElement(RecipeCard, null, /*#__PURE__*/React__default["default"].createElement(RecipeCardHeader, null, "Calories"), /*#__PURE__*/React__default["default"].createElement(RecipeCardContent, null, calories, " kcal"))))), steps.map((step, index) => /*#__PURE__*/React__default["default"].createElement(react.SwiperSlide, {
    key: index
  }, /*#__PURE__*/React__default["default"].createElement(SlideContainer, {
    className: "recipe-step"
  }, /*#__PURE__*/React__default["default"].createElement(BackButton$2, {
    onClick: goToOverview
  }, "Back"), /*#__PURE__*/React__default["default"].createElement(StepIndicator, null, "Step ", index + 1), /*#__PURE__*/React__default["default"].createElement(MuteButton, {
    onClick: toggleMute
  }, isMuted ? 'Unmute' : 'Mute'), /*#__PURE__*/React__default["default"].createElement(Video, {
    src: step.videoUrl,
    className: "step-video",
    playsInline: true,
    muted: isMuted,
    onClick: e => e.target.paused ? e.target.play() : e.target.pause()
  }))))), /*#__PURE__*/React__default["default"].createElement(Drawer, {
    open: isDrawerOpen,
    onClick: e => {
      if (e.target.closest('.drawer-handle')) {
        toggleDrawer(currentStepDescription);
      }
    }
  }, /*#__PURE__*/React__default["default"].createElement(DrawerHandle, {
    className: "drawer-handle"
  }, "Swipe up for step details"), isDrawerOpen && /*#__PURE__*/React__default["default"].createElement(DrawerContent, null, /*#__PURE__*/React__default["default"].createElement("p", null, currentStepDescription))));
};

// src/components/RoomsView.jsx

// Styled Components (Moved from Rooms.jsx)
const RoomContainer = styled__default["default"].div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 100px; /* Space for the fixed bottom bar */
  position: relative; /* Make it a positioned parent for the absolute BackButton */
`;
const BackButton$1 = styled__default["default"].button`
  position: absolute;
  top: 20px; /* Adjust as needed */
  left: 20px; /* Adjust as needed */
  width: 40px;
  height: 40px;
  border: 1px solid #e0e0e0;
  padding: 5px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 50; /* Ensure it's above the conversation content */
  }
`;
const ImageContainer = styled__default["default"].div`
  aspect-ratio: 5 / 4;
  overflow: hidden;
`;
const RoomTitle = styled__default["default"].h1`
  font-size: 2rem;
  color: #333;
  font-weight: bold;
  margin-left: 1rem;
  margin-top: 60px; /* Space for the BackButton */
`;
const DatesContainer = styled__default["default"].div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 1rem auto 0;
  padding: 0.5rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);

  .icon-container {
    flex: 0 0 20%; /* 20% of the container */
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 30px;
      height: 30px;
    }
  }

  .dates {
    display: flex;
    flex: 1;
    justify-content: space-between;

    .date-item {
      flex: 0 0 40%; /* Each section takes 40% of the container */
      display: flex;
      flex-direction: column;
      align-items: flex-start; /* Changed from 'left' to 'flex-start' */
      margin-left: 2rem;

      .date-label {
        font-size: 1rem;
        font-weight: 600; /* semi-bold */
        color: #555;
      }

      .date-value {
        font-size: 1.4rem;
        font-weight: bold;
        color: #333;
      }
    }
  }
`;
const SectionHeader = styled__default["default"].h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-top: 2rem;
  text-align: left;
  width: 100%;
  margin-left: 1rem;
`;
const SectionContent = styled__default["default"].div`
  font-size: 1rem;
  color: #666;
  text-align: left;
  width: 100%;
  line-height: 1.5;
  margin-left: 1rem;
`;

// New Styled Components for Location
const LocationContainer = styled__default["default"].div`
  display: flex;
  align-items: center;
  margin-bottom: 10px; /* Space between address and map */
  width: 90%;
`;
const AddressText = styled__default["default"].span`
  font-size: 1.1rem;
  color: #666;
`;

// Styled components for the drawer and message form
const FixedBottomBar = styled__default["default"].div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:  1rem;
  z-index: 20;
`;
const RentContainer = styled__default["default"].div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const RentLabel = styled__default["default"].div`
  font-size: 0.8rem;
  font-weight: 400;
  color: #999;
`;
const RentText = styled__default["default"].div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;
const SendMessageButton = styled__default["default"].button`
  background-color: #A855F7;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;


  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;
const ErrorContainer = styled__default["default"].div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  font-size: 1.5rem;
  color: red;
`;

// Display Component
const RoomsView = ({
  roomData,
  handleSend,
  currentUser,
  id
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const navigate = reactRouterDom.useNavigate();
  if (!roomData) {
    return /*#__PURE__*/React__default["default"].createElement(ErrorContainer, null, "Room not found.");
  }
  const handleSendMessage = () => {
    if (!currentUser) {
      // Redirect to login if the user is not logged in
      navigate("/login", {
        state: {
          from: `/rooms/${id}`
        }
      });
      return;
    }

    // Open the message form drawer
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const handleBackClick = () => {
    window.history.back();
    // Alternatively, use navigate(-1) if you prefer:
    // navigate(-1);
  };
  const images = roomData.images && Array.isArray(roomData.images) ? roomData.images : [];
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(RoomContainer, null, /*#__PURE__*/React__default["default"].createElement(BackButton$1, {
    onClick: handleBackClick,
    "aria-label": "Go Back"
  }, /*#__PURE__*/React__default["default"].createElement(ChevronLeftIcon, null)), /*#__PURE__*/React__default["default"].createElement(ImageContainer, null, images.length > 0 ? /*#__PURE__*/React__default["default"].createElement(ImageCarousel2, {
    images: images
  }) : /*#__PURE__*/React__default["default"].createElement("p", null, "No images available")), /*#__PURE__*/React__default["default"].createElement(RoomTitle, null, roomData.title || "Room Title"), /*#__PURE__*/React__default["default"].createElement(DatesContainer, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "icon-container"
  }, /*#__PURE__*/React__default["default"].createElement(CalendarIcon, null)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dates"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "date-item"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "date-label"
  }, "From"), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "date-value"
  }, roomData.startDate || "Anytime")), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "date-item"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "date-label"
  }, "To"), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "date-value"
  }, roomData.endDate || "Anytime")))), /*#__PURE__*/React__default["default"].createElement(SectionHeader, null, "Location"), /*#__PURE__*/React__default["default"].createElement(SectionContent, null, /*#__PURE__*/React__default["default"].createElement(LocationContainer, null, /*#__PURE__*/React__default["default"].createElement(LocationIcon, {
    className: "w-6 h-6"
  }), /*#__PURE__*/React__default["default"].createElement(AddressText, null, roomData.streetAddress ? roomData.streetAddress : "No address provided", ", ", roomData.city ? roomData.city : "City", ", ", roomData.county ? roomData.county : "County", ", ", roomData.eircode ? roomData.eircode : "eirCode"))), /*#__PURE__*/React__default["default"].createElement(SectionHeader, null, "Description"), /*#__PURE__*/React__default["default"].createElement(SectionContent, null, roomData.description ? roomData.description : "No description provided")), /*#__PURE__*/React__default["default"].createElement(FixedBottomBar, null, /*#__PURE__*/React__default["default"].createElement(RentContainer, null, /*#__PURE__*/React__default["default"].createElement(RentLabel, null, "Monthly Rent"), /*#__PURE__*/React__default["default"].createElement(RentText, null, "\u20AC", roomData.rent !== undefined ? roomData.rent : "N/A")), /*#__PURE__*/React__default["default"].createElement(SendMessageButton, {
    onClick: handleSendMessage,
    disabled: roomData.userId === currentUser?.uid
  }, "Send Message")), /*#__PURE__*/React__default["default"].createElement(BottomDrawer, {
    isOpen: isDrawerOpen,
    onClose: closeDrawer,
    transitionDuration: 300,
    height: "50%" // Adjust height as needed
    ,
    maxWidth: "600px"
  }, /*#__PURE__*/React__default["default"].createElement(MessageForm, {
    onSend: handleSend,
    onClose: closeDrawer
  })));
};
RoomsView.propTypes = {
  roomData: PropTypes__default["default"].object.isRequired,
  handleSend: PropTypes__default["default"].func.isRequired,
  currentUser: PropTypes__default["default"].object,
  id: PropTypes__default["default"].string.isRequired
};

const SearchBar = ({
  onSearch
}) => {
  const [input, setInput] = React.useState('');
  const handleSearch = () => {
    onSearch(input);
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex items-center mx-auto max-w-md overflow-hidden rounded-lg border border-gray-300 shadow-lg"
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    type: "text",
    value: input,
    onChange: e => setInput(e.target.value),
    placeholder: "Search...",
    className: "w-full px-4 py-2 text-gray-700 focus:outline-none"
  }), /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: handleSearch,
    className: "flex items-center justify-center px-4 py-2 bg-blue-500 text-white  hover:bg-blue-600 transition-colors"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "mr-2"
  }, "Search"), /*#__PURE__*/React__default["default"].createElement(SearchIcon, {
    className: "w-5 h-5 text-white"
  })));
};

// Container for the input and icon
const SearchBarContainer$1 = styled__default["default"].div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #f5f5f5;
  border: 1px solid #dcdcdc;
  border-radius: 25px;
  padding: 8px 16px;
  transition: border-color 0.3s, box-shadow 0.3s;
`;

// Style for the input field
const StyledInput = styled__default["default"].input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 16px;
  color: #333;
  outline: none;

  &::placeholder {
    color: #aaa;
  }
`;

// Style for the icon
const StyledIcon = styled__default["default"].div`
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;

  svg {
    width: 20px;
    height: 20px;
  }
`;
const SearchBar2 = ({
  value,
  onChange,
  placeholder,
  onKeyDown,
  inputRef
}) => {
  return /*#__PURE__*/React__default["default"].createElement(SearchBarContainer$1, null, /*#__PURE__*/React__default["default"].createElement(StyledIcon, null, /*#__PURE__*/React__default["default"].createElement(SearchIcon2, null), " "), /*#__PURE__*/React__default["default"].createElement(StyledInput, {
    type: "text",
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onKeyDown: onKeyDown // Pass the onKeyDown handler
    ,
    ref: inputRef // Assign the ref to the input element
  }));
};
SearchBar2.propTypes = {
  value: PropTypes__default["default"].string.isRequired,
  onChange: PropTypes__default["default"].func.isRequired,
  placeholder: PropTypes__default["default"].string,
  onKeyDown: PropTypes__default["default"].func,
  // Ensure onKeyDown is optional
  inputRef: PropTypes__default["default"].object // Prop type for the ref
};
SearchBar2.defaultProps = {
  placeholder: "Search...",
  onKeyDown: null,
  inputRef: null
};

// Styled container for the search button
const StyledButton = styled__default["default"].button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 16px;
  background-color: #f5f5f5;
  border: 1px solid #dcdcdc;
  border-radius: 25px;
  font-size: 16px;
  color: #aaa;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: #eaeaea;
  }

  &:focus {
    outline: none;
  }

  span {
    flex: 1;
    text-align: left;
    color: #aaa;
  }
`;
const SearchIconContainer = styled__default["default"].div`
  margin-right: 8px;

  svg {
    width: 20px;
    height: 20px;
    color: #333;
  }
`;
const SearchButton = ({
  onClick
}) => /*#__PURE__*/React__default["default"].createElement(StyledButton, {
  onClick: onClick
}, /*#__PURE__*/React__default["default"].createElement(SearchIconContainer, null, /*#__PURE__*/React__default["default"].createElement(SearchIcon2, null)), /*#__PURE__*/React__default["default"].createElement("span", null, "Search..."));
SearchButton.propTypes = {
  onClick: PropTypes__default["default"].func.isRequired
};

// Styled components...
const SearchBarContainer = styled__default["default"].div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
const CancelButton = styled__default["default"].button`
  background: none;
  border: none;
  color: black;
  font-size: 16px;
  margin-left: 8px;
  cursor: pointer;
    font-weight: bold;
`;
const Wrapper$1 = styled__default["default"].div`
  padding: 16px;
`;
const SearchDrawer = ({
  trendingItems,
  query,
  onQueryChange,
  searchResults,
  closeDrawer,
  onSearchSubmit,
  renderSearchResult,
  renderTrendingItem,
  isOpen // Accept isOpen prop
}) => {
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]); // Dependency array includes isOpen

  const handleInputChange = e => {
    onQueryChange(e.target.value);
  };
  const handleKeyDown = e => {
    if (e.key === "Enter" && query.trim() !== "") {
      onSearchSubmit(); // No need to pass the query, it's managed by the parent
    }
  };
  const handleClose = () => {
    onQueryChange(""); // Clear the input when closing
    closeDrawer();
  };

  // Filter searchResults based on query
  const filteredResults = searchResults.filter(result => result.title.includes(query));
  return /*#__PURE__*/React__default["default"].createElement(Wrapper$1, null, /*#__PURE__*/React__default["default"].createElement(SearchBarContainer, null, /*#__PURE__*/React__default["default"].createElement(SearchBar2, {
    value: query,
    onChange: handleInputChange,
    placeholder: "Search for...",
    onKeyDown: handleKeyDown,
    inputRef: inputRef // Pass the ref to SearchBar2
  }), /*#__PURE__*/React__default["default"].createElement(CancelButton, {
    onClick: handleClose
  }, "Cancel")), /*#__PURE__*/React__default["default"].createElement("div", null, query === "" ? /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("h3", null, "Trending"), trendingItems.map((item, index) => renderTrendingItem(item, index))) : /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("h3", null, "Search Results"), filteredResults.length > 0 ? filteredResults.map((result, index) => renderSearchResult(result, index)) : /*#__PURE__*/React__default["default"].createElement("p", null, "No results found."))));
};
SearchDrawer.propTypes = {
  trendingItems: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  query: PropTypes__default["default"].string.isRequired,
  onQueryChange: PropTypes__default["default"].func.isRequired,
  searchResults: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    title: PropTypes__default["default"].string,
    description: PropTypes__default["default"].string,
    thumbnail: PropTypes__default["default"].string
  })).isRequired,
  closeDrawer: PropTypes__default["default"].func.isRequired,
  onSearchSubmit: PropTypes__default["default"].func.isRequired,
  renderSearchResult: PropTypes__default["default"].func.isRequired,
  renderTrendingItem: PropTypes__default["default"].func.isRequired,
  isOpen: PropTypes__default["default"].bool.isRequired // Add prop type for isOpen
};

const SearchFilters = ({
  attributes,
  onFilterChange
}) => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [selectedFilters, setSelectedFilters] = React.useState({});
  const handleFilterChange = e => {
    const {
      name,
      value
    } = e.target;
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };
  const handleApplyFilters = () => {
    Object.keys(selectedFilters).forEach(filterName => {
      onFilterChange(filterName, selectedFilters[filterName]);
    });
    setModalOpen(false);
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex items-center space-x-4 p-4"
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: () => setModalOpen(true),
    className: "flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md bg-gray-200 font-semibold hover:bg-blue-600 transition"
  }, /*#__PURE__*/React__default["default"].createElement(FilterIcon, {
    className: "w-5 h-5 "
  }), /*#__PURE__*/React__default["default"].createElement("span", null, "Filters")), /*#__PURE__*/React__default["default"].createElement(Modal, {
    isModalOpen: isModalOpen,
    closeModal: () => setModalOpen(false)
  }, /*#__PURE__*/React__default["default"].createElement("h2", {
    className: "text-xl font-semibold mb-4"
  }, "Apply Filters"), attributes.map(attr => /*#__PURE__*/React__default["default"].createElement("div", {
    key: attr.name,
    className: "mb-4"
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    className: "block text-gray-700 font-semibold mb-2"
  }, `Filter by ${attr.label}:`), /*#__PURE__*/React__default["default"].createElement("select", {
    name: attr.name,
    onChange: handleFilterChange,
    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none",
    value: selectedFilters[attr.name] || ""
  }, /*#__PURE__*/React__default["default"].createElement("option", {
    value: ""
  }, `All ${attr.label}`), attr.options.map(option => /*#__PURE__*/React__default["default"].createElement("option", {
    key: option.value,
    value: option.value
  }, option.label))))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex justify-end"
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: () => setModalOpen(false),
    className: "mr-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
  }, "Cancel"), /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: handleApplyFilters,
    className: "px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
  }, "Apply"))));
};

// Styled container for each search result item
const ItemContainer = styled__default["default"].div`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 8px;
  transition: background-color 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #eaeaea;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

// Styled container for any thumbnail or icon
const Thumbnail = styled__default["default"].div`
  width: 40px;
  height: 40px;
  background-color: #dcdcdc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

// Styled text container
const TextContainer = styled__default["default"].div`
  flex: 1;
`;

// Styled title
const Title$1 = styled__default["default"].div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
`;

// Styled description
const Description = styled__default["default"].div`
  font-size: 14px;
  color: #666;
`;
const SearchResultItem = ({
  data
}) => {
  const {
    title,
    description,
    thumbnail
  } = data;
  return /*#__PURE__*/React__default["default"].createElement(ItemContainer, null, thumbnail && /*#__PURE__*/React__default["default"].createElement(Thumbnail, null, /*#__PURE__*/React__default["default"].createElement("img", {
    src: thumbnail,
    alt: `${title} thumbnail`
  })), /*#__PURE__*/React__default["default"].createElement(TextContainer, null, title && /*#__PURE__*/React__default["default"].createElement(Title$1, null, title), description && /*#__PURE__*/React__default["default"].createElement(Description, null, description)));
};
SearchResultItem.propTypes = {
  data: PropTypes__default["default"].shape({
    title: PropTypes__default["default"].string,
    description: PropTypes__default["default"].string,
    thumbnail: PropTypes__default["default"].string // URL to a thumbnail image
  }).isRequired
};

// Styled components...
const ResultsWrapper = styled__default["default"].div`
  margin-top: 16px;
  padding: 16px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;
const ButtonsContainer = styled__default["default"].div`
  display: flex;
  align-items: center;
`;
const SearchPageDrawer = ({
  trendingItems,
  searchResults,
  filters,
  // Now passed as a prop
  sortOptions // Now passed as a prop
}) => {
  const [isSearchDrawerOpen, setSearchDrawerOpen] = React.useState(false);
  const [isFilterDrawerOpen, setFilterDrawerOpen] = React.useState(false);

  // Separate states for the search input and the search term used for filtering
  const [searchInput, setSearchInput] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedFilters, setSelectedFilters] = React.useState({});
  const [selectedSortOption, setSelectedSortOption] = React.useState("");

  // Handlers for opening and closing drawers
  const handleSearchDrawerOpen = () => setSearchDrawerOpen(true);
  const handleSearchDrawerClose = () => setSearchDrawerOpen(false);
  const handleFilterDrawerOpen = () => setFilterDrawerOpen(true);
  const handleFilterDrawerClose = () => setFilterDrawerOpen(false);

  // Handler for search input change in the drawer
  const handleQueryChange = newQuery => {
    setSearchInput(newQuery);
  };

  // Handler for submitting the search
  const handleSearchSubmit = () => {
    setSearchTerm(searchInput); // Update the search term for filtering main results
    setSearchInput(""); // Clear the search input in the drawer
    setSelectedFilters({}); // Reset filters when a new search is submitted
    setSelectedSortOption(""); // Reset sort option if desired
    setSearchDrawerOpen(false); // Close search drawer
  };
  const handleFilterChange = filters => {
    setSelectedFilters(filters);
    setFilterDrawerOpen(false); // Close filter drawer
  };
  const handleSortChange = newSortOption => {
    setSelectedSortOption(newSortOption);
  };

  // Compute filtered results based on searchTerm and selected filters
  const filteredResults = searchResults.filter(result => {
    // Apply searchTerm filtering
    const matchesQuery = searchTerm === "" || result.title.toLowerCase().includes(searchTerm.toLowerCase());
    if (!matchesQuery) {
      return false;
    }

    // Apply filters
    let matchesFilters = true;
    for (const [filterKey, filterValue] of Object.entries(selectedFilters)) {
      if (filterValue !== undefined && filterValue !== null && filterValue !== "") {
        if (typeof filterValue === "boolean") {
          // Handle toggle filters
          if (result[filterKey] !== filterValue) {
            matchesFilters = false;
            break;
          }
        } else {
          // Handle other filters
          if (result[filterKey] !== filterValue) {
            matchesFilters = false;
            break;
          }
        }
      }
    }
    return matchesFilters;
  });

  // Apply sorting to the filtered results
  const sortedResults = [...filteredResults]; // Create a copy to avoid mutating the original array

  if (selectedSortOption) {
    sortedResults.sort((a, b) => {
      switch (selectedSortOption) {
        case "title_asc":
          return a.title.localeCompare(b.title);
        case "title_desc":
          return b.title.localeCompare(a.title);
        case "date_newest":
          return new Date(b.date) - new Date(a.date);
        case "date_oldest":
          return new Date(a.date) - new Date(b.date);
        default:
          return 0;
      }
    });
  }

  // Custom renderer for search results
  const renderSearchResult = (result, index) => /*#__PURE__*/React__default["default"].createElement(SearchResultItem, {
    key: index,
    data: result
  });

  // Custom renderer for trending items
  const renderTrendingItem = (item, index) => /*#__PURE__*/React__default["default"].createElement(SearchResultItem, {
    key: index,
    data: {
      title: item,
      description: "Trending topic",
      thumbnail: null
    }
  });
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(ButtonsContainer, null, /*#__PURE__*/React__default["default"].createElement(SearchButton, {
    onClick: handleSearchDrawerOpen
  }), /*#__PURE__*/React__default["default"].createElement(FilterButton, {
    onClick: handleFilterDrawerOpen
  })), sortedResults.length > 0 ? /*#__PURE__*/React__default["default"].createElement(ResultsWrapper, null, /*#__PURE__*/React__default["default"].createElement("h3", null, "Search Results"), sortedResults.map((result, index) => renderSearchResult(result, index))) : /*#__PURE__*/React__default["default"].createElement(ResultsWrapper, null, /*#__PURE__*/React__default["default"].createElement("h3", null, "No Results Found")), /*#__PURE__*/React__default["default"].createElement(BottomDrawer, {
    isOpen: isSearchDrawerOpen,
    onClose: handleSearchDrawerClose,
    transitionDuration: 100,
    height: "100vh"
  }, /*#__PURE__*/React__default["default"].createElement(SearchDrawer, {
    trendingItems: trendingItems,
    query: searchInput // Use searchInput for the input field
    ,
    onQueryChange: handleQueryChange,
    searchResults: searchResults // Pass full search results
    ,
    closeDrawer: handleSearchDrawerClose,
    onSearchSubmit: handleSearchSubmit,
    renderSearchResult: renderSearchResult,
    renderTrendingItem: renderTrendingItem,
    isOpen: isSearchDrawerOpen // Pass isOpen prop to SearchDrawer
  })), /*#__PURE__*/React__default["default"].createElement(BottomDrawer, {
    isOpen: isFilterDrawerOpen,
    onClose: handleFilterDrawerClose,
    transitionDuration: 300,
    height: "60vh"
  }, /*#__PURE__*/React__default["default"].createElement(FilterDrawer, {
    filters: filters,
    selectedFilters: selectedFilters,
    onFilterChange: handleFilterChange,
    closeDrawer: handleFilterDrawerClose,
    sortOptions: sortOptions,
    selectedSortOption: selectedSortOption,
    onSortChange: handleSortChange
  })));
};

const SearchResults = ({
  results,
  loading,
  error,
  page,
  onPageChange,
  hasNextPage,
  renderResult
}) => {
  const handleNextPage = () => {
    onPageChange(page + 1);
  };
  const handlePreviousPage = () => {
    if (page > 0) {
      onPageChange(page - 1);
    }
  };
  if (loading) return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "text-center py-4"
  }, "Loading...");
  if (error) return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "text-center py-4 text-red-500"
  }, "Error: ", error.message);
  if (!results.length) return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "text-center py-4"
  }, "No results found");
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/React__default["default"].createElement("ul", {
    className: "grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-6"
  }, results.map((result, index) => /*#__PURE__*/React__default["default"].createElement("li", {
    key: index
  }, renderResult(result)))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex justify-center items-center space-x-4 py-4"
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: handlePreviousPage,
    disabled: page === 0,
    className: "px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
  }, "Previous"), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "text-gray-700 font-semibold"
  }, "Page ", page + 1), /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: handleNextPage,
    disabled: !hasNextPage,
    className: "px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
  }, "Next")));
};

const SearchSort = ({
  attributes,
  onSortChange
}) => {
  const handleSortChange = e => {
    onSortChange(e.target.value);
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex items-center space-x-2 p-4"
  }, /*#__PURE__*/React__default["default"].createElement(SortIcon, {
    className: "w-5 h-5 text-gray-500"
  }), /*#__PURE__*/React__default["default"].createElement("select", {
    onChange: handleSortChange,
    className: "ml-2 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  }, /*#__PURE__*/React__default["default"].createElement("option", {
    value: ""
  }, "None"), attributes.map(attr => /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
    key: attr
  }, /*#__PURE__*/React__default["default"].createElement("option", {
    value: `${attr}:asc`
  }, `${attr.charAt(0).toUpperCase() + attr.slice(1)} (Asc)`), /*#__PURE__*/React__default["default"].createElement("option", {
    value: `${attr}:desc`
  }, `${attr.charAt(0).toUpperCase() + attr.slice(1)} (Desc)`)))));
};

const SelectToTextInput = ({
  options
}) => {
  const [selectedValue, setSelectedValue] = React.useState('');
  const [isEditing, setIsEditing] = React.useState(false);
  const handleSelectChange = e => {
    setSelectedValue(e.target.value);
    setIsEditing(true);
  };
  const handleInputChange = e => {
    setSelectedValue(e.target.value);
  };
  return /*#__PURE__*/React__default["default"].createElement("div", null, !isEditing ? /*#__PURE__*/React__default["default"].createElement("select", {
    value: selectedValue,
    onChange: handleSelectChange
  }, /*#__PURE__*/React__default["default"].createElement("option", {
    value: "",
    disabled: true
  }, "Select an option"), options.map((option, index) => /*#__PURE__*/React__default["default"].createElement("option", {
    key: index,
    value: option
  }, option))) : /*#__PURE__*/React__default["default"].createElement("input", {
    type: "text",
    value: selectedValue,
    onChange: handleInputChange
  }));
};

const CategoryWrapper = styled__default["default"].div`
  margin-bottom: 1.5rem; /* Equivalent to mb-6 */
`;
const CategoryTitle = styled__default["default"].h3`
  font-size: 1.25rem; /* Equivalent to text-xl */
  font-weight: 600; /* Equivalent to font-semibold */
  margin-bottom: 0.5rem; /* Equivalent to mb-2 */
`;
const ItemsContainer = styled__default["default"].div`
  border: 1px solid #e5e7eb; /* Equivalent to border */
  border-radius: 0.375rem; /* Equivalent to rounded-md */
  overflow: hidden;
  & > *:not(:last-child) {
    border-bottom: 1px solid #e5e7eb; /* Equivalent to divide-y */
  }
`;
const StackedList = ({
  category,
  items
}) => {
  return /*#__PURE__*/React__default["default"].createElement(CategoryWrapper, null, /*#__PURE__*/React__default["default"].createElement(CategoryTitle, null, category), /*#__PURE__*/React__default["default"].createElement(ItemsContainer, null, items.map((item, index) => /*#__PURE__*/React__default["default"].createElement(MenuItem, {
    key: index,
    icon: item.icon /* Pass icon as a React component */,
    text: item.text,
    link: item.link
  }))));
};

const SettingsPage = styled__default["default"].div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full height to position footer at the bottom */
  padding: 1rem;
`;
const Header = styled__default["default"].div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem; /* Space below the header */
`;
const BackButton = styled__default["default"].button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 1rem; /* Space between icon and header text */
`;
const HeaderTitle = styled__default["default"].h1`
  font-size: 1.5rem; /* Equivalent to text-2xl */
  font-weight: 600; /* Equivalent to font-semibold */
`;
const LogoutButton = styled__default["default"].button`
  background-color: #f3f4f6; /* Light gray */
  color: #dc2626; /* Red text */
  border: none;
  border-radius: 0.375rem; /* Rounded corners */
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 2rem;
  width: 100%; /* Full width */
  text-align: center;

  &:hover {
    background-color: #e5e7eb; /* Slightly darker gray */
  }
`;
const Footer = styled__default["default"].footer`
  margin-top: auto; /* Push footer to the bottom */
  text-align: center;
  padding: 1rem 0;
  font-size: 0.875rem; /* Equivalent to text-sm */
  color: #6b7280; /* Equivalent to text-gray-500 */
`;
const FooterLinks$1 = styled__default["default"].div`
  margin-top: 0.5rem;

  a {
    color: #2563eb; /* Equivalent to text-blue-600 */
    text-decoration: none;
    margin: 0 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
const Settings = ({
  settings,
  onLogout
}) => {
  // Group settings by category
  const categories = settings.reduce((acc, setting) => {
    if (!acc[setting.category]) {
      acc[setting.category] = [];
    }
    acc[setting.category].push(setting);
    return acc;
  }, {});
  return /*#__PURE__*/React__default["default"].createElement(SettingsPage, null, /*#__PURE__*/React__default["default"].createElement(Header, null, /*#__PURE__*/React__default["default"].createElement(BackButton, {
    onClick: () => console.log('Go back')
  }, /*#__PURE__*/React__default["default"].createElement(ChevronLeftIcon, {
    className: "w-6 h-6"
  })), /*#__PURE__*/React__default["default"].createElement(HeaderTitle, null, "Settings")), Object.keys(categories).map((category, index) => /*#__PURE__*/React__default["default"].createElement(StackedList, {
    key: index,
    category: category,
    items: categories[category]
  })), /*#__PURE__*/React__default["default"].createElement(LogoutButton, {
    onClick: onLogout
  }, "Log Out"), /*#__PURE__*/React__default["default"].createElement(Footer, null, /*#__PURE__*/React__default["default"].createElement("div", null, "Company Name"), /*#__PURE__*/React__default["default"].createElement("div", null, "Version 1.0.0"), /*#__PURE__*/React__default["default"].createElement(FooterLinks$1, null, /*#__PURE__*/React__default["default"].createElement("a", {
    href: "/terms"
  }, "Terms"), /*#__PURE__*/React__default["default"].createElement("a", {
    href: "/policy"
  }, "Policy"))));
};

const SideNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, null, /*#__PURE__*/React__default["default"].createElement(TopBar, null, /*#__PURE__*/React__default["default"].createElement(Button, {
    onClick: toggleSideNav
  }, /*#__PURE__*/React__default["default"].createElement(MenuIcon, {
    className: "icon"
  }))), isOpen && /*#__PURE__*/React__default["default"].createElement(Overlay, {
    onClick: toggleSideNav
  }), /*#__PURE__*/React__default["default"].createElement(SideNavContainer, {
    isOpen: isOpen
  }, /*#__PURE__*/React__default["default"].createElement(SideNavHeader, null, /*#__PURE__*/React__default["default"].createElement(Title, null, "My Portfolio"), /*#__PURE__*/React__default["default"].createElement(Button, {
    onClick: toggleSideNav
  }, /*#__PURE__*/React__default["default"].createElement(XIcon, {
    className: "icon"
  }))), /*#__PURE__*/React__default["default"].createElement(NavLinks, null, /*#__PURE__*/React__default["default"].createElement(StyledLink, {
    to: "/home"
  }, /*#__PURE__*/React__default["default"].createElement(HomeIcon, {
    className: "icon"
  }), /*#__PURE__*/React__default["default"].createElement("span", null, "Home")), /*#__PURE__*/React__default["default"].createElement(StyledLink, {
    to: "/webdev"
  }, /*#__PURE__*/React__default["default"].createElement(CodeIcon, {
    className: "icon"
  }), /*#__PURE__*/React__default["default"].createElement("span", null, "Web Development")), /*#__PURE__*/React__default["default"].createElement(StyledLink, {
    to: "/scriptlist"
  }, /*#__PURE__*/React__default["default"].createElement(ScriptIcon, {
    className: "icon"
  }), /*#__PURE__*/React__default["default"].createElement("span", null, "Scripts and Algorithms")), /*#__PURE__*/React__default["default"].createElement(StyledLink, {
    to: "/dataAnalytics"
  }, /*#__PURE__*/React__default["default"].createElement(DataIcon, {
    className: "icon"
  }), /*#__PURE__*/React__default["default"].createElement("span", null, "Data Analytics"))), /*#__PURE__*/React__default["default"].createElement(FooterLinks, null, /*#__PURE__*/React__default["default"].createElement(StyledLink, {
    to: "/settings"
  }, /*#__PURE__*/React__default["default"].createElement(CogIcon, {
    className: "icon"
  }), /*#__PURE__*/React__default["default"].createElement("span", null, "Settings")), /*#__PURE__*/React__default["default"].createElement(StyledLink, {
    to: "/login"
  }, /*#__PURE__*/React__default["default"].createElement(LoginIcon, {
    className: "icon"
  }), /*#__PURE__*/React__default["default"].createElement("span", null, "Signup/Login")))));
};
const Wrapper = styled__default["default"].div`
`;
const TopBar = styled__default["default"].div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  z-index: 50;
`;
const Button = styled__default["default"].button`
  background: none;
  border: none;
  cursor: pointer;
  .icon {
    width: 2rem;
    height: 2rem;
  }
`;
const Overlay = styled__default["default"].div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 40;
  transition: opacity 0.3s ease-in-out;
`;
const SideNavContainer = styled__default["default"].div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 16rem;
  background: #2d3748;
  color: #edf2f7;
  transform: ${({
  isOpen
}) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  box-shadow: ${({
  isOpen
}) => isOpen ? '0 2px 8px rgba(0, 0, 0, 0.5)' : 'none'};
  z-index: 50;
`;
const SideNavHeader = styled__default["default"].div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding: 0 1rem;
  border-bottom: 1px solid #4a5568;
`;
const Title = styled__default["default"].h1`
  font-size: 1.875rem;
  font-weight: 600;
`;
const NavLinks = styled__default["default"].nav`
  flex-grow: 1;
  overflow-y: auto;
`;
const FooterLinks = styled__default["default"].div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  border-top: 1px solid #4a5568;
`;
const StyledLink = styled__default["default"](reactRouterDom.Link)`
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  color: #e2e8f0;
  text-decoration: none;
  transition: background 0.2s;
  width: 100%;

  &:hover {
    background: rgba(74, 85, 104, 0.25);
  }

  .icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.75rem;
  }
`;

// IMPORTS

// CREATE FUNCTION
function SocialButtons() {
  // STATE VARIABLES

  // HTML
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("style", null, `
            .card {
  width: fit-content;
  height: fit-content;
  background-color: rgb(238, 238, 238);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 25px;
  gap: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.055);
  border-radius: 8px; /* Optional: rounded corners */
}

/* Styles for all social containers */
.socialContainer {
  width: 52px;
  height: 52px;
  background-color: rgb(44, 44, 44);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: background-color 0.3s, transform 0.3s;
  position: relative;
  border-radius: 50%; /* Make it circular */
}

/* Specific hover background colors */
.containerOne:hover {
  background-color: #d62976;
}

.containerTwo:hover {
  background-color: #00acee;
}

.containerThree:hover {
  background-color: #0072b1;
}

.containerFour:hover {
  background-color: #128C7E;
}

.socialContainer:active {
  transform: scale(0.9);
}

/* Styles for the SVG icons */
.socialSvg {
  width: 17px;
  transition: transform 0.3s, opacity 0.3s;
}

.socialSvg path {
  fill: rgb(255, 255, 255);
}

/* Animation on hover */
.socialContainer:hover .socialSvg {
  animation: slide-in-top 0.3s both;
}

/* Keyframes for slide-in-top animation */
@keyframes slide-in-top {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
  `), /*#__PURE__*/React__default["default"].createElement("body", null, /*#__PURE__*/React__default["default"].createElement("div", {
    class: "card"
  }, /*#__PURE__*/React__default["default"].createElement("a", {
    href: "#",
    class: "socialContainer containerOne"
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    class: "socialSvg instagramSvg",
    viewBox: "0 0 16 16"
  }, " ", /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
  }), " ")), /*#__PURE__*/React__default["default"].createElement("a", {
    href: "#",
    class: "socialContainer containerTwo"
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    class: "socialSvg twitterSvg",
    viewBox: "0 0 16 16"
  }, " ", /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
  }), " "), "              "), /*#__PURE__*/React__default["default"].createElement("a", {
    href: "#",
    class: "socialContainer containerThree"
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    class: "socialSvg linkdinSvg",
    viewBox: "0 0 448 512"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
  }))), /*#__PURE__*/React__default["default"].createElement("a", {
    href: "#",
    class: "socialContainer containerFour"
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    class: "socialSvg whatsappSvg",
    viewBox: "0 0 16 16"
  }, " ", /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
  }), " ")))));
}

// ToastMessage Component
const ToastMessage = () => {
  const showToast = (message, type) => {
    switch (type) {
      case 'success':
        y.success(message);
        break;
      case 'error':
        y.error(message);
        break;
      case 'info':
        y.info(message);
        break;
      case 'warning':
        y.warn(message);
        break;
      default:
        y(message);
    }
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex flex-col gap-2"
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: () => showToast('This is a success message!', 'success'),
    className: "bg-green-500 text-white px-4 py-2 rounded"
  }, "Show Success Toast"), /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: () => showToast('This is an error message!', 'error'),
    className: "bg-red-500 text-white px-4 py-2 rounded "
  }, "Show Error Toast"), /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: () => showToast('This is an info message!', 'info'),
    className: "bg-blue-500 text-white px-4 py-2 rounded"
  }, "Show Info Toast"), /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: () => showToast('This is a warning message!', 'warning'),
    className: "bg-yellow-500 text-white px-4 py-2 rounded"
  }, "Show Warning Toast"), /*#__PURE__*/React__default["default"].createElement(Lt, {
    draggable: true
  }));
};

// Tooltip Component
const Tooltip = ({
  tooltipText,
  position
}) => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const tooltipStyle = {
    position: "absolute",
    bottom: "100%",
    // Positioned above the element by default
    left: "50%",
    transform: "translateX(-50%) translateY(-5px)",
    // Centered horizontally, slightly above
    opacity: 0.9,
    padding: "5px",
    backgroundColor: "black",
    color: "white",
    borderRadius: "4px",
    textAlign: "center",
    width: "200px",
    zIndex: 10
  };

  // Adjust the position based on the passed prop
  if (position === "right") {
    tooltipStyle.left = "100%";
    tooltipStyle.transform = "translateX(10px)"; // Adjust as needed for spacing
  } else if (position === "left") {
    tooltipStyle.right = "100%";
    tooltipStyle.left = "auto"; // Remove left positioning to avoid conflicts
    tooltipStyle.transform = "translateX(-10px)"; // Adjust as needed for spacing
  } else if (position === "top") {
    tooltipStyle.bottom = "100%";
    tooltipStyle.transform = "translateX(-50%) translateY(-10px)"; // Adjust as needed for spacing
  } else if (position === "bottom") {
    tooltipStyle.top = "100%";
    tooltipStyle.bottom = "auto"; // Remove bottom positioning to avoid conflicts
    tooltipStyle.transform = "translateX(-50%) translateY(10px)"; // Adjust as needed for spacing
  }
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      display: "inline-block",
      position: "relative"
    },
    className: "cursor-pointer",
    onMouseEnter: () => setShowTooltip(true),
    onMouseLeave: () => setShowTooltip(false)
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "flex h-4 w-4 items-center justify-center rounded-full bg-gray-400 text-xs text-white"
  }, "i"), showTooltip && /*#__PURE__*/React__default["default"].createElement("div", {
    style: tooltipStyle
  }, tooltipText));
};

// IMPORTS

// Styled Components
const NavBar$1 = styled__default["default"].nav`
  position: relative; /* Ensures the navbar is part of the document flow */
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
`;
const NavContent$1 = styled__default["default"].div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;
const BrandLink$1 = styled__default["default"](reactRouterDom.Link)`
  font-size: 1.875rem; /* Text size: 30px */
  font-weight: bold;
  color: #1f2937;
  text-decoration: none;
`;
const SignInLink$1 = styled__default["default"](reactRouterDom.Link)`
  border-radius: 0.375rem;
  background-color: ${props => props.signInColor || "#000000"};
  padding: 0.5rem 1rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #6d28d9; /* Default hover color */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.5);
  }
`;

// Component
function TopNavBar({
  appName = "AppName",
  signInColor = "#000000"
}) {
  return /*#__PURE__*/React__default["default"].createElement(NavBar$1, null, /*#__PURE__*/React__default["default"].createElement(NavContent$1, null, /*#__PURE__*/React__default["default"].createElement(BrandLink$1, {
    to: "/home"
  }, appName), /*#__PURE__*/React__default["default"].createElement(SignInLink$1, {
    to: "/login",
    signInColor: signInColor
  }, "Sign In")));
}

// Styled Components
const Container = styled__default["default"].div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: ${props => props.backgroundColor || '#000'};
color: ${props => props.color || '#fff'};
  height: 50px;
`;
const LeftSection = styled__default["default"].div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .svg {
  height: 24px;
  width: 24px;
  }
`;
const CenterSection = styled__default["default"].div`
  flex: 1;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
`;
const RightSection = styled__default["default"].div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

// Component
const TopNavBar3 = ({
  title,
  backgroundColor,
  color
}) => {
  const navigate = reactRouterDom.useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return /*#__PURE__*/React__default["default"].createElement(Container, {
    backgroundColor: backgroundColor,
    color: color
  }, /*#__PURE__*/React__default["default"].createElement(LeftSection, {
    onClick: handleBack
  }, /*#__PURE__*/React__default["default"].createElement(ChevronLeftIcon, {
    className: 'svg'
  })), /*#__PURE__*/React__default["default"].createElement(CenterSection, null, title), /*#__PURE__*/React__default["default"].createElement(RightSection, null));
};
TopNavBar3.propTypes = {
  /** The title/name to display in the center of the nav bar */
  title: PropTypes__default["default"].string.isRequired,
  /** The background color of the nav bar */
  backgroundColor: PropTypes__default["default"].string
};
TopNavBar3.defaultProps = {
  backgroundColor: '#000' // fallback color
};

function TopWSideNav({
  appName = "AppName",
  signInColor = "#000000",
  navLinks = [],
  username = "John Doe",
  profilePic = "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",
  onLogout,
  hideProfile = false // New prop for hiding profile section
}) {
  const [isSideNavOpen, setIsSideNavOpen] = React.useState(false);
  const toggleSideNav = () => setIsSideNavOpen(prev => !prev);
  const closeSideNav = () => setIsSideNavOpen(false);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(NavBar, null, /*#__PURE__*/React__default["default"].createElement(NavContent, null, /*#__PURE__*/React__default["default"].createElement(DrawerButton, {
    onClick: toggleSideNav
  }, /*#__PURE__*/React__default["default"].createElement(MenuIcon, {
    className: "icon"
  })), /*#__PURE__*/React__default["default"].createElement(BrandLink, {
    to: "/home"
  }, appName), /*#__PURE__*/React__default["default"].createElement(SignInLink, {
    to: "/login",
    signInColor: signInColor
  }, "Sign In"))), /*#__PURE__*/React__default["default"].createElement(SideBar, {
    navLinks: navLinks,
    username: username,
    profilePic: profilePic,
    onLogout: onLogout,
    isSideNavOpen: isSideNavOpen,
    toggleSideNav: toggleSideNav,
    closeSideNav: closeSideNav,
    hideProfile: hideProfile
  }));
}

// Styled Components for TopWSideNav remain unchanged
const NavBar = styled__default["default"].nav`
  position: relative;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
`;
const NavContent = styled__default["default"].div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`;
const DrawerButton = styled__default["default"].button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1rem;

  .icon {
    width: 2rem;
    height: 2rem;
  }
`;
const BrandLink = styled__default["default"](reactRouterDom.Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  text-decoration: none;
  flex-grow: 1;
`;
const SignInLink = styled__default["default"](reactRouterDom.Link)`
  border-radius: 0.375rem;
  background-color: ${props => props.signInColor};
  padding: 0.5rem 1rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.5);
  }
`;

const FieldContainer = styled__default["default"].div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #fff; /* Background for the field */
  transition: background-color 0.3s;

  &:hover {
    background-color: #f9fafb; /* Slightly darker hover background equivalent to hover:bg-gray-50 */
  }
`;
const IconWrapper = styled__default["default"].div`
  margin-right: 20px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280; /* Equivalent to text-gray-500 */
`;
const TextWrapper = styled__default["default"].div`
  display: flex;
  flex-direction: column;
`;
const FieldName = styled__default["default"].div`
  font-size: 12px;
  color: #9ca3af; /* Equivalent to text-gray-400 */
`;
const FieldValue = styled__default["default"].div`
  font-size: 16px;
  font-weight: 500;
  color: #111827; /* Equivalent to text-gray-900 */
`;
const UneditableTextField = ({
  icon: IconComponent,
  name,
  value
}) => {
  return /*#__PURE__*/React__default["default"].createElement(FieldContainer, null, IconComponent && /*#__PURE__*/React__default["default"].createElement(IconWrapper, null, /*#__PURE__*/React__default["default"].createElement(IconComponent, null)), /*#__PURE__*/React__default["default"].createElement(TextWrapper, null, /*#__PURE__*/React__default["default"].createElement(FieldName, null, name), /*#__PURE__*/React__default["default"].createElement(FieldValue, null, value)));
};

exports.AccordionCard = AccordionCard;
exports.AppCard = AppCard;
exports.AppleIcon = AppleIcon;
exports.ArrowRightIcon = ArrowRightIcon;
exports.BookIcon = BookIcon;
exports.BookOpenIcon = BookOpenIcon;
exports.BookmarkIcon = BookmarkIcon;
exports.BottomDrawer = BottomDrawer;
exports.BottomNav = BottomNav;
exports.ButtonArrowIcon = ButtonArrowIcon;
exports.CV = CV;
exports.CalendarIcon = CalendarIcon;
exports.Card2 = Card2;
exports.Card3 = Card3;
exports.CardProduct = CardProduct;
exports.CardSocial = CardSocial;
exports.CartIcon = CartIcon;
exports.ChatIcon = ChatIcon;
exports.CheckedItem = CheckedItem;
exports.ChevronDownIcon = ChevronDownIcon;
exports.ChevronLeftIcon = ChevronLeftIcon;
exports.ChevronRightIcon = ChevronRightIcon;
exports.ChevronUpDownIcon = ChevronUpDownIcon;
exports.ChevronUpIcon = ChevronUpIcon;
exports.ClockIcon = ClockIcon;
exports.CodeIcon = CodeIcon;
exports.CogIcon = CogIcon;
exports.CollegeIcon = CollegeIcon;
exports.ConversationItem = ConversationItem;
exports.ConversationList = ConversationList;
exports.CookbookCard = CookbookCard;
exports.CookbookProfile = CookbookProfile;
exports.CustomButton = CustomButton;
exports.CustomFileUpload = CustomFileUpload;
exports.DataIcon = DataIcon;
exports.DeleteModal = DeleteModal;
exports.DragAndDrop = DragAndDrop;
exports.EditIcon = EditIcon;
exports.EditStackedList = EditStackedList;
exports.EditableTextField = EditableTextField;
exports.FileUpload = FileUpload;
exports.FilterButton = FilterButton;
exports.FilterDrawer = FilterDrawer;
exports.FilterIcon = FilterIcon;
exports.Footer = Footer$1;
exports.ForkAndKnifeIcon = ForkAndKnifeIcon;
exports.GhostLoader = GhostLoader;
exports.GithubIcon = GithubIcon;
exports.GoogleIcon = GoogleIcon;
exports.HeartIcon = HeartIcon;
exports.Hero = Hero;
exports.HeroContent = HeroContent;
exports.HomeIcon = HomeIcon;
exports.HomeIcon2 = HomeIcon2;
exports.HomeIcon3 = HomeIcon3;
exports.IdeaIcon = IdeaIcon;
exports.ImageCarousel = ImageCarousel;
exports.ImageCarousel2 = ImageCarousel2;
exports.Input = Input;
exports.InstagramIcon = InstagramIcon;
exports.LettzFilterDrawer = LettzFilterDrawer;
exports.LettzIcon = LettzIcon;
exports.LettzSearchButton = LettzSearchButton;
exports.LinkedInIcon = LinkedInIcon;
exports.ListYourPlaceCard = ListYourPlaceCard;
exports.ListingCard = ListingCard;
exports.Loader = Loader;
exports.LocationIcon = LocationIcon;
exports.LoginIcon = LoginIcon;
exports.LoginPage = LoginPage;
exports.ManageAccount = ManageAccount;
exports.ManageNotifications = ManageNotifications;
exports.ManagePaymentMethods = ManagePaymentMethods;
exports.MarketingIcon = MarketingIcon;
exports.MenuIcon = MenuIcon;
exports.MenuIcon3 = MenuIcon3;
exports.MenuItem = MenuItem;
exports.MessageForm = MessageForm;
exports.MessagesPrompt = MessagesPrompt;
exports.MessagesView = MessagesView;
exports.Modal = Modal;
exports.MoneyIcon = MoneyIcon;
exports.MoneyIcon2 = MoneyIcon2;
exports.MuteIcon = MuteIcon;
exports.NotificationsIcon = NotificationsIcon;
exports.PasswordIcon = PasswordIcon;
exports.PeriodIcon = PeriodIcon;
exports.PlusIcon = PlusIcon;
exports.PollItem = PollItem;
exports.Popover = Popover;
exports.PortfolioMainSlider = PortfolioMainSlider;
exports.ProgressBar = ProgressBar;
exports.ProjectCard = ProjectCard;
exports.RangeSlider = RangeSlider;
exports.RecipeCard = RecipeCard$1;
exports.RecipeSwipeComponent = RecipeSwipeComponent;
exports.RoomsView = RoomsView;
exports.ScriptIcon = ScriptIcon;
exports.SearchBar = SearchBar;
exports.SearchBar2 = SearchBar2;
exports.SearchButton = SearchButton;
exports.SearchDrawer = SearchDrawer;
exports.SearchFilters = SearchFilters;
exports.SearchIcon = SearchIcon;
exports.SearchIcon2 = SearchIcon2;
exports.SearchPageDrawer = SearchPageDrawer;
exports.SearchResultItem = SearchResultItem;
exports.SearchResults = SearchResults;
exports.SearchSort = SearchSort;
exports.SecurityIcon = SecurityIcon;
exports.SelectField = SelectField;
exports.SelectInput = SelectInput;
exports.SelectToTextInput = SelectToTextInput;
exports.Settings = Settings;
exports.SettingsIcon = SettingsIcon;
exports.SideBar = SideBar;
exports.SideNav = SideNav;
exports.SocialButtons = SocialButtons;
exports.SortIcon = SortIcon;
exports.StackedList = StackedList;
exports.StrategyIcon = StrategyIcon;
exports.TargetIcon = TargetIcon;
exports.ToastMessage = ToastMessage;
exports.ToggleField = ToggleField;
exports.Tooltip = Tooltip;
exports.TopNavBar = TopNavBar;
exports.TopNavBar2 = TopNavBar2;
exports.TopNavBar3 = TopNavBar3;
exports.TopWSideNav = TopWSideNav;
exports.TrashIcon = TrashIcon;
exports.TwitterIcon = TwitterIcon;
exports.UneditableTextField = UneditableTextField;
exports.UserIcon2 = UserIcon2;
exports.UserIcon3 = UserIcon3;
exports.UsersIcon = UsersIcon;
exports.VolumeIcon = VolumeIcon;
exports.WebsiteIcon = WebsiteIcon;
exports.WhatsAppIcon = WhatsAppIcon;
exports.XIcon = XIcon;
//# sourceMappingURL=index.js.map
