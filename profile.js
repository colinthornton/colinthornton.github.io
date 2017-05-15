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
			$("#projects").hide();
			$("#contact").hide();
			$("#home").fadeIn();
			break;
		case "projectsBtn":
			$("#projectsBtn").addClass("active disabled");
			$("#homeBtn").removeClass("active disabled");
			$("#contactBtn").removeClass("active disabled");			
			$("#home").hide();
			$("#contact").hide();
			$("#projects").fadeIn();
			break;
		case "contactBtn":
			$("#contactBtn").addClass("active disabled");
			$("#homeBtn").removeClass("active disabled");
			$("#projectsBtn").removeClass("active disabled");			
			$("#home").hide();
			$("#projects").hide();
			$("#contact").fadeIn();
			break;
	}
}