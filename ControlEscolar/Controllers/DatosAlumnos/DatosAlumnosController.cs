using ControlEscolar.Models;
using ControlEscolar.Models.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ControlEscolar.Controllers.DatosAlumnos
{
    public class DatosAlumnosController : ApiController
    {
        // GET: api/DatosAlumnos
        public c_DatosAlumnos[] Get()
        {
            List<c_DatosAlumnos> datosalumno = new List<c_DatosAlumnos>();
            using (CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                foreach(Models.Alumno item in contexto.Alumno)
                {
                    datosalumno.Add(new c_DatosAlumnos()
                    {
                        Id = item.Al_Id,
                        Nombre = item.Al_Nombre,
                        Apellidos = item.Al_Apellido,
                        Carrera = item.Al_Carrera_Id,
                        Semestres = item.Al_Semestre
                    });
                }
            }
            return datosalumno.ToArray();
        }

        // GET: api/DatosAlumnos/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/DatosAlumnos
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/DatosAlumnos/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/DatosAlumnos/5
        public void Delete(int id)
        {
        }
    }
}
