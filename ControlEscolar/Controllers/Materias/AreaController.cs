﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ControlEscolar.Models.Entidades;
using ControlEscolar.Models;

namespace ControlEscolar.Controllers.Materias
{
    public class AreaController : ApiController
    {
        // GET: api/Area
        public C_Area[] Get()
        {
            List<C_Area> LArea = new List<C_Area>();
            using (CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                foreach (Models.Area item in contexto.Area)
                {
                    LArea.Add(new C_Area()
                    {
                        Id = item.Area_Id,
                        Nombre = item.Area_Nombre
                    });
                }
            }
            return LArea.ToArray();
        }

        // GET: api/Area/5
        [Route("api/materia/valor/{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Area
        public bool Post(C_Area area)
        {
            Boolean guardar = false;
            using (CursoEscolarEntities contexto = new CursoEscolarEntities())
            {
                
                Models.Area area1 = new Models.Area { Area_Nombre = area.Nombre };
                contexto.Area.Add(area1);
                contexto.SaveChanges();
                guardar = true;
                
            }
            return guardar;
        }

        // PUT: api/Area/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Area/5
        public void Delete(int id)
        {
        }
    }
}
