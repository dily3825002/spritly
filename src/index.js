import './blocks';

const Blockly = require('blockly');
Blockly.BlockSvg.START_HAT = true;

function initWorkspace(el, options) {
  const workspace = Blockly.inject(el, options);

  workspace.createVariable('sprite', '');

  return workspace;
}

export {
  Blockly,
  initWorkspace,
};