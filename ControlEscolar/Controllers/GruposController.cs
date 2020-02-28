using System;
using System.Web.Http;
using ControlEscolar.Models.Entidades;
using ControlEscolar.Models;
using System.Collections.Generic;
using System.Linq;

namespace ControlEscolar.Controllers.Grupos
{
    public class GruposController : ApiController
    {
        //POST: api/Grupo

        public bool Post(d_Grupos grupos)
        {
            Boolean guardar = false;
            using(CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                AltaGrupo grupo1 = new AltaGrupo
                {
                    Grp_Materia_Id = grupos.Materia,
                    Grp_Profesor_Id = grupos.Profesor,
                    Grp_Turno = grupos.Turno
                };
                contexto.Grupo.Add(grupo1);
                contexto.SaveChanges();
                guardar = true;
            }
            return guardar;
        }

    }
}
