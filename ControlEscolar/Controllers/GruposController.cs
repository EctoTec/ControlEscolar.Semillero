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
        // GET: api/Grupos
        public d_Grupos[] Get()
        {
            List<d_Grupos> datosGrupo = new List<d_Grupos>();
            using (CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                foreach (Models.Grupo item in contexto.Grupo)
                {
                    datosGrupo.Add(new d_Grupos()
                    {
                        Materia = item.Grp_Materia_Id,
                        Profesor = item.Grp_Profesor_Id,
                        Turno = item.Grp_Turno
                    });
                }
            }
            return datosGrupo.ToArray();
        }


        public bool Post(d_Grupos grupos)
        {
            Boolean guardar = false;
            using(CursoEscolarEntities contexto = new CursoEscolarEntities())
            {

                contexto.SaveChanges();
                guardar = true;
            }
            return guardar;
        }


    }
}
