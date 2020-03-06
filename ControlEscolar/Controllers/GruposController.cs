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

        public bool Put(d_Grupos Cgrupo, int id)
        {
            using(CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                Models.Grupo editGrupo = (from Grupo in contexto.Grupo
                                          where Grupo.Grp_Id == id
                                          select Grupo).FirstOrDefault();
                editGrupo.Grp_Materia_Id = Cgrupo.Materia;
                editGrupo.Grp_Profesor_Id = Cgrupo.Profesor;
                editGrupo.Grp_Turno = Cgrupo.Turno;
                contexto.SaveChanges();
            }
            return true;
        }

        public bool Delete(int id)
        {
            Boolean eliminar = false;
            using(CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                Models.Grupo BorrarGrupo = (from Grupo in contexto.Grupo
                                            where Grupo.Grp_Id == id
                                            select Grupo).FirstOrDefault();
                contexto.Grupo.Remove(BorrarGrupo);
                contexto.SaveChanges();
            }
            return eliminar;
        }

        /*
        public bool DELETE(int Grp_Id)
        {
            Boolean delete = false;
            using (CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                var DelTable = contexto.Grupo.Find(Grp_Id);
                contexto.Grupo.Remove(DelTable);
                contexto.SaveChanges();
            }
            return delete;
        }
        public IHttpActionResult Put(Models.Grupo grupo)
        {
            if (!ModelState.IsValid)
                return BadRequest("No es un modelo valido");

            using(var contexto = new CursoEscolarEntities())
            {
                var existGrupo = contexto.Grupo.Where(g => g.Grp_Id == grupo.Grp_Id).FirstOrDefault<Models.Grupo>();

                if(existGrupo != null)
                {
                    existGrupo.Grp_Materia_Id = grupo.Grp_Materia_Id;
                    existGrupo.Grp_Profesor_Id = grupo.Grp_Profesor_Id;
                    existGrupo.Grp_Turno = grupo.Grp_Turno;

                    contexto.SaveChanges();
                }
                else
                {
                    return NotFound();
                }

                return Ok();
            }
        }
        public IHttpActionResult PUT(int Grp_Id, Models.Grupo grupo)
        {
            using(CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                var EditTable = contexto.Grupo.Find(Grp_Id);

                EditTable.Grp_Materia_Id = grupo.Grp_Materia_Id;
                EditTable.Grp_Profesor_Id = grupo.Grp_Profesor_Id;
                EditTable.Grp_Turno = grupo.Grp_Turno;
                contexto.Entry(EditTable).State = System.Data.Entity.EntityState.Modified;
                contexto.SaveChanges();
            }
            return Ok();
        }
        */
    }
}
