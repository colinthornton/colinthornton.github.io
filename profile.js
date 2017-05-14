$(document).ready(function(){
	$("#homeBtn").on("click", function(){
		changePageTo($(this).attr("id"));
	});

	$("#projectsBtn").on("click", function(){
		changePageTo($(this).attr("id"));
	});

	$("#contactBtn").on("click", function(){
		changePageTo($(this).attr("id"));
	});
});

function changePageTo(activeBtn){
	console.log(activeBtn);
	switch(activeBtn){
		case "homeBtn":
			$("#homeBtn").addClass("active disabled");
			$("#projectsBtn").removeClass("active disabled");
			$("#contactBtn").removeClass("active disabled");			
			$("#projectsPage").hide();
			$("#contactPage").hide();
			$("#homePage").fadeIn();
			break;
		case "projectsBtn":
			$("#projectsBtn").addClass("active disabled");
			$("#homeBtn").removeClass("active disabled");
			$("#contactBtn").removeClass("active disabled");			
			$("#homePage").hide();
			$("#contactPage").hide();
			$("#projectsPage").fadeIn();
			break;
		case "contactBtn":
			$("#contactBtn").addClass("active disabled");
			$("#homeBtn").removeClass("active disabled");
			$("#projectsBtn").removeClass("active disabled");			
			$("#homePage").hide();
			$("#projectsPage").hide();
			$("#contactPage").fadeIn();
			break;
	}
}