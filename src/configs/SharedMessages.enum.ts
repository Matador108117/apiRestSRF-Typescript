export enum errorMessages {
    //user error
    ERROR_404_USER = "Usuario no encontrado",
    ERROR_500_USER = "Error al recuperar el usuario",
    ERROR_500_CREATE_USER = "Error al crear el usuario",
    ERROR_500_UPDATE_USER = "Error al actualizar el usuario",
    ERROR_500_DELETE_USER = "Error al eliminar el usuario",
    OK_200_DELETE_USER = "El usuario ha sido eliminado correctamente",
    ERROR_405_USER = "'Ya existe un usuario con esa matricula'",
    ERROR_500_USER_NOTIFICATIONS = "Error al recuperar las notificaciones del usuario",
    ERROR_500_USER_EVALUATIONS = "Error al recuperar las evaluaciones del usuario",
    ERROR_500_USER_PROOF = "Error al recuperar las pruebas del usuario",


    //notifications error
    NO_NOTIFICATIONS_EXIST="No hay notificaciones",
    ERROR_500_GET_NOTIFICATIONS = "Error al recuperar las notificaciones",
    ERROR_404_NOTIFICATIONS = "Notificacion no encontrada",
    ERROR_500_CREATE_NOTIFICATIONS = "Error al crear la notificacion",
    ERROR_500_UPDATE_NOTIFICATIONS = "Error al actualizar la notificacion",
    ERROR_500_DELETE_NOTIFICATION = "Error al eliminar la notificacion",
    OK_200_DELETE_NOTIFICATION = "La notificacion ha sido eliminada correctamente",

    // evaluacions_error
    ERROR_404_EVALUACION_FISICA = "Evaluacion fisica no encontrada",
    NO_EVALUATION_EXIST = "No hay evaluaciones fisicas",
    ERROR_500_GET_EVALUATIONS = "error al recuperar las evaluaciones fisicas",
    ERROR_500_CREATE_EVALUATIONS = "error al crear la evaluacion fisica",
    ERROR_500_UPDATE_EVALUATIONS = "Ha habido un errror al actualizar la evaluacion fisica",
    OK_200_DELETE_EVALUATIONS = "Se elimino la evaluacion fisica correctamente",
    ERROR_500_DELETE_EVALUATIONS = "Ha habido un errror al eliminar la evaluacion fisica",

    //proof error
    NO_PROOF_EXIST = "No hay puebas fisicas",
    ERROR_500_PROOF = "Error al recuperar las pruebas fisicas",
    ERROR_404_PROOF = "Prueba fisica no encontrada",
    ERROR_500_CREATE_PROOF = "Error al crear la prueba fisica",
    ERROR_500_UPDATE_PROOF = "Error al actualizar la prueba fisica",
    ERROR_500_DELETE_PROOF = "Error al eliminar la prueba fisica",
    OK_200_DELETE_PROOF = "La prueba fisica ha sido eliminada correctamente",

}