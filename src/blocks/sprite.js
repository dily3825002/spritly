const Blockly = require('blockly');

const Msg = Blockly.Msg;
const colour = Blockly.Msg.SPRITE_HUE;
const previousStatement = 'Statement';
const nextStatement = 'Statement';

Blockly.Blocks.sprite = {
  init() {
    this.jsonInit({
      message0: '%1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'SPRITE',
          options: () => {
            const blocks = this.workspace.getBlocksByType('signal_new_sprite_as_receiver').map(block => block.getFieldValue('ID'));
            return [
              [Msg.COMMON_TARGET, 'target'],
              [Msg.COMMON_SENDER, 'sender'],
              [Msg.COMMON_RECEIVER, 'receiver'],
              ...blocks.map(s => [s, s]),
            ];
          },
        },
      ],
      colour,
      output: 'Sprite',
      tooltip: Msg.SPRITE_MSG0_TOOLTIP,
    });
  },
  updated(event) {
    if(event.element === 'field' && event.name === 'SPRITE') {
      this.setWarningText(null);
      this.setDisabled(false);
    }
  },
};

Blockly.JavaScript.sprite = function (block) {
  let sprite = block.getFieldValue('SPRITE');
  if(sprite !== 'target' && sprite !== 'sender' && sprite !== 'receiver' && sprite !== 'item') {
    sprite = `spritly.runtime.ElementList.getElementById('${sprite}')`;
  }

  return [sprite, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.sprite_append_to = {
  init() {
    this.jsonInit({
      message0: Msg.SPRITE_APPEND_TO_MSG0,
      args0: [
        {
          type: 'input_value',
          name: 'SPRITE',
          check: 'Sprite',
        },
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
      args0: [
        {
          type: 'input_value',
          name: 'SPRITE',
          check: 'Sprite',
        },
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
};

Blockly.JavaScript.sprite_attrs = function (block) {
  const sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_NONE) || 'null';
  const attrs = Blockly.JavaScript.statementToCode(block, 'ATTRS');

  return `${sprite}.attr(spritly.runtime.parse_attr(${sprite}, {${attrs}\n}));\n`;
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
  return `spritly.runtime.ElementList.add((function () {
  const sprite = spritly.runtime.spritejs.createElement('${type}');
  sprite.attr(spritly.runtime.parse_attr(sprite, {name: '${name}'}, {${attrs.split(/\n/g).join(`\n${Blockly.Generator.prototype.INDENT}`)}
  }));
  return sprite;
}()));\n`;
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
            const blocks = this.workspace.getBlocksByType('sprite_create_attrs').map(block => block.getFieldValue('NAME'));
            if(blocks.length > 0) {
              return blocks.map(s => [s, s]);
            }
            return [
              ['', ''],
            ];
          },
        },
      ],
      colour,
      output: 'Array',
      tooltip: Msg.SPRITE_EACH_ELEMENTS_NAMED_TOOLTIP,
    });
  },
};

Blockly.JavaScript.sprite_each_elements_named = function (block) {
  const name = block.getFieldValue('NAME');
  return [`spritly.runtime.ElementList.getElementsByName('${name}')`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.sprite_destroy = {
  init() {
    this.jsonInit({
      message0: Msg.SPRITE_DESTROY_MSG0,
      args0: [
        {
          type: 'input_value',
          name: 'SPRITE',
          check: 'Sprite',
        },
      ],
      colour,
      previousStatement,
      nextStatement,
      tooltip: Msg.SPRITE_DESTROY_TOOLTIP,
    });
  },
};

Blockly.JavaScript.sprite_destroy = function (block) {
  const sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_NONE) || 'null';
  return `spritly.runtime.ElementList.remove(${sprite});\n`;
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
        {
          type: 'input_value',
          name: 'SPRITE',
          check: 'Sprite',
        },
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
};

Blockly.JavaScript.sprite_get_attr = function (block) {
  const sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_NONE) || 'null';
  const attr = block.getFieldValue('ATTR');
  return [`spritly.runtime.get_attr(${sprite}, '${attr}')`, Blockly.JavaScript.ORDER_NONE];
};
