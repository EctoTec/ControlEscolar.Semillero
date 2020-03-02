using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ControlEscolar.Models.Entidades;
using ControlEscolar.Models;

namespace ControlEscolar.Controllers
{
    public class MateriaController : ApiController
    {
        // GET: api/Materia
        public t_Materia[] Get()
        {
            List<t_Materia> LMateria = new List<t_Materia>();
            using (CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                var query = from a in contexto.Materia
                            join s in contexto.Carrera on a.Mat_Carrera_Id equals s.Car_Id
                            join m in contexto.Area on a.Mat_Area_Id equals m.Area_Id
                            select new t_Materia
                            {
                                Id = a.Mat_Id,
                                Nombre = a.Mat_Nombre,
                                Carrera = s.Car_Nombre,
                                Area = m.Area_Nombre,
                                Nivel = s.Car_Nivel
                            };
                LMateria = query.ToList();
            }
            return LMateria.ToArray();
        }

        // GET: api/Materia/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Materia
        public bool Post(c_Materia materia)
        {
            Boolean guardar = false;
            using (CursoEscolarEntities contexto = new CursoEscolarEntities())
            {

                Materia materia1 = new Materia
                {
                    Mat_Nombre = materia.Nombre,
                    Mat_Carrera_Id = materia.Carrera,
                    Mat_Area_Id = materia.Area
                };
                contexto.Materia.Add(materia1);
                contexto.SaveChanges();
                guardar = true;

            }
            return guardar;
        }

        // PUT: api/Materia/5
        public bool Put(int id, c_Materia materia)
        {
            Boolean guardar = false;
            using(CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                if(contexto.Materia.Count() > 0)
                {
                    Materia materia1 = contexto.Materia.Where(e => e.Mat_Id == id).FirstOrDefault();
                    if(materia1 != null)
                    {
                        materia1.Mat_Carrera_Id = materia.Carrera;
                        materia1.Mat_Area_Id = materia.Area;
                        materia1.Mat_Nombre = materia.Nombre;
                        contexto.SaveChanges();
                        guardar = true;
                    }
                }
            }
            return guardar;
        }

        // DELETE: api/Materia/5
        public bool Delete(int id)
        {
            Boolean guardar = false;
            using (CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                Materia materia = contexto.Materia.Where(e => e.Mat_Id == id).FirstOrDefault();
                contexto.Materia.Remove(materia);
                contexto.SaveChanges();
            }
            return guardar;
        }
    }
}
