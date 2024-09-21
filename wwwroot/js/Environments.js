$(function () {
    setEnvironmentsEvents();
});
function setEnvironmentsEvents() {
    $("#currentEnvironment").click(Environments.showSideBar);
    $("#closeEnvironmentSideBar").click(Environments.hideSideBar);
}
var Environments = /** @class */ (function () {
    function Environments() {
    }
    //Abrir el sidebar de entornos
    Environments.showSideBar = function () {
        $("#environmentSideBar").removeClass("hidden");
    };
    Environments.hideSideBar = function () {
        $("#environmentSideBar").addClass("hidden");
        console.log("hide");
    };
    return Environments;
}());
//# sourceMappingURL=Environments.js.map