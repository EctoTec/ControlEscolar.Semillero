using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ControlEscolar.Models.Entidades;
using ControlEscolar.Models;

namespace ControlEscolar.Controllers.Materias
{
    public class CarreraController : ApiController
    {
        // GET: api/Carrera
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Carrera/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Carrera
        public bool Post(c_Carrera carrera)
        {
            Boolean guardar = false;
            using (CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                Carrera carrera1 = new Carrera { Car_Nombre = carrera.Nombre, Car_Nivel = carrera.Nivel };
                contexto.Carrera.Add(carrera1);
                contexto.SaveChanges();
            }
            return guardar;
        }

        // PUT: api/Carrera/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Carrera/5
        public void Delete(int id)
        {
        }
    }
}
