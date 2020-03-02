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
                        Id = item.Grp_Id,
                        Materia = item.Grp_Materia_Id,
                        Profesor = item.Grp_Profesor_Id,
                        Turno = item.Grp_Turno
                    });
                }
            }
            return datosGrupo.ToArray();
        }

        public bool DELETE(int Grp_Id)
        {
            Boolean delete = false;
            using(CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                var DelTable = contexto.Grupo.Find(Grp_Id);
                contexto.Grupo.Remove(DelTable);
                contexto.SaveChanges();
            }
            return delete;
        }

        public bool Post(d_Grupos grupos)
        {
            Boolean guardar = false;
            using(CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                Models.Grupo grupos1 = new Models.Grupo
                {
                    Grp_Id = grupos.Id,
                    Grp_Materia_Id = grupos.Materia,
                    Grp_Profesor_Id = grupos.Profesor,
                    Grp_Turno = grupos.Turno
                };
                contexto.Grupo.Add(grupos1);
                contexto.SaveChanges();
                guardar = true;
            }
            return guardar;
        }


    }
}
