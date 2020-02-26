using ControlEscolar.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ControlEscolar.Controllers
{
    public class GruposController : ApiController
    {
        public class Grupos
        {
            public int Materia { get; set; }
            public int Profesor { get; set; }
            public String Turno { get; set; }
        }

        /// <summary>
        /// Este código se encuentra en
        /// https://hdeleon.net/crear-api-con-c-net-y-llenar-un-select-con-solicitud-hecha-con-vanilla-javascript/
        /// </summary>
        /// <returns></returns>
        
        /*
        public IEnumerable<Grupos> Get()
        {
            using (Models.CursoEscolarEntities db = new Models.CursoEscolarEntities())
            {
                var lst = (from d in db.Grupo 
                            select new Grupos
                            {
                            Materia = d.Grp_Materia_Id,
                            Profesor = d.Grp_Profesor_Id,
                            Turno = d.Grp_Turno
                          }).ToList();

                return lst;
            }
        }
        */
    }
}
