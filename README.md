IHTSDO International Browser Frontend
=====================================

IHTSDO Browser App customized for the International browser.

This project is an HTML / JS application that uses the IHTSDO SNOMED CT Interaction Components (https://github.com/IHTSDO/snomed-interaction-components) to create the International SNOMED CT Browser.

The browser connects to a backend REST API provided by the project: https://github.com/IHTSDO/sct-snapshot-rest-api

Project Structure
-----------------

The browser is a one page HTML/JS app, the components (widgets) used to navigate and display SNOMED CT content are used as an external dependency.

The index.html includes all the logic for rendering the Browser UI, switching between different SNOMED CT releases and UI layouts (perspectives).

* bootstrap-custom: folder that contains a custom build of the Boostrap framework
* css: stylesheets for this site
* external-libs: js libraries used by this site
* snomed-interaction-components: js, css and fonts for the SNOMED CT widgets contained in this site
* img: images for the site
* i18n: internationalization files for the site and the widgets
* index.html: one page application

Configuration of dynamic version of the browser
--------------------

This branch of the project contains a dynamic configurable of the browser. config.js file contains all the variables you must complete before starting, as descripted below:

```
var config = {
    serverUrl: "", // URI of browser backend
    edition: "", // Edition. e.g: "uy-edition"
    release: "", // Release. e.g: v20190615
    releaseName: "", //Release Name. e.g: UY Edition 20190615
    langRefset: [], // Array with language refset. e.g: ["5641000179103"]
    statsButtons: [], // Array with URI for each statistics page. e.g: ["/statistics1", "/statistics2"] 
    statsButtonsText:[], // Array with description text for each statistics page button. e.g: ["View statistics 10", "View statistics 2"]
    selectedLanguage: "", // Selects language on /i18n folder. e.g: "es_UY"
    selectedFlag: "", // Path to selected flag. e.g: "img/flags/uy.png"
    selectedLogo: "", // Path to selected logo. e.g: "img/logo-salud-uy-small.png"
    copyrightText: "", // Copyright Text. e.g: "&copy; Salud.uy 2019"
    bussinesLink: "" //URI of organization. e.g:"https://Salud.uy"
}
```

Internationalization
--------------------

This project uses the jquery-i18n-properties plugin to support internationalization, translation of the UI components to many languages. (https://github.com/jquery-i18n-properties/jquery-i18n-properties)

The i18n folder includes the base language file (/i18n/Languages.properties), this files defines the labels for English language:

```
i18n_app_name = IHTSDO SNOMED CT Browser
i18n_release = Release
i18n_perspective = Perspective
i18n_about = About
i18n_provide_feedback = Provide feedback on this browser
```
In other files, that include the ISO language code in the name, the labels are translated, like:

Languages_es.properties (Spanish)
```
i18n_app_name = Navegador de SNOMED CT 
i18n_release = Edición
i18n_perspective = Perspectiva
i18n_about = Sobre
i18n_provide_feedback = Proporcione sus comentarios sobre este navegador
```

Languages_da.properties  (Danish)
```
i18n_welcome = Velkommen
i18n_app_name = IHTSDO SNOMED CT Browser
i18n_release = Udgivelse
i18n_perspective = Visning
i18n_about = Om
i18n_provide_feedback = Send en kommentar om denne browser
```

URL Shortcuts
-------------

The browser includes URL parameters that will act as shorcuts for opening the browser with pre-defined settings or content selections, skipping the need of selecting options from the main view.

Use:
http://browser.ihtsdotools.org/index.html?perspective=full&conceptId1=195967001&edition=en-edition&release=v20140731&langRefset=900000000000509007

Parameter|Example Value|Use
---|---|---
server|HTTP URL for the alternative server|Used to specifed an alternative backend server, other than the default one.
edition|en-edition, es-edition|Sets the edition that will be browsed, using the edition names defined by the backend.
release|v20140731|Name of the release, usually the effective time preceded by a "v".
perspective|full,browsing,etc.|Sets the perspective to load.
ui_language|en, es, da|Sets the UI language.
conceptId1|any SCTID|Sets the first concept details widget to this concept.
conceptId2|any SCTID|Sets the second concept details widget to this concept.
conceptIdTx1|any SCTID|Sets the first taxonomy widget to this concept.
conceptIdTx2|any SCTID|Sets the second taxonomy widget to this concept.
acceptLicense|1, 0|Is 1, the SNOMED CT Browser License is automatically accepted without displaying the modal window.
