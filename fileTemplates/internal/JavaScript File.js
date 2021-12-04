/**
 * ${<DESCRIPTION>}
 *
 * @class    ${NAME}
 * @param    {Object}  options  Options for the object
 * @return   {Object}  The object
 */
const ${NAME} = function(options) {
  //
  //   Public Vars
  //
  //////////////////////////////////////////////////////////////////////

  let self = Object.assign({}, {
    el: null,
  }, options);


  //
  //   Private Vars
  //
  //////////////////////////////////////////////////////////////////////

  let foo = null;


  //
  //   Private Methods
  //
  //////////////////////////////////////////////////////////////////////

  const _init = () => {
    _addEventListeners();
  };

  const _addEventListeners = () => {

  };


  //
  //   Public Methods
  //
  //////////////////////////////////////////////////////////////////////

  /*
  self.foo = () => {

  };
  */


  //
  //   Initialize
  //
  //////////////////////////////////////////////////////////////////////

  _init();

  // Return the Object
  return self;
};

export default ${NAME};
