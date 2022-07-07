import Main from "./views/Main.js";
import Different from "./views/Different.js";
import PostView from "./views/PostView.js";
import Library from "./views/Library.js";
import Projects from "./views/Projects.js";
import Samples from "./views/Samples.js";
import Reports from "./views/Reports.js";

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
        { path: "/reports", view: Reports }
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

    // здесь создаем объект-обертку, дабы не загрязнять глобальное пространство имен
    var loader = loader || {}

// теперь добавляем нашу функцию в этот объект
// uri - полный адрес к удаленному JS файлу

    loader.importJS = function( uri ) {
        // создаем новый тег script
        let script = document.createElement('script');
        // получаем ссылку на тег head документа
        let body   = document.getElementsByTagName('body')[0];
        // устанавливаем тип и uri
        script.type = 'text/javascript';
        script.src  = uri;
        // загружаем скрипт в тег head
        body.appendChild(script);
    }

    loader.importJS()

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