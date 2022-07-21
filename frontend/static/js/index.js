import Main from "./views/Main.js";
import Different from "./views/Different.js";
import PostView from "./views/PostView.js";
import Library from "./views/Library.js";
import Projects from "./views/Projects.js";
import Samples from "./views/Samples.js";
import Reports from "./views/Reports.js";
import Scientific_expertise from "./views/Scientific_expertise.js";
import Scientific_journals from "./views/Scientific_journals.js";
import Evaluation_of_the_effectiveness_of_science from "./views/Evaluation_of_the_effectiveness_of_science";
import Frontiers_and_SNTR_Priorities from "./views/Frontiers_and_SNTR_Priorities";
import II_for_NTR_management from "./views/II_for_NTR_management";
import University_data_lake from "./views/University_data_lake";
import Homeostasis from "./views/Homeostasis";
import Decade_of_Science_and_Technology from "./views/Decade_of_Science_and_Technology";
import Development_of_scientific_tourism_and_volunteering from "./views/Development_of_scientific_tourism_and_volunteering";
import Scientific_certification_model from "./views/Scientific_certification_model";
import Green_corridor_for_scientists from "./views/Green_corridor_for_scientists";
import Personnel_project_for_science_and_higher_education from "./views/Personnel_project_for_science_and_higher_education";
import Endowment_funds from "./views/Endowment_funds";
import RCT_of_universities_and_NO from "./views/RCT_of_universities_and_NO";
import Campuses from "./views/Campuses";
import Instrument_base from "./views/Instrument_base";
import CKP_and_UNU from "./views/CKP_and_UNU";
import Megascience from "./views/Megascience";
import NIKS_and_supercomputers from "./views/NIKS_and_supercomputers";
import Domain_Science_and_innovation from "./views/Domain_Science_and_innovation";
import Domain_Education from "./views/Domain_Education";
import Super_service from "./views/Super_service";
import  from "./views/";
import  from "./views/";
import  from "./views/";
import  from "./views/";
import  from "./views/";
import  from "./views/";






const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Main },
        { path: "/different", view: Different },
        { path: "/library", view: Library },
        { path: "/projects", view: Projects },
        { path: "/samples", view: Samples },
        { path: "/reports", view: Reports },
        { path: "/projects/:id", view: PostView},
        { path: "/scientific_expertise", view: Scientific_expertise},
        { path: "/scientific_journals", view: Scientific_journals},
        { path: "/evaluation_of_the_effectiveness_of_science", view: Evaluation_of_the_effectiveness_of_science},
        { path: "/frontiers_and_SNTR_Priorities", view: Frontiers_and_SNTR_Priorities},
        { path: "/II_for_NTR_management", view: II_for_NTR_management},
        { path: "/university_data_lake", view: University_data_lake},
        { path: "/homeostasis", view: Homeostasis},
        { path: "/decade_of_Science_and_Technology", view: Decade_of_Science_and_Technology},
        { path: "/development_of_scientific_tourism_and_volunteering", view: Development_of_scientific_tourism_and_volunteering},
        { path: "/scientific_certification_model", view: Scientific_certification_model},
        { path: "/green_corridor_for_scientists", view: Green_corridor_for_scientists},
        { path: "/personnel_project_for_science_and_higher_education", view: Personnel_project_for_science_and_higher_education},
        { path: "/endowment_funds", view: Endowment_funds},
        { path: "/RCT_of_universities_and_NO", view: RCT_of_universities_and_NO},
        { path: "/campuses", view: Campuses},
        { path: "/instrument_base", view: Instrument_base},
        { path: "/CKP_and_UNU", view: CKP_and_UNU},
        { path: "/megascience", view: Megascience},
        { path: "/NIKS_and_supercomputers", view: NIKS_and_supercomputers},
        { path: "/domain_Science_and_innovation", view: Domain_Science_and_innovation},
        { path: "/domain_Education", view: Domain_Education},
        { path: "/super_service", view: Super_service},
        { path: "/", view: },
        { path: "/", view: },
        { path: "/", view: },
        { path: "/", view: },




    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));



    document.querySelector("#app").innerHTML = await view.getHtml();


    var loader = loader || {}
    loader.importJS = function( src, type ) {
        // создаем новый тег script
        let script = document.createElement('script');
        // получаем ссылку на тег head документа
        let body = document.getElementsByTagName('body')[0];
        // устанавливаем тип и uri
        script.type = type;
        script.src  = src;
        // загружаем скрипт в тег body
        body.appendChild(script);
    }
    loader.importJS("filesistem/frontend/static/js/fileviewer.js" , "text/javascript")

};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});