$(document).ready(function() {
    
    $("tbody tr td:not(:first-child)").each(function() {
        var cleanText = $(this).text().trim().toLowerCase();
        if (cleanText === "not available") {
            $(this).addClass("disabled-activity-cell");
        } else {
            $(this).addClass("interactive-activity-cell");
        }
    });

   
    $("tbody tr td.interactive-activity-cell").click(function() {
        $(this).toggleClass("highlighted-activity");

        
        var activityText = $(this).text().trim();

        
        var colIndex = $(this).index();

        
        var cliffSiteHeading = $("thead th").eq(colIndex).text().trim();

        
        var fullText = activityText + " at " + cliffSiteHeading;

        
        var itemClass = "selected-" + colIndex + "-" + $(this).parent().index();

        if ($(this).hasClass("highlighted-activity")) {
            
            $('#displaySelected').css({
                "visibility": "visible",
                "margin-top": "2em"
            });

            
            $('#result').append("<p class='" + itemClass + "'>" + fullText + "</p>");
        } else {
            
            $('#result p.' + itemClass).remove();

            
            if ($('#result p').length === 0) {
                $('#displaySelected').css({
                    "visibility": "hidden",
                    "margin-top": "0"
                });
            }
        }
    });
});