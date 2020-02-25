using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

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
        public void Post([FromBody]string value)
        {
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
