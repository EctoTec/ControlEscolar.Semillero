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

        public bool Delete(int id)
        {
            Boolean eliminar = false;
            using (CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                Profesor delProfesor = (from Prof in contexto.Profesor
                                        where Prof.Prf_Id == id
                                        select Prof).FirstOrDefault();
                contexto.Profesor.Remove(delProfesor);
                contexto.SaveChanges();
            }
            return eliminar;
        }

        public bool Put(c_Profesores prfs ,int id)
        {
            using(CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                Profesor editProfesor = (from Prof in contexto.Profesor
                                         where Prof.Prf_Id == id
                                         select Prof).FirstOrDefault();
                editProfesor.Prf_Nombre = prfs.Nombre;
                editProfesor.Prf_Apellido = prfs.Apellido;
                editProfesor.Prf_Area_Id = prfs.Area;
                contexto.SaveChanges();

            }
            return true;
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
                                Area = a.Area_Nombre,
                                Area_Id = a.Area_Id
                            };
                LProf = query.ToList();
            }
            return LProf.ToArray();
        }
        


    }
}