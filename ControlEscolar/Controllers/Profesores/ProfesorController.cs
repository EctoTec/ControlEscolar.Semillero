using System;
using System.Web.Http;
using ControlEscolar.Models.Entidades;
using ControlEscolar.Models;
using System.Collections.Generic;
using System.Linq;

namespace ControlEscolar.Controllers.Profesores
{
    public class ProfesorController : ApiController
    {

        // POST: api/Profesor
        public bool Post(c_Profesores profesor)
        {
            Boolean guardar = false;
            using (CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                Profesor profesor1 = new Profesor { Prf_Nombre = profesor.Nombre, Prf_Apellido = profesor.Apellido, Prf_Area_Id = profesor.Area };
                contexto.Profesor.Add(profesor1);
                contexto.SaveChanges();
                guardar = true;
            }
            return guardar;
        }

        
        public tab_Profesores[] GET()
        {
            List<tab_Profesores> LProf = new List<tab_Profesores>();
            using (CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                var query = from p in contexto.Profesor
                            join a in contexto.Area on p.Prf_Area_Id equals a.Area_Id
                            select new tab_Profesores
                            {
                                Id = p.Prf_Id,
                                Nombre = p.Prf_Nombre,
                                Apellido = p.Prf_Apellido,
                                Area = a.Area_Nombre
                            };
                LProf = query.ToList();
            }
            return LProf.ToArray();
        }
        /*
        public c_Profesores[] GET()
        {
            List<c_Profesores> LProf = new List<c_Profesores>();
            using (CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                foreach (Models.Profesor item in contexto.Profesor)
                {
                    LProf.Add(new c_Profesores()
                    {
                        Id = item.Prf_Id,
                        Nombre = item.Prf_Nombre,
                        Apellido = item.Prf_Apellido,
                        Area = item.Prf_Area_Id.Value
                    });
                }
            }
            return LProf.ToArray();
        }
        */


    }
}