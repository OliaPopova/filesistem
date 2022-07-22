import Main from "./views/Main.js";
import Different from "./views/Different.js";
import PostView from "./views/PostView.js";
import Library from "./views/Library.js";
import Projects from "./views/Projects.js";
import Samples from "./views/Samples.js";
import Reports from "./views/Reports.js";
import Scientific_expertise from "./views/Scientific_expertise.js";
import Scientific_journals from "./views/Scientific_journals.js";
import Evaluation_of_the_effectiveness_of_science from "./views/Evaluation_of_the_effectiveness_of_science.js";
import Frontiers_and_SNTR_Priorities from "./views/Frontiers_and_SNTR_Priorities.js";
import II_for_NTR_management from "./views/II_for_NTR_management.js";
import University_data_lake from "./views/University_data_lake.js";
import Homeostasis from "./views/Homeostasis.js";
import Decade_of_Science_and_Technology from "./views/Decade_of_Science_and_Technology.js";
import Development_of_scientific_tourism_and_volunteering from "./views/Development_of_scientific_tourism_and_volunteering.js";
import Scientific_certification_model from "./views/Scientific_certification_model.js";
import Green_corridor_for_scientists from "./views/Green_corridor_for_scientists.js";
import Personnel_project_for_science_and_higher_education from "./views/Personnel_project_for_science_and_higher_education.js";
import Endowment_funds from "./views/Endowment_funds.js";
import RCT_of_universities_and_NO from "./views/RCT_of_universities_and_NO.js";
import Campuses from "./views/Campuses.js";
import Instrument_base from "./views/Instrument_base.js";
import CKP_and_UNU from "./views/CKP_and_UNU.js";
import Megascience from "./views/Megascience";
import NIKS_and_supercomputers from "./views/NIKS_and_supercomputers.js";
import Domain_Science_and_innovation from "./views/Domain_Science_and_innovation.js";
import Domain_Education from "./views/Domain_Education.js";
import Super_service from "./views/Super_service.js";
import Scientific_fleet from "./views/Scientific_fleet.js";
import Overhaul_of_universities_and_scientific_organizations from "./views/Overhaul_of_universities_and_scientific_organizations.js";
import Scientific_and_educational_centers from "./views/Scientific_and_educational_centers.js";
import Priority_2030 from "./views/Priority_2030.js";
import Priority_2030_for_scientific_organizations from "./views/Priority_2030_for_scientific_organizations.js";
import Engineering_centers from "./views/Engineering_centers.js";
import NCMU_mathematics from "./views/NCMU_mathematics.js";
import NCMU_SNTR_priorities from "./views/NCMU_SNTR_priorities.js";
import NCMU_genomic from "./views/NCMU_genomic.js";
import FNTP_Climate from "./views/FNTP_Climate.js";
import FNTP_Agriculture from "./views/FNTP_Agriculture.js";
import FNTP_Genetics from "./views/FNTP_Genetics.js";
import Integrated_scientific_and_technical_program from "./views/Integrated_scientific_and_technical_program.js";
import VIP_GZ_Climate from "./views/VIP_GZ_Climate.js";
import VIP_GZ_New_Energy from "./views/VIP_GZ_New_Energy.js";
import VIP_GZ_technological_platform_for_rapid_response_to_infectious_diseases from "./views/VIP_GZ_technological_platform_for_rapid_response_to_infectious_diseases.js";
import Integration_of_business_and_science_within_the_agro_industrial_complex from "./views/Integration_of_business_and_science_within_the_agro_industrial_complex.js";
import National_Technology_Initiative from "./views/National_Technology_Initiative.js";
import _218_PP from "./views/_218_PP.js";
import Scientific_laboratories from "./views/Scientific_laboratories.js";
import Regional_Science_Foundations from "./views/Regional_Science_Foundations.js";
import Innovative_Development_Institutes from "./views/Innovative_Development_Institutes.js";
import University_techno_entrepreneurship from "./views/University_techno_entrepreneurship.js";
import Domestic_scientific_instrumentation from "./views/Domestic_scientific_instrumentation.js";
import Technology_Transfer_Centers from "./views/Technology_Transfer_Centers.js";
import NCFM from "./views/NCFM.js";
import Russian_Darpa from "./views/Russian_Darpa.js";
import SIRIUS from "./views/SIRIUS.js";
import Hydrogen_energy from "./views/Hydrogen_energy.js";
import Digital_twins from "./views/Digital_twins.js";
import Boron_neutron_capture_therapy from "./views/Boron_neutron_capture_therapy.js";
import Chemicals_and_vaccines from "./views/Chemicals_and_vaccines.js";
import Gazprom_Botanical_Garden from "./views/Gazprom_Botanical_Garden.js";
import Lyceum_in_Crimea from "./views/Lyceum_in_Crimea.js";
import IT_staff_and_crypto_tools from "./views/IT_staff_and_crypto_tools.js";
import Microelectronics from "./views/Microelectronics.js";
import Stankin_and_machine_tool_building from "./views/Stankin_and_machine_tool_building.js";
import Advanced_engineering_schools from "./views/Advanced_engineering_schools.js";
import Russian_Center_for_Scientific_Information from "./views/Russian_Center_for_Scientific_Information.js";
import Aircraft_industry from "./views/Aircraft_industry.js";
import International_scientific_and_educational_projects from "./views/International_scientific_and_educational_projects.js";






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
        { path: "/scientific_fleet", view: Scientific_fleet},
        { path: "/dverhaul_of_universities_and_scientific_organizations", view: Overhaul_of_universities_and_scientific_organizations },
        { path: "/scientific_and_educational_centers", view: Scientific_and_educational_centers},
        { path: "/priority_2030", view: Priority_2030},
        { path: "/priority_2030_for_scientific_organizations", view: Priority_2030_for_scientific_organizations},
        { path: "/engineering_centers", view: Engineering_centers},
        { path: "/NCMU_mathematics", view: NCMU_mathematics},
        { path: "/NCMU_SNTR_priorities", view: NCMU_SNTR_priorities},
        { path: "/NCMU_genomic", view: NCMU_genomic},
        { path: "/FNTP_Climate", view: FNTP_Climate},
        { path: "/FNTP_Agriculture", view: FNTP_Agriculture},
        { path: "/FNTP_Genetics", view: FNTP_Genetics},
        { path: "/integrated_scientific_and_technical_program", view: Integrated_scientific_and_technical_program},
        { path: "/VIP_GZ_Climate", view: VIP_GZ_Climate},
        { path: "/VIP_GZ_New_Energy", view: VIP_GZ_New_Energy},
        { path: "/VIP_GZ_technological_platform_for_rapid_response_to_infectious_diseases", view: VIP_GZ_technological_platform_for_rapid_response_to_infectious_diseases},
        { path: "/integration_of_business_and_science_within_the_agro_industrial_complex", view: Integration_of_business_and_science_within_the_agro_industrial_complex},
        { path: "/National_Technology_Initiative", view: National_Technology_Initiative},
        { path: "/_218_PP", view: _218_PP},
        { path: "/scientific_laboratories", view: Scientific_laboratories},
        { path: "/regional_Science_Foundations", view: Regional_Science_Foundations},
        { path: "/innovative_Development_Institutes", view: Innovative_Development_Institutes},
        { path: "/university_techno_entrepreneurship", view: University_techno_entrepreneurship},
        { path: "/domestic_scientific_instrumentation", view: Domestic_scientific_instrumentation},
        { path: "/technology_Transfer_Centers", view: Technology_Transfer_Centers},
        { path: "/NCFM", view: NCFM},
        { path: "/Russian_Darpa", view: Russian_Darpa},
        { path: "/SIRIUS", view: SIRIUS},
        { path: "/hydrogen_energy", view: Hydrogen_energy},
        { path: "/digital_twins", view: Digital_twins},
        { path: "/boron_neutron_capture_therapy", view: Boron_neutron_capture_therapy},
        { path: "/chemicals_and_vaccines", view: Chemicals_and_vaccines},
        { path: "/gazprom_Botanical_Garden", view: Gazprom_Botanical_Garden},
        { path: "/lyceum_in_Crimea", view: Lyceum_in_Crimea},
        { path: "/IT_staff_and_crypto_tools", view: IT_staff_and_crypto_tools},
        { path: "/microelectronics", view: Microelectronics},
        { path: "/Stankin_and_machine_tool_building", view: Stankin_and_machine_tool_building},
        { path: "/advanced_engineering_schools", view: Advanced_engineering_schools},
        { path: "/Russian_Center_for_Scientific_Information", view: Russian_Center_for_Scientific_Information},
        { path: "/aircraft_industry", view: Aircraft_industry},
        { path: "/international_scientific_and_educational_projects", view: International_scientific_and_educational_projects}

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