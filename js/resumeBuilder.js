/**
	Function that will replace text(%data%) placeholder within HTML strings in helper.js.
	@param htmlString the HTML string in helper.js
	@param text the replacement text
	@return the formatted string
*/
function replaceData(htmlString, text) {
    var formattedString = htmlString.replace("%data%", text);
    return formattedString;
}

/**
	Appends or prepends formatted text onto the webpage.
	@param placeholder the id or class name the string should be appended prepended to
	@param formattedText the text that is formatted with HTML strings
	@param isAppend boolean to determine if the text is to be appended
*/
function addFormattedStrings(placeholder, formattedText, isAppend) {
	if (isAppend) {
		$(placeholder).append(formattedText);
	} else {
		$(placeholder).prepend(formattedText);
	}
}

// Create a bio object for resume with name, role, welcomeMessage, contacts object,
// and skills properties.
var bio = {
    "name" : "Casey Glisson",
    "role" : "Web Developer",
	"contacts" :
		{
			"mobile" : "561.346.5951",
			"email" : "cglisson@gmail.com",
			"github" : "cglisson",
			"location" : "West Palm Beach, Fl",
			"twitter" : "@csglisson"
		},
    "picture" : "images/fry.jpg",
    "welcomeMessage" : "I am an aspiring Front-end Web Developer who is continually learning.",
    "skills" : ["Programming", "HTML", "Javascript", "CSS", "Java", "C++", "Microsoft Office", "Customer Service"],
	displayContactInfo : function() {
		var keys = [];
		for (var key in this.contacts) {
			keys.push(key);	
		}
		var topContacts = "#topContacts";
		
		
		for (contact in this.contacts) {
			var formattedContact = "";
			var topContacts = "#topContacts";
			
			if (contact === "mobile") {
				formattedContact = replaceData(HTMLmobile, this.contacts[contact]);
				addFormattedStrings(topContacts, formattedContact , true);
			} else if (contact === "email") {
				formattedContact = replaceData(HTMLemail, this.contacts[contact]);
				addFormattedStrings(topContacts, formattedContact , true);
			} else if (contact === "twitter") {
				formattedContact = replaceData(HTMLtwitter, this.contacts[contact]);
				addFormattedStrings(topContacts, formattedContact , true);
			} else if (contact === "github") {
				formattedContact = replaceData(HTMLgithub, this.contacts[contact]);
				addFormattedStrings(topContacts, formattedContact , true);
			} else if (contact === "location") {
				formattedContact = replaceData(HTMLlocation, this.contacts[contact]);
				addFormattedStrings(topContacts, formattedContact , true);
			} else if (contact === "blog") {
				formattedContact = replaceData(HTMLblog, this.contacts[contact]);
				addFormattedStrings(topContacts, formattedContact , true);
			} else {
				formattedContact = replaceData(HTMLcontactGeneric, this.contacts[contact]).replace("%contact%", contact);
				addFormattedStrings(topContacts, formattedContact , true);
			}
		}
	},
	displaySkills : function() {
		addFormattedStrings("#header", HTMLskillsStart, true);
		for(skill in bio.skills){
			var skill = replaceData(HTMLskills, bio.skills[skill]);
			addFormattedStrings("#skills", skill, true);
		}
	}
};

// Create a work object which includes job information of each employer.
var work = {
    "jobs" : [
        {
            "employer" : "Our Cottage Garden",
            "title" : "Shipping Manager",
            "location" : "West Palm Beach, Florida",
            "dates" : "2008 - Present",
            "description" : "Charge of all shipping, packaging, and receiving of merchandise. Provide" +
                "daily status directly to owner advising any transaction problems. Order shipping" +
                "supplies when needed."
        },
        {
            "employer" : "Tropical Dollar",
            "title" : "General Manager",
            "location" : "Port St. Lucie, Florida",
            "dates" : "2006 - 2007",
            "description" : "Managed sales forecasting, work scheduling, payroll hours and productivity." +
                "The trainer of choice for all operational tasks including visual merchandising and" +
                "inventory control."
        },
        {
            "employer" : "New England Institute of Technology",
            "title" : "Bookstore Manager",
            "location" : "West Palm Beach, Florida",
            "dates" : "2004 - 2006",
            "description" : "Provided outstanding customer service to a diverse customer base" +
                "including faculty, students, and staff. Guided efforts to reduce in-store shrink" +
                "activity through Loss Prevention education, awareness, and compliance."
        },
        {
            "employer" : "Emerson College, Follett Higher Education Group",
            "title" : "Text Manager",
            "location" : "Boston, Massachusetts",
            "dates" : "2000 - 2003",
            "description" : "Constructed and managed effective supervision to drive text sales while" +
                "maintaining exceptional customer service and text book department standards." +
                "Established relationships with faculty and staff via in-store and out-store" +
                "activities and communications. Collect textbook information from school faculty" +
                "and administration. Worked with book publishers and wholesalers to ensure on-time" +
                "delivery. Examine, select, order, and purchase text material at the most favorable price" +
                "consistent with quantity and other requirements."
        }
    ]
};

// Create an education object including online courses taken.
var education = {
    "schools" : [
        {
            "name" : "Strayer Unviersity",
            "city" : "Palm Beach Gardens",
            "degree" : "Bachelor of Science in Information Systems",
            "major" : "Programming Technology",
            "years" : "June 2014",
            "url" : "http://www.strayer.edu"
        },
        {
            "name" : "Strayer Unviersity",
            "city" : "Palm Beach Gardens",
            "degree" : "Master of Business Administration",
            "major" : "Information Systems Management",
            "years" : "2017",
            "url" : "http://www.strayer.edu"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Intro to HTML and CSS",
            "school" : "Udacity",
            "dates" : "2015",
            "url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        },
        {
            "title" : "Responsive Web Design Fundamentals",
            "school" : "Udacity",
            "dates" : "2015",
            "url" : "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
        },
        {
            "title" : "Responsive Images",
            "school" : "Udacity",
            "dates" : "2015",
            "url" : "https://www.udacity.com/course/responsive-images--ud882"
        },
        {
            "title" : "JavaScript Basics",
            "school" : "Udacity",
            "dates" : "2015",
            "url" : "https://www.udacity.com/course/javascript-basics--ud804"
        }
    ]
};

// Create a projects object containing an array of projects with a title, dates worked,
// description, and images
var projects = {
    "projects" : [
        {
            "title" : "Portfolio Site",
            "dates" : "7-11-2015",
            "description" : "Built a portfolio site from a design mockup. The site had to be " +
                "responsive by being able to properly display on multiple devices.",
            "images" : [
                "images/project1_desktop.jpg",
                "images/project1_iphone.jpg",
                "images/project1_nexus7.jpg"
            ]
        }
    ]
};

// Will display bio information onto the webpage.
bio.display = function() {
	var header = "#header";
	var formattedHeaderName = replaceData(HTMLheaderName, bio.name);
	var formattedHeaderRole = replaceData(HTMLheaderRole, bio.role);
	var formattedHeaderPic = replaceData(HTMLbioPic, bio.picture);
	
	addFormattedStrings(header, formattedHeaderRole, false);
	addFormattedStrings(header, formattedHeaderName, false);	
	addFormattedStrings(header, formattedHeaderPic, true);
	
	// Display skills
	if (bio.skills.length > 0) {
		bio.displaySkills();
	}
	
	// Display contact information		
	bio.displayContactInfo();
}



// Will display work history information onto the webpage.
work.display = function() {
	var workExperience = "#workExperience";
	var workEntry = ".work-entry:last";
    var jobArray = work.jobs;
    var employerName = "";
    var position = "";
    var workLocation = "";
    var dates = "";
    var description = "";

    for (var job in jobArray) {
        employerName = replaceData(HTMLworkEmployer, jobArray[job]["employer"]);
        position = replaceData(HTMLworkTitle, jobArray[job]["title"]);
        workLocation = replaceData(HTMLworkLocation, jobArray[job]["location"]);
        dates = replaceData(HTMLworkDates, jobArray[job]["dates"]);
        description = replaceData(HTMLworkDescription, jobArray[job]["description"]);
		
		addFormattedStrings(workExperience, HTMLworkStart, true);
		addFormattedStrings(workExperience, addFormattedStrings(workEntry, employerName + position), true);
		addFormattedStrings(workExperience, addFormattedStrings(workEntry, dates, true), true);
		addFormattedStrings(workExperience, addFormattedStrings(workEntry, workLocation, true), true);
		addFormattedStrings(workExperience, addFormattedStrings(workEntry, description, true), true);
    }	
}

// Displays project information on the webpage
projects.display = function() {
	if (projects.projects.length > 0) {
		var projectEntry = ".project-entry";
		for (project in projects.projects) {
			$('#projects').append(HTMLprojectStart);
			var formattedTitle = replaceData(HTMLprojectTitle, projects.projects[project]['title']);
			var formattedDate = replaceData(HTMLprojectDates, projects.projects[project]['dates']);
			var formattedDescription = replaceData(HTMLprojectDescription, projects.projects[project]['description']);
			
			addFormattedStrings(projectEntry, formattedTitle, true);
			addFormattedStrings(projectEntry, formattedDate, true);
			addFormattedStrings(projectEntry, formattedDescription, true);
			
			// Display images
			for (image in projects.projects[project].images) {
				var img = replaceData(HTMLprojectImage, projects.projects[project].images[image]);
				addFormattedStrings(projectEntry, img, true);
			}
		}
	}
};

// Displays education information on the webpage
education.display = function() {
	addFormattedStrings("#education", HTMLschoolStart, true);
	
	// Display educational institutions
	for (school in education.schools) {		
		var schoolName = replaceData(HTMLschoolName, education.schools[school].name);
		schoolName = schoolName.replace("#", education.schools[school].url);
		var schoolDegree = replaceData(HTMLschoolDegree, education.schools[school].degree);
		var schoolDates = replaceData(HTMLschoolDates, education.schools[school].years);
		var schoolLocation = replaceData(HTMLschoolLocation, education.schools[school].city);
		var schoolMajor = replaceData(HTMLschoolMajor, education.schools[school].major);
		var educationEntry = ".education-entry";
		
		addFormattedStrings(educationEntry, schoolName + schoolDegree, true);
		addFormattedStrings(educationEntry, schoolDates, true);
		addFormattedStrings(educationEntry, schoolMajor, true);
		addFormattedStrings(educationEntry, schoolLocation, true);	
	}
	
	// Display online education
	addFormattedStrings("#education", HTMLonlineStart, true);
	addFormattedStrings(".online-entry", HTMLonlineClasses, true);
	
	for (onlineSchool in education.onlineCourses) {
		var onlineTitle = replaceData(HTMLonlineTitle, this.onlineCourses[onlineSchool].title) +
			replaceData(HTMLonlineSchool, this.onlineCourses[onlineSchool].school);
		var onlineDates = replaceData(HTMLonlineDates, this.onlineCourses[onlineSchool].dates);
		var onlineUrl = replaceData(HTMLonlineURL, this.onlineCourses[onlineSchool].url);
		onlineUrl = onlineUrl.replace("#", this.onlineCourses[onlineSchool].url);
		
		addFormattedStrings(".online-entry", onlineTitle, true);
		addFormattedStrings(".online-entry", onlineDates, true);
		addFormattedStrings(".online-entry", onlineUrl, true);
	}
	
};

// Display Bio information
bio.display();

// Display Work History
work.display();

// Display Education
education.display();

// Display projects
projects.display();

// Add map to the webpage
addFormattedStrings("#mapDiv", googleMap, true);

