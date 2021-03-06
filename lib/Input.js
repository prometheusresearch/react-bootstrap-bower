define(['exports', 'module', 'react', './InputBase', './FormControls', './utils/deprecationWarning'], function (exports, module, _react, _InputBase2, _FormControls, _utilsDeprecationWarning) {
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  var _React = _interopRequireDefault(_react);

  var _InputBase3 = _interopRequireDefault(_InputBase2);

  var _FormControls2 = _interopRequireDefault(_FormControls);

  var _deprecationWarning = _interopRequireDefault(_utilsDeprecationWarning);

  var Input = (function (_InputBase) {
    function Input() {
      _classCallCheck(this, Input);

      if (_InputBase != null) {
        _InputBase.apply(this, arguments);
      }
    }

    _inherits(Input, _InputBase);

    _createClass(Input, [{
      key: 'render',
      value: function render() {
        if (this.props.type === 'static') {
          (0, _deprecationWarning['default'])('Input type=static', 'StaticText');
          return _React['default'].createElement(_FormControls2['default'].Static, this.props);
        }

        return _get(Object.getPrototypeOf(Input.prototype), 'render', this).call(this);
      }
    }]);

    return Input;
  })(_InputBase3['default']);

  module.exports = Input;
});