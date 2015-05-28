$(document).ready(function() {
    function loadDatatable(tableIds) {
        //-- Dynamic Options FOR aaSorting|aoColumnDefs|iDisplayLength --//
        var aaSortingStr = $(tableIds).attr('rg-aaSorting');
        if (aaSortingStr==null)
            aaSortingStr=[[0, 'asc']];
        var aaSortingObj = eval(aaSortingStr);

        var aoColumnDefStr = "[{ 'bSortable': false, 'aTargets': ["+ $(tableIds).attr('rg-aoColumnDefs') +"] }]";

        var iDisplayLengthStr = $(tableIds).attr('rg-iDispLength');
        if (iDisplayLengthStr==null)
            iDisplayLengthStr= 15;
        var aoColumnDefObj = eval(aoColumnDefStr);

        //-- Already Initialized --//
        var tempDatable, alreadyInitialized;
        if (alreadyInitialized) {
            if (tempDatable != null) {
                tempDatable.fnDestroy();
                tempDatable = null;
                $(tableIds + ' tbody tr').remove();
            }
        }
        setTimeout(function () {
            alreadyInitialized = true;
            tempDatable = $(tableIds).dataTable({
                aaSorting: aaSortingObj,
                'sSearch': true,
                "aLengthMenu": [[15, 25, 50, 75, 100, -1], [15, 25, 50, 75, 100, "All"]],
                "aoColumnDefs": aoColumnDefObj,
                "iDisplayLength": iDisplayLengthStr,
                'aButtons': false,
                'paging': true,  // Table pagination
                'ordering': true,  // Column ordering
                "sDom": "<'dt-toolbar'<'col-xs-12 col-sm-6 no-padding-left hidden-xs'l><'col-xs-12 col-sm-6 no-padding-right'f>r>" +
                      "t" +
                      "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 no-padding-left hidden-xs'i><'col-xs-12 col-sm-6 no-padding-right'p>>",
                oLanguage: {
                    stateSave: 'Test',
                    sSearch: "",
                    sLengthMenu: '_MENU_ '
                }
            });

        }, 100);
    }
    loadDatatable(".rg-dataTableOptions");
} );