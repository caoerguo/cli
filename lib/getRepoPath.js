const {
    TYPE_COMPOENT,
    TYPE_PB_COMPONENTS,
    TYPE_PROJECT,
    TYPE_DLL_BUILDER
} = require("./constants");

const projectPath = {
    vue: "talentui/vue-project-template",
    react: "talentui/project-template"
};

module.exports = function(type, engine) {
    // switch(type){
    //     case TYPE_COMPOENT : 
    //         return 
    // }
    if (type === TYPE_COMPOENT) {
        return "talentui/react-package-template";
    }
    if (type === TYPE_PROJECT) {
        return projectPath[engine];
    }
    if (type === TYPE_PB_COMPONENTS) {
        return 'talentui/external-components-template';
    }
    if(type === TYPE_DLL_BUILDER){
        return 'talentui/dll-template'
    }
};
