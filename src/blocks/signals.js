import {Dropdown} from '../dropdown';
const Blockly = require('blockly');

const colour = Blockly.Msg.SIGNALS_HUE;
const previousStatement = 'Statement';
const nextStatement = 'Statement';

function listSignal() {
  const signals = Dropdown.get('Signals');
  if(signals.length > 0) {
    return signals.map(s => [s, s]);
  }
  return [['START', 'START']];
}

function listSprite() {
  const sprites = Dropdown.get('Sprites');
  if(sprites.length > 0) {
    return sprites.map(s => [s, s]);
  }
  return [['no sprites'], ['no sprites']];
}

Blockly.Blocks.signal_do = {
  init() {
    this.jsonInit({
      message0: 'On signal %1 🚩 do',
      args0: [
        {
          type: 'field_dropdown',
          name: 'SIG',
          options: listSignal,
        },
      ],
      // message1: '(sender, receiver, data)',
      colour,
      nextStatement,
    });
  },
};

Blockly.JavaScript.signal_do = function (block) {
  return '';
};

Blockly.Blocks.signal_new_sprite_as_receiver = {
  init() {
    this.jsonInit({
      message0: 'On signal %1 🚩',
      args0: [
        {
          type: 'field_dropdown',
          name: 'SIG',
          options: listSignal,
        },
      ],
      message1: 'new %1 as receiver',
      args1: [{
        type: 'field_dropdown',
        name: 'RECEIVER',
        options: [
          ['Sprite', 'Sprite'],
          ['Label', 'Label'],
          ['Path', 'Path'],
        ],
      }],
      message2: 'ID = %1',
      args2: [{
        type: 'field_input',
        name: 'ID',
        check: 'String',
        text: `Sprite_${Math.random().toString().slice(2, 7)}`,
      }],
      colour,
      nextStatement,
    });
  },
};

Blockly.JavaScript.signal_new_sprite_as_receiver = function (block) {
  return '';
};

Blockly.Blocks.signal_when_receiver_is = {
  init() {
    this.jsonInit({
      message0: 'On signals %1 🚩',
      args0: [
        {
          type: 'field_dropdown',
          name: 'SIG',
          options: listSignal,
        },
      ],
      message1: 'when receiver is %1',
      args1: [
        {
          type: 'field_dropdown',
          name: 'ID',
          options: listSprite,
        },
      ],
      colour,
      nextStatement,
    });
  },
};

Blockly.JavaScript.signal_when_receiver_is = function () {
  return '';
};

Blockly.Blocks.signal_send = {
  init() {
    this.jsonInit({
      message0: '%1 send signal %2 🚩',
      args0: [{
        type: 'field_dropdown',
        name: 'TARGET',
        options: [
          ['receiver', 'receiver'],
          ['sender', 'sender'],
        ],
      }, {
        type: 'field_input',
        name: 'CREATED_SIG_NAME',
        text: 'MY_SIGNAL',
        check: 'String',
      }],
      colour,
      previousStatement,
      nextStatement,
    });
  },
};

Blockly.JavaScript.signal_send = function (block) {
  const target = block.getFieldValue('TARGET');
  const signal = block.getFieldValue('CREATED_SIG_NAME');

  return `Signal.send('${signal}', {sender:${target}});\n`;
};