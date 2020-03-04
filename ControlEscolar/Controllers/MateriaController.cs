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
        public C_Materia[] Get()
        {
            List<C_Materia> LMateria = new List<C_Materia>();
            //List<C_Carrera> LCarrera = new List<C_Carrera>();
            //List<C_Area> LArea = new List<C_Area>();
            using (CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                /*var query = from a in contexto.Materia
                            join s in contexto.Carrera on a.Mat_Carrera_Id equals s.Car_Id
                            join m in contexto.Area on a.Mat_Area_Id equals m.Area_Id
                            select new C_Materia
                            {
                                Id = a.Mat_Id,
                                Nombre = a.Mat_Nombre,
                                Carrera = s.Car_Nombre,
                                Area = m.Area_Nombre,
                                Nivel = s.Car_Nivel
                            };
                LMateria = query.ToList();*/

                foreach (Materia item in contexto.Materia)
                {
                    Carrera carrera_object = contexto.Carrera.Where(e => e.Car_Id == item.Mat_Carrera_Id).FirstOrDefault();
                    C_Carrera carrera_selection = new C_Carrera()
                    {
                        Id = carrera_object.Car_Id,
                        Nivel = carrera_object.Car_Nivel,
                        Nombre = carrera_object.Car_Nombre
                    };
                    Area area_object = contexto.Area.Where(e => e.Area_Id == item.Mat_Area_Id).FirstOrDefault();
                    C_Area area_selection = new C_Area()
                    {
                        Id = area_object.Area_Id,
                        Nombre = area_object.Area_Nombre
                    };

                    LMateria.Add(new C_Materia()
                    {
                        Id = item.Mat_Id,
                        Nombre = item.Mat_Nombre,
                        Carrera = carrera_selection,
                        Area = area_selection
                    });
                }
            }
            return LMateria.ToArray();
        }

        // GET: api/Materia/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Materia
        public bool Post(C_Materia materia)
        {
            Boolean guardar = false;
            using (CursoEscolarEntities contexto = new CursoEscolarEntities())
            {

                Materia materia1 = new Materia
                {
                    Mat_Nombre = materia.Nombre,
                    Mat_Carrera_Id = materia.Carrera.Id,
                    Mat_Area_Id = materia.Area.Id
                };
                contexto.Materia.Add(materia1);
                contexto.SaveChanges();
                guardar = true;

            }
            return guardar;
        }

        // PUT: api/Materia/5
        public bool Put(int id, C_Materia materia)
        {
            Boolean guardar = false;
            using(CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                if(contexto.Materia.Count() > 0)
                {
                    Materia materia1 = contexto.Materia.Where(e => e.Mat_Id == id).FirstOrDefault();
                    if(materia1 != null)
                    {
                        materia1.Mat_Carrera_Id = materia.Carrera.Id;
                        materia1.Mat_Area_Id = materia.Area.Id;
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
