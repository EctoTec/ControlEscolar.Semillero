using System;
using System.Web.Http;
using ControlEscolar.Models.Entidades;
using ControlEscolar.Models;
using System.Collections.Generic;

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
        /*public c_Area[] Get()
        {
            List<c_Area> LArea = new List<c_Area>();
            using (CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                foreach (Models.Area item in contexto.Area)
                {
                    LArea.Add(new c_Area()
                    {
                        Id = item.Area_Id,
                        Nombre = item.Area_Nombre
                    });
                }
            }
            return LArea.ToArray();
        }*/

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



    }
}