module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blockly", function() { return Blockly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initWorkspace", function() { return initWorkspace; });
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _dropdown__WEBPACK_IMPORTED_MODULE_2__["Dropdown"]; });





const Blockly = __webpack_require__(11);
Blockly.BlockSvg.START_HAT = true;

Blockly.Field.prototype.maxDisplayLength = 20;

function initWorkspace(el, options) {
  const workspace = Blockly.inject(el, options);

  // workspace.createVariable('sprite', '');

  return workspace;
}



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_colors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks__WEBPACK_IMPORTED_MODULE_1__);



const Blockly = __webpack_require__(11);

const { Msg } = Blockly;

Msg.$ = (key, prefix = 'COMMON') => {
  const k = `${prefix}_${key.toUpperCase()}`;
  if (k in Msg) return Msg[k];
  return key;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

const Blockly = __webpack_require__(11);

const { Msg } = Blockly;

Msg.SPRITE_HUE = 330;
Msg.ATTRS_HUE = 130;
Msg.ATTRS_SPRITE_HUE = 140;
Msg.ATTRS_LABEL_HUE = 150;
Msg.ATTRS_PATH_HUE = 160;
Msg.EASING_HUE = 90;
Msg.ANIMATE_HUE = 345;
Msg.SIGNALS_HUE = 55;
Msg.LITERAL_HUE = 250;
Msg.GETTER_SETTER_HUE = 120;
Msg.STORE_HUE = 70;
Msg.FLOWS_HUE = 220;
Msg.MATH_HUE = 270;
Msg.LOG_HUE = 310;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("Blockly");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

const Blockly = __webpack_require__(11);

const { Msg } = Blockly;

Msg.COMMON_FGLAYER = '前景图层';
Msg.COMMON_BGLAYER = '背景图层';
Msg.COMMON_TARGET = '目标元素';
Msg.COMMON_SENDER = '发送者';
Msg.COMMON_RECEIVER = '接收者';
Msg.COMMON_SPRITE = '精灵元素';
Msg.COMMON_LABEL = '文本元素';
Msg.COMMON_PATH = '矢量元素';

Msg.CATEGORY_SIGNALS = '信号';
Msg.CATEGORY_SPRITES = '元素对象';
Msg.CATEGORY_ATTRIBUTES = '元素属性';
Msg.CATEGORY_ATTRIBUTES_COMMON = '公共属性';
Msg.CATEGORY_ATTRIBUTES_SPRITE = '精灵属性';
Msg.CATEGORY_ATTRIBUTES_LABEL = '文本属性';
Msg.CATEGORY_ATTRIBUTES_PATH = '矢量属性';
Msg.CATEGORY_ANIM_ASYNC = '动画和异步';
Msg.CATEGORY_GETTER_SETTER = '属性读写';
Msg.CATEGORY_STORE = '共享数据';
Msg.CATEGORY_LITERALS = '字面量';
Msg.CATEGORY_LISTS = '列表对象';
Msg.CATEGORY_MATH = '数学计算';
Msg.CATEGORY_LOGIC = '逻辑判断';
Msg.CATEGORY_FLOWS = '循环和条件';
Msg.CATEGORY_LOG = '日志输出';

Msg.SENDER_RECEIVER_TARGET_TOOLTIP = `发送者：发送信号的元素。
接收者：接收信号的元素。
目标元素：如果信号由事件触发，目标元素是实际事件目标。`;

Msg.FGLAYER_BGLAYER_TOOTIP = `前景图层接收DOM事件，
背景图层不接收DOM事件。`;

Msg.LITERAL_NULL = '空';
Msg.LITERAL_UNDEFINED = '未定义';

Msg.NIL_TOOLTIP = '%1值。';
Msg.OBJECT_CREATE_TOOLTIP = '构造一个对象。';
Msg.LOOP_GET_INDEX_MSG0 = '索引值';
Msg.LOOP_GET_INDEX_TOOLTIP = '循环中的索引值。';

Msg.ATTR_ID = 'ID';
Msg.ATTR_NAME = '名字';
Msg.ATTR_ANCHORX = 'X向锚';
Msg.ATTR_ANCHORY = 'Y向锚';
Msg.ATTR_X = 'X坐标';
Msg.ATTR_Y = 'Y坐标';
Msg.ATTR_WIDTH = '宽';
Msg.ATTR_HEIGHT = '高';
Msg.ATTR_BGCOLOR = '背景色';
Msg.ATTR_OPACITY = '透明度';
Msg.ATTR_SCALEX = 'X向拉伸';
Msg.ATTR_SCALEY = 'Y向拉伸';
Msg.ATTR_TRANSLATEX = 'X向平移';
Msg.ATTR_TRANSLATEY = 'Y向平移';
Msg.ATTR_SKEWX = 'X向扭曲';
Msg.ATTR_SKEWY = 'Y向扭曲';
Msg.ATTR_ROTATE = '逆时针旋转';
Msg.ATTR_BORDERRADIUS = '圆角半径';
Msg.ATTR_BORDERWIDTH = '边框线宽';
Msg.ATTR_BORDERSTYLE = '边框样式';
Msg.ATTR_BORDERCOLOR = '边框颜色';
Msg.ATTR_DASHOFFSET = '虚线框偏移';
Msg.ATTR_TEXTURE = '图片纹理';
Msg.ATTR_TEXT = '文本';
Msg.ATTR_FONTSIZE = '字号';
Msg.ATTR_FONTFAMILY = '字体';
Msg.ATTR_FONTSTYLE = '字体样式';
Msg.ATTR_FONTVARIANT = '字体变体';
Msg.ATTR_FONTWEIGHT = '字体粗细';
Msg.ATTR_TEXTALIGN = '文本对齐';
Msg.ATTR_LINEHEIGHT = '文本行高';
Msg.ATTR_D = 'SVG路径';
Msg.ATTR_LINEWIDTH = '路径线宽';
Msg.ATTR_LINEDASH = '路径虚线样式';
Msg.ATTR_LINEDASHOFFSET = '路径虚线偏移';
Msg.ATTR_LINECAP = '线帽样式';
Msg.ATTR_LINEJOIN = '连线样式';
Msg.ATTR_BOUNDING = '碰撞边界';
Msg.ATTR_STROKECOLOR = '描线颜色';
Msg.ATTR_FILLCOLOR = '填充颜色';

Msg.ATTR_VALUE_SOLID = '实线';
Msg.ATTR_VALUE_DASHED = '虚线';
Msg.ATTR_VALUE_NORMAL = '常规';
Msg.ATTR_VALUE_BOLD = '粗体';
Msg.ATTR_VALUE_LIGHTER = '细体';
Msg.ATTR_VALUE_ITALIC = '斜体';
Msg.ATTR_VALUE_OBLIQUE = '倾斜';
Msg['ATTR_VALUE_SMALL-CAPS'] = '小型大写';
Msg.ATTR_VALUE_LEFT = '靠左';
Msg.ATTR_VALUE_RIGHT = '靠右';
Msg.ATTR_VALUE_CENTER = '居中';
Msg.ATTR_VALUE_BUTT = '平直';
Msg.ATTR_VALUE_ROUND = '圆形';
Msg.ATTR_VALUE_SQUARE = '方形';
Msg.ATTR_VALUE_MITER = '尖角';
Msg.ATTR_VALUE_BEVEL = '斜角';
Msg.ATTR_VALUE_BOX = '基于盒子';
Msg.ATTR_VALUE_PATH = '基于路径';

Msg.AWAIT_MSG0 = '等待 %1 毫秒 🕙';
Msg.AWAIT_TOOLTIP = '等待 %1 毫秒后继续执行后续操作。';
Msg.AWAIT_FRAME_MSG0 = '等待 %1 更新到下一帧 ⌛';
Msg.AWAIT_FRAME_TOOLTIP = '等待图层更新后继续执行后续操作。';

Msg.SPRITE_ANIMATE_MSG0 = '%1 %2 动画持续 %3 秒';
Msg.SPRITE_ANIMATE_MSG1 = '起始状态 %1';
Msg.SPRITE_ANIMATE_MSG2 = '结束状态 %1';
Msg.SPRITE_ANIMATE_MSG3 = '缓动策略 %1';
Msg.SPRITE_ANIMATE_TOOLTIP = '在指定元素上执行动画操作。';
Msg.SPRITE_ANIMATE_OPTION_ASYNC_DEFAULT = '⚡️ 立即执行';
Msg.SPRITE_ANIMATE_OPTION_ASYNC_AWAIT = '⌛️ 执行并等待';

Msg.EASING_MSG0 = '%1';
Msg.EASING_OPTION_EASING_EASE = '匀速';
Msg.EASING_OPTION_EASING_EASEIN = '匀加速';
Msg.EASING_OPTION_EASING_EASEOUT = '匀减速';
Msg.EASING_OPTION_EASING_EASEINOUT = '先加速后减速';
Msg.EASING_OPTION_TOOLTIP = '为动画设置缓动策略。';

Msg.BEZIER_EASING_MSG0 = '贝塞尔曲线 %1 %2 %3 %4';
Msg.BEZIER_EASING_TOOLTIP = '将动画缓动策略设置为贝塞尔曲线。';

Msg.FIELD_ATTR_INC_MSG0 = '%1 %2';
Msg.FIELD_ATTR_INC_TOOLTIP = '在原值基础上改变属性值。';

Msg.KEYVALUE_MSG0 = '%1: %2,';
Msg.KEYVALUE_TOOLTIP = '设置“属性-值”对。';

Msg.FIELD_ATTR_ANCHOR_TOOLTIP = '设置元素的%1。';
Msg.FIELD_ATTR_XY_TOOLTIP = '设置元素的%1。';
Msg.FIELD_ATTR_SIZE_TOOLTIP = '设置元素的%1。';
Msg.FIELD_ATTR_BGCOLOR_TOOLTIP = '设置元素的背景色。';
Msg.FIELD_ATTR_OPACITY_TOOLTIP = '设置元素的透明度。';
Msg.FIELD_ATTR_ROTATE_TOOLTIP = '设置元素的逆时针旋转角度。';
Msg.FIELD_ATTR_SCALE_TOOLTIP = '设置元素的%1。';
Msg.FIELD_ATTR_TRANSLATE_TOOLTIP = '设置元素的%1。';
Msg.FIELD_ATTR_SKEW_TOOLTIP = '设置元素的%1。';
Msg.FIELD_ATTR_BORDERRADIUS_TOOLTIP = '设置元素的圆角半径。';
Msg.FIELD_ATTR_BORDERWIDTH_TOOLTIP = '设置元素的边框宽度。';
Msg.FIELD_ATTR_BORDERSTYLE_TOOLTIP = '设置元素的边框样式。';
Msg.FIELD_ATTR_BORDERCOLOR_TOOLTIP = '设置元素的边框颜色。';
Msg.FIELD_ATTR_DASHOFFSET_TOOLTIP = '如果元素边框样式为虚线，设置边框虚线的偏移量。';
Msg.FIELD_ATTR_TEXTURE_TOOLTIP = '设置精灵元素的图片纹理。';
Msg.FIELD_ATTR_TEXT_TOOLTIP = '设置文本元素的内容。';
Msg.FIELD_ATTR_FONTSIZE_TOOLTIP = '设置文本元素的字号。';
Msg.FIELD_ATTR_FONTFAMILY_TOOLTIP = '设置文本元素的字体。';
Msg.FIELD_ATTR_FONTSTYLE_TOOLTIP = '设置文本元素的字体样式。';
Msg.FIELD_ATTR_FONTVARIANT_TOOLTIP = '设置文本元素的字体变体。';
Msg.FIELD_ATTR_FONTWEIGHT_TOOLTIP = '设置文本元素的字体粗细。';
Msg.FIELD_ATTR_TEXTALIGN_TOOLTIP = '设置文本元素的文字对齐方式。';
Msg.FIELD_ATTR_LINEHEIGHT_TOOLTIP = '设置文本元素的行高。';
Msg.FIELD_ATTR_D_TOOLTIP = '设置矢量元素的SVG路径。';
Msg.FIELD_ATTR_LINEWIDTH_TOOLTIP = '设置矢量元素的线宽。';
Msg.FIELD_ATTR_LINEDASH_TOOLTIP = '将矢量元素的描线设为虚线。';
Msg.FIELD_ATTR_LINEDASHOFFSET_TOOLTIP = '如果矢量元素的描线是虚线，设置虚线偏移量。';
Msg.FIELD_ATTR_LINECAP_TOOLTIP = '设置矢量元素的线帽样式。';
Msg.FIELD_ATTR_LINEJOIN_TOOLTIP = '设置矢量元素的连线样式。';
Msg.FIELD_ATTR_BOUNDING_TOOLTIP = '使用%1的边界方式来检测碰撞。';
Msg.FIELD_ATTR_STROKECOLOR_TOOLTIP = '设置一个矢量元素或文本元素的描线颜色。';
Msg.FIELD_ATTR_FILLCOLOR_TOOLTIP = '设置一个矢量元素或文本元素的填充颜色。';

Msg.RANDOM_STRING_MSG0 = '🎲 随机字符串';
Msg.RANDOM_STRING_TOOLTIP = '获得一个11个字符长度的随机字符串。';

Msg.RANDOM_COLOUR_RGB_MSG0 = '🎲 随机颜色';
Msg.RANDOM_COLOUR_RGB_TOOLTIP = '获得一个随机的RGB颜色。';

Msg.RANDOM_COLOUR_HUE_MSG0 = '🎲 随机色调';
Msg.RANDOM_COLOUR_HUE_MSG1 = '饱和 %1% 亮 %2% 透明 %3.';
Msg.RANDOM_COLOUR_HUE_TOOLTIP = '获得一个随机的HSLA颜色。';

Msg.LOG_OPTION_LOG_LOG = '记录';
Msg.LOG_OPTION_LOG_WARN = '警告';
Msg.LOG_OPTION_LOG_ERROR = '错误';
Msg.LOG_TOOLTIP = '输出信息到控制台。';
Msg.LOG_ALERT_MSG0 = '🔔 弹出 %1';
Msg.LOG_ALERT_TOOLTIP = '弹出一个会话框。';

Msg.SIGNAL_DO_MSG0 = '当收到信号为 %1 🚩 执行';
Msg.SIGNAL_DO_TOOLTIP = '当收到指定信号时，执行动作。';
Msg.SIGNAL_DO_OPTION_SIGNAL_START = '开始运行';
Msg.SIGNAL_DO_OPTION_SIGNAL_STORE_PROPERTY_UPDATE = '共享数据内容更新';
Msg.SIGNAL_DO_OPTION_SIGNAL_LAYER_CLICKED = '前景图层被鼠标点击';
Msg.SIGNAL_DO_OPTION_SIGNAL_ELEMENT_CREATED = '元素被创建';
Msg.SIGNAL_DO_OPTION_SIGNAL_ELEMENT_DESTROYED = '元素被销毁';

Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG0 = '收到信号为 %1 🚩 时';
Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG1 = '创建 %1 作为接收者';
Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG2 = 'ID设为 %1';
Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_TOOLTIP = '收到某个信号时，新建一个元素作为接收者并执行动作。';

Msg.SIGNAL_WHEN_RECEIVER_IS_MSG0 = '收到信号 %1 🚩';
Msg.SIGNAL_WHEN_RECEIVER_IS_MSG1 = '当接收者为 %1 时';
Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_TOOLTIP = '收到某个信号且接收者为特定元素时，执行动作。';

Msg.GET_DATA_MSG0 = '消息';
Msg.GET_DATA_TOOLTIP = '读取信号消息。';
Msg.GET_DATA_PROP_MSG0 = '消息的 %1';
Msg.GET_DATA_PROP_TOOLTIP = '读取信号的数据属性。如果信号是由事件触发，可读取这些属性。';
Msg.GET_DATA_PROP_TOOLTIP2 = '读取信号的数据属性。如果信号是存储数据改变，可读取这些属性。';
Msg.GET_DATA_PROP_OPTION_PROP_OFFSETX = '相对坐标X';
Msg.GET_DATA_PROP_OPTION_PROP_OFFSETY = '相对坐标Y';
Msg.GET_DATA_PROP_OPTION_PROP_LAYERX = '绝对坐标X';
Msg.GET_DATA_PROP_OPTION_PROP_LAYERY = '绝对坐标Y';
Msg.GET_DATA_PROP_OPTION_PROP_ALTKEY = '按下ALT键';
Msg.GET_DATA_PROP_OPTION_PROP_CTRLKEY = '按下CTRL键';
Msg.GET_DATA_PROP_OPTION_PROP_SHIFTKEY = '按下SHIFT键';
Msg.GET_DATA_PROP_OPTION_PROP_BUTTONS = '鼠标按键值';
Msg.GET_DATA_PROP_OPTION_PROP_PROPERTY = '更新的存储属性';
Msg.GET_DATA_PROP_OPTION_PROP_OLDVALUE = '属性原值';
Msg.GET_DATA_PROP_OPTION_PROP_NEWVALUE = '属性新值';

Msg.EVENT_IMMEDIATELY = '立即';
Msg.EVENT_ONCLICK = '当被鼠标单击';
Msg.EVENT_ONDBLCLICK = '被鼠标双击';
Msg.EVENT_ONMOUSEDOWN = '按下鼠标按键';
Msg.EVENT_ONMOUSEMOVE = '鼠标在元素内部移动';
Msg.EVENT_ONMOUSEUP = '释放鼠标按键';
Msg.EVENT_ONMOUSEENTER = '鼠标进入元素';
Msg.EVENT_ONMOUSELEAVE = '鼠标离开元素';

Msg.SIGNAL_ONEVENT_SEND_MSG0 = '%1 %2 发送 %3 🚩';
Msg.SIGNAL_ONEVENT_SEND_MSG1 = '包含消息 %1';
Msg.SIGNAL_ONEVENT_SEND_TOOLTIP = '当事件发生时，发送信号。';

Msg.SPRITE_MSG0_TOOLTIP = `指定元素。\n${Msg.SENDER_RECEIVER_TARGET_TOOLTIP}`;

Msg.SPRITE_APPEND_TO_MSG0 = '将 %1 添加到 %2';
Msg.SPRITE_APPEND_TO_TOOLTIP = '添加元素到层。';

Msg.SPRITE_ATTRS_MSG0 = '设置 %1 属性';
Msg.SPRITE_ATTRS_TOOLTIP = '设置属性值到元素。';

Msg.SPRITE_CREATE_ATTRS_MSG0 = '创建 %1';
Msg.SPRITE_CREATE_ATTRS_MSG1 = '命名为 %1 包含属性';
Msg.SPRITE_CREATE_ATTRS_TOOLTIP = '创建一个指定名字的元素。可以使用循环语句创建多个同名元素。';

Msg.SPRITE_EACH_ELEMENTS_NAMED_MSG0 = '所有名为 %1 的元素';
Msg.SPRITE_EACH_ELEMENTS_NAMED_TOOLTIP = '获得指定名字的全部元素。';

Msg.SPRITE_DESTROY_MSG0 = '💣 销毁 %1';
Msg.SPRITE_DESTROY_TOOLTIP = '将元素移除层并销毁。';

Msg.SPRITE_GET_ATTR_MSG0 = '%1 的 %2';
Msg.SPRITE_GET_ATTR_TOOLTIP = '读取目标元素的属性值。';

Msg.MATH_RANDOM_INT_TITLE = `🎲 ${Msg.MATH_RANDOM_INT_TITLE}`;
Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = `🎲 ${Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM}`;

Msg.LIST_FOREACH_MSG0 = '遍历列表 %1:';
Msg.LIST_FOREACH_MSG1 = '执行 %1';
Msg.LIST_FOREACH_MSG2 = '%1 代表每个元素, %2 代表索引';
Msg.LIST_FOREACH_TOOLTIP = '遍历列表每个元素，执行动作。';

Msg.LIST_INDEX_TOOLTIP = '获取迭代索引。';
Msg.LIST_ITEM_TOOLTIP = '获取迭代元素。';

Msg.OBJECT_GET_PROP_MSG0 = '%1.%2';
Msg.OBJECT_GET_PROP_TOOLTIP = '读取对象属性。';

Msg.LISTS_CREATE_RANGE_MSG0 = '创建列表范围';
Msg.LISTS_CREATE_RANGE_MSG1 = '从 %1 到 %2';
Msg.LISTS_CREATE_RANGE_TOOLTIP = '通过整数范围创建列表。';

Msg.STORE_SET_MSG0 = '📝 设置 %1 的值为 %2';
Msg.STORE_SET_TOOLTIP = '设置共享数据的值。';

Msg.STORE_GET_MSG0 = '📝 获取 %1 的值';
Msg.STORE_GET_TOOLTIP = '获取共享数据的值。';

Msg.STORE_DELETE_MSG0 = '✂️ 删除 %1 的值';
Msg.STORE_DELETE_TOOLTIP = '删除共享数据的值。';

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_attr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_animate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _literal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _literal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_literal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _signals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_log__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_math__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24);
/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lists__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _getter_setter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25);
/* harmony import */ var _getter_setter__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_getter_setter__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_store__WEBPACK_IMPORTED_MODULE_10__);












/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

const Blockly = __webpack_require__(11);
const Msg = Blockly.Msg;

Blockly.Blocks.field_attr_inc = {
  init() {
    this.jsonInit({
      message0: Msg.FIELD_ATTR_INC_MSG0,
      args0: [{ type: 'field_dropdown',
        name: 'OP',
        options: [['+', '+'], ['-', '-'], ['*', '*'], ['/', '/'], ['^', '**']] }, { type: 'input_value', name: 'VALUE', check: 'Number' }],
      colour: Blockly.Msg.ATTRS_HUE,
      tooltip: Msg.FIELD_ATTR_INC_TOOLTIP
    });
    this.setOutput(true, 'Number');
  }
};

Blockly.JavaScript.field_attr_inc = function (block) {
  const op = block.getFieldValue('OP');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || 0;
  return [`v => v ${op} ${value}`, Blockly.JavaScript.ORDER_NONE];
};

function createKVConf(keys = 'key', valueType = '', colour = Blockly.Msg.ATTRS_HUE, statementType = 'KeyValue') {
  const arg0 = { name: 'KEY', type: 'field_dropdown' };
  const arg1 = { type: 'input_value', name: 'VALUE', check: valueType };

  if (typeof keys === 'string') {
    keys = [keys];
  }

  if (Array.isArray(keys)) {
    arg0.options = keys.map(key => [Msg.$(key, 'ATTR'), key]);
  } else if (typeof keys !== 'string' && keys.prop && keys.options) {
    arg0.options = [[Msg.$(keys.prop, 'ATTR'), keys.prop]];
    arg1.type = 'field_dropdown';
    arg1.options = keys.options.map(s => [Msg.$(s, 'ATTR_VALUE'), s]);
  }

  return {
    message0: Msg.KEYVALUE_MSG0,
    args0: [arg0, arg1],
    colour,
    previousStatement: statementType,
    nextStatement: statementType
  };
}

Blockly.Blocks.field_attr_anchor = {
  init() {
    this.jsonInit(createKVConf(['anchorX', 'anchorY'], 'Number'));
    this.setTooltip(() => Msg.FIELD_ATTR_ANCHOR_TOOLTIP.replace('%1', Msg.$(this.getFieldValue('KEY'), 'ATTR')));
  }
};

Blockly.Blocks.field_attr_xy = {
  init() {
    this.jsonInit(createKVConf(['x', 'y'], 'Number'));
    this.setTooltip(() => Msg.FIELD_ATTR_XY_TOOLTIP.replace('%1', Msg.$(this.getFieldValue('KEY'), 'ATTR')));
  }
};

Blockly.Blocks.field_attr_size = {
  init() {
    this.jsonInit(createKVConf(['width', 'height'], 'Number'));
    this.setTooltip(() => Msg.FIELD_ATTR_SIZE_TOOLTIP.replace('%1', Msg.$(this.getFieldValue('KEY'), 'ATTR')));
  }
};

Blockly.Blocks.field_attr_bgcolor = {
  init() {
    this.jsonInit(createKVConf('bgcolor', 'Colour'));
    this.setTooltip(Msg.FIELD_ATTR_BGCOLOR_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_opacity = {
  init() {
    this.jsonInit(createKVConf('opacity', 'Number'));
    this.setTooltip(Msg.FIELD_ATTR_OPACITY_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_rotate = {
  init() {
    this.jsonInit(createKVConf('rotate', 'Number'));
    this.setTooltip(Msg.FIELD_ATTR_ROTATE_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_scale = {
  init() {
    this.jsonInit(createKVConf(['scaleX', 'scaleY'], 'Number'));
    this.setTooltip(() => Msg.FIELD_ATTR_SCALE_TOOLTIP.replace('%1', Msg.$(this.getFieldValue('KEY'), 'ATTR')));
  }
};

Blockly.Blocks.field_attr_translate = {
  init() {
    this.jsonInit(createKVConf(['translateX', 'translateY'], 'Number'));
    this.setTooltip(() => Msg.FIELD_ATTR_TRANSLATE_TOOLTIP.replace('%1', Msg.$(this.getFieldValue('KEY'), 'ATTR')));
  }
};

Blockly.Blocks.field_attr_skew = {
  init() {
    this.jsonInit(createKVConf(['skewX', 'skewY'], 'Number'));
    this.setTooltip(() => Msg.FIELD_ATTR_SKEW_TOOLTIP.replace('%1', Msg.$(this.getFieldValue('KEY'), 'ATTR')));
  }
};

Blockly.Blocks.field_attr_borderRadius = {
  init() {
    this.jsonInit(createKVConf('borderRadius', 'Number'));
    this.setTooltip(Msg.FIELD_ATTR_BORDERRADIUS_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_borderWidth = {
  init() {
    this.jsonInit(createKVConf('borderWidth', 'Number'));
    this.setTooltip(Msg.FIELD_ATTR_BORDERWIDTH_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_borderStyle = {
  init() {
    this.jsonInit(createKVConf({ prop: 'borderStyle', options: ['solid', 'dashed'] }, 'String'));
    this.setTooltip(Msg.FIELD_ATTR_BORDERSTYLE_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_borderColour = {
  init() {
    this.jsonInit(createKVConf('borderColor', 'Colour'));
    this.setTooltip(Msg.FIELD_ATTR_BORDERCOLOR_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_dashOffset = {
  init() {
    this.jsonInit(createKVConf('dashOffset', 'Number'));
    this.setTooltip(Msg.FIELD_ATTR_DASHOFFSET_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_texture = {
  init() {
    this.jsonInit(createKVConf('texture', 'String', Blockly.Msg.ATTRS_SPRITE_HUE));
    this.setTooltip(Msg.FIELD_ATTR_TEXTURE_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_text = {
  init() {
    this.jsonInit(createKVConf('text', 'String', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_TEXT_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_fontSize = {
  init() {
    this.jsonInit(createKVConf('fontSize', 'Number', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_FONTSIZE_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_fontFamily = {
  init() {
    this.jsonInit(createKVConf('fontFamily', 'String', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_FONTFAMILY_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_fontStyle = {
  init() {
    this.jsonInit(createKVConf({ prop: 'fontStyle', options: ['normal', 'italic', 'oblique'] }, 'String', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_FONTSTYLE_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_fontVariant = {
  init() {
    this.jsonInit(createKVConf({ prop: 'fontVariant', options: ['normal', 'small-caps'] }, 'String', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_FONTVARIANT_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_fontWeight = {
  init() {
    this.jsonInit(createKVConf({
      prop: 'fontWeight',
      options: ['normal', 'bold', 'bolder', 'lighter', '100', '200', '300', '400', '500', '600', '700', '800', '900']
    }, 'String', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_FONTWEIGHT_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_textAlign = {
  init() {
    this.jsonInit(createKVConf({ prop: 'textAlign', options: ['left', 'right', 'center'] }, 'String', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_TEXTALIGN_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_lineHeight = {
  init() {
    this.jsonInit(createKVConf('lineHeight', 'Number', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_LINEHEIGHT_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_d = {
  init() {
    this.jsonInit(createKVConf('d', 'String', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_D_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_lineWidth = {
  init() {
    this.jsonInit(createKVConf('lineWidth', 'Number', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_LINEWIDTH_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_lineDash = {
  init() {
    this.jsonInit(createKVConf('lineDash', 'String', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_LINEDASH_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_lineDashOffset = {
  init() {
    this.jsonInit(createKVConf('lineDashOffset', 'Number', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_LINEDASHOFFSET_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_lineCap = {
  init() {
    this.jsonInit(createKVConf({ prop: 'lineCap', options: ['butt', 'round', 'square'] }, 'String', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_LINECAP_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_lineJoin = {
  init() {
    this.jsonInit(createKVConf({ prop: 'lineJoin', options: ['miter', 'round', 'bevel'] }, 'String', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_LINEJOIN_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_bounding = {
  init() {
    this.jsonInit(createKVConf({ prop: 'bounding', options: ['box', 'path'] }, 'String', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(() => Msg.FIELD_ATTR_BOUNDING_TOOLTIP.replace('%1', Msg.$(this.getFieldValue('VALUE'), 'ATTR_VALUE')));
  }
};

Blockly.Blocks.field_attr_strokeColour = {
  init() {
    this.jsonInit(createKVConf('strokeColor', 'Colour', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_STROKECOLOR_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_fillColour = {
  init() {
    this.jsonInit(createKVConf('fillColor', 'Colour', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_FILLCOLOR_TOOLTIP);
  }
};

function gencode(block) {
  const key = block.getFieldValue('KEY');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || `'${block.getFieldValue('VALUE')}'` || 'null';
  return `\n'${key}': ${value},`;
}

Object.keys(Blockly.Blocks).forEach(key => {
  if (key.indexOf('field_attr') === 0 && key !== 'field_attr_inc') {
    Blockly.JavaScript[key] = gencode;
  }
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

const Blockly = __webpack_require__(11);
const Msg = Blockly.Msg;

const colour = Msg.ANIMATE_HUE;
const previousStatement = 'Statement';
const nextStatement = 'Statement';

Blockly.Blocks.await = {
  init() {
    this.jsonInit({
      message0: Msg.AWAIT_MSG0,
      args0: [{ type: 'field_number', name: 'MILLISEC', value: 16 }],
      colour,
      previousStatement: 'Statement',
      nextStatement: null,
      tooltip: () => Msg.AWAIT_TOOLTIP.replace('%1', this.getFieldValue('MILLISEC'))
    });
  }
};

Blockly.JavaScript.await = function (block) {
  const ms = parseInt(block.getFieldValue('MILLISEC'), 10);

  return `await spritly.runtime.wait(${ms});\n`;
};

Blockly.Blocks.await_frame = {
  init() {
    this.jsonInit({
      message0: Msg.AWAIT_FRAME_MSG0,
      args0: [{ type: 'field_dropdown',
        name: 'LAYER',
        options: [[Msg.COMMON_FGLAYER, 'fglayer'], [Msg.COMMON_BGLAYER, 'bglayer']]
      }],
      colour,
      previousStatement,
      nextStatement,
      tooltip: Msg.AWAIT_FRAME_TOOLTIP
    });
  }
};

Blockly.JavaScript.await_frame = function (block) {
  const layerName = block.getFieldValue('LAYER');
  return `await spritly.runtime.scene.layer('${layerName}').prepareRender();\n`;
};

Blockly.Blocks.sprite_animate = {
  init() {
    this.jsonInit({
      message0: Msg.SPRITE_ANIMATE_MSG0,
      args0: [{
        type: 'field_dropdown',
        name: 'ASYNC?',
        options: [[Msg.SPRITE_ANIMATE_OPTION_ASYNC_DEFAULT, '-'], [Msg.SPRITE_ANIMATE_OPTION_ASYNC_AWAIT, 'await']]
      }, {
        type: 'input_value',
        name: 'SPRITE',
        check: 'Sprite'
      }, {
        type: 'input_value',
        name: 'DURATION',
        check: 'Number'
      }],
      message1: Msg.SPRITE_ANIMATE_MSG1,
      args1: [{
        type: 'input_statement',
        name: 'FROM_ATTRS',
        check: 'KeyValue'
      }],
      message2: Msg.SPRITE_ANIMATE_MSG2,
      args2: [{
        type: 'input_statement',
        name: 'TO_ATTRS',
        check: 'KeyValue'
      }],
      message3: Msg.SPRITE_ANIMATE_MSG3,
      args3: [{
        type: 'input_value',
        name: 'EASING',
        check: 'String'
      }],
      colour,
      previousStatement,
      nextStatement,
      tooltip: Msg.SPRITE_ANIMATE_TOOLTIP
    });
  }
};

Blockly.JavaScript.sprite_animate = function (block) {
  const isAsync = block.getFieldValue('ASYNC?') === 'await';
  const sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_NONE) || 'null';
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_NONE) || 600;
  const easing = Blockly.JavaScript.valueToCode(block, 'EASING', Blockly.JavaScript.ORDER_NONE) || '"ease"';
  const from = Blockly.JavaScript.statementToCode(block, 'FROM_ATTRS');
  const to = Blockly.JavaScript.statementToCode(block, 'TO_ATTRS');

  let code = `${sprite}.animate([{${from}
},{${to}
}], {duration: ${duration * 1000}, fill: 'forwards', easing: ${easing}})`;
  if (isAsync) {
    code = `if(!${sprite}.layer) console.error('${sprite} must append to layer before animated!'); 
await ${code}.finished`;
  }

  return `${code};\n`;
};

Blockly.Blocks.easing = {
  init() {
    this.jsonInit({
      message0: '%1',
      args0: [{
        type: 'field_dropdown',
        name: 'EASING',
        options: [[Msg.EASING_OPTION_EASING_EASE, 'ease'], [Msg.EASING_OPTION_EASING_EASEIN, 'ease-in'], [Msg.EASING_OPTION_EASING_EASEOUT, 'ease-out'], [Msg.EASING_OPTION_EASING_EASEINOUT, 'ease-in-out']]
      }],
      colour,
      output: 'String',
      tooltip: Msg.EASING_OPTION_TOOLTIP
    });
  }
};

Blockly.JavaScript.easing = function (block) {
  const easing = block.getFieldValue('EASING');
  return [`'${easing}'`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.bezier_easing = {
  init() {
    this.jsonInit({
      message0: Msg.BEZIER_EASING_MSG0,
      args0: [{
        type: 'field_number',
        name: 'X0',
        value: 0.68
      }, {
        type: 'field_number',
        name: 'Y0',
        value: -0.55
      }, {
        type: 'field_number',
        name: 'X1',
        value: 0.265
      }, {
        type: 'field_number',
        name: 'Y1',
        value: 1.55
      }],
      colour,
      output: 'String',
      tooltip: Msg.BEZIER_EASING_TOOLTIP
    });
  }
};

Blockly.JavaScript.bezier_easing = function (block) {
  const x0 = block.getFieldValue('X0');
  const y0 = block.getFieldValue('Y0');
  const x1 = block.getFieldValue('X1');
  const y1 = block.getFieldValue('Y1');
  return [`'cubic-bezier(${x0},${y0},${x1},${y1})'`, Blockly.JavaScript.ORDER_NONE];
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);

const Blockly = __webpack_require__(11);

const Msg = Blockly.Msg;
const controls_if_init = Blockly.Blocks.controls_if.init;

Blockly.Blocks.controls_if.init = function () {
  controls_if_init.call(this);
  for (let i = 0; i < 20; i++) {
    const input = this.getInput(`DO${i}`);
    if (input) {
      input.setCheck('Statement');
    } else {
      break;
    }
  }
  this.setNextStatement(true, 'Statement');
  this.setPreviousStatement(true, 'Statement');
  this.setColour(Msg.FLOWS_HUE);
};

Blockly.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN.saveConnections = function (containerBlock) {
  let clauseBlock = containerBlock.nextConnection.targetBlock();
  let i = 1;
  let inputIf, inputDo;
  while (clauseBlock) {
    switch (clauseBlock.type) {
      case 'controls_if_elseif':
        inputIf = this.getInput(`IF${i}`);
        inputDo = this.getInput(`DO${i}`);
        inputDo.setCheck('Statement');
        clauseBlock.valueConnection_ = inputIf && inputIf.connection.targetConnection;
        clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
        i++;
        break;
      case 'controls_if_else':
        inputDo = this.getInput('ELSE');
        inputDo.setCheck('Statement');
        clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
        break;
      default:
        throw TypeError(`Unknown block type: ${clauseBlock.type}`);
    }
    clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
  }
};

const controls_repeat_ext_init = Blockly.Blocks.controls_repeat_ext.init;
Blockly.Blocks.controls_repeat_ext.init = function () {
  controls_repeat_ext_init.call(this);
  this.getInput('DO').setCheck('Statement');
  this.setNextStatement(true, 'Statement');
  this.setPreviousStatement(true, 'Statement');
  this.setColour(Msg.FLOWS_HUE);
};

Blockly.JavaScript.controls_repeat_ext = function (block) {
  // Repeat n times.
  let repeats;
  if (block.getField('TIMES')) {
    // Internal number.
    repeats = String(Number(block.getFieldValue('TIMES')));
  } else {
    // External number.
    repeats = Blockly.JavaScript.valueToCode(block, 'TIMES', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  }
  let branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);
  let code = '';
  const loopVar = Blockly.JavaScript.variableDB_.getDistinctName('count', Blockly.Variables.NAME_TYPE);
  let endVar = repeats;
  let endVarDef = '';
  if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
    endVar = Blockly.JavaScript.variableDB_.getDistinctName('repeat_end', Blockly.Variables.NAME_TYPE);
    endVarDef = `, ${endVar} = ${repeats}`;
  }
  code += `for(let ${loopVar} = 0${endVarDef}; ${loopVar} < ${endVar}; ${loopVar}++){
${branch}}\n`;

  return code;
};

const controls_whileUntil_init = Blockly.Blocks.controls_whileUntil.init;
Blockly.Blocks.controls_whileUntil.init = function () {
  controls_whileUntil_init.call(this);
  this.getInput('DO').setCheck('Statement');
  this.setNextStatement(true, 'Statement');
  this.setPreviousStatement(true, 'Statement');
  this.setColour(Msg.FLOWS_HUE);
};

Blockly.Blocks.list_foreach = {
  init() {
    this.jsonInit({
      message0: Msg.LIST_FOREACH_MSG0,
      args0: [{
        type: 'input_value',
        name: 'LIST',
        check: ['String', 'Array']
      }],
      message1: Msg.LIST_FOREACH_MSG1,
      args1: [{
        type: 'input_statement',
        name: 'DO',
        check: 'Statement'
      }],
      message2: Msg.LIST_FOREACH_MSG2,
      args2: [{
        type: 'field_input',
        name: 'ITEM',
        text: 'item'
      }, {
        type: 'field_dropdown',
        name: 'INDEX',
        options: ['i', 'j', 'k', 'l', 'm'].map(s => [s, s])
      }],
      colour: Msg.FLOWS_HUE,
      previousStatement: 'Statement',
      nextStatement: 'Statement',
      tooltip: Msg.LIST_FOREACH_TOOLTIP
    });
  }
};

Blockly.JavaScript.list_foreach = function (block) {
  const list = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_NONE) || '[]';
  const item = block.getFieldValue('ITEM');
  const index = block.getFieldValue('INDEX');
  let code = Blockly.JavaScript.statementToCode(block, 'DO');

  let indent = /^([\s\t]+)/.exec(code);
  if (indent) indent = `\n${indent[0]}`;else indent = `\n${Blockly.Generator.prototype.INDENT}`;
  if (code) code = `${code}\n`;

  return `await ${list}.reduce(async function($$prestep, ${item}, ${index}) {${indent}await $$prestep;\n${code}}, null);\n`;
};

Blockly.Blocks.list_index = {
  init() {
    this.jsonInit({
      message0: '%1',
      args0: [{
        type: 'field_dropdown',
        name: 'INDEX',
        options: ['i', 'j', 'k', 'l', 'm'].map(s => [s, s])
      }],
      output: 'Number',
      colour: Msg.FLOWS_HUE,
      tooltip: Msg.LIST_INDEX_TOOLTIP
    });
  }
};

Blockly.JavaScript.list_index = function (block) {
  const index = block.getFieldValue('INDEX');
  return [index, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.list_item = {
  init() {
    this.jsonInit({
      message0: '%1',
      args0: [{
        type: 'field_dropdown',
        name: 'ITEM',
        options: () => {
          const items = _dropdown__WEBPACK_IMPORTED_MODULE_0__["Dropdown"].get('ListItems');
          if (items.length) {
            return items.map(s => [s, s]);
          }
          return [['item', 'item']];
        }
      }],
      output: null,
      colour: Msg.FLOWS_HUE,
      tooltip: Msg.LIST_ITEM_TOOLTIP
    });
  }
};

Blockly.JavaScript.list_item = function (block) {
  const index = block.getFieldValue('ITEM');
  return [index, Blockly.JavaScript.ORDER_NONE];
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
const dropdowns = new Map();

const Dropdown = {
  set(key, value) {
    const dropdown = dropdowns.get(key) || new Set();
    dropdown.add(value);
    dropdowns.set(key, dropdown);
    return dropdown;
  },
  get(key) {
    return [...(dropdowns.get(key) || [])];
  },
  clear() {
    dropdowns.clear();
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

const Blockly = __webpack_require__(11);

const Msg = Blockly.Msg;

Blockly.Blocks.nil = {
  init() {
    this.jsonInit({
      message0: '%1',
      args0: [{
        type: 'field_dropdown',
        name: 'VALUE',
        options: [[Msg.LITERAL_NULL, 'null'], [Msg.LITERAL_UNDEFINED, 'undefined']]
      }],
      colour: Msg.LITERAL_HUE
    });
    this.setOutput(true);
    this.setTooltip(() => Msg.NIL_TOOLTIP.replace('%1', this.getFieldValue('VALUE')));
  }
};

Blockly.JavaScript.nil = function (block) {
  const value = block.getFieldValue('VALUE');
  return [value, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.boolean = {
  init() {
    Blockly.Blocks.logic_boolean.init.call(this);
    this.setColour(Blockly.Msg.LITERAL_HUE);
  }
};
Blockly.JavaScript.boolean = Blockly.JavaScript.logic_boolean;

Blockly.Blocks.number = {
  init() {
    Blockly.Blocks.math_number.init.call(this);
    this.setColour(Blockly.Msg.LITERAL_HUE);
  }
};
Blockly.JavaScript.number = Blockly.JavaScript.math_number;

Blockly.Blocks.string = {
  init() {
    Blockly.Blocks.text.init.call(this);
    this.setColour(Blockly.Msg.LITERAL_HUE);
  }
};
Blockly.JavaScript.string = Blockly.JavaScript.text;

Blockly.Blocks.object_create = {
  init() {
    this.appendDummyInput().appendField('new Object');
    this.appendStatementInput('FIELDS').setCheck(['KeyValue']);
    this.setOutput(true);
    this.setColour(Msg.LITERAL_HUE);
    this.setTooltip(Msg.OBJECT_CREATE_TOOLTIP);
  }
};
Blockly.JavaScript.object_create = function (block) {
  const fields = Blockly.JavaScript.statementToCode(block, 'FIELDS');
  return [`{${fields}\n}`, Blockly.JavaScript.ORDER_MEMBER];
};

const colour_picker_init = Blockly.Blocks.colour_picker.init;

Blockly.Blocks.colour_picker.init = function () {
  colour_picker_init.call(this);
  this.setColour(Blockly.Msg.LITERAL_HUE);
};

Blockly.Blocks.loop_get_index = {
  init() {
    this.jsonInit({
      message0: Msg.LOOP_GET_INDEX_MSG0,
      colour: Msg.LITERAL_HUE,
      output: 'Number',
      tooltip: Msg.LOOP_GET_INDEX_TOOLTIP
    });
  }
};

Blockly.JavaScript.loop_get_index = function (block) {
  return ['index', Blockly.JavaScript.ORDER_NONE];
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);


const Blockly = __webpack_require__(11);

const Msg = Blockly.Msg;
const colour = Blockly.Msg.SIGNALS_HUE;
const previousStatement = 'Statement';
const nextStatement = 'Statement';

function listSignal(...extras) {
  const signals = ['START', 'STORE_PROPERTY_UPDATE'];
  return () => {
    return [...signals, ...extras, ..._dropdown__WEBPACK_IMPORTED_MODULE_0__["Dropdown"].get('Signals')].map(s => [Msg.$(s, 'SIGNAL_DO_OPTION_SIGNAL'), s]);
  };
}

function listSprite() {
  const sprites = _dropdown__WEBPACK_IMPORTED_MODULE_0__["Dropdown"].get('Sprites');
  if (sprites.length > 0) {
    return sprites.map(s => [s, s]);
  }
  return [['', '']];
}

Blockly.Blocks.signal_do = {
  init() {
    this.jsonInit({
      message0: Msg.SIGNAL_DO_MSG0,
      args0: [{
        type: 'field_dropdown',
        name: 'SIGNAL',
        options: listSignal('LAYER_CLICKED', 'ELEMENT_CREATED', 'ELEMENT_DESTROYED')
      }],
      // message1: '(sender, receiver, data)',
      colour,
      nextStatement,
      tooltip: Msg.SIGNAL_DO_TOOLTIP
    });
  }
};

Blockly.JavaScript.signal_do = function (block) {
  return '';
};

Blockly.Blocks.signal_new_sprite_as_receiver = {
  init() {
    this.jsonInit({
      message0: Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG0,
      args0: [{
        type: 'field_dropdown',
        name: 'SIGNAL',
        options: listSignal()
      }],
      message1: Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG1,
      args1: [{
        type: 'field_dropdown',
        name: 'RECEIVER',
        options: [[Msg.COMMON_SPRITE, 'Sprite'], [Msg.COMMON_LABEL, 'Label'], [Msg.COMMON_PATH, 'Path']]
      }],
      message2: Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG2,
      args2: [{
        type: 'field_input',
        name: 'ID',
        check: 'String',
        text: `Sprite_${Math.random().toString().slice(2, 7)}`
      }],
      colour,
      nextStatement,
      tooltip: Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_TOOLTIP
    });
  }
};

Blockly.JavaScript.signal_new_sprite_as_receiver = function (block) {
  return '';
};

Blockly.Blocks.signal_when_receiver_is = {
  init() {
    this.jsonInit({
      message0: Msg.SIGNAL_WHEN_RECEIVER_IS_MSG0,
      args0: [{
        type: 'field_dropdown',
        name: 'SIGNAL',
        options: listSignal('ELEMENT_CREATED')
      }],
      message1: Msg.SIGNAL_WHEN_RECEIVER_IS_MSG1,
      args1: [{
        type: 'field_dropdown',
        name: 'ID',
        options: listSprite
      }],
      colour,
      nextStatement,
      tooltip: Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_TOOLTIP
    });
  }
};

Blockly.JavaScript.signal_when_receiver_is = function () {
  return '';
};

Blockly.Blocks.get_data = {
  init() {
    this.jsonInit({
      message0: Msg.GET_DATA_MSG0,
      colour,
      output: 'Object',
      tooltip: Msg.GET_DATA_TOOLTIP
    });
  }
};

Blockly.JavaScript.get_data = function (block) {
  return ['data', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.get_data_prop = {
  init() {
    this.jsonInit({
      message0: Msg.GET_DATA_PROP_MSG0,
      args0: [{
        type: 'field_dropdown',
        name: 'PROP',
        options: ['offsetX', 'offsetY', 'layerX', 'layerY', 'altKey', 'ctrlKey', 'shiftKey', 'buttons'].map(s => [Msg.$(s, 'GET_DATA_PROP_OPTION_PROP'), s])
      }],
      colour,
      output: ['Number', 'Boolean'],
      tooltip: Msg.GET_DATA_PROP_TOOLTIP
    });
  }
};

Blockly.JavaScript.get_data_prop = function (block) {
  const prop = block.getFieldValue('PROP');
  return [`data[spritly.runtime.Symbols.${prop}]`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.get_store_data_prop = {
  init() {
    this.jsonInit({
      message0: Msg.GET_DATA_PROP_MSG0,
      args0: [{
        type: 'field_dropdown',
        name: 'PROP',
        options: ['property', 'oldValue', 'newValue'].map(s => [Msg.$(s, 'GET_DATA_PROP_OPTION_PROP'), s])
      }],
      colour,
      output: null,
      tooltip: Msg.GET_DATA_PROP_TOOLTIP2
    });
  }
};

Blockly.JavaScript.get_store_data_prop = function (block) {
  const prop = block.getFieldValue('PROP');
  return [`data[spritly.runtime.Symbols.${prop}]`, Blockly.JavaScript.ORDER_MEMBER];
};

const events = ['immediately', 'onclick', 'ondblclick', 'onmousedown', 'onmousemove', 'onmouseup', 'onmouseenter', 'onmouseleave'];

Blockly.Blocks.signal_onevent_send = {
  init() {
    this.jsonInit({
      message0: Msg.SIGNAL_ONEVENT_SEND_MSG0,
      args0: [{
        type: 'input_value',
        name: 'SPRITE',
        check: 'Sprite'
      }, {
        type: 'field_dropdown',
        name: 'EVENT',
        options: events.map(s => [Msg.$(s, 'EVENT'), s])
      }, {
        type: 'field_input',
        name: 'SIGNAL',
        text: 'MY_SIGNAL'
      }],
      message1: Msg.SIGNAL_ONEVENT_SEND_MSG1,
      args1: [{
        type: 'input_statement',
        name: 'DATA',
        check: 'KeyValue'
      }],
      colour,
      previousStatement,
      nextStatement,
      tooltip: `${Msg.SIGNAL_ONEVENT_SEND_TOOLTIP}\n${Msg.SENDER_RECEIVER_TARGET_TOOLTIP}`
    });
  }
};

Blockly.JavaScript.signal_onevent_send = function (block) {
  const target = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_NONE) || 'null';
  const event = block.getFieldValue('EVENT');
  const signal = block.getFieldValue('SIGNAL');
  const data = Blockly.JavaScript.statementToCode(block, 'DATA');

  if (event !== 'immediately') {
    const eventName = event.slice(2);
    return `${target}.on('${eventName}', 
  evt => {
    const {altKey, buttons, ctrlKey, shiftKey} = evt.originalEvent;
    const runtime = spritly.runtime;
    runtime.Signal.send('${signal}', 
      {
        sender:${target},
        data: Object.assign(
          {
            [runtime.Symbols.target]: evt.target,
            [runtime.Symbols.offsetX]: evt.offsetX,
            [runtime.Symbols.offsetY]: evt.offsetY,
            [runtime.Symbols.layerX]: evt.layerX,
            [runtime.Symbols.layerY]: evt.layerY,
            [runtime.Symbols.altKey]: altKey,
            [runtime.Symbols.buttons]: buttons,
            [runtime.Symbols.ctrlKey]: ctrlKey,
            [runtime.Symbols.shiftKey]: shiftKey,
          },
          {${data}},
        ),
      });
  });`;
  }
  return `spritly.runtime.Signal.send('${signal}', {sender:${target}, data: {${data}}});\n`;
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);



const Blockly = __webpack_require__(11);

const Msg = Blockly.Msg;
const colour = Blockly.Msg.SPRITE_HUE;
const previousStatement = 'Statement';
const nextStatement = 'Statement';

const sender_receiver_dropdown = {
  type: 'field_dropdown',
  name: 'SPRITE',
  options: _utils__WEBPACK_IMPORTED_MODULE_1__["spriteOptions"]
};

Blockly.Blocks.sprite = {
  init() {
    this.jsonInit({
      message0: '%1',
      args0: [sender_receiver_dropdown],
      colour,
      output: 'Sprite',
      tooltip: Msg.SPRITE_MSG0_TOOLTIP
    });
  }
};

Blockly.JavaScript.sprite = function (block) {
  let sprite = block.getFieldValue('SPRITE');
  if (sprite !== 'target' && sprite !== 'sender' && sprite !== 'receiver' && sprite !== 'item') {
    sprite = `spritly.runtime.ElementList.getElementById('${sprite}')`;
  }

  return [sprite, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.sprite_append_to = {
  init() {
    this.jsonInit({
      message0: Msg.SPRITE_APPEND_TO_MSG0,
      args0: [{
        type: 'input_value',
        name: 'SPRITE',
        check: 'Sprite'
      }, { type: 'field_dropdown',
        name: 'LAYER',
        options: [[Msg.COMMON_FGLAYER, 'fglayer'], [Msg.COMMON_BGLAYER, 'bglayer']]
      }],
      colour,
      previousStatement,
      nextStatement,
      tooltip: `${Msg.SPRITE_APPEND_TO_TOOLTIP}\n${Msg.FGLAYER_BGLAYER_TOOTIP}`
    });
  }
};

Blockly.JavaScript.sprite_append_to = function (block) {
  const sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_NONE) || 'null';
  const layerName = block.getFieldValue('LAYER');

  return `spritly.runtime.scene.layer('${layerName}').append(${sprite});\n`;
};

Blockly.Blocks.sprite_attrs = {
  init() {
    this.jsonInit({
      message0: Msg.SPRITE_ATTRS_MSG0,
      args0: [{
        type: 'input_value',
        name: 'SPRITE',
        check: 'Sprite'
      }],
      message1: '%1',
      args1: [{ type: 'input_statement', name: 'ATTRS', check: 'KeyValue' }],
      colour,
      previousStatement,
      nextStatement,
      tooltip: Msg.SPRITE_ATTRS_TOOLTIP
    });
  }
};

Blockly.JavaScript.sprite_attrs = function (block) {
  const sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_NONE) || 'null';
  const attrs = Blockly.JavaScript.statementToCode(block, 'ATTRS');

  return `${sprite}.attr(spritly.runtime.parse_attr({${attrs}\n}));\n`;
};

Blockly.Blocks.sprite_create_attrs = {
  init() {
    this.jsonInit({
      message0: Msg.SPRITE_CREATE_ATTRS_MSG0,
      args0: [{
        type: 'field_dropdown',
        name: 'TYPE',
        options: [[Msg.COMMON_SPRITE, 'Sprite'], [Msg.COMMON_LABEL, 'Label'], [Msg.COMMON_PATH, 'Path']]
      }],
      message1: Msg.SPRITE_CREATE_ATTRS_MSG1,
      args1: [{
        type: 'field_input',
        name: 'NAME',
        text: 'MyName'
      }],
      message2: '%1',
      args2: [{ type: 'input_statement', name: 'ATTRS', check: 'KeyValue' }],
      colour,
      previousStatement,
      nextStatement,
      tooltip: Msg.SPRITE_CREATE_ATTRS_TOOLTIP
    });
  }
};

Blockly.JavaScript.sprite_create_attrs = function (block) {
  const type = block.getFieldValue('TYPE');
  const name = block.getFieldValue('NAME');
  const attrs = Blockly.JavaScript.statementToCode(block, 'ATTRS');
  return `spritly.runtime.ElementList.add(spritejs.createElement('${type}', spritly.runtime.parse_attr({name: '${name}'}, {${attrs}\n})));\n`;
};

Blockly.Blocks.sprite_each_elements_named = {
  init() {
    this.jsonInit({
      message0: Msg.SPRITE_EACH_ELEMENTS_NAMED_MSG0,
      args0: [{
        type: 'field_dropdown',
        name: 'NAME',
        options: () => {
          const spriteNames = _dropdown__WEBPACK_IMPORTED_MODULE_0__["Dropdown"].get('SpriteNames');
          if (spriteNames.length > 0) {
            return spriteNames.map(s => [s, s]);
          }
          return [['', '']];
        }
      }],
      colour,
      output: 'Array',
      tooltip: Msg.SPRITE_EACH_ELEMENTS_NAMED_TOOLTIP
    });
  }
};

Blockly.JavaScript.sprite_each_elements_named = function (block) {
  const name = block.getFieldValue('NAME');
  return [`spritly.runtime.ElementList.getElementsByName('${name}')`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.sprite_destroy = {
  init() {
    this.jsonInit({
      message0: Msg.SPRITE_DESTROY_MSG0,
      args0: [{
        type: 'input_value',
        name: 'SPRITE',
        check: 'Sprite'
      }],
      colour,
      previousStatement,
      nextStatement,
      tooltip: Msg.SPRITE_DESTROY_TOOLTIP
    });
  }
};

Blockly.JavaScript.sprite_destroy = function (block) {
  const sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_NONE) || 'null';
  return `spritly.runtime.ElementList.remove(${sprite});\n`;
};

function attrs_dropdown() {
  const attrs = ['id', 'name', 'anchorX', 'anchorY', 'x', 'y', 'width', 'height', 'bgcolor', 'opacity', 'rotate', 'scaleX', 'scaleY', 'translateX', 'translateY', 'skewX', 'skewY', 'borderRadius', 'borderWidth', 'borderStyle', 'borderColor', 'dashOffset', 'texture', 'text', 'fontSize', 'fontFamily', 'fontStyle', 'fontVariant', 'fontWeight', 'textAlign', 'lineHeight', 'd', 'lineWidth', 'lineDash', 'lineDashOffset', 'lineCap', 'lineJoin', 'bounding', 'strokeColor', 'fillColor'];
  return attrs.map(s => [Msg.$(s, 'ATTR'), s]);
}

Blockly.Blocks.sprite_get_attr = {
  init() {
    this.jsonInit({
      message0: Msg.SPRITE_GET_ATTR_MSG0,
      args0: [{
        type: 'input_value',
        name: 'SPRITE',
        check: 'Sprite'
      }, {
        type: 'field_dropdown',
        name: 'ATTR',
        options: attrs_dropdown
      }],
      colour,
      output: true,
      tooltip: Msg.SPRITE_GET_ATTR_TOOLTIP
    });
  }
};

Blockly.JavaScript.sprite_get_attr = function (block) {
  const sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_NONE) || 'null';
  const attr = block.getFieldValue('ATTR');
  return [`spritly.runtime.get_attr(${sprite}, '${attr}')`, Blockly.JavaScript.ORDER_NONE];
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spriteOptions", function() { return spriteOptions; });
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);


const Blockly = __webpack_require__(11);
const Msg = Blockly.Msg;

function spriteOptions() {
  const sprites = _dropdown__WEBPACK_IMPORTED_MODULE_0__["Dropdown"].get('Sprites');
  return [[Msg.COMMON_TARGET, 'target'], [Msg.COMMON_SENDER, 'sender'], [Msg.COMMON_RECEIVER, 'receiver']].concat(sprites.map(s => [s, s]));
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

const Blockly = __webpack_require__(11);

const Msg = Blockly.Msg;
const colour = Blockly.Msg.LOG_HUE;
const previousStatement = 'Statement';
const nextStatement = 'Statement';

Blockly.Blocks.log_log = {
  init() {
    this.jsonInit({
      message0: '📋 %1 %2',
      args0: [{
        type: 'field_dropdown',
        name: 'LOG',
        options: [[Msg.LOG_OPTION_LOG_LOG, 'log'], [Msg.LOG_OPTION_LOG_WARN, 'warn'], [Msg.LOG_OPTION_LOG_ERROR, 'error']]
      }, {
        type: 'input_value',
        name: 'MSG'
      }],
      // message1: '(sender, receiver, data)',
      colour,
      previousStatement,
      nextStatement,
      tooltip: Msg.LOG_TOOLTIP
    });
  }
};

Blockly.JavaScript.log_log = function (block) {
  const msg = Blockly.JavaScript.valueToCode(block, 'MSG', Blockly.JavaScript.ORDER_NONE);
  const level = block.getFieldValue('LOG');
  return `console.${level}(${msg});\n`;
};

Blockly.Blocks.log_alert = {
  init() {
    this.jsonInit({
      message0: Msg.LOG_ALERT_MSG0,
      args0: [{
        type: 'input_value',
        name: 'MSG'
      }],
      // message1: '(sender, receiver, data)',
      colour,
      previousStatement,
      nextStatement,
      tooltip: Msg.LOG_ALERT_TOOLTIP
    });
  }
};

Blockly.JavaScript.log_alert = function (block) {
  const msg = Blockly.JavaScript.valueToCode(block, 'MSG', Blockly.JavaScript.ORDER_NONE);
  return `alert(${msg});\n`;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

const Blockly = __webpack_require__(11);

const Msg = Blockly.Msg;
const colour = Blockly.Msg.MATH_HUE;

Blockly.Blocks.random_string = {
  init() {
    this.jsonInit({
      message0: Msg.RANDOM_STRING_MSG0,
      colour,
      output: 'String',
      tooltip: Msg.RANDOM_STRING_TOOLTIP
    });
  }
};

Blockly.JavaScript.random_string = function (block) {
  return ['\'Math.random().toString(36).slice(2)\'', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.random_colour_rgb = {
  init() {
    this.jsonInit({
      message0: Msg.RANDOM_COLOUR_RGB_MSG0,
      colour,
      output: 'Colour',
      tooltip: Msg.RANDOM_COLOUR_RGB_TOOLTIP
    });
  }
};

Blockly.JavaScript.random_colour_rgb = function (block) {
  return ['spritly.runtime.random_color()', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.random_colour_hue = {
  init() {
    this.jsonInit({
      message0: Msg.RANDOM_COLOUR_HUE_MSG0,
      message1: Msg.RANDOM_COLOUR_HUE_MSG1,
      args1: [{
        type: 'field_number',
        name: 'S',
        value: 100
      }, {
        type: 'field_number',
        name: 'L',
        value: 50
      }, {
        type: 'field_number',
        name: 'A',
        value: 1.0
      }],
      colour,
      output: 'Colour',
      tooltip: Msg.RANDOM_COLOUR_HUE_TOOLTIP
    });
  }
};

Blockly.JavaScript.random_colour_hue = function (block) {
  const h = Math.floor(Math.random() * 360);
  const s = block.getFieldValue('S');
  const l = block.getFieldValue('L');
  const a = block.getFieldValue('A');

  return [`spritly.runtime.random_color_hue(${s},${l},${a})`, Blockly.JavaScript.ORDER_NONE];
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

const Blockly = __webpack_require__(11);

const Msg = Blockly.Msg;
const colour = Msg.LISTS_HUE;

Blockly.Blocks.lists_create_range = {
  init() {
    this.jsonInit({
      message0: Msg.LISTS_CREATE_RANGE_MSG0,
      message1: Msg.LISTS_CREATE_RANGE_MSG1,
      args1: [{
        type: 'input_value',
        name: 'FROM',
        check: 'Number'
      }, {
        type: 'input_value',
        name: 'TO',
        check: 'Number'
      }],
      inputsInline: true,
      output: 'Array',
      colour,
      tooltip: Msg.LISTS_CREATE_RANGE_TOOLTIP
    });
  }
};

Blockly.JavaScript.lists_create_range = function (block) {
  const from = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  const to = Blockly.JavaScript.valueToCode(block, 'TO', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';

  return [`(Array.from({length: Math.abs(${from} - ${to}) + 1}).map((_, i) => ${from} + (${from} - ${to} > 0 ? -1 : 1) * i))`, Blockly.JavaScript.ORDER_NONE];
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

const Blockly = __webpack_require__(11);

const Msg = Blockly.Msg;

Blockly.Blocks.key_value = {
  init() {
    this.jsonInit({
      message0: Msg.KEYVALUE_MSG0,
      args0: [{
        type: 'input_value',
        name: 'KEY',
        check: 'String'
      }, {
        type: 'input_value',
        name: 'VALUE'
      }],
      colour: Msg.GETTER_SETTER_HUE,
      previousStatement: 'KeyValue',
      nextStatement: 'KeyValue'
    });
    this.setTooltip(Msg.KEYVALUE_TOOLTIP);
  }
};

Blockly.JavaScript.key_value = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_NONE) || 'key';
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || 'null';
  return `\n${key}: ${value},`;
};

Blockly.Blocks.object_get_prop = {
  init() {
    this.jsonInit({
      message0: Msg.OBJECT_GET_PROP_MSG0,
      args0: [{
        type: 'input_value',
        name: 'OBJECT'
      }, {
        type: 'input_value',
        name: 'PROP',
        check: 'String'
      }],
      inputsInline: true,
      output: null,
      colour: Msg.GETTER_SETTER_HUE
    });
    this.setTooltip(Msg.OBJECT_GET_PROP_TOOLTIP);
  }
};

Blockly.JavaScript.object_get_prop = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_NONE) || 'Object()';
  const propName = Blockly.JavaScript.valueToCode(block, 'PROP', Blockly.JavaScript.ORDER_NONE) || 'key';

  return [`${object}[${propName}]`, Blockly.JavaScript.ORDER_NONE];
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

const Blockly = __webpack_require__(11);

const Msg = Blockly.Msg;
const colour = Msg.STORE_HUE;

Blockly.Blocks.store_set = {
  init() {
    this.jsonInit({
      message0: Msg.STORE_SET_MSG0,
      args0: [{
        type: 'input_value',
        name: 'KEY',
        check: 'String'
      }, {
        type: 'input_value',
        name: 'VALUE'
      }],
      inputsInline: true,
      colour,
      previousStatement: 'Statement',
      nextStatement: 'Statement',
      tooltip: Msg.STORE_SET_TOOLTIP
    });
  }
};

Blockly.JavaScript.store_set = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_MEMBER) || '\'key\'';
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || 'null';

  return `spritly.runtime.Store.set(${key}, ${value}, target);\n`;
};

Blockly.Blocks.store_get = {
  init() {
    this.jsonInit({
      message0: Msg.STORE_GET_MSG0,
      args0: [{
        type: 'input_value',
        name: 'KEY',
        check: 'String'
      }],
      colour,
      output: null,
      tooltip: Msg.STORE_GET_TOOLTIP
    });
  }
};

Blockly.JavaScript.store_get = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_MEMBER) || '\'key\'';
  return [`spritly.runtime.Store.get(${key})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.store_delete = {
  init() {
    this.jsonInit({
      message0: Msg.STORE_DELETE_MSG0,
      args0: [{
        type: 'input_value',
        name: 'KEY',
        check: 'String'
      }],
      colour,
      output: null,
      tooltip: Msg.STORE_DELETE_TOOLTIP
    });
  }
};

Blockly.JavaScript.store_delete = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_MEMBER) || '\'key\'';
  return [`spritly.runtime.Store.delete(${key})`, Blockly.JavaScript.ORDER_NONE];
};

/***/ })
/******/ ]);