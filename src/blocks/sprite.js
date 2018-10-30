import {Dropdown} from '../dropdown';
import {plugEachItemInForEachScope, spriteOptions} from './utils';

const Blockly = require('blockly');

const Msg = Blockly.Msg;
const colour = Blockly.Msg.SPRITE_HUE;
const previousStatement = 'Statement';
const nextStatement = 'Statement';

const sender_receiver_dropdown = {
  type: 'field_dropdown',
  name: 'SPRITE',
  options: spriteOptions,
};

Blockly.Blocks.sprite_append_to = {
  init() {
    this.jsonInit({
      message0: Msg.SPRITE_APPEND_TO_MSG0,
      args0: [
        sender_receiver_dropdown,
        {type: 'field_dropdown',
          name: 'LAYER',
          options: [
            [Msg.COMMON_FGLAYER, 'fglayer'],
            [Msg.COMMON_BGLAYER, 'bglayer'],
          ],
        },
      ],
      colour,
      previousStatement,
      nextStatement,
      tooltip: `${Msg.SPRITE_APPEND_TO_TOOLTIP}\n${Msg.FGLAYER_BGLAYER_TOOTIP}`,
    });
  },
  onchange: plugEachItemInForEachScope(),
};

Blockly.JavaScript.sprite_append_to = function (block) {
  let sprite = block.getFieldValue('SPRITE');
  const layerName = block.getFieldValue('LAYER');

  if(sprite !== 'target' && sprite !== 'sender' && sprite !== 'receiver' && sprite !== 'item') {
    sprite = `utils.ElementList.getElementById('${sprite}')`;
  }

  return `scene.layer('${layerName}').append(${sprite});\n`;
};

Blockly.Blocks.sprite_attrs = {
  init() {
    this.jsonInit({
      message0: Msg.SPRITE_ATTRS_MSG0,
      args0: [
        sender_receiver_dropdown,
      ],
      message1: '%1',
      args1: [
        {type: 'input_statement', name: 'ATTRS', check: 'KeyValue'},
      ],
      colour,
      previousStatement,
      nextStatement,
      tooltip: Msg.SPRITE_ATTRS_TOOLTIP,
    });
  },
  onchange: plugEachItemInForEachScope(),
};

Blockly.JavaScript.sprite_attrs = function (block) {
  let sprite = block.getFieldValue('SPRITE');
  const attrs = Blockly.JavaScript.statementToCode(block, 'ATTRS');

  if(sprite !== 'target' && sprite !== 'sender' && sprite !== 'receiver' && sprite !== 'item') {
    sprite = `utils.ElementList.getElementById('${sprite}')`;
  }

  return `${sprite}.attr(utils.parse_attr({${attrs}\n}));\n`;
};

Blockly.Blocks.sprite_create_attrs = {
  init() {
    this.jsonInit({
      message0: Msg.SPRITE_CREATE_ATTRS_MSG0,
      args0: [{
        type: 'field_dropdown',
        name: 'TYPE',
        options: [
          [Msg.COMMON_SPRITE, 'Sprite'],
          [Msg.COMMON_LABEL, 'Label'],
          [Msg.COMMON_PATH, 'Path'],
        ],
      }],
      message1: Msg.SPRITE_CREATE_ATTRS_MSG1,
      args1: [{
        type: 'field_input',
        name: 'NAME',
        text: 'MyName',
      }],
      message2: '%1',
      args2: [
        {type: 'input_statement', name: 'ATTRS', check: 'KeyValue'},
      ],
      colour,
      previousStatement,
      nextStatement,
      tooltip: Msg.SPRITE_CREATE_ATTRS_TOOLTIP,
    });
  },
};

Blockly.JavaScript.sprite_create_attrs = function (block) {
  const type = block.getFieldValue('TYPE');
  const name = block.getFieldValue('NAME');
  const attrs = Blockly.JavaScript.statementToCode(block, 'ATTRS');
  return `utils.ElementList.add(spritejs.createElement('${type}', utils.parse_attr({name: '${name}'}, {${attrs}\n})));\n`;
};

Blockly.Blocks.sprite_each_elements_named = {
  init() {
    this.jsonInit({
      message0: Msg.SPRITE_EACH_ELEMENTS_NAMED_MSG0,
      args0: [
        {
          type: 'field_dropdown',
          name: 'NAME',
          options: () => {
            const spriteNames = Dropdown.get('SpriteNames');
            if(spriteNames.length > 0) {
              return spriteNames.map(s => [s, s]);
            }
            return [
              ['', ''],
            ];
          },
        },
      ],
      message1: Msg.SPRITE_EACH_ELEMENTS_NAMED_MSG1,
      args1: [{
        type: 'input_statement',
        name: 'DO',
        check: 'Statement',
      }],
      colour,
      previousStatement,
      nextStatement,
      tooltip: Msg.SPRITE_EACH_ELEMENTS_NAMED_TOOLTIP,
    });
  },
};

Blockly.JavaScript.sprite_each_elements_named = function (block) {
  const name = block.getFieldValue('NAME');
  const code = Blockly.JavaScript.statementToCode(block, 'DO');
  return `await Promise.all(utils.ElementList.getElementsByName('${name}').map(async (item, index) => {\n${code}\n}));\n`;
};

Blockly.Blocks.sprite_destroy = {
  init() {
    this.jsonInit({
      message0: Msg.SPRITE_DESTROY_MSG0,
      args0: [
        sender_receiver_dropdown,
      ],
      colour,
      previousStatement,
      nextStatement,
      tooltip: Msg.SPRITE_DESTROY_TOOLTIP,
    });
  },
  onchange: plugEachItemInForEachScope(),
};

Blockly.JavaScript.sprite_destroy = function (block) {
  const sprite = block.getFieldValue('SPRITE');
  return `utils.ElementList.remove(${sprite});\n`;
};

function attrs_dropdown() {
  const attrs = [
    'id', 'name', 'anchorX', 'anchorY', 'x', 'y',
    'width', 'height', 'bgcolor', 'opacity',
    'rotate', 'scaleX', 'scaleY', 'translateX', 'translateY', 'skewX', 'skewY',
    'borderRadius', 'borderWidth', 'borderStyle', 'borderColor',
    'dashOffset', 'texture',
    'text', 'fontSize', 'fontFamily', 'fontStyle', 'fontVariant', 'fontWeight', 'textAlign', 'lineHeight',
    'd', 'lineWidth', 'lineDash', 'lineDashOffset', 'lineCap', 'lineJoin', 'bounding', 'strokeColor', 'fillColor',
  ];
  return attrs.map(s => [Msg.$(s, 'ATTR'), s]);
}

Blockly.Blocks.sprite_get_attr = {
  init() {
    this.jsonInit({
      message0: Msg.SPRITE_GET_ATTR_MSG0,
      args0: [
        sender_receiver_dropdown,
        {
          type: 'field_dropdown',
          name: 'ATTR',
          options: attrs_dropdown,
        },
      ],
      colour,
      output: true,
      tooltip: Msg.SPRITE_GET_ATTR_TOOLTIP,
    });
  },
  onchange: plugEachItemInForEachScope(),
};

Blockly.JavaScript.sprite_get_attr = function (block) {
  const sprite = block.getFieldValue('SPRITE');
  const attr = block.getFieldValue('ATTR');
  return [`utils.get_attr(${sprite}, '${attr}')`, Blockly.JavaScript.ORDER_MEMBER];
};
