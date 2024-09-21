$(function () {
    setEnvironmentsEvents();
});

function setEnvironmentsEvents(): void {
    $("#currentEnvironment").click(Environments.showSideBar);
    $("#closeEnvironmentSideBar").click(Environments.hideSideBar);
}

abstract class Environments {

    //Abrir el sidebar de entornos
    public static showSideBar(): void {
        $("#environmentSideBar").removeClass("hidden");
    }

    public static hideSideBar(): void {
        $("#environmentSideBar").addClass("hidden");
        console.log("hide");
    }
}