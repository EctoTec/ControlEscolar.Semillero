using ControlEscolar.Models;
using ControlEscolar.Models.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ControlEscolar.Controllers.Inscripciones
{
    public class InscripcionApiController : ApiController
    {
        // GET: api/InscripcionApi
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/InscripcionApi/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/InscripcionApi
        public bool Post(InscripcionModel apiInsc)
        {
            Boolean guardar = false;
            using (CursoEscolarEntities db = new CursoEscolarEntities())
            {

                Inscripcion grupodb = new Inscripcion
                {
                    Ins_Grupo_Id = apiInsc.IdGpo,
                    Ins_Alumno_Id = apiInsc.IdAlumno
                };
                db.Inscripcion.Add(grupodb);
                db.SaveChanges();
                guardar = true;
            }

            return guardar;
        }

        // PUT: api/InscripcionApi/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/InscripcionApi/5
        public void Delete(int id)
        {
        }
    }
}
