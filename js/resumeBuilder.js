/** view
	Function that will replace text(%data%) placeholder within HTML strings in helper.js.
	@param htmlString the HTML string in helper.js
	@param text the replacement text
	@return the formatted string
*/
function replaceData(htmlString, text) {
    var formattedString = htmlString.replace("%data%", text);
    return formattedString;
}

/** view
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

(function() {
    let BioModel = {
        init: function(){
            this.bio = {
                name : "Casey Glisson",
                role : "Web Developer",
                contacts :
                    {
                        "mobile" : "561.346.5951",
                        "email" : "cglisson@gmail.com",
                        "github" : "cglisson",
                        "location" : "West Palm Beach, Fl",
                        "twitter" : "@csglisson"
                    },
                picture : "images/fry.jpg",
                welcomeMessage : "I am an aspiring Front-end Web Developer who is continually learning.",
                skills : ["Programming", "HTML", "Javascript", "CSS", "Java", "C++", "Microsoft Office", "Customer Service"]

            };
        },
        getBio: function() {
            return this.bio;
        },
        getContacts: function() {
            return this.bio.contacts;
        },
        getSkills: function() {
            return this.bio.skills;
        }
    }; // End of BioModel

    let WorkModel = {
        init: function() {
            this.jobs = [
                {
                    employer : "Our Cottage Garden",
                    title : "Shipping Manager",
                    location : "West Palm Beach, Florida",
                    dates : "2008 - Present",
                    description : `Charge of all shipping, packaging, and receiving of merchandise. Provide
                        daily status directly to owner advising any transaction problems. Order shipping
                        supplies when needed.`
                },
                {
                    employer : "Tropical Dollar",
                    title : "General Manager",
                    location : "Port St. Lucie, Florida",
                    dates : "2006 - 2007",
                    description : `Managed sales forecasting, work scheduling, payroll hours and productivity.
                        The trainer of choice for all operational tasks including visual merchandising and
                        inventory control.`
                },
                {
                    employer : "New England Institute of Technology",
                    title : "Bookstore Manager",
                    location : "West Palm Beach, Florida",
                    dates : "2004 - 2006",
                    description : `Provided outstanding customer service to a diverse customer base
                        including faculty, students, and staff. Guided efforts to reduce in-store shrink
                        activity through Loss Prevention education, awareness, and compliance.`
                },
                {
                    employer : "Emerson College, Follett Higher Education Group",
                    title : "Text Manager",
                    location : "Boston, Massachusetts",
                    dates : "2000 - 2003",
                    description : `Constructed and managed effective supervision to drive text sales while
                        maintaining exceptional customer service and text book department standards.
                        Established relationships with faculty and staff via in-store and out-store
                        activities and communications. Collect textbook information from school faculty
                        and administration. Worked with book publishers and wholesalers to ensure on-time
                        delivery. Examine, select, order, and purchase text material at the most favorable price
                        consistent with quantity and other requirements.`
                }
            ]
        },
        getJobs: function() {
            return this.jobs;
        }
    }; // End of WorkModel

    let EducationModel = {
        init: function() {
            this.schools = [
                {
                    name : "Strayer Unviersity",
                    city : "Palm Beach Gardens",
                    degree : "Bachelor of Science in Information Systems",
                    major : "Programming Technology",
                    years : "June 2014",
                    url : "http://www.strayer.edu"
                },
                {
                    name : "Strayer Unviersity",
                    city : "Palm Beach Gardens",
                    degree : "Master of Business Administration",
                    major : "Information Systems Management",
                    years : "September 2017",
                    url : "http://www.strayer.edu"
                }
            ];
            this.onlineCourses = [
                {
                    title : "Intro to HTML and CSS",
                    school : "Udacity",
                    dates : "2015",
                    url : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
                },
                {
                    title : "Responsive Web Design Fundamentals",
                    school : "Udacity",
                    dates : "2015",
                    url : "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
                },
                {
                    title : "Responsive Images",
                    school : "Udacity",
                    dates : "2015",
                    url : "https://www.udacity.com/course/responsive-images--ud882"
                },
                {
                    title : "JavaScript Basics",
                    school : "Udacity",
                    dates : "2015",
                    url : "https://www.udacity.com/course/javascript-basics--ud804"
                }
            ];
        },
        getEducation : function() {
            return this.schools;
        },
        getOnlineCourses : function() {
            return this.onlineCourses;
        }
    }; // End of EducationModel

    let ProjectModel = {
        init: function() {
            this.projects = [
                    {
                        title : "Portfolio Site",
                        dates : "7-11-2015",
                        description : "Built a portfolio site from a design mockup. The site had to be " +
                            "responsive by being able to properly display on multiple devices.",
                        images : [
                            "images/project1_desktop.jpg",
                            "images/project1_iphone.jpg",
                            "images/project1_nexus7.jpg"
                        ]
                    }
                ]
        },
        getProjects: function() {
            return this.projects;
        }
    }; // End of ProjectModel

    let Controller = {
        getContacts: function() {
            return BioModel.getContacts();
        },
        getSkills: function() {
            return BioModel.getSkills();
        },
        getBio: function() {
            return BioModel.getBio();
        },
        getJobs: function() {
            return WorkModel.getJobs();
        },
        getProjects: function() {
            return ProjectModel.getProjects();
        },
        getSchools: function() {
            return EducationModel.getEducation();
        },
        getOnlineCourses: function() {
            return EducationModel.getOnlineCourses();
        },
        init: function() {
            BioModel.init();
            WorkModel.init();
            EducationModel.init();
            ProjectModel.init();
            BioView.init();
            WorkView.init();
            ProjectView.init();
            EducationView.init();
            MapView.init();
        }
    }; // End of Controller

    let BioView = {
        init: function() {
            this.bio = Controller.getBio();
            this.header = "#header";
            this.formattedHeaderName = replaceData(HTMLheaderName, this.bio.name);
            this.formattedHeaderRole = replaceData(HTMLheaderRole, this.bio.role);
            this.formattedHeaderPic = replaceData(HTMLbioPic, this.bio.picture);
            this.topContacts = "#topContacts";
        	this.footerContacts = "#footerContacts";
            this.contacts = Controller.getContacts();
            this.skills = Controller.getSkills();
            this.render();
        },
        render: function(){
            addFormattedStrings(header, this.formattedHeaderRole, false);
            addFormattedStrings(header, this.formattedHeaderName, false);
            addFormattedStrings(header, this.formattedHeaderPic, true);

            // Display Contact information
            for (let contact in this.contacts) {
                let formattedContact = "";

                if (contact === "mobile") {
                    formattedContact = replaceData(HTMLmobile, this.contacts[contact]);
                    addFormattedStrings(topContacts, formattedContact , true);
                    addFormattedStrings(footerContacts, formattedContact, true);
                } else if (contact === "email") {
                    formattedContact = replaceData(HTMLemail, this.contacts[contact]);
                    addFormattedStrings(topContacts, formattedContact , true);
                    addFormattedStrings(footerContacts, formattedContact, true);
                } else if (contact === "twitter") {
                    formattedContact = replaceData(HTMLtwitter, this.contacts[contact]);
                    addFormattedStrings(topContacts, formattedContact , true);
                    addFormattedStrings(footerContacts, formattedContact, true);
                } else if (contact === "github") {
                    formattedContact = replaceData(HTMLgithub, this.contacts[contact]);
                    addFormattedStrings(topContacts, formattedContact , true);
                    addFormattedStrings(footerContacts, formattedContact, true);
                } else if (contact === "location") {
                    formattedContact = replaceData(HTMLlocation, this.contacts[contact]);
                    addFormattedStrings(topContacts, formattedContact , true);
                    addFormattedStrings(footerContacts, formattedContact, true);
                } else if (contact === "blog") {
                    formattedContact = replaceData(HTMLblog, this.contacts[contact]);
                    addFormattedStrings(topContacts, formattedContact , true);
                    addFormattedStrings(footerContacts, formattedContact, true);
                } else {
                    formattedContact = replaceData(HTMLcontactGeneric, this.contacts[contact]).replace("%contact%", contact);
                    addFormattedStrings(topContacts, formattedContact , true);
                    addFormattedStrings(footerContact, formattedContact, true);
                }
            }

            // Display skills
            addFormattedStrings("#header", HTMLskillsStart, true);
            for(let skill in this.skills){
                let s = replaceData(HTMLskills, this.skills[skill]);
                addFormattedStrings("#skills", s, true);
            }
        }
    }; // End of BioView

    let WorkView = {
        init: function() {
            this.workExperience = "#workExperience";
            this.workEntry = ".work-entry:last";
            this.jobArray = Controller.getJobs();

            this.render();
        },
        render: function() {
            let employerName = '',
                position = '',
                workLocation = '',
                dates = '',
                description = '';

            for (var job in this.jobArray) {
                employerName = replaceData(HTMLworkEmployer, this.jobArray[job]["employer"]);
                position = replaceData(HTMLworkTitle, this.jobArray[job]["title"]);
                workLocation = replaceData(HTMLworkLocation, this.jobArray[job]["location"]);
                dates = replaceData(HTMLworkDates, this.jobArray[job]["dates"]);
                description = replaceData(HTMLworkDescription, this.jobArray[job]["description"]);

        		addFormattedStrings(workExperience, HTMLworkStart, true);
        		addFormattedStrings(workExperience, addFormattedStrings(this.workEntry, employerName + position), true);
        		addFormattedStrings(workExperience, addFormattedStrings(this.workEntry, dates, true), true);
        		addFormattedStrings(workExperience, addFormattedStrings(this.workEntry, workLocation, true), true);
        		addFormattedStrings(workExperience, addFormattedStrings(this.workEntry, description, true), true);
            }
        }
    }; // End of WorkView

    let ProjectView = {
        init: function() {
            this.projects = Controller.getProjects();
            this.render();
        },
        render: function() {
            if (this.projects.length > 0) {
                var projectEntry = ".project-entry";
                for (project in this.projects) {
                    $('#projects').append(HTMLprojectStart);
                    var formattedTitle = replaceData(HTMLprojectTitle, this.projects[project]['title']);
                    var formattedDate = replaceData(HTMLprojectDates, this.projects[project]['dates']);
                    var formattedDescription = replaceData(HTMLprojectDescription, this.projects[project]['description']);

                    addFormattedStrings(projectEntry, formattedTitle, true);
                    addFormattedStrings(projectEntry, formattedDate, true);
                    addFormattedStrings(projectEntry, formattedDescription, true);

                    // Display images
                    for (var image in this.projects[project].images) {
                        var img = replaceData(HTMLprojectImage, this.projects[project].images[image]);
                        addFormattedStrings(projectEntry, img, true);
                    }
                }
            }
        }
    }; // End of ProjectView

    let EducationView = {
        init: function() {
            addFormattedStrings("#education", HTMLschoolStart, true);
            this.schools = Controller.getSchools();
            this.onlineCourses = Controller.getOnlineCourses();
            this.render();
        },
        render: function() {
            // Display educational institutions
        	for (school in this.schools) {
        		var schoolName = replaceData(HTMLschoolName, this.schools[school].name);
        		schoolName = schoolName.replace("#", this.schools[school].url);
        		var schoolDegree = replaceData(HTMLschoolDegree, this.schools[school].degree);
        		var schoolDates = replaceData(HTMLschoolDates, this.schools[school].years);
        		var schoolLocation = replaceData(HTMLschoolLocation, this.schools[school].city);
        		var schoolMajor = replaceData(HTMLschoolMajor, this.schools[school].major);
        		var educationEntry = ".education-entry";

        		addFormattedStrings(educationEntry, schoolName + schoolDegree, true);
        		addFormattedStrings(educationEntry, schoolDates, true);
        		addFormattedStrings(educationEntry, schoolMajor, true);
        		addFormattedStrings(educationEntry, schoolLocation, true);
        	}

        	// Display online education
        	addFormattedStrings("#education", HTMLonlineStart, true);
        	addFormattedStrings(".online-entry", HTMLonlineClasses, true);

        	for (var onlineSchool in this.onlineCourses) {
        		var onlineTitle = replaceData(HTMLonlineTitle, this.onlineCourses[onlineSchool].title) +
        			replaceData(HTMLonlineSchool, this.onlineCourses[onlineSchool].school);
        		var onlineDates = replaceData(HTMLonlineDates, this.onlineCourses[onlineSchool].dates);
        		var onlineUrl = replaceData(HTMLonlineURL, this.onlineCourses[onlineSchool].url);
        		onlineUrl = onlineUrl.replace("#", this.onlineCourses[onlineSchool].url);

        		addFormattedStrings(".online-entry", onlineTitle, true);
        		addFormattedStrings(".online-entry", onlineDates, true);
        		addFormattedStrings(".online-entry", onlineUrl, true);
        	}
        }
    }; // End of EducationView

    let MapView = {
        init: function() {
            this.map;
            this.mapOptions;
            this.locations;
            this.render();
        },
        locationFinder: function() {
            let locations = [];
            let contacts = Controller.getContacts(),
                schools = Controller.getSchools(),
                jobs = Controller.getJobs();
            // adds the single location property from bio to the locations array
            locations.push(contacts.location);

            // iterates through school locations and appends each location to
            // the locations array
            for (var school in schools) {
              locations.push(schools[school].city);
            }

            // iterates through work locations and appends each location to
            // the locations array
            for (var job in jobs) {
              locations.push(jobs[job].location);
            }

            return locations;
        },
        createMapMarker: function(placeData) {
            // The next lines save location data from the search result object to local variables
            let lat = placeData.geometry.location.lat();  // latitude from the place service
            let lon = placeData.geometry.location.lng();  // longitude from the place service
            let name = placeData.formatted_address;   // name of the place from the place service
            let bounds = window.mapBounds;            // current boundaries of the map window

            // marker is an object with additional data about the pin for a single location
            let marker = new google.maps.Marker({
              map: this.map,
              position: placeData.geometry.location,
              title: name
            });

            // infoWindows are the little helper windows that open when you click
            // or hover over a pin on a map. They usually contain more information
            // about a location.
            let infoWindow = new google.maps.InfoWindow({
              content: name
            });

            // hmmmm, I wonder what this is about...
            google.maps.event.addListener(marker, 'click', function() {
              // your code goes here!
        	  infoWindow.open(this.map, marker);
            });

            // this is where the pin actually gets added to the map.
            // bounds.extend() takes in a map location object
            bounds.extend(new google.maps.LatLng(lat, lon));
            // fit the map to the new marker
            this.map.fitBounds(bounds);
            // center the map
            this.map.setCenter(bounds.getCenter());
        },
        callback: function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
              MapView.createMapMarker(results[0]);
            }
        },
        pinPoster: function(locations) {
            // creates a Google place search service object. PlacesService does the work of
            // actually searching for location data.
            let service = new google.maps.places.PlacesService(this.map);

            // Iterates through the array of locations, creates a search object for each location
            for (let place in this.locations) {

              // the search request object
              let request = {
                query: this.locations[place]
              };

              // Actually searches the Google Maps API for location data and runs the callback
              // function with the search results after each search.
              service.textSearch(request, this.callback);
            }
        },
        render: function() {
            addFormattedStrings("#mapDiv", googleMap, true);
            this.map = new google.maps.Map(document.querySelector('#map'), this.mapOptions);

            // Sets the boundaries of the map based on pin locations
            window.mapBounds = new google.maps.LatLngBounds();

            // locations is an array of location strings returned from locationFinder()
            this.locations = this.locationFinder();

            // pinPoster(locations) creates pins on the map for each location in
            // the locations array
            this.pinPoster(this.locations);

            // Calls the initializeMap() function when the page loads
            window.addEventListener('load', function() {
                this.mapOptions = {
                    disableDefaultUI: true
                };
            });

            // Vanilla JS way to listen for resizing of the window
            // and adjust map bounds
            window.addEventListener('resize', function(e) {
              	//Make sure the map bounds get updated on page resize
            	map.fitBounds(mapBounds);
            });

        }
    }; // End of MapView

    Controller.init();
})();
