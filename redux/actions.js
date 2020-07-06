const { spookyTypes } = require('./types');

//code actions here
incrementStep = () => ({
  type:spookyTypes.INCREMENT_STEP
})
createNewSpookySound = (sounds) => ({
  type:spookyTypes.CREATE_NEW_SPOOKY_SOUND,
  sounds
})

module.exports = {
  incrementStep,
  createNewSpookySound,
};
