function initFaqSection(containerSelector, showEffect) {
	var container = $("." + containerSelector);
	$(".faq-question", container).click(function (e) {
	    var answer;
		switch(showEffect) {
			case "slide":
				answer = $(e.target).closest(".faq-set").find(".faq-answer");
				answer.slideToggle();
				e.preventDefault();
				break;
			case "lightbox":
			    var question = $(e.target);
			    answer = question.next();
			    answer.dialog({
			        title: question.text(),
			        autoOpen: true,
			        dialogClass: "dnnFormPopup",
                    modal: true
			    });
			default:
				break;
		}
	});

	// Attach drop-down filter
	$("#ddlFeatureFilter", container).change(function (changeEvent) {
		var tagFilter = changeEvent.target[changeEvent.target.selectedIndex].value;
		console.log("tf:" + tagFilter);
		//alert(tagFilter);
		$(".faq-set", container).each(function (i, e) {
			var tags = ($(e).attr('data-tags') + ",all").split(',');
			console.log(tags);
			if ($.inArray(tagFilter, tags) != -1)// || tagFilter == "all")
				$(e).slideDown();
			else
				$(e).slideUp();
		});
	});

}