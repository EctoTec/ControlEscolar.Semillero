using System;
using System.Web.Http;
using ControlEscolar.Models.Entidades;
using ControlEscolar.Models;

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

    }
}