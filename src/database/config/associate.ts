// associate.ts
import { Fituser } from '../../models/user.model.js';
import { Notificacion } from '../../models/notificaciones.model.js';
import { EvaluacionesFisica } from '../../models/evaluacionesFisicas.model.js';
import { Prueba_fisica } from '../../models/pruebasFisicas.model.js';

export function associate() {
    // asociaciones de tablas
    Fituser.hasMany(Notificacion, { foreignKey: 'id_usuario' , as: 'notifications'});
    Notificacion.belongsTo(Fituser, { foreignKey: 'id_usuario' });

    Fituser.hasMany(EvaluacionesFisica, { foreignKey: 'id_usuario' });
    EvaluacionesFisica.belongsTo(Fituser, { foreignKey: 'id_usuario' });

    EvaluacionesFisica.hasMany(Prueba_fisica, { foreignKey: 'id_evaluacion_fisica' });
    Prueba_fisica.belongsTo(EvaluacionesFisica, { foreignKey: 'id_evaluacion_fisica' });
}
