
export default {

  /**
   * parse w3c attrs to weex module attrs
   *
   * @param {Object} w3c component data
   * @return {Object} weex component data
   */
  parse: function(component) {
    component.type = 'text';
    return component;
  }
};