$(document).ready(function(){
    
    $("#tags").select2({
        tags:[],
    });

    $("#gq_categories_id").select2();

    $("#view_type").select2();

    $('#switch_comment_status').bootstrapSwitch('size', '');
    $('#switch_comment_status').on('switchChange', function (e, data) {
      var $element = $(data.el), value = data.value;
      $('#comment_status').val(value);
    });


    $('#switch_status').bootstrapSwitch('size', '');
    $('#switch_status').on('switchChange', function (e, data) {
      var $element = $(data.el), value = data.value;
      $('#status').val(value);
    });


    // tinymce.PluginManager.load('moxiemanager', '/static/admin/js/tinymce/plugins/moxiemanager/plugin.min.js');
    tinymce.init({
    	    selector: "textarea#formEdit",
            theme: "modern",
			height : 300,
            plugins: [
                "advlist autolink lists link image charmap print preview hr anchor pagebreak",
                "searchreplace wordcount visualblocks visualchars code fullscreen",
                "insertdatetime media nonbreaking save table contextmenu directionality",
                "emoticons template paste textcolor ",
            ],
            toolbar: "print preview  pagebreak | styleselect  | fontselect  | fontsizeselect | bold italic underline | alignleft aligncenter alignright alignjustify  | bullist numlist outdent indent | forecolor backcolor emoticons | link image media insertfile | undo redo ",
            image_advtab: true,
            autosave_ask_before_unload: true,
        });
    
});
