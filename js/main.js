/* GnA Eduardo Oviedo Blanco
 * Main app js
 */

var singlePageControl = {
  initialize: function(){
    $('div[data-role=page]:first').show();
    $('a[href^="#"]').click(function(){
      $('div[data-role=page]').hide();
      $('div[data-role=page]'+ $(this).attr('href')).show(function(){
        $(this).trigger('isActive');
      });
    });
  }
};

var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },
  // Bind Event Listeners
  bindEvents: function() {
    $(document).ready(this.onDeviceReady);
  },
  // deviceready Event Handler
  onDeviceReady: function() {
    console.log('deviceready');
    singlePageControl.initialize();
    $('#form').bind('isActive', form.initialize);
  }
};

var form = {
  initialize: function(){
        
  }
};
