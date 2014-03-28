$(document).ready(function(){
    
    $('#users').dataTable({
    
        //"sPaginationType": "bootstrap",
        //"sDom": '<"top"i>rt<"bottom"flp><"clear">',
        //"bPaginate": true,
        "sInfo": "Showing _START_ to _END_ of _TOTAL_ records",
        "bSort": true,
        "bInfo": true,
        "bFilter": true,
        "sPaginationType":"full_numbers"
        
    });

});
